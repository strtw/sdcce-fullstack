//Within this file, use async / await to load the JSON data from ../data/employees.json and return it back into the buildGrid() function.

export default async function getEmployeeData() {
    try{
        let url = './js/data/employees.json';
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    } 
}

