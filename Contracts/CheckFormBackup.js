import dispoComplete from './dispoForm-js.js'


console.log(outputContractPrice);


// Accept or Reject button functionality ----------------------------------------------------------

//------------------------- Property Address Check --------------------
    
// Accept button-----------
document.getElementById("addressAccept").addEventListener("click", function(e) {
    document.getElementById("propertyAddress").style.borderColor = "green";
    document.getElementById("propertyAddress").style.borderWidth = "3px";
    document.getElementById("checkAddressLabel").innerText = "Accepted";
    document.getElementById("checkAddressLabel").style.color = "green";
    document.getElementById("checkAddressLabel").style.textAlign = "center";

    //Hides notation field if Reject is selected first
    document.getElementById("addressRejectionReason").style.display = "none";
});

// Reject Button-----------
document.getElementById("addressReject").addEventListener("click", function(e) {
    document.getElementById("propertyAddress").style.borderColor = "red";
    document.getElementById("propertyAddress").style.borderWidth = "3px";
    document.getElementById("checkAddressLabel").innerText = "Rejected";
    document.getElementById("checkAddressLabel").style.color = "red";
    document.getElementById("checkAddressLabel").style.textAlign = "center";

    //Adds notation field if rejected
    document.getElementById("addressRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
    
});


//Confirmation of Rejection Field

const rejectionBoxAddress = document.getElementById("addressRejectionReason");

rejectionBoxAddress.addEventListener("keydown", getAddressRejectionBoxInfo);

rejectionBoxAddress.addEventListener("blur", onblurAddressRejection);

function onblurAddressRejection() {
  
    if (rejectionBoxAddress.value.length > "") {

        rejectionBoxAddress.style.backgroundColor = "Aquamarine";

        console.log(rejectionBoxAddress.value);

    }
};

function getAddressRejectionBoxInfo(e) {

    if (e.key === "Enter") {
        rejectionBoxAddress.style.backgroundColor = "Aquamarine";

        console.log(addressRejectionReason.value);
    }

    if (e.key === 'Backspace') {
        rejectionBoxAddress.style.backgroundColor = "White";
    }
};




// ---------------------------Is the Buyer a Check -----------------------
    
// Accept button-----------
document.getElementById("buyerAccept").addEventListener("click", function() {
    document.getElementById("buyerLabel").innerText = "Accepted";
    document.getElementById("buyerLabel").style.color = "green";
    document.getElementById("buyerLabel").style.textAlign = "center";

     //Hides notation field if Reject is selected first
     document.getElementById("buyerRejectionReason").style.display = "none";
});

// Reject Button-----------
document.getElementById("buyerReject").addEventListener("click", function() {
    document.getElementById("buyerLabel").innerText = "Rejected";
    document.getElementById("buyerLabel").style.color = "red";
    document.getElementById("buyerLabel").style.textAlign = "center";

     //Adds notation field if rejected
     document.getElementById("buyerRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxbuyer = document.getElementById("buyerRejectionReason");

rejectionBoxbuyer.addEventListener("keydown", getBuyerRejectionBoxInfo);

rejectionBoxbuyer.addEventListener("blur", onblurBuyerRejection);

function onblurBuyerRejection() {
  
    if (rejectionBoxbuyer.value.length > "") {

        rejectionBoxbuyer.style.backgroundColor = "Aquamarine";

        console.log(rejectionBoxbuyer.value);

    }
};

function getBuyerRejectionBoxInfo(e) {

    if (e.key === "Enter") {
        rejectionBoxbuyer.style.backgroundColor = "Aquamarine";

        console.log(buyerRejectionReason.value);
    }

    if (e.key === 'Backspace') {
        rejectionBoxbuyer.style.backgroundColor = "White";
    }
};




// --------------------------------Double Escrow Check --------------------
    
// Accept button-----------
document.getElementById("doubleEscrowAccept").addEventListener("click", function() {
    document.getElementById("doubleEscrowLabel").innerText = "Accepted";
    document.getElementById("doubleEscrowLabel").style.color = "green";
    document.getElementById("doubleEscrowLabel").style.textAlign = "center";

       //Hides notation field if Reject is selected first
       document.getElementById("doubleEscrowRejectionReason").style.display = "none";
});

// Reject Button-----------
document.getElementById("doubleEscrowReject").addEventListener("click", function() {
    document.getElementById("doubleEscrowLabel").innerText = "Rejected";
    document.getElementById("doubleEscrowLabel").style.color = "red";
    document.getElementById("doubleEscrowLabel").style.textAlign = "center";

      //Adds notation field if rejected
      document.getElementById("doubleEscrowRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxDoubleEscrow = document.getElementById("doubleEscrowRejectionReason");

rejectionBoxDoubleEscrow.addEventListener("keydown", getDoubleEscrowRejectionBoxInfo);

rejectionBoxDoubleEscrow.addEventListener("blur", onblurDoubleEscrowRejection);

function onblurDoubleEscrowRejection() {
  
    if (rejectionBoxDoubleEscrow.value.length > "") {

        rejectionBoxDoubleEscrow.style.backgroundColor = "Aquamarine";

        console.log(rejectionBoxDoubleEscrow.value);

    }
};

function getDoubleEscrowRejectionBoxInfo(e) {

    if (e.key === "Enter") {
        rejectionBoxDoubleEscrow.style.backgroundColor = "Aquamarine";

        console.log(doubleEscrowRejectionReason.value);
    }

    if (e.key === 'Backspace') {
        rejectionBoxDoubleEscrow.style.backgroundColor = "White";
    }
};




// -------------------------------Title Company Check --------------------
    
// Accept button-----------
document.getElementById("titleAttorneyAccept").addEventListener("click", function() {
    document.getElementById("titleComp").style.borderColor = "green";
    document.getElementById("titleComp").style.borderWidth = "3px";
    document.getElementById("titleAttorneyLabel").innerText = "Accepted";
    document.getElementById("titleAttorneyLabel").style.color = "green";
    document.getElementById("titleAttorneyLabel").style.textAlign = "center";

      //Hides notation field if Reject is selected first
      document.getElementById("titleAttorneyRejectionReason").style.display = "none";

});

// Reject Button-----------
document.getElementById("titleAttorneyReject").addEventListener("click", function() {
    document.getElementById("titleComp").style.borderColor = "red";
    document.getElementById("titleComp").style.borderWidth = "3px";
    document.getElementById("titleAttorneyLabel").innerText = "Rejected";
    document.getElementById("titleAttorneyLabel").style.color = "red";
    document.getElementById("titleAttorneyLabel").style.textAlign = "center";

       //Adds notation field if rejected
       document.getElementById("titleAttorneyRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxTitleAttorney = document.getElementById("titleAttorneyRejectionReason");

rejectionBoxTitleAttorney.addEventListener("keydown", getTitleAttorneyRejectionBoxInfo);

rejectionBoxTitleAttorney.addEventListener("blur", onblurTitleAttorneyRejection);

function onblurTitleAttorneyRejection() {
  
    if (rejectionBoxTitleAttorney.value.length > "") {

        rejectionBoxTitleAttorney.style.backgroundColor = "Aquamarine";

        console.log(rejectionBoxTitleAttorney.value);

    }
};

function getTitleAttorneyRejectionBoxInfo(e) {

    if (e.key === "Enter") {
        rejectionBoxTitleAttorney.style.backgroundColor = "Aquamarine";

        console.log(titleAttorneyRejectionReason.value);
    }

    if (e.key === 'Backspace') {
        rejectionBoxTitleAttorney.style.backgroundColor = "White";
    }
};




// ------------------------Title Officer's Name Check --------------------
    
// Accept button-----------
document.getElementById("titleOfficerAccept").addEventListener("click", function() {
    document.getElementById("titleOfficer").style.borderColor = "green";
    document.getElementById("titleOfficer").style.borderWidth = "3px";
    document.getElementById("titleOfficerLabel").innerText = "Accepted";
    document.getElementById("titleOfficerLabel").style.color = "green";
    document.getElementById("titleOfficerLabel").style.textAlign = "center";

    //Hides notation field if Reject is selected first
    document.getElementById("titleOfficerRejectionReason").style.display = "none";
});

// Reject Button-----------
document.getElementById("titleOfficerReject").addEventListener("click", function() {
    document.getElementById("titleOfficer").style.borderColor = "red";
    document.getElementById("titleOfficer").style.borderWidth = "3px";
    document.getElementById("titleOfficerLabel").innerText = "Rejected";
    document.getElementById("titleOfficerLabel").style.color = "red";
    document.getElementById("titleOfficerLabel").style.textAlign = "center";

    //Adds notation field if rejected
    document.getElementById("titleOfficerRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxTitleOfficer = document.getElementById("titleOfficerRejectionReason");

rejectionBoxTitleOfficer.addEventListener("keydown", getTitleOfficerRejectionBoxInfo);

rejectionBoxTitleOfficer.addEventListener("blur", onblurTitleOfficerRejection);

function onblurTitleOfficerRejection() {
  
    if (rejectionBoxTitleOfficer.value.length > "") {

        rejectionBoxTitleOfficer.style.backgroundColor = "Aquamarine";

        console.log(rejectionBoxTitleOfficer.value);

    }
};

function getTitleOfficerRejectionBoxInfo(e) {

    if (e.key === "Enter") {
        rejectionBoxTitleOfficer.style.backgroundColor = "Aquamarine";

        console.log(titleOfficerRejectionReason.value);
    }

    if (e.key === 'Backspace') {
        rejectionBoxTitleOfficer.style.backgroundColor = "White";
    }
};




//--------------------------- Title Company Email Check ----------------------

// Accept button-----------
document.getElementById("titleEmailAccept").addEventListener("click", function() {
    document.getElementById("titleEmail").style.borderColor = "green";
    document.getElementById("titleEmail").style.borderWidth = "3px";
    document.getElementById("titleEmailLabel").innerText = "Accepted";
    document.getElementById("titleEmailLabel").style.color = "green";
    document.getElementById("titleEmailLabel").style.textAlign = "center";

       //Hides notation field if Reject is selected first
       document.getElementById("titleEmailRejectionReason").style.display = "none";
});

// Reject Button-----------
document.getElementById("titleEmailReject").addEventListener("click", function() {
    document.getElementById("titleEmail").style.borderColor = "red";
    document.getElementById("titleEmail").style.borderWidth = "3px";
    document.getElementById("titleEmailLabel").innerText = "Rejected";
    document.getElementById("titleEmailLabel").style.color = "red";
    document.getElementById("titleEmailLabel").style.textAlign = "center";

    //Adds notation field if rejected
    //Adds notation field if rejected
    document.getElementById("titleEmailRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxTitleEmail = document.getElementById("titleEmailRejectionReason");

rejectionBoxTitleEmail.addEventListener("keydown", getTitleEmailRejectionBoxInfo);

rejectionBoxTitleEmail.addEventListener("blur", onblurTitleEmailRejection);

function onblurTitleEmailRejection() {
  
    if (rejectionBoxTitleEmail.value.length > "") {

        rejectionBoxTitleEmail.style.backgroundColor = "Aquamarine";

        console.log(rejectionBoxTitleEmail.value);

    }
};

function getTitleEmailRejectionBoxInfo(e) {

    if (e.key === "Enter") {
        rejectionBoxTitleEmail.style.backgroundColor = "Aquamarine";

        console.log(titleEmailRejectionReason.value);
    }

    if (e.key === 'Backspace') {
        rejectionBoxTitleEmail.style.backgroundColor = "White";
    }
};





// ------------------------------Title Company Phone Number Check ----------------------

// Accept button-----------
document.getElementById("titlePhoneAccept").addEventListener("click", function() {
    document.getElementById("compNum").style.borderColor = "green";
    document.getElementById("compNum").style.borderWidth = "3px";
    document.getElementById("titlePhoneLabel").innerText = "Accepted";
    document.getElementById("titlePhoneLabel").style.color = "green";
    document.getElementById("titlePhoneLabel").style.textAlign = "center";

    //Hides notation field if Reject is selected first
    document.getElementById("titlePhoneRejectionReason").style.display = "none";
});

// Reject Button-----------
document.getElementById("titlePhoneReject").addEventListener("click", function() {
    document.getElementById("compNum").style.borderColor = "red";
    document.getElementById("compNum").style.borderWidth = "3px";
    document.getElementById("titlePhoneLabel").innerText = "Rejected";
    document.getElementById("titlePhoneLabel").style.color = "red";
    document.getElementById("titlePhoneLabel").style.textAlign = "center";

    //Adds notation field if rejected
    document.getElementById("titlePhoneRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxTitlePhone = document.getElementById("titlePhoneRejectionReason");

rejectionBoxTitlePhone.addEventListener("keydown", getTitlePhoneRejectionBoxInfo);

rejectionBoxTitlePhone.addEventListener("blur", onblurTitlePhoneRejection);

function onblurTitlePhoneRejection() {
  
    if (rejectionBoxTitlePhone.value.length > "") {

        rejectionBoxTitlePhone.style.backgroundColor = "Aquamarine";

        console.log(rejectionBoxTitlePhone.value);

    }
};

function getTitlePhoneRejectionBoxInfo(e) {

    if (e.key === "Enter") {
        rejectionBoxTitlePhone.style.backgroundColor = "Aquamarine";

        console.log(titlePhoneRejectionReason.value);
    }

    if (e.key === 'Backspace') {
        rejectionBoxTitlePhone.style.backgroundColor = "White";
    }
};





// --------------------------------------Signer's Name Check ---------------------------

// Accept button-----------
document.getElementById("signerAccept").addEventListener("click", function() {
    document.getElementById("signerName").style.borderColor = "green";
    document.getElementById("signerName").style.borderWidth = "3px";
    document.getElementById("signerLabel").innerText = "Accepted";
    document.getElementById("signerLabel").style.color = "green";
    document.getElementById("signerLabel").style.textAlign = "center";

      //Hides notation field if Reject is selected first
      document.getElementById("signerRejectionReason").style.display = "none";
});

// Reject Button-----------
document.getElementById("signerReject").addEventListener("click", function() {
    document.getElementById("signerName").style.borderColor = "red";
    document.getElementById("signerName").style.borderWidth = "3px";
    document.getElementById("signerLabel").innerText = "Rejected";
    document.getElementById("signerLabel").style.color = "red";
    document.getElementById("signerLabel").style.textAlign = "center";

     //Adds notation field if rejected
     document.getElementById("signerRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxSignerName = document.getElementById("signerRejectionReason");

rejectionBoxSignerName.addEventListener("keydown", getSignerNameRejectionBoxInfo);

rejectionBoxSignerName.addEventListener("blur", onblurSignerNameRejection);

function onblurSignerNameRejection() {
  
    if (rejectionBoxSignerName.value.length > "") {

        rejectionBoxSignerName.style.backgroundColor = "Aquamarine";

        console.log(rejectionBoxSignerName.value);

    }
};

function getSignerNameRejectionBoxInfo(e) {

    if (e.key === "Enter") {
        rejectionBoxSignerName.style.backgroundColor = "Aquamarine";

        console.log(signerRejectionReason.value);
    }

    if (e.key === 'Backspace') {
        rejectionBoxSignerName.style.backgroundColor = "White";
    }
};





// -------------------------------------Vesting Check ---------------------------

// Accept button-----------
document.getElementById("vestingAccept").addEventListener("click", function() {
    document.getElementById("vester").style.borderColor = "green";
    document.getElementById("vester").style.borderWidth = "3px";
    document.getElementById("vestingLabel").innerText = "Accepted";
    document.getElementById("vestingLabel").style.color = "green";
    document.getElementById("vestingLabel").style.textAlign = "center";

       //Hides notation field if Reject is selected first
       document.getElementById("vestingRejectionReason").style.display = "none";

});

// Reject Button-----------
document.getElementById("vestingReject").addEventListener("click", function() {
    document.getElementById("vester").style.borderColor = "red";
    document.getElementById("vester").style.borderWidth = "3px";
    document.getElementById("vestingLabel").innerText = "Rejected";
    document.getElementById("vestingLabel").style.color = "red";
    document.getElementById("vestingLabel").style.textAlign = "center";

        //Adds notation field if rejected
        document.getElementById("vestingRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxVesting = document.getElementById("vestingRejectionReason");

rejectionBoxVesting.addEventListener("keydown", getVestingRejectionBoxInfo);

rejectionBoxVesting.addEventListener("blur", onblurVestingRejection);

function onblurVestingRejection() {
  
    if (rejectionBoxVesting.value.length > "") {

        rejectionBoxVesting.style.backgroundColor = "Aquamarine";

        console.log(rejectionBoxVesting.value);

    }
};

function getVestingRejectionBoxInfo(e) {

    if (e.key === "Enter") {
        rejectionBoxVesting.style.backgroundColor = "Aquamarine";

        console.log(vestingRejectionReason.value);
    }

    if (e.key === 'Backspace') {
        rejectionBoxVesting.style.backgroundColor = "White";
    }
};




// ----------------------------------------Contract Price Check ----------------------

// Accept button-----------
document.getElementById("contractPriceAccept").addEventListener("click", function() {
    document.getElementById("contractPrice").style.borderColor = "green";
    document.getElementById("contractPrice").style.borderWidth = "3px";
    document.getElementById("conractPriceLabel").innerText = "Accepted";
    document.getElementById("conractPriceLabel").style.color = "green";
    document.getElementById("conractPriceLabel").style.textAlign = "center";

           //Hides notation field if Reject is selected first
           document.getElementById("contractRejectionReason").style.display = "none";

});

// Reject Button-----------
document.getElementById("contractPriceReject").addEventListener("click", function() {
    document.getElementById("contractPrice").style.borderColor = "red";
    document.getElementById("contractPrice").style.borderWidth = "3px";
    document.getElementById("conractPriceLabel").innerText = "Rejected";
    document.getElementById("conractPriceLabel").style.color = "red";
    document.getElementById("conractPriceLabel").style.textAlign = "center";

      //Adds notation field if rejected
      document.getElementById("contractRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxContractPrice = document.getElementById("contractRejectionReason");

rejectionBoxContractPrice.addEventListener("keydown", getContractPriceRejectionBoxInfo);

rejectionBoxContractPrice.addEventListener("blur", onblurContractPriceRejection);

function onblurContractPriceRejection() {
  
    if (rejectionBoxContractPrice.value.length > "") {

        rejectionBoxContractPrice.style.backgroundColor = "Aquamarine";

        console.log(rejectionBoxContractPrice.value);

    }
};

function getContractPriceRejectionBoxInfo(e) {

    if (e.key === "Enter") {
        rejectionBoxContractPrice.style.backgroundColor = "Aquamarine";

        console.log(contractRejectionReason.value);
    }

    if (e.key === 'Backspace') {
        rejectionBoxContractPrice.style.backgroundColor = "White";
    }
};





// -------------------------------------EMD Check -------------------------------

// Accept button-----------
document.getElementById("emdAccept").addEventListener("click", function() {
    document.getElementById("EMD").style.borderColor = "green";
    document.getElementById("EMD").style.borderWidth = "3px";
    document.getElementById("emdLabel").innerText = "Accepted";
    document.getElementById("emdLabel").style.color = "green";
    document.getElementById("emdLabel").style.textAlign = "center";

      //Hides notation field if Reject is selected first
      document.getElementById("emdRejectionReason").style.display = "none";
});

// Reject Button-----------
document.getElementById("emdReject").addEventListener("click", function() {
    document.getElementById("EMD").style.borderColor = "red";
    document.getElementById("EMD").style.borderWidth = "3px";
    document.getElementById("emdLabel").innerText = "Rejected";
    document.getElementById("emdLabel").style.color = "red";
    document.getElementById("emdLabel").style.textAlign = "center";

     //Adds notation field if rejected
     document.getElementById("emdRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxEMD = document.getElementById("emdRejectionReason");

rejectionBoxEMD.addEventListener("keydown", getEMDRejectionBoxInfo);

rejectionBoxEMD.addEventListener("blur", onblurEMDRejection);

function onblurEMDRejection() {
  
    if (rejectionBoxEMD.value.length > "") {

        rejectionBoxEMD.style.backgroundColor = "Aquamarine";

        console.log(rejectionBoxEMD.value);

    }
};

function getEMDRejectionBoxInfo(e) {

    if (e.key === "Enter") {
        rejectionBoxEMD.style.backgroundColor = "Aquamarine";

        console.log(emdRejectionReason.value);
    }

    if (e.key === 'Backspace') {
        rejectionBoxEMD.style.backgroundColor = "White";
    }
};





// ----------------------------------Are We Paying Closing Costs Check ------------------
    
// Accept button-----------
document.getElementById("closingCostAccept").addEventListener("click", function() {
    document.getElementById("closingCostLabel").innerText = "Accepted";
    document.getElementById("closingCostLabel").style.color = "green";
    document.getElementById("closingCostLabel").style.textAlign = "center";

          //Hides notation field if Reject is selected first
          document.getElementById("closingCostRejectionReason").style.display = "none";

});

// Reject Button-----------
document.getElementById("closingCostReject").addEventListener("click", function() {
    document.getElementById("closingCostLabel").innerText = "Rejected";
    document.getElementById("closingCostLabel").style.color = "red";
    document.getElementById("closingCostLabel").style.textAlign = "center";

         //Adds notation field if rejected
         document.getElementById("closingCostRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxClosingcost = document.getElementById("closingCostRejectionReason");

rejectionBoxClosingcost.addEventListener("keydown", getClosingCostRejectionBoxInfo);

rejectionBoxClosingcost.addEventListener("blur", onblurClosingCostRejection);

function onblurClosingCostRejection() {
  
    if (rejectionBoxClosingcost.value.length > "") {

        rejectionBoxClosingcost.style.backgroundColor = "Aquamarine";

        console.log(rejectionBoxClosingcost.value);

    }
};

function getClosingCostRejectionBoxInfo(e) {

    if (e.key === "Enter") {
        rejectionBoxClosingcost.style.backgroundColor = "Aquamarine";

        console.log(closingCostRejectionReason.value);
    }

    if (e.key === 'Backspace') {
        rejectionBoxClosingcost.style.backgroundColor = "White";
    }
};




// ---------------------------------------Close of Escrow Check ----------------------

// Accept button-----------
document.getElementById("closeEscrowAccept").addEventListener("click", function() {
    document.getElementById("closeEscrow").style.borderColor = "green";
    document.getElementById("closeEscrow").style.borderWidth = "3px";
    document.getElementById("closeEscrowLabel").innerText = "Accepted";
    document.getElementById("closeEscrowLabel").style.color = "green";
    document.getElementById("closeEscrowLabel").style.textAlign = "center";

          //Hides notation field if Reject is selected first
           document.getElementById("closeEscrowRejectionReason").style.display = "none";

});

// Reject Button-----------
document.getElementById("closeEscrowReject").addEventListener("click", function() {
    document.getElementById("closeEscrow").style.borderColor = "red";
    document.getElementById("closeEscrow").style.borderWidth = "3px";
    document.getElementById("closeEscrowLabel").innerText = "Rejected";
    document.getElementById("closeEscrowLabel").style.color = "red";
    document.getElementById("closeEscrowLabel").style.textAlign = "center";

      //Adds notation field if rejected
        document.getElementById("closeEscrowRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxCloseEscrow = document.getElementById("closeEscrowRejectionReason");

rejectionBoxCloseEscrow.addEventListener("keydown", getCloseEscrowRejectionBoxInfo);

rejectionBoxCloseEscrow.addEventListener("blur", onblurCloseEscrowRejection);

function onblurCloseEscrowRejection() {
  
    if (rejectionBoxCloseEscrow.value.length > "") {

        rejectionBoxCloseEscrow.style.backgroundColor = "Aquamarine";

        console.log(closeEscrowRejectionReason.value);

    }
};

function getCloseEscrowRejectionBoxInfo(e) {

    if (e.key === "Enter") {
        rejectionBoxCloseEscrow.style.backgroundColor = "Aquamarine";

        console.log(closeEscrowRejectionReason.value);
    }

    if (e.key === 'Backspace') {
        rejectionBoxCloseEscrow.style.backgroundColor = "White";
    }
};





//-------------------------------------- Are We Paying Closing Costs Check ------------------
    
// Accept button-----------
document.getElementById("closingSoonerAccept").addEventListener("click", function() {
    document.getElementById("closeSoonLabel").innerText = "Accepted";
    document.getElementById("closeSoonLabel").style.color = "green";
    document.getElementById("closeSoonLabel").style.textAlign = "center";

      //Hides notation field if Reject is selected first
      document.getElementById("closingSoonerRejectionReason").style.display = "none";

});

// Reject Button-----------
document.getElementById("closingSoonerReject").addEventListener("click", function() {
    document.getElementById("closeSoonLabel").innerText = "Rejected";
    document.getElementById("closeSoonLabel").style.color = "red";
    document.getElementById("closeSoonLabel").style.textAlign = "center";

      //Adds notation field if rejected
      document.getElementById("closingSoonerRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxClosingSooner = document.getElementById("closingSoonerRejectionReason");

rejectionBoxClosingSooner.addEventListener("keydown", getClosingSoonerRejectionBoxInfo);

rejectionBoxClosingSooner.addEventListener("blur", onblurClosingSoonerRejection);

function onblurClosingSoonerRejection() {
  
    if (rejectionBoxClosingSooner.value.length > "") {

        rejectionBoxClosingSooner.style.backgroundColor = "Aquamarine";

        console.log(rejectionBoxClosingSooner.value);

    }
};

function getClosingSoonerRejectionBoxInfo(e) {

    if (e.key === "Enter") {
        rejectionBoxClosingSooner.style.backgroundColor = "Aquamarine";

        console.log(closingSoonerRejectionReason.value);
    }

    if (e.key === 'Backspace') {
        rejectionBoxClosingSooner.style.backgroundColor = "White";
    }
};




// ---------------------------------------Contract Executed Date Check ------------------
    
// Accept button-----------
document.getElementById("contractExecutedAccept").addEventListener("click", function() {
    document.getElementById("exeEscrow").style.borderColor = "green";
    document.getElementById("exeEscrow").style.borderWidth = "3px";
    document.getElementById("contractDateLabel").innerText = "Accepted";
    document.getElementById("contractDateLabel").style.color = "green";
    document.getElementById("contractDateLabel").style.textAlign = "center";

      //Hides notation field if Reject is selected first
      document.getElementById("contractLabelRejectionReason").style.display = "none";

});

// Reject Button-----------
document.getElementById("contractExecutedReject").addEventListener("click", function() {
    document.getElementById("exeEscrow").style.borderColor = "red";
    document.getElementById("exeEscrow").style.borderWidth = "3px";
    document.getElementById("contractDateLabel").innerText = "Rejected";
    document.getElementById("contractDateLabel").style.color = "red";
    document.getElementById("contractDateLabel").style.textAlign = "center";


    //Adds notation field if rejected
    document.getElementById("contractLabelRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxContractDate = document.getElementById("contractLabelRejectionReason");

rejectionBoxContractDate.addEventListener("keydown", getContractDateRejectionBoxInfo);

rejectionBoxContractDate.addEventListener("blur", onblurContractDateRejection);

function onblurContractDateRejection() {
  
    if (rejectionBoxContractDate.value.length > "") {

        rejectionBoxContractDate.style.backgroundColor = "Aquamarine";

        console.log(rejectionBoxContractDate.value);

    }
};

function getContractDateRejectionBoxInfo(e) {

    if (e.key === "Enter") {
        rejectionBoxContractDate.style.backgroundColor = "Aquamarine";

        console.log(contractLabelRejectionReason.value);
    }

    if (e.key === 'Backspace') {
        rejectionBoxContractDate.style.backgroundColor = "White";
    }
};





// -----------------------------------Buyer's Phone Number Check ------------------
    
// Accept button-----------
document.getElementById("buyersPhoneAccept").addEventListener("click", function() {
    document.getElementById("buyNum").style.borderColor = "green";
    document.getElementById("buyNum").style.borderWidth = "3px";
    document.getElementById("buyerNumberLabel").innerText = "Accepted";
    document.getElementById("buyerNumberLabel").style.color = "green";
    document.getElementById("buyerNumberLabel").style.textAlign = "center";

          //Hides notation field if Reject is selected first
          document.getElementById("buyersPhoneRejectionReason").style.display = "none";

});

// Reject Button-----------
document.getElementById("buyersPhoneReject").addEventListener("click", function() {
    document.getElementById("buyNum").style.borderColor = "red";
    document.getElementById("buyNum").style.borderWidth = "3px";
    document.getElementById("buyerNumberLabel").innerText = "Rejected";
    document.getElementById("buyerNumberLabel").style.color = "red";
    document.getElementById("buyerNumberLabel").style.textAlign = "center";

      //Adds notation field if rejected
       document.getElementById("buyersPhoneRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxBuyerNumber = document.getElementById("buyersPhoneRejectionReason");

rejectionBoxBuyerNumber.addEventListener("keydown", getBuyerNumberRejectionBoxInfo);

rejectionBoxBuyerNumber.addEventListener("blur", onblurBuyerNumberRejection);

function onblurBuyerNumberRejection() {
  
    if (rejectionBoxBuyerNumber.value.length > "") {

        rejectionBoxBuyerNumber.style.backgroundColor = "Aquamarine";

        console.log(rejectionBoxBuyerNumber.value);

    }
};

function getBuyerNumberRejectionBoxInfo(e) {

    if (e.key === "Enter") {
        rejectionBoxBuyerNumber.style.backgroundColor = "Aquamarine";

        console.log(buyersPhoneRejectionReason.value);
    }

    if (e.key === 'Backspace') {
        rejectionBoxBuyerNumber.style.backgroundColor = "White";
    }
};





// --------------------------------------Docusign Email Check ------------------
 
// Accept button-----------
document.getElementById("docusignEmailAccept").addEventListener("click", function() {
    document.getElementById("docusign").style.borderColor = "green";
    document.getElementById("docusign").style.borderWidth = "3px";
    document.getElementById("docusignLabel").innerText = "Accepted";
    document.getElementById("docusignLabel").style.color = "green";
    document.getElementById("docusignLabel").style.textAlign = "center";

          //Hides notation field if Reject is selected first
          document.getElementById("docusignEmailRejectionReason").style.display = "none";

});

// Reject Button-----------
document.getElementById("docusignEmailReject").addEventListener("click", function() {
    document.getElementById("docusign").style.borderColor = "red";
    document.getElementById("docusign").style.borderWidth = "3px";
    document.getElementById("docusignLabel").innerText = "Rejected";
    document.getElementById("docusignLabel").style.color = "red";
    document.getElementById("docusignLabel").style.textAlign = "center";

      //Adds notation field if rejected
      document.getElementById("docusignEmailRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxDocusignEmail = document.getElementById("docusignEmailRejectionReason");

rejectionBoxDocusignEmail.addEventListener("keydown", getDocusignEmailRejectionBoxInfo);

rejectionBoxDocusignEmail.addEventListener("blur", onblurDocusignEmailRejection);

function onblurDocusignEmailRejection() {
  
    if (rejectionBoxDocusignEmail.value.length > "") {

        rejectionBoxDocusignEmail.style.backgroundColor = "Aquamarine";

        console.log(rejectionBoxDocusignEmail.value);

    }
};

function getDocusignEmailRejectionBoxInfo(e) {

    if (e.key === "Enter") {
        rejectionBoxDocusignEmail.style.backgroundColor = "Aquamarine";

        console.log(docusignEmailRejectionReason.value);
    }

    if (e.key === 'Backspace') {
        rejectionBoxDocusignEmail.style.backgroundColor = "White";
    }
};




//------------------------------------------ Name Check ------------------


// Accept button-----------
document.getElementById("nameAccept").addEventListener("click", function() {
    document.getElementById("userName").style.borderColor = "green";
    document.getElementById("userName").style.borderWidth = "3px";
    document.getElementById("nameLabel").innerText = "Accepted";
    document.getElementById("nameLabel").style.color = "green";
    document.getElementById("nameLabel").style.textAlign = "center";

      //Hides notation field if Reject is selected first
      document.getElementById("nameRejectionReason").style.display = "none";

});

// Reject Button-----------
document.getElementById("nameReject").addEventListener("click", function() {
    document.getElementById("userName").style.borderColor = "red";
    document.getElementById("userName").style.borderWidth = "3px";
    document.getElementById("nameLabel").innerText = "Rejected";
    document.getElementById("nameLabel").style.color = "red";
    document.getElementById("nameLabel").style.textAlign = "center";

          //Adds notation field if rejected
          document.getElementById("nameRejectionReason").style = "display: block; padding: 20px 90px 20px 90px; text-align: center; margin: auto";
});

//Confirmation of Rejection Field

const rejectionBoxName = document.getElementById("nameRejectionReason");

rejectionBoxName.addEventListener("keydown", getNameRejectionBoxInfo);

rejectionBoxName.addEventListener("blur", onblurNameRejection);

function onblurNameRejection() {
  
    if (rejectionBoxName.value.length > "") {

        rejectionBoxName.style.backgroundColor = "Aquamarine";

        console.log(rejectionBoxName.value);

    }
};

function getNameRejectionBoxInfo(e) {

    if (e.key === "Enter") {
        rejectionBoxName.style.backgroundColor = "Aquamarine";

        console.log(nameRejectionReason.value);
    }

    if (e.key === 'Backspace') {
        rejectionBoxName.style.backgroundColor = "White";
    }
};