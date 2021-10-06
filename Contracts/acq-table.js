//Retrieve forms from Local Storage
const acqFormKeys = Object.values(localStorage); //

const splicedForms = acqFormKeys.splice(0);

// console.log(dispoFormKeys)
// console.log(splicedForms)

splicedForms.map(acqAnswers => {const arr = JSON.parse("[" + acqAnswers + "]"); //Loop through string; Wrap string in Array brackets; Parsing each Array
console.log(acqAnswers)
console.log(arr)
const formID = arr[0].shift(); //Removing the Unique ID from each array and outputting it to a variable

var tbody = document.querySelector('table tbody');
var finalArray = [arr]; //Creating a Nested Array of the Parsed Arrays

console.log(finalArray)
// Create new rows and cells for each submitted form, looping through each array

finalArray.forEach(function(elem) {

elem[0].pop();
elem[0].pop();
var table = document.getElementById("myTable");
var tr = document.createElement('tr');

tr.classList.add("dataRow");
tbody.classList.add("tableBody");

table.appendChild(tbody);

for (let dataRows of elem[0]) {
var td = document.createElement('td');
console.log(dataRows)
td.innerText = dataRows;

tr.appendChild(td);
tbody.appendChild(tr);
};


// Filter Function

$(document).ready(function() {
    $("#filterTable").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".tableBody .dataRow").filter(function() {
            $(this).toggle($(this).text()
            .toLowerCase().indexOf(value) > -1)
        });
    });
});
})
});