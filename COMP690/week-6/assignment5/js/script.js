window.addEventListener("load", () => {
    document.getElementById("empForm").addEventListener("submit",(e) => { 
        e.preventDefault();
        const idArray = ["id", "name", "ext", "email", "department"].map((id) => document.getElementById(id).value);
        console.log(`ID: ${idArray[0]} \nName: ${idArray[1]} \nExtension: ${idArray[2]} \nEmail: ${idArray[3]} \nDepartment: ${idArray[4]}`);
    });
});

