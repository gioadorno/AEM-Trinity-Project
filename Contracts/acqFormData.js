// import * as acqData from "./Contracts-js";


// console.log(acqData.nameInput.value);


const dispoForm = localStorage.getItem("form");



/*Values from Submission Form--------------------------------------------
------------------------------------------------------------------------*/

document.getElementById("dataAddress").value = JSON.parse(dispoForm).Address;

//Buyer Selection
    if (JSON.parse(dispoForm).Buyer === "Wholesaler") {
     wholesaler.checked = true;
        }
        else if (JSON.parse(dispoForm).Buyer === "Agent") {
             agent.checked = true;
        }
        else if (JSON.parse(dispoForm).Buyer === "Investor") {
             investor.checked = true;
        };


document.getElementById("buyNum").value = JSON.parse(dispoForm).buyersPhone;

document.getElementById("closeEscrow").value = JSON.parse(dispoForm).closeEscrowDate;


//Are we Paying Closing Cost Selection
if (JSON.parse(dispoForm).closing === "Yes") {
    closeYes.checked = true;
       }
       else if (JSON.parse(dispoForm).closing === "No") {
            closeNo.checked = true;
       };



//Closing Sooner Selection
if (JSON.parse(dispoForm).closingSooner === "Yes") {
    soonYes.checked = true;
       }
       else if (JSON.parse(dispoForm).closingSooner === "No") {
            soonNo.checked = true;
       };



document.getElementById("exeEscrow").value = JSON.parse(dispoForm).contractExecuted;


document.getElementById("contractPrice").value = JSON.parse(dispoForm).contractPricing;


//Double Escrow Selection
if (JSON.parse(dispoForm).doubleEscrow === "Yes") {
    escrowYes.checked = true;
       }
       else if (JSON.parse(dispoForm).doubleEscrow === "No") {
            escrowNo.checked = true;
       };


document.getElementById("EMD").value = JSON.parse(dispoForm).earnestMoney; 


document.getElementById("docusign").value = JSON.parse(dispoForm).emailDocusign;


document.getElementById("userName").value = JSON.parse(dispoForm).name;


document.getElementById("signerName").value = JSON.parse(dispoForm).signersName;


document.getElementById("titleComp").value = JSON.parse(dispoForm).titleCompanyAttorney;


document.getElementById("titleEmail").value = JSON.parse(dispoForm).titleCompanyEmail;


document.getElementById("compNum").value = JSON.parse(dispoForm).titleCompanyNumber;


document.getElementById("titleOfficer").value = JSON.parse(dispoForm).titleOfficerName;


document.getElementById("vester").value = JSON.parse(dispoForm).vesting;
