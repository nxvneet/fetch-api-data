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
        .then(json => console.log(json))
}

function doFetch2(e_id) {
    fetch(constructURL2(e_id))
        .then(response => response.json())
        .then(json => console.log(json))
}

doFetch1(emp2);
doFetch2(id_2);