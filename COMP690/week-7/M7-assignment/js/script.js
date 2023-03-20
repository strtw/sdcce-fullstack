// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

// ADD EMPLOYEE
const form = document.getElementById('addForm');
const table = document.getElementById('employees');
const tableBody = document.getElementById('employees').firstElementChild;
const empCount = document.getElementById('empCount');

form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const idArray = ["id", "name", "extension", "email", "department"].map((id) => document.getElementById(id).value);
    const userObject = {
        id: idArray[0],
        name: idArray[1],
        extension: idArray[2],
        email: idArray[3],
        department: idArray[4]
    }
    const userArray = [userObject]

     // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    // CREATE THE DELETE BUTTON
    let tableRow = userArray.map(({id,name,extension,email,department}) => {
        return `<tr id=${id}>
                    <td>${id} </td>
                    <td>${name}</td>
                    <td>${extension}</td>
                    <td>${email}</td>
                    <td>${department}</td>
                    <td>
                        <a href="#" class="btn btn-danger btn-sm delete">X</a>  
                    </td>
                </tr>`;
     });
   
    tableBody.insertAdjacentHTML('beforeend', tableRow);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    const id = document.getElementById('id');
    id.focus();
    if(document.activeElement === id){
        console.log('id is active'); //just a check for dev
    }

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    empCount.textContent = `${count}`;


})

// DELETE EMPLOYEE

tableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            for(let i = 0; i < tableBody.children.length; i++){
                if(tableBody.children[i].id === e.target.parentElement.parentElement.id){
                    table.deleteRow(i);
                }
            }
        }
        count--;
        empCount.textContent = `${count}`;
    }
});