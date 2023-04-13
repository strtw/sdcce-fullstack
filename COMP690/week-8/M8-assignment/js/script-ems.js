//M8 Assignment - Part 2, The Employee Management System (80 points)

let initialArray = [
    {id: 11111111, name: "John J", extension: 1234, email: "johnjh@gmail.com", department: "Marketing"}, 
    {id: 22222222, name: "Jane L", extension: 1235, email: "janel@gmail.com", department:"Marketing"}, 
    {id: 33333333, name: "John D", extension: 1244, email: "johnd@gmail.com", department: "Marketing"}, 
    {id: 44444444, name: "Jane S", extension: 1264, email: "janes@gmail.com", department: "Marketing"}, 
    {id: 55555555, name: "John S", extension: 1238, email: "johns", department: "Marketing"}
];

window.onload = function(){
    initialArray = JSON.parse(localStorage.getItem("employees")) || initialArray;
    buildGrid(initialArray)
}


// ADD EMPLOYEE
let form = document.getElementById('addForm');
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let extension = document.getElementById('extension').value;
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = {id: id, name: name, extension: extension, email: email, department: department};


    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    initialArray.push(newEmployee);

    // BUILD THE GRID
    buildGrid(initialArray);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    id.focus();

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if ( e.target.classList.contains('btn-danger')) {
    if (confirm('Are you sure?')) {

         // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
         let rowIndex = e.target.parentNode.parentNode.rowIndex;

         // REMOVE EMPLOYEE FROM ARRAY
         initialArray.splice(rowIndex - 1, 1); // Subtract 1 from rowIndex because table header is also counted

         // BUILD THE GRID
         buildGrid(initialArray);
    }
}
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    let tbody = document.getElementById('empTable').querySelector('tbody');
    tbody.innerHTML = '';
    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    let tableRow = initialArray.map(({id,name,extension,email,department}) => { 
        return `<tr id=${id}>
                    <td>${id} </td>
                    <td>${name} </td>
                    <td>${extension} </td>
                    <td>${email} </td>
                    <td>${department} </td>
                    <td><button class="btn btn-sm btn-danger">Delete</button></td>      
                </tr>`
    }).join('');
    tbody.innerHTML = tableRow;

    // UPDATE EMPLOYEE COUNT
    let empCount = document.getElementById('empCount');
    empCount.innerHTML = initialArray.length;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(initialArray));
};
