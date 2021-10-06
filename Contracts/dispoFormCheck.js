// Get Forms from Local Storage
const dispoFormKeys = Object.values(localStorage); //

// Sepearte each form in to arrays
const splicedForms = dispoFormKeys.splice(0);


splicedForms.map(dispoAnswers => {const arr = JSON.parse("[" + dispoAnswers + "]"); //Loop through string; Wrap string in Array brackets; Parsing each Array

const formID = arr[0].shift(); //Removing the Unique ID from each array and outputting it to a variable
var finalArray = [arr]; //Creating a Nested Array of the Parsed Arrays

// Create new rows and cells for each submitted form, looping through each array
finalArray.forEach(function(elem) {


for (let dataRows of elem) {

// Select Dropdown Element
const filterForm = document.getElementById('myDropdown');

// Create 'a' element
var a = document.createElement('a');

console.log(dataRows)

//Each form's address
a.innerText = dataRows[0];

//Append each form address to dropdown
filterForm.appendChild(a)


// console.log(dataRows[0])

// function filter() {
//     document.getElementById("myDropdown").classList.toggle('show');
//     };

    // Close the dropdown menu if the user clicks outside of it
    //   window.onclick = function(event) {
    //     if (!event.target.matches('.dropbtn')) {
    //       var dropdowns = dataRows
    //       var i;
    //       for (i = 0; i < dropdowns.length; i++) {
    //         var openDropdown = dropdowns[i];
    //         if (openDropdown.classList.contains('show')) {
    //           openDropdown.classList.remove('show');
    //         }
    //       }
    //     }
    //   }





//Values from Submission Form------------------------------------------------
//---------------------------------------------------------------------------

// function filterStats () {

// const valueArrays = [
//     document.getElementById("propertyAddress").value,
//     document.getElementById("buyNum").value,
//     document.getElementById("closeEscrow").value,
//     document.getElementById("exeEscrow").value,
//     document.getElementById("contractPrice").value,
//     document.getElementById("EMD").value,
//     document.getElementById("docusign").value,
//     document.getElementById("userName").value,
//     document.getElementById("signerName").value,
//     document.getElementById("titleComp").value,
//     document.getElementById("titleEmail").value,
//     document.getElementById("compNum").value,
//     document.getElementById("titleOfficer").value,
//     document.getElementById("vester").value
// ]

// for (let values of valueArrays) {
    
//     for (let testing of dataRows) {
//     values = testing
//     console.log(values)}
// }



document.getElementById("propertyAddress").value = dataRows[0];


//Buyer Selection
dataRows[1] === "Wholesaler" ? wholesaler.checked = true : dataRows[1] === "Agent" ? agent.checked = true : dataRows[1] === "Investor" ? investor.checked = true : false;


document.getElementById("buyNum").value = dataRows[15];

document.getElementById("closeEscrow").value = dataRows[12];


//Are we Paying Closing Cost Selection
dataRows[11] === "Yes" ? closeYes.checked = true : dataRows[11] === "No" ? closeNo.checekd = true : false;


//Closing Sooner Selection
dataRows[13] === "Yes" ? soonYes.checked = true : dataRows[13] === "No" ? soonNo.checked = true : false;



document.getElementById("exeEscrow").value = dataRows[14];


document.getElementById("contractPrice").value = dataRows[9];


//Double Escrow Selection
dataRows[2] === "Yes" ? escrowYes.checked = true : dataRows[2] === "No" ? escrowNo.checked = true : false;



document.getElementById("EMD").value = dataRows[10];

document.getElementById("docusign").value = dataRows[16];

document.getElementById("userName").value = dataRows[17];

document.getElementById("signerName").value = dataRows[7];

document.getElementById("titleComp").value = dataRows[3];

document.getElementById("titleEmail").value = dataRows[5];

document.getElementById("compNum").value = dataRows[6];

document.getElementById("titleOfficer").value = dataRows[4];

document.getElementById("vester").value = dataRows[8];



// Accept or Reject button functionality ----------------------------------------------------------

//------------------------- Property Address Check --------------------



    
// Accept button-----------
document.getElementById("addressAccept").addEventListener("click", function(e) {
    document.getElementById("propertyAddress").style = "border-color: green; border-width: 3px;";
    document.getElementById("checkAddressLabel").innerText = "Accepted";
    document.getElementById("checkAddressLabel").style = "color: green; text-align: center;"

    //Hides notation field if Reject is selected first
    document.getElementById("addressRejectionReason").style.display = "none";

});

// Reject Button-----------
document.getElementById("addressReject").addEventListener("click", function(e) {
    document.getElementById("propertyAddress").style = "border-color: red; border-width: 3px;";
    document.getElementById("checkAddressLabel").innerText = "Rejected";
    document.getElementById("checkAddressLabel").style = "color: red; text-align: center;";

    //Adds notation field if rejected
    document.getElementById("addressRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});


//Confirmation of Rejection Field

const rejectionBoxAddress = document.getElementById("addressRejectionReason");

rejectionBoxAddress.addEventListener("blur", function onblurAddressRejection() {
    rejectionBoxAddress.value.length > "" ? rejectionBoxAddress.style.backgroundColor = "Aquamarine" : null;
});

rejectionBoxAddress.addEventListener("keydown", function getAddressRejectionBoxInfo(e) {
    e.key === "Enter" ? rejectionBoxAddress.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? rejectionBoxAddress.style.backgroundColor = "Aquamarine" : null;
});




// ---------------------------Is the Buyer a Check -----------------------
    
// Accept button-----------
document.getElementById("buyerAccept").addEventListener("click", function() {
    document.getElementById("buyerLabel").innerText = "Accepted";
    document.getElementById("buyerLabel").style= "color: green; text-align: center;"

     //Hides notation field if Reject is selected first
     document.getElementById("buyerRejectionReason").style.display = "none";
});

// Reject Button-----------
document.getElementById("buyerReject").addEventListener("click", function() {
    document.getElementById("buyerLabel").innerText = "Rejected";
    document.getElementById("buyerLabel").style = "color: red; text-align: center;";

    //Adds notation field if rejected
    document.getElementById("buyerRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxbuyer = document.getElementById("buyerRejectionReason");


rejectionBoxbuyer.addEventListener("blur", function onblurBuyerRejection() {
    rejectionBoxbuyer.value.length > "" ? rejectionBoxbuyer.style.backgroundColor = "Aquamarine" : null
});

rejectionBoxbuyer.addEventListener("keydown", function getBuyerRejectionBoxInfo(e) {
    e.key === "Enter" ? rejectionBoxbuyer.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? rejectionBoxbuyer.style.backgroundColor = "White" : null
});
// }


// --------------------------------Double Escrow Check --------------------
    
// Accept button-----------
document.getElementById("doubleEscrowAccept").addEventListener("click", function() {
    document.getElementById("doubleEscrowLabel").innerText = "Accepted";
    document.getElementById("doubleEscrowLabel").style = "color: green; text-align: center;"

    //Hides notation field if Reject is selected first
    document.getElementById("doubleEscrowRejectionReason").style.display = "none";
});

// Reject Button-----------
document.getElementById("doubleEscrowReject").addEventListener("click", function() {
    document.getElementById("doubleEscrowLabel").innerText = "Rejected";
    document.getElementById("doubleEscrowLabel").style = "color: red; text-align: center;";

    //Adds notation field if rejected
    document.getElementById("doubleEscrowRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxDoubleEscrow = document.getElementById("doubleEscrowRejectionReason");

rejectionBoxDoubleEscrow.addEventListener("blur", function onblurDoubleEscrowRejection() {
    rejectionBoxDoubleEscrow.value.length > "" ? rejectionBoxDoubleEscrow.style.backgroundColor = "Aquamarine" : null;
});

rejectionBoxDoubleEscrow.addEventListener("keydown", function getDoubleEscrowRejectionBoxInfo(e) {
    e.key === "Enter" ? rejectionBoxDoubleEscrow.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? rejectionBoxDoubleEscrow.style.backgroundColor = "White" : null;
});



// -------------------------------Title Company Check --------------------
    
// Accept button-----------
document.getElementById("titleAttorneyAccept").addEventListener("click", function() {
    document.getElementById("titleComp").style = "border-color: green; border-width: 3px;";
    document.getElementById("titleAttorneyLabel").innerText = "Accepted";
    document.getElementById("titleAttorneyLabel").style = "color: green; text-align: center;"

    //Hides notation field if Reject is selected first
    document.getElementById("titleAttorneyRejectionReason").style.display = "none";
});

// Reject Button-----------
document.getElementById("titleAttorneyReject").addEventListener("click", function() {
    document.getElementById("titleComp").style = "border-color: red; border-width: 3px;";
    document.getElementById("titleAttorneyLabel").innerText = "Rejected";
    document.getElementById("titleAttorneyLabel").style = "color: red; text-align: center;";

    //Adds notation field if rejected
    document.getElementById("titleAttorneyRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxTitleAttorney = document.getElementById("titleAttorneyRejectionReason");


rejectionBoxTitleAttorney.addEventListener("blur", function onblurTitleAttorneyRejection() {
    rejectionBoxTitleAttorney.value.length > "" ? rejectionBoxTitleAttorney.style.backgroundColor = "Aquamarine" : null;
});

rejectionBoxTitleAttorney.addEventListener("keydown", function getTitleAttorneyRejectionBoxInfo(e) {
    e.key === "Enter" ? rejectionBoxTitleAttorney.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? rejectionBoxTitleAttorney.style.backgroundColor = "White" : null;
});




// ------------------------Title Officer's Name Check --------------------
    
// Accept button-----------
document.getElementById("titleOfficerAccept").addEventListener("click", function() {
    document.getElementById("titleOfficer").style = "border-color: green; border-width: 3px;";
    document.getElementById("titleOfficerLabel").innerText = "Accepted";
    document.getElementById("titleOfficerLabel").style = "color: green; text-align: center;"

    //Hides notation field if Reject is selected first
    document.getElementById("titleOfficerRejectionReason").style.display = "none";
});

// Reject Button-----------
document.getElementById("titleOfficerReject").addEventListener("click", function() {
    document.getElementById("titleOfficer").style = "border-color: red; border-width: 3px;";
    document.getElementById("titleOfficerLabel").innerText = "Rejected";
    document.getElementById("titleOfficerLabel").style = "color: red; text-align: center;";

    //Adds notation field if rejected
    document.getElementById("titleOfficerRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field
const rejectionBoxTitleOfficer = document.getElementById("titleOfficerRejectionReason");

rejectionBoxTitleOfficer.addEventListener("blur", function onblurTitleOfficerRejection() {
    rejectionBoxTitleOfficer.value.length > "" ? rejectionBoxTitleOfficer.style.backgroundColor = "Aquamarine" : null;
});

rejectionBoxTitleOfficer.addEventListener("keydown", function getTitleOfficerRejectionBoxInfo(e) {
    e.key === "Enter" ? rejectionBoxTitleOfficer.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? rejectionBoxTitleOfficer.style.backgroundColor = "White" : null;
});



//--------------------------- Title Company Email Check ----------------------

// Accept button-----------
document.getElementById("titleEmailAccept").addEventListener("click", function() {
    document.getElementById("titleEmail").style = "border-color: green; border-width: 3px;";
    document.getElementById("titleEmailLabel").innerText = "Accepted";
    document.getElementById("titleEmailLabel").style = "color: green; text-align: center;"

    //Hides notation field if Reject is selected first
    document.getElementById("titleEmailRejectionReason").style.display = "none";
});

// Reject Button-----------
document.getElementById("titleEmailReject").addEventListener("click", function() {
    document.getElementById("titleEmail").style = "border-color: red; border-width: 3px;";
    document.getElementById("titleEmailLabel").innerText = "Rejected";
    document.getElementById("titleEmailLabel").style = "color: red; text-align: center;";

    //Adds notation field if rejected
    //Adds notation field if rejected
    document.getElementById("titleEmailRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxTitleEmail = document.getElementById("titleEmailRejectionReason");

rejectionBoxTitleEmail.addEventListener("blur", function onblurTitleEmailRejection() {
    rejectionBoxTitleEmail.value.length > "" ? rejectionBoxTitleEmail.style.backgroundColor = "Aquamarine" : null;
});

rejectionBoxTitleEmail.addEventListener("keydown", function getTitleEmailRejectionBoxInfo(e) {
    e.key === "Enter" ? rejectionBoxTitleEmail.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? rejectionBoxTitleEmail.style.backgroundColor = "White" : null;
});





// ------------------------------Title Company Phone Number Check ----------------------

// Accept button-----------
document.getElementById("titlePhoneAccept").addEventListener("click", function() {
    document.getElementById("compNum").style = "border-color: green; border-width: 3px;";
    document.getElementById("titlePhoneLabel").innerText = "Accepted";
    document.getElementById("titlePhoneLabel").style = "color: green; text-align: center;"

    //Hides notation field if Reject is selected first
    document.getElementById("titlePhoneRejectionReason").style.display = "none";
});

// Reject Button-----------
document.getElementById("titlePhoneReject").addEventListener("click", function() {
    document.getElementById("compNum").style = "border-color: red; border-width: 3px;";
    document.getElementById("titlePhoneLabel").innerText = "Rejected";
    document.getElementById("titlePhoneLabel").style = "color: red; text-align: center;";

    //Adds notation field if rejected
    document.getElementById("titlePhoneRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field
const rejectionBoxTitlePhone = document.getElementById("titlePhoneRejectionReason");

rejectionBoxTitlePhone.addEventListener("blur", function onblurTitlePhoneRejection() {
    rejectionBoxTitlePhone.value.length > "" ? rejectionBoxTitlePhone.style.backgroundColor = "Aquamarine" : null;
});

rejectionBoxTitlePhone.addEventListener("keydown", function getTitlePhoneRejectionBoxInfo(e) {
    e.key === "Enter" ? rejectionBoxTitlePhone.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? rejectionBoxTitlePhone.style.backgroundColor = "White" : null;
});





// --------------------------------------Signer's Name Check ---------------------------

// Accept button-----------
document.getElementById("signerAccept").addEventListener("click", function() {
    document.getElementById("signerName").style = "border-color: green; border-width: 3px;";
    document.getElementById("signerLabel").innerText = "Accepted";
    document.getElementById("signerLabel").style = "color: green; text-align: center;"

    //Hides notation field if Reject is selected first
    document.getElementById("signerRejectionReason").style.display = "none";
});

// Reject Button-----------
document.getElementById("signerReject").addEventListener("click", function() {
    document.getElementById("signerName").style = "border-color: red; border-width: 3px;";
    document.getElementById("signerLabel").innerText = "Rejected";
    document.getElementById("signerLabel").style = "color: red; text-align: center;";

    //Adds notation field if rejected
    document.getElementById("signerRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxSignerName = document.getElementById("signerRejectionReason");

rejectionBoxSignerName.addEventListener("blur", function onblurSignerNameRejection() {
    rejectionBoxSignerName.value.length > "" ? rejectionBoxSignerName.style.backgroundColor = "Aquamarine" : null;
});

rejectionBoxSignerName.addEventListener("keydown", function getSignerNameRejectionBoxInfo(e) {
    e.key === "Enter" ? rejectionBoxSignerName.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? rejectionBoxSignerName.style.backgroundColor = "White" : null;
});




// -------------------------------------Vesting Check ---------------------------

// Accept button-----------
document.getElementById("vestingAccept").addEventListener("click", function() {
    document.getElementById("vester").style = "border-color: green; border-width: 3px;";
    document.getElementById("vestingLabel").innerText = "Accepted";
    document.getElementById("vestingLabel").style = "color: green; text-align: center;"

    //Hides notation field if Reject is selected first
    document.getElementById("vestingRejectionReason").style.display = "none";
});

// Reject Button-----------
document.getElementById("vestingReject").addEventListener("click", function() {
    document.getElementById("vester").style = "border-color: red; border-width: 3px;";
    
    document.getElementById("vestingLabel").innerText = "Rejected";
    document.getElementById("vestingLabel").style = "color: red; text-align: center;";
    document.getElementById("vestingLabel").style.textAlign = "center";

    //Adds notation field if rejected
    document.getElementById("vestingRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxVesting = document.getElementById("vestingRejectionReason");

rejectionBoxVesting.addEventListener("blur", function onblurVestingRejection() {
    rejectionBoxVesting.value.length > "" ? rejectionBoxVesting.style.backgroundColor = "Aquamarine" : null;
});

rejectionBoxVesting.addEventListener("keydown", function getVestingRejectionBoxInfo(e) {
    e.key === "Enter" ? rejectionBoxVesting.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? rejectionBoxVesting.style.backgroundColor = "White" : null;
});




// ----------------------------------------Contract Price Check ----------------------

// Accept button-----------
document.getElementById("contractPriceAccept").addEventListener("click", function() {
    document.getElementById("contractPrice").style = "border-color: green; border-width: 3px;";
    document.getElementById("conractPriceLabel").innerText = "Accepted";
    document.getElementById("conractPriceLabel").style = "color: green; text-align: center;"

    //Hides notation field if Reject is selected first
    document.getElementById("contractRejectionReason").style.display = "none";

});

// Reject Button-----------
document.getElementById("contractPriceReject").addEventListener("click", function() {
    document.getElementById("contractPrice").style = "border-color: red; border-width: 3px;";
    document.getElementById("conractPriceLabel").innerText = "Rejected";
    document.getElementById("conractPriceLabel").style = "color: red; text-align: center;";

    //Adds notation field if rejected
    document.getElementById("contractRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxContractPrice = document.getElementById("contractRejectionReason");

rejectionBoxContractPrice.addEventListener("blur", function onblurContractPriceRejection() {
    rejectionBoxContractPrice.value.length > "" ? rejectionBoxContractPrice.style.backgroundColor = "Aquamarine" : null;
});

rejectionBoxContractPrice.addEventListener("keydown", function getContractPriceRejectionBoxInfo(e) {
    e.key === "Enter" ? rejectionBoxContractPrice.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? rejectionBoxContractPrice.style.backgroundColor = "White" : null;
});




// -------------------------------------EMD Check -------------------------------

// Accept button-----------
document.getElementById("emdAccept").addEventListener("click", function() {
    document.getElementById("EMD").style = "border-color: green; border-width: 3px;";
    document.getElementById("emdLabel").innerText = "Accepted";
    document.getElementById("emdLabel").style = "color: green; text-align: center;"

    //Hides notation field if Reject is selected first
    document.getElementById("emdRejectionReason").style.display = "none";
});

// Reject Button-----------
document.getElementById("emdReject").addEventListener("click", function() {
    document.getElementById("EMD").style = "border-color: red; border-width: 3px;";
    document.getElementById("emdLabel").innerText = "Rejected";
    document.getElementById("emdLabel").style = "color: red; text-align: center;";

    //Adds notation field if rejected
    document.getElementById("emdRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxEMD = document.getElementById("emdRejectionReason");

rejectionBoxEMD.addEventListener("blur", function onblurEMDRejection() {
    rejectionBoxEMD.value.length > "" ? rejectionBoxEMD.style.backgroundColor = "Aquamarine" : null;
});

rejectionBoxEMD.addEventListener("keydown", function getEMDRejectionBoxInfo(e) {
    e.key === "Enter" ? rejectionBoxEMD.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? rejectionBoxEMD.style.backgroundColor = "White" : null;
});




// ----------------------------------Are We Paying Closing Costs Check ------------------
    
// Accept button-----------
document.getElementById("closingCostAccept").addEventListener("click", function() {
    document.getElementById("closingCostLabel").innerText = "Accepted";
    document.getElementById("closingCostLabel").style = "color: green; text-align: center;"

    //Hides notation field if Reject is selected first
    document.getElementById("closingCostRejectionReason").style.display = "none";

});

// Reject Button-----------
document.getElementById("closingCostReject").addEventListener("click", function() {
    document.getElementById("closingCostLabel").innerText = "Rejected";
    document.getElementById("closingCostLabel").style = "color: red; text-align: center;";

    //Adds notation field if rejected
    document.getElementById("closingCostRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxClosingcost = document.getElementById("closingCostRejectionReason");

rejectionBoxClosingcost.addEventListener("blur", function onblurClosingCostRejection() {
    rejectionBoxClosingcost.value.length > "" ? rejectionBoxClosingcost.style.backgroundColor = "Aquamarine" : null;
});

rejectionBoxClosingcost.addEventListener("keydown", function getClosingCostRejectionBoxInfo(e) {
    e.key === "Enter" ? rejectionBoxClosingcost.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? rejectionBoxClosingcost.style.backgroundColor = "White" : null;
});




// ---------------------------------------Close of Escrow Check ----------------------

// Accept button-----------
document.getElementById("closeEscrowAccept").addEventListener("click", function() {
    document.getElementById("closeEscrow").style = "border-color: green; border-width: 3px;";
    document.getElementById("closeEscrowLabel").innerText = "Accepted";
    document.getElementById("closeEscrowLabel").style = "color: green; text-align: center;"

    //Hides notation field if Reject is selected first
    document.getElementById("closeEscrowRejectionReason").style.display = "none";

});

// Reject Button-----------
document.getElementById("closeEscrowReject").addEventListener("click", function() {
    document.getElementById("closeEscrow").style = "border-color: red; border-width: 3px;";
    document.getElementById("closeEscrowLabel").innerText = "Rejected";
    document.getElementById("closeEscrowLabel").style = "color: red; text-align: center;";

    //Adds notation field if rejected
    document.getElementById("closeEscrowRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxCloseEscrow = document.getElementById("closeEscrowRejectionReason");

rejectionBoxCloseEscrow.addEventListener("blur", function onblurCloseEscrowRejection() {
    rejectionBoxCloseEscrow.value.length > "" ? rejectionBoxCloseEscrow.style.backgroundColor = "Aquamarine" : null;
});

rejectionBoxCloseEscrow.addEventListener("keydown", function getCloseEscrowRejectionBoxInfo(e) {
    e.key === "Enter" ? rejectionBoxCloseEscrow.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? rejectionBoxCloseEscrow.style.backgroundColor = "White" : null;
});




//-------------------------------------- Are We Paying Closing Costs Check ------------------
    
// Accept button-----------
document.getElementById("closingSoonerAccept").addEventListener("click", function() {
    document.getElementById("closeSoonLabel").innerText = "Accepted";
    document.getElementById("closeSoonLabel").style = "color: green; text-align: center;"

    //Hides notation field if Reject is selected first
    document.getElementById("closingSoonerRejectionReason").style.display = "none";

});

// Reject Button-----------
document.getElementById("closingSoonerReject").addEventListener("click", function() {
    document.getElementById("closeSoonLabel").innerText = "Rejected";
    document.getElementById("closeSoonLabel").style = "color: red; text-align: center;";
    document.getElementById("closeSoonLabel").style.textAlign = "center";

    //Adds notation field if rejected
    document.getElementById("closingSoonerRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxClosingSooner = document.getElementById("closingSoonerRejectionReason");

rejectionBoxClosingSooner.addEventListener("blur", function onblurClosingSoonerRejection() {
    rejectionBoxClosingSooner.value.length > "" ? rejectionBoxClosingSooner.style.backgroundColor = "Aquamarine" : null;
});

rejectionBoxClosingSooner.addEventListener("keydown", function getClosingSoonerRejectionBoxInfo(e) {
    e.key === "Enter" ? rejectionBoxClosingSooner.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? rejectionBoxClosingSooner.style.backgroundColor = "White" : null;
});




// ---------------------------------------Contract Executed Date Check ------------------
    
// Accept button-----------
document.getElementById("contractExecutedAccept").addEventListener("click", function() {
    document.getElementById("exeEscrow").style = "border-color: green; border-width: 3px;";
    document.getElementById("contractDateLabel").innerText = "Accepted";
    document.getElementById("contractDateLabel").style = "color: green; text-align: center;"

      //Hides notation field if Reject is selected first
      document.getElementById("contractLabelRejectionReason").style.display = "none";

});

// Reject Button-----------
document.getElementById("contractExecutedReject").addEventListener("click", function() {
    document.getElementById("exeEscrow").style = "border-color: red; border-width: 3px;";
    document.getElementById("contractDateLabel").innerText = "Rejected";
    document.getElementById("contractDateLabel").style = "color: red; text-align: center;";

    //Adds notation field if rejected
    document.getElementById("contractLabelRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxContractDate = document.getElementById("contractLabelRejectionReason");

rejectionBoxContractDate.addEventListener("blur", function onblurContractDateRejection() {
    rejectionBoxContractDate.value.length > "" ? rejectionBoxContractDate.style.backgroundColor = "Aquamarine" : null;
});

rejectionBoxContractDate.addEventListener("keydown", function getContractDateRejectionBoxInfo(e) {
    e.key === "Enter" ? rejectionBoxContractDate.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? rejectionBoxContractDate.style.backgroundColor = "White" : null;
});



// -----------------------------------Buyer's Phone Number Check ------------------
    
// Accept button-----------
document.getElementById("buyersPhoneAccept").addEventListener("click", function() {
    document.getElementById("buyNum").style = "border-color: green; border-width: 3px;";
    document.getElementById("buyerNumberLabel").innerText = "Accepted";
    document.getElementById("buyerNumberLabel").style = "color: green; text-align: center;"

    //Hides notation field if Reject is selected first
    document.getElementById("buyersPhoneRejectionReason").style.display = "none";

});

// Reject Button-----------
document.getElementById("buyersPhoneReject").addEventListener("click", function() {
    document.getElementById("buyNum").style = "border-color: red; border-width: 3px;";
    document.getElementById("buyerNumberLabel").innerText = "Rejected";
    document.getElementById("buyerNumberLabel").style = "color: red; text-align: center;";

    //Adds notation field if rejected
    document.getElementById("buyersPhoneRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxBuyerNumber = document.getElementById("buyersPhoneRejectionReason");

rejectionBoxBuyerNumber.addEventListener("blur", function onblurBuyerNumberRejection() {
    rejectionBoxBuyerNumber.value.length > "" ? rejectionBoxBuyerNumber.style.backgroundColor = "Aquamarine" : null;
});

rejectionBoxBuyerNumber.addEventListener("keydown", function getBuyerNumberRejectionBoxInfo(e) {
    e.key === "Enter" ? rejectionBoxBuyerNumber.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? rejectionBoxBuyerNumber.style.backgroundColor = "White" : null;
});




// --------------------------------------Docusign Email Check ------------------
 
// Accept button-----------
document.getElementById("docusignEmailAccept").addEventListener("click", function() {
    document.getElementById("docusign").style = "border-color: green; border-width: 3px;";
    document.getElementById("docusignLabel").innerText = "Accepted";
    document.getElementById("docusignLabel").style = "color: green; text-align: center;"

    //Hides notation field if Reject is selected first
    document.getElementById("docusignEmailRejectionReason").style.display = "none";

});

// Reject Button-----------
document.getElementById("docusignEmailReject").addEventListener("click", function() {
    document.getElementById("docusign").style = "border-color: red; border-width: 3px;";
    document.getElementById("docusignLabel").innerText = "Rejected";
    document.getElementById("docusignLabel").style = "color: red; text-align: center;";

    //Adds notation field if rejected
    document.getElementById("docusignEmailRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxDocusignEmail = document.getElementById("docusignEmailRejectionReason");

rejectionBoxDocusignEmail.addEventListener("blur", function onblurDocusignEmailRejection() {
    rejectionBoxDocusignEmail.value.length > "" ? rejectionBoxDocusignEmail.style.backgroundColor = "Aquamarine" : null;
});

rejectionBoxDocusignEmail.addEventListener("keydown", function getDocusignEmailRejectionBoxInfo(e) {
    e.key === "Enter" ? rejectionBoxDocusignEmail.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? rejectionBoxDocusignEmail.style.backgroundColor = "White" : null;
});




//------------------------------------------ Name Check --------------------------------------


// Accept button-----------
document.getElementById("nameAccept").addEventListener("click", function() {
    document.getElementById("userName").style = "border-color: green; border-width: 3px;";
    document.getElementById("nameLabel").innerText = "Accepted";
    document.getElementById("nameLabel").style = "color: green; text-align: center;"

    //Hides notation field if Reject is selected first
    document.getElementById("nameRejectionReason").style.display = "none";

});

// Reject Button-----------
document.getElementById("nameReject").addEventListener("click", function() {
    document.getElementById("userName").style = "border-color: red; border-width: 3px;";
    document.getElementById("nameLabel").innerText = "Rejected";
    document.getElementById("nameLabel").style = "color: red; text-align: center;";

    //Adds notation field if rejected
    document.getElementById("nameRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxName = document.getElementById("nameRejectionReason");

rejectionBoxName.addEventListener("blur", function onblurNameRejection() {
    rejectionBoxName.value.length > "" ? rejectionBoxName.style.backgroundColor = "Aquamarine" : null;
});

rejectionBoxName.addEventListener("keydown", function getNameRejectionBoxInfo(e) {
    e.key === "Enter" ? rejectionBoxName.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? rejectionBoxName.style.backgroundColor = "White" : null;
});}

})

})