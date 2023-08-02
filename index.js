var url1 = "https://dummy.restapiexample.com/api/v1/employees"; // this api gives all data by on call
var url2 = "https://dummy.restapiexample.com/api/v1/employee/"; // this api gives data of 1 employee only [ employee/{id} ]
var btnTest = document.querySelector("#btn-test");

const emp1 = "Airi Satou";
const emp2 = "Cedric Kelly";
const id_1 = 10;
const id_2 = 20;

function constructURL1(emp) {

    return url1 + "?" + "employee_name=" + emp;
}


function constructURL2(e_id) {

    return url2 + e_id;
}

function doFetch1(emp) {
    fetch(constructURL1(emp))
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok.");
            }
            return response.json();
        })
        .then(json => {
            console.log(json);
            displayData(json.data); //when we call the displayData function with the fetched JSON data, it will create and display the employee data in a table format.
        })
        .catch(error => {
            console.error("Error fetching data from API 1:", error);
            // Handle the error here, e.g., show an error message to the user
        });
}

function doFetch2(e_id) {
    fetch(constructURL2(e_id))
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok.");
            }
            return response.json();
        })
        .then(json => {
            console.log(json);
            displayData([json.data]);
        })
        .catch(error => {
            console.error("Error fetching data from API 2:", error);
            // Handle the error here, e.g., show an error message to the user
        });
}


btnTest.addEventListener("click", doFetch1);
// doFetch1(emp2);
// doFetch2(id_2);



function displayData(data) {
    var mainContainer = document.querySelector("#mydata");
    mainContainer.innerHTML = ""; // Clear previous data if any

    // Create a table element
    var table = document.createElement("table");
    table.border = "1";

    // Create a table header row
    var headerRow = table.insertRow();
    headerRow.innerHTML = "<th>ID</th><th>Employee Name</th><th>Salary</th><th>Age</th>";

    // Loop through the data and create table rows for each employee
    for (var i = 0; i < data.length; i++) {
        var employee = data[i];

        var row = table.insertRow();
        row.innerHTML =
            "<td>" +
            employee.id +
            "</td><td>" +
            employee.employee_name +
            "</td><td>" +
            employee.employee_salary +
            "</td><td>" +
            employee.employee_age +
            "</td>";
    }

    // Append the table to the main container
    mainContainer.appendChild(table);
}