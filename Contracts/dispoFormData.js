//Retrieve forms from Local Storage
const dispoFormKeys = Object.values(localStorage); //

const splicedForms = dispoFormKeys.splice(0);

// console.log(dispoFormKeys)
// console.log(splicedForms)

splicedForms.map(dispoAnswers => {const arr = JSON.parse("[" + dispoAnswers + "]"); //Loop through string; Wrap string in Array brackets; Parsing each Array
console.log(dispoAnswers)
console.log(arr)
const formID = arr[0].shift(); //Removing the Unique ID from each array and outputting it to a variable
var tbody = document.querySelector('table tbody');
var finalArray = [arr]; //Creating a Nested Array of the Parsed Arrays

// Create new rows and cells for each submitted form, looping through each array

finalArray.forEach(function(elem) {
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



// import * as acqData from "./Contracts-js";


// console.log(acqData.nameInput.value);

// function allStorage() {

//     var archive = [],
//         keys = Object.keys(localStorage),
//         i = 0, key;

//     for (; key = keys[i]; i++) {
//         archive.push( key + '=' + localStorage.getItem(key));
//     }
//     console.log(archive)
//     return archive;

    
// }

// const dispoForm = localStorage.getItem("dkem1q3td");


// //HTML ID Variables
// const addressID = document.getElementById("propertyAddress").innerText;
// const buyerID = document.getElementById("buyer").innerText;
// const doubleEscrowID = document.getElementById("doubleEscrow").innerText; 
// const titleCompID = document.getElementById("titleComp").innerText;
// const titleOfficerID = document.getElementById("titleOfficer").innerText; 
// const titleEmailID = document.getElementById("titleEmail").innerText;
// const compNumID = document.getElementById("compNum").innerText;
// const signerNameID = document.getElementById("signerName").innerText;
// const vesterID = document.getElementById("vester").innerText;
// const contractPriceID = document.getElementById("contractPrice").innerText;
// const emdID = document.getElementById("EMD").innerText;
// const closingCostID = document.getElementById("closingCost").innerText;
// const closeEscrowID = document.getElementById("closeEscrow").innerText; 
// const closeSoonerID = document.getElementById("closeSooner").innerText; 
// const exeEscrowID = document.getElementById("exeEscrow").innerText;
// const buyNumID = document.getElementById("buyNum").innerText;
// const docusignID = document.getElementById("docusign").innerText;
// const userNameID = document.getElementById("userName").innerText;


// const addressInput = JSON.parse(splicedForms[0]).Address;
// const buyerInput = JSON.parse(splicedForms[0]).Buyer;
// const buyerNumInput = JSON.parse(splicedForms[0]).buyersPhone;
// const closeEscrowInput = JSON.parse(splicedForms[0]).closeEscrowDate;
// const closingCostInput = JSON.parse(splicedForms[0]).closing;
// const closeSoonerInput = JSON.parse(splicedForms[0]).closingSooner;
// const contractExeInput = JSON.parse(splicedForms[0]).contractExecuted; 
// const contractPriceInput = JSON.parse(splicedForms[0]).contractPricing;
// const doubleEscrowInput = JSON.parse(splicedForms[0]).doubleEscrow;
// const emdInput = JSON.parse(splicedForms[0]).earnestMoney;
// const docusignInput = JSON.parse(splicedForms[0]).emailDocusign;
// const userNameInput = JSON.parse(splicedForms[0]).name;
// const signerNameInput = JSON.parse(splicedForms[0]).signersName;
// const titleComInput = JSON.parse(splicedForms[0]).titleCompanyAttorney;
// const titleEmailInput = JSON.parse(splicedForms[0]).titleCompanyEmail;
// const compNumInput = JSON.parse(splicedForms[0]).titleCompanyNumber;
// const titleOfficerInput = JSON.parse(splicedForms[0]).titleOfficerName;
// const vesterInput = JSON.parse(splicedForms[0]).vesting;


// const response = [{
//     Address : addressID,
//     Buyer : buyerID,
//     Escrow : doubleEscrowID,
//     TitleComp : titleCompID,
//     TitleOfficer : titleOfficerID,
//     TitleEmail : titleEmailID,
//     CompanyNumber : compNumID,
//     SignerName :  signerNameID,
//     Vester : vesterID,
//     Contract : contractPriceID,
//     EMD : emdID,
//     ClosingCost : closingCostID,
//     CloseEscrow : closeEscrowID,
//     CloseSooner : closeSoonerID,
//     ExeEscrow : exeEscrowID,
//     BuyNumber : buyNumID,
//     Docusign : docusignID,
//     Username : userNameID
// }];




// const mapping = {
//     Address : addressInput,
//     Buyer : buyerInput,
//     Escrow : doubleEscrowInput,
//     TitleComp : titleComInput,
//     TitleOfficer : titleOfficerInput,
//     titleEmail : titleEmailInput,
//     CompanyNumber : compNumInput,
//     SignerName : signerNameInput,
//     Vester : vesterInput,
//     Contract : contractPriceInput,
//     EMD : emdInput,
//     ClosingCost : closingCostInput,
//     CloseEscrow : closeEscrowInput,
//     CloseSooner : closeSoonerInput,
//     ExeEscrow : contractExeInput,
//     BuyNumber : buyerNumInput,
//     Docusign : docusignInput,
//     Username : userNameInput
// };


// const highchartsAdapter = (response, mapping) => {
//     return response.map(item => {
//       const normalized = {};
    
//       // Normalize each response's item key, according to the mapping
//       Object.keys(item).forEach(key => (normalized[mapping[key]] = item[key]));
//       return normalized;
//     });
//    };
    
//    console.log(highchartsAdapter(response, mapping));
   

// dispoFormKeys.forEach(dispos => {

//     dispos[0] = 


//    console.log(dispos)
// })


// console.log(JSON.parse(dispoFormKeys[0][1]))
// console.log(JSON.parse(dispoFormKeys[1][1]))
// console.log(dispoFormKeys[0])

// console.log(Object.values(dispoFormKeys))


// const dispoProp = {
//     addressID : addressInput,
//     buyerID : buyerInput,
//     buyNumID : buyerNumInput,
//     closeEscrowID : closeEscrowInput,
//     closingCostID : closingCostInput,
//     closeSoonerID : closeSoonerInput,
//     exeEscrowID : contractExeInput,
//     contractPriceID : contractPriceInput,
//     doubleEscrowID : doubleEscrowInput,
//     emdID : emdInput,
//     docusignID : docusignInput,
//     userNameID : userNameInput,
//     signerNameID : signerNameInput,
//     titleCompID : titleComInput,
//     titleEmailID : titleEmailInput,
//     compNumID : compNumInput,
//     titleOfficerID : titleOfficerInput,
//     vesterID : vesterInput
// }


// const dispoProp = [{
//     'propertyAddress' : addressInput,
//     'buyer' : buyerInput,
//     'doubleEscrow' : doubleEscrowInput,
//     'titleComp' : titleComInput,
//     'titleOfficer' : titleOfficerInput,
//     'titleEmail' : titleEmailInput,
//     'compNum' : compNumInput,
//     'signerName' : signerNameInput,
//     'vester' : vesterInput,
//     'contractPrice' : contractPriceInput,
//     'EMD' : emdInput,
//     'closingCost' : closingCostInput,
//     'closeEscrow' : closeEscrowInput,
//     'closeSooner' : closeSoonerInput,
//     'exeEscrow' : contractExeInput,
//     'buyNum' : buyerNumInput,
//     'docusign' : docusignInput,
//     'userName' : userNameInput
// }]


// const idString = [
//     'propertyAddress', 
//     'buyer',
//     'doubleEscrow',
//     'titleComp',
//     'titleOfficer',
//     'titleEmail',
//     'compNum',
//     'signerName',
//     'vester',
//     'contractPrice',
//     'EMD',
//     'closingCost',
//     'closeEscrow',
//     'closeSooner',
//     'exeEscrow',
//     'buyNum',
//     'docusign',
//     'userName'
// ];


// Looping through Local Storage Dispo Forms; Shifting, taking off Unique ID for each form; Inputting Dispo Form Values in to the Table ------------------------------------------------------------






/*Values from Submission Form--------------------------------------------
------------------------------------------------------------------------*/

// console.log(JSON.parse(splicedForms[0]))

// formOne = JSON.parse(splicedForms[0]);

// console.log(formOne[1])

// document.getElementById("propertyAddress").innerText = formOne[1];

// document.getElementById("buyer").innerText = formOne[2];


// document.getElementById("buyNum").innerText = formOne[3];

// document.getElementById("closeEscrow").innerText = formOne[4];


// document.getElementById("closingCost").innerText = formOne[5];


// document.getElementById("closeSooner").innerText = formOne[6];


// document.getElementById("exeEscrow").innerText = formOne[7];


// document.getElementById("contractPrice").innerText = formOne[8];


// document.getElementById("doubleEscrow").innerText = formOne[9];


// document.getElementById("EMD").innerText = formOne[10]; 


// document.getElementById("docusign").innerText = formOne[11];


// document.getElementById("userName").innerText = formOne[12];


// document.getElementById("signerName").innerText = formOne[13];


// document.getElementById("titleComp").innerText = formOne[14];


// document.getElementById("titleEmail").innerText = formOne[15];


// document.getElementById("compNum").innerText = formOne[16];


// document.getElementById("titleOfficer").innerText = formOne[17];


// document.getElementById("vester").innerText = formOne[18];




