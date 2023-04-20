import init from './modules/init.js';

async function fetchData() {
let arrEmployees = await init();
return arrEmployees;
}

// GET DOM ELEMENTS
window.onload = () => {
let empTable  = document.querySelector('#employees')
let empCount  = document.querySelector('#empCount')
fetchData().then(data => {
    buildGrid(data);
});


// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex
            // REMOVE EMPLOYEE FROM ARRAY
            empTable.deleteRow(rowIndex)
        }
    }
})

// BUILD THE EMPLOYEES GRID
function buildGrid(arrEmployees) {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let employee of arrEmployees) {
        tbody.innerHTML += 
        `
        <tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.number}</td>
            <td><a href="mailto:${employee.email}">${employee.email}</a></td>
            <td>${employee.position}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody)
    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${arrEmployees.length})`
}
}


