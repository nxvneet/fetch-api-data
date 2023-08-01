var url1 = "https://dummy.restapiexample.com/api/v1/employees"; // this api gives all data by on call
var url2 = "https://dummy.restapiexample.com/api/v1/employee/"; // this api gives data of 1 employee only [ employee/{id} ]

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
        .then(response => response.json())
        .then(json => {
            console.log(json);
            displayData(json.data);
        })
        .catch(error => console.error(error));
}

// function to call data of 1 employee
function doFetch2(e_id) {
    fetch(constructURL2(e_id))
        .then(response => response.json())
        .then(json => {
            console.log(json);
            displayData(json.data);
        })
        .catch(error => console.error(error));
}

doFetch1(emp2);
// doFetch2(id_2);


function displayData(data) {
    var mainContainer = document.querySelector("#mydata");
    mainContainer.innerHTML = ""; // Clears previous data if any

    // Checks if the data is an array or an object and process accordingly
    if (Array.isArray(data)) {
        for (var i = 0; i < data.length; i++) {
            var div = document.createElement("div");
            div.innerHTML =
                "id: " +
                data[i].id + "\n" +
                "Employee Name: " +
                data[i].employee_name + "\n" +
                "Salary " +
                data[i].employee_salary + "\n" +
                "Age " +
                data[i].employee_age; + "\n" + "-------------------------------"
            mainContainer.appendChild(div);
        }
    } else {
        var div = document.createElement("div");
        div.innerHTML =
            "id: " +
            data.id + "\n" +
            "Employee Name: " +
            data.employee_name + "\n" +
            "Salary " +
            data.employee_salary + "\n" +
            "Age " +
            data.employee_age; + "\n" + "-------------------------------"
        mainContainer.appendChild(div);
    }
}