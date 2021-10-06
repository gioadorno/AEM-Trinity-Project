//---------Functionality of Inputting Text in to the Forms--------------------

//obtain and log property address
const propertyAddress = document.getElementById("propertyAddress");
// ", USA".replace(', USA','');


// Create the search box and link it to the UI element.
 const searchBox = new google.maps.places.Autocomplete(propertyAddress);

 searchBox.setComponentRestrictions({
    country: ["us"],
  });
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    searchBox.getPlaces(); 
});

//Field turns green when exiting out of field with text, backspace will turn the field back white
propertyAddress.addEventListener("blur", function onblurPropertyAddress() {
    propertyAddress.value.length > "" ?  propertyAddress.style.backgroundColor = "Aquamarine" : null;
});

propertyAddress.addEventListener("keydown", function propertyAddrGet(e) {
    e.key === "Enter" && propertyAddress.value > "" ? propertyAddress.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? propertyAddress.style.backgroundColor = "white" : null;
});

//obtain and logging buyer option
const wholesaler = document.getElementById("wholesaler");
const agents = document.getElementById("agent");
const investor = document.getElementById("investor");

//obtain double escrow choice and log it
const escrowYes = document.getElementById("escrowYes");
const escrowNo = document.getElementById("escrowNo");

//obtain and log title company or attorney
const titleComp = document.getElementById("titleComp");

//Field turns green when exiting out of field with text, backspace will turn the field back white
titleComp.addEventListener("blur", function onblurtitleComp() {
    titleComp.value.length > "" ? titleComp.style.backgroundColor = "Aquamarine" : null;
});

titleComp.addEventListener("keydown", function titleCompany(e){
    e.key === "Enter" && titleComp.value > "" ? titleComp.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? titleComp.style.backgroundColor = "white" : null;
});

//obtain and log title officer's name
const titleOfficer = document.getElementById("titleOfficer");

//Field turns green when exiting out of field with text, backspace will turn the field back white
titleOfficer.addEventListener("blur", function onblurTitleOfficer() {
    titleOfficer.value.length > "" ? titleOfficer.style.backgroundColor = "Aquamarine" : null;
});

titleOfficer.addEventListener("keydown", function officerName(e) {
    e.key === "Enter" && titleOfficer.value > "" ? titleOfficer.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? titleOfficer.style.backgroundColor = "white" : null;
});

//obtain and log title company's email
//ensure proper formatting
const titleEmail = document.getElementById("titleEmail");
let regexpr1 = new RegExp('\\S+@\\S+.com');

//Field turns green when exiting out of field with text, backspace will turn the field back white
titleEmail.addEventListener("blur", function onblurTitleEmail() {
    titleEmail.value.length > "" && titleEmail.value.includes('@') ? titleEmail.style.backgroundColor = "Aquamarine" : titleEmail.style.borderColor = "Red";
});


titleEmail.addEventListener("keypress", function titleCompanyEmail(e) {
    titleEmail.style.backgroundColor = "white";
    if (e.key === "Enter" && titleEmail.value > "") {
        regexpr1.test(titleEmail.value) ? console.log(titleEmail.value) : titleEmail.style.borderColor = "red";
    }
});
//this is to turn the background back to white
titleEmail.addEventListener("keydown", function removeRed() {
    titleEmail.style.backgroundColor = "white";
});

//obtain and log title company's phone number
const compNum = document.getElementById("compNum");
let regexpr0 = /\D/g


//Field turns green when exiting out of field with text, backspace will turn the field back white
compNum.addEventListener("blur", function onblurCompNum() {
    compNum.value.length > "" && compNum.value.length === 14 ? compNum.style.backgroundColor = "Aquamarine" : null;
});


compNum.addEventListener("keydown", function companyNumber(e) {
    e.key === 'Enter' && compNum.value > "" ? compNum.style.backgroundColor = "Aquamarine" : e.key === 'Backspace' ? compNum.style.backgroundColor = "White" : null;

    let cNum = compNum.value.replace(regexpr0, "");

    //Adds parenthesis and dashes to format phone number
    cNum.length < 3 ? compNum.value = cNum.substring(0) : 
    3 < cNum.length && cNum.length <= 6 ? compNum.value = "(" + cNum.substring(0,3) + ")" + "-" + cNum.substring(3) : 
    7 <= cNum.length ? compNum.value = "(" + cNum.substring(0,3) + ")" + "-" + cNum.substring(3, 6) + "-" + cNum.substring(6) : 
    null;

});

//limits the max length of the phone number
compNum.addEventListener("keydown", function maxPhoneNumber(e) {
    let rawNumbers = compNum.value.replace(regexpr0, "");

    rawNumbers.length > 9 && e.key != "Backspace" ? e.preventDefault() :
    e.key === "Enter" && compNum.value.length === 14 ? console.log(compNum.value) :
    null;
});

//obtain and log signer's name
const signerName = document.getElementById("signerName");

//Field turns green when exiting out of field with text, backspace will turn the field back white
signerName.addEventListener("blur", function onblurSignerName() {
    signerName.value.length > "" ? signerName.style.backgroundColor = "Aquamarine" : null;
});

signerName.addEventListener("keydown", function signName(e) {
    e.key === "Enter" && signerName.value > "" ? signerName.style.backgroundColor = "Aquamarine" : null;
    e.key === "Backspace" ? signerName.style.backgroundColor = "White" : null;
});

//obtain and log vesting
const vester = document.getElementById("vester");

//Field turns green when exiting out of field with text, backspace will turn the field back white
vester.addEventListener("blur", function onblurVester() {
    vester.value.length > "" ? vester.style.backgroundColor = "Aquamarine" : null;
});

vester.addEventListener("keydown", function vesting(e) {
    e.key === "Enter" && vester.value > "" ? vester.style.backgroundColor = "Aquamarine" : null;
    e.key === "Backspace" ? vester.style.backgroundColor = "White" : null;
});

//obtain and log contract price
//automatically formats the numbers as the user types
const contractPrice = document.getElementById("contractPrice");
var currencyFormat = new Intl.NumberFormat('en-US', {maximumFractionDigits: 2});
let regexpr2 = /[A-Za-z$,]+/g;

//Field turns green when exiting out of field with text, backspace will turn the field back white
contractPrice.addEventListener("blur", function onblurContractPrice() {
    contractPrice.value.length > "" ? contractPrice.style.backgroundColor = "Aquamarine" : null;
});

contractPrice.addEventListener("input", function contPrice(e) {
//checks to see if it is empty or contains only the $ sign and sets it to a default 0

if (contractPrice.value === "" || contractPrice.value === "$") {
    contractPrice.value = 0;
    //to ensure that the default $0 remains
    contractPrice.value = currencyFormat.format(parseFloat(contractPrice.value));
    contractPrice.value = "$" + contractPrice.value;
}
let last = contractPrice.value.slice(-1);
if (e.data != "." && last != ".") {
    contractPrice.value = contractPrice.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
    contractPrice.value = currencyFormat.format(parseFloat(contractPrice.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
    contractPrice.value = "$" + contractPrice.value; //simply concatenates the $ to the front of the number
}
});

contractPrice.addEventListener("keydown", function printContPrice(e) {
if (e.key === "Enter" && contractPrice.value > "") {

contractPrice.style.backgroundColor = "Aquamarine";

//ensures that the number is properly formatted before being displayed to console.
contractPrice.value = contractPrice.value.replace(regexpr2, "");
contractPrice.value = currencyFormat.format(parseFloat(contractPrice.value));
contractPrice.value = "$" + contractPrice.value;
console.log(contractPrice.value);
}

e.key === "Backspace" ? contractPrice.style.backgroundColor = "White" : null;

//prevents users from spamming periods
let period = contractPrice.value.search(/\./);

period != -1 && e.key === "." ? e.preventDefault() : null;
});

//obtain and log EMD
const EMD = document.getElementById("EMD");

//Field turns green when exiting out of field with text, backspace will turn the field back white
EMD.addEventListener("blur", function onblurEMD() {
    EMD.value.length > "" ? EMD.style.backgroundColor = "Aquamarine" : null;
});

EMD.addEventListener("input", function earnestPrice(e) {
//checks to see if it is empty or contains only the $ sign and sets it to a default 0
if (EMD.value === "" || EMD.value === "$") {
    EMD.value = 0;
    //to ensure that the default $0 remains
    EMD.value = currencyFormat.format(parseFloat(EMD.value));
    EMD.value = "$" + EMD.value;
}
let last0 = EMD.value.slice(-1);
if (e.data != "." && last0 != "." && last0 != "0") {
    EMD.value = EMD.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
    EMD.value = currencyFormat.format(parseFloat(EMD.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
    EMD.value = "$" + EMD.value; //simply concatenates the $ to the front of the number
}
});

EMD.addEventListener("keydown", function printearnestPrice(e) {
if (e.key === "Enter" && EMD.value > "") {
    EMD.style.backgroundColor = "Aquamarine";
    //ensures that the number is properly formatted before being displayed to console.
    EMD.value = EMD.value.replace(regexpr2, "");
    EMD.value = currencyFormat.format(parseFloat(EMD.value));
    EMD.value = "$" + EMD.value;
    console.log(EMD.value);
}

e.key == 'Backspace' ? EMD.style.backgroundColor = "White" : null;

//prevents users from spamming periods
let period = EMD.value.search(/\./);

period != -1 && e.key === "." ? e.preventDefault() : null;
});

//obtain and log if we are paying closing cost
const closeYes = document.getElementById("closeYes");

//obtain and log escrow close date
const closeEscrow = document.getElementById("closeEscrow");
closeEscrow.addEventListener("blur", function onblurCloseEscrow() {
    closeEscrow.value.length > "" ? closeEscrow.style.backgroundColor = "Aquamarine" : null;
});


//obtain and log the chance of closing sooner
const soonYes = document.getElementById("soonYes");
const soonNo = document.getElementById("soonNo");

//obtain and log escrow executed date
const exeEscrow = document.getElementById("exeEscrow");

exeEscrow.addEventListener("blur", function onblurExeEscrow() {
    exeEscrow.value.length > "" ? exeEscrow.style.backgroundColor = "Aquamarine" : null;
});

//obtain and log buyer's phone number
const buyNum = document.getElementById("buyNum");

//123-123-1234 <-- 
buyNum.addEventListener("input", function buyNumber(e) {
let bNum = buyNum.value.replace(regexpr0, "");

bNum.length === 3 ? buyNum.value = bNum.substring(0) : 
3 < bNum.length && bNum.length <= 6 ? buyNum.value = "(" + bNum.substring(0,3) + ")" + "-" + bNum.substring(3) :
7 <= bNum.length ? buyNum.value = "(" + bNum.substring(0,3) + ")" + "-" + bNum.substring(3, 6) + "-" + bNum.substring(6) :
null;
});


//limits the max length of the phone number
buyNum.addEventListener("keydown", function maxBuyNumber(e) {
    e.key === 'Enter' && buyNum.value > "" ? buyNum.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? buyNum.style.backgroundColor = "White" : null;

let rawBuy = buyNum.value.replace(regexpr0, "");

rawBuy.length > 12 && e.key != "Backspace" ? e.preventDefault() : null;
});


buyNum.addEventListener("blur", function onblurBuyNum() {
    buyNum.value.length > "" && buyNum.value.length === 14 ? buyNum.style.backgroundColor = "Aquamarine" : null;
});



//obtain and log docusign email
const docusign = document.getElementById("docusign");
docusign.addEventListener("keypress", function docusignEmail(e) {
    docusign.style.backgroundColor = "white";

    e.key === "Enter" && docusign.value > "" ?  docusign.style.backgroundColor = "Aquamarine" : docusign.style.borderColor = "red";
    e.key === 'Backspace' ? docusign.style.backgroundColor = "White" : null;
});

//this is to turn the background back to white
docusign.addEventListener("keydown", function removeRedDocusign() {
    docusign.style.backgroundColor = "white";
}); 


docusign.addEventListener("blur", function onblurDocusign() {
    docusign.value.length > "" && docusign.value.includes('@') ? docusign.style.backgroundColor = "Aquamarine" : docusign.style.borderColor = "Red"; 
    docusign.value.length > "" && docusign.value.includes('@') ? docusign.style.backgroundColor = "Aquamarine" : error.innerHTML = 'Please enter a correct email.'; //currently not functioning
});


//obtain and log user name
const userName = document.getElementById("userName");

userName.addEventListener("keydown", function getUserName(e) {
    e.key === "Enter" && userName.value > "" ? userName.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? userName.style.backgroundColor = "White" : null;
});

userName.addEventListener("blur", function onblurUserName() {
    userName.value.length > "" ? userName.style.backgroundColor = "Aquamarine" : null;
});



//------------------------------------------------------------------------------
//------------------------------Submit Form -----------------------------------
//------------------------------------------------------------------------------


const dispoData = document.getElementById("submitDispoForm");


if (dispoData) {
dispoData.addEventListener("click", dispoSubmit)

function dispoSubmit(e) {
// alert("testing")
// console.log(dispoOutput)

e.preventDefault();

//Address Variables
var addressValue = document.getElementById("propertyAddress").value;
var addressAnswer = addressValue.replace(', USA', '');


//Buyer Variables
if (wholesaler.checked) {
    var wholesalerAnswer = document.getElementById("wholesaler").value
};
if (agents.checked) {
    var agentAnswer = document.getElementById("agent").value
};
if (investor.checked) {
    var investerAnswer = document.getElementById("investor").value
};

//Double Escrow Variables
if (escrowYes.checked) {
    var doubleEscrowYesAnswer = document.getElementById("escrowYes").value
};
if (escrowNo.checked) {
    var doubleEscrowNoAnswer = document.getElementById("escrowNo").value
};

//Title Company/Attorney Variables
var titleAttorneyAnswer = document.getElementById("titleComp").value;


//Title Officer Variables
var titleOfficerAnswer = document.getElementById("titleOfficer").value;


//Title Company's Email Variables
var titleEmailAnswer = document.getElementById("titleEmail").value;


//Title Company's Phone Number Variables
var titlePhoneAnswer = document.getElementById("compNum").value;


//Signer's Name Variables
var signerNameAnswer = document.getElementById("signerName").value;


//Vesting Variables
var vestingAnswer = document.getElementById("vester").value;


//Contract Price Variables
var contractPriceAnswer = document.getElementById("contractPrice").value;


//EMD Variables
var emdAnswer = document.getElementById("EMD").value;


//Are We Paying Closing Cost Variables
if (closeYes.checked) {
    var closingcostYesAnswer = document.getElementById("closeYes").value
};
if (closeNo.checked) {
    var closingCostNoAnswer = document.getElementById("closeNo").value
};


//Close of Escrow Variables
var closeEscrowAnswer = document.getElementById("closeEscrow").value;


//Possibility of Closing Sooner Variables
if (soonYes.checked) {
    var closeSoonerYesAnswer = document.getElementById("soonYes").value
};
if (soonNo.checked) {
    var closeSoonerNoAnswer = document.getElementById("soonNo").value
};


//Contract Executed Date Variables
var contractDateAnswer = document.getElementById("exeEscrow").value;


//Buyer's Phone Number Variables
var buyerPhoneAnswer = document.getElementById("buyNum").value;


//Docusign Email Variables
var docusignEmailAnswer = document.getElementById("docusign").value;


//Your Name Variable
var nameAnswer = document.getElementById("userName").value;


// Switch Case for Selections

// const buyerSelection = null;
// switch (buyerSelection) {
//     case wholesalerAnswer : "Wholesaler";
//     break;
//     case agentAnswer : "Agent";
//     break;
//     case investerAnswer : "Investor";
//     break;
//     default : null
// }

// console.log(buyerSelection)


//-----------------------------------------If Else for Selections
//Buyer Selection
wholesalerAnswer != undefined ? dispoData.Buyer = "Wholesaler" : agentAnswer != undefined ? dispoData.Buyer = "Agent" : investerAnswer != undefined ? dispoData.Buyer = "Investor" : null;

// if (wholesalerAnswer != undefined) {
// dispoData.Buyer = "Wholesaler"
// }
// else if (agentAnswer != undefined) {
//         dispoData.Buyer = "Agent"
// }
// else if (investerAnswer != undefined) {
//         dispoData.Buyer = "Investor"
// }

//Double Escrow Selection
doubleEscrowYesAnswer != undefined ? dispoData.doubleEscrow = "Yes" : doubleEscrowNoAnswer != undefined ? dispoData.doubleEscrow = "No" : null;

// if (doubleEscrowYesAnswer != undefined) {
//     dispoData.doubleEscrow = "Yes"
// }
// else if (doubleEscrowNoAnswer != undefined) {
//     dispoData.doubleEscrow = "No"
// }

//Are we Paying Closing Cost Selection
closingcostYesAnswer != undefined ? dispoData.closing = "Yes" : closingCostNoAnswer != undefined ? dispoData.closing = "No" : null;

// if (closingcostYesAnswer != undefined) {
//     dispoData.closing = "Yes"
// }
// else if (closingCostNoAnswer != undefined) {
//         dispoData.closing = "No"
// }

//Closing Soon Selection
closeSoonerYesAnswer != undefined ? dispoData.closingSooner = "Yes" : closeSoonerNoAnswer != undefined ? dispoData.closingSooner = "No" : null;

// if (closeSoonerYesAnswer != undefined) {
// dispoData.closingSooner = "Yes"
// }
// else if (closeSoonerNoAnswer != undefined) {
//     dispoData.closingSooner = "No"
// }


// const buyerAnswer = document.getElementsByName("Buyer").value;
// const escrowAnswer = document.getElementsByName("escrow").value;
// const closingAnswer = document.getElementsByName("closing").value;
// const soonerAnswer = document.getElementsByName("sooner").value;

/*Variable Outputs--------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var dispoID = Math.random().toString(36).substr(2, 5);
var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
var uniqueID = dispoID + utc;

const dispoDataOutput = {
    Unique_ID : dispoID,
    Address : addressAnswer,
    Buyer : dispoData.Buyer,
    doubleEscrow : dispoData.doubleEscrow,
    titleCompanyAttorney : titleAttorneyAnswer,
    titleOfficerName : titleOfficerAnswer,
    titleCompanyEmail : titleEmailAnswer,
    titleCompanyNumber : titlePhoneAnswer,
    signersName : signerNameAnswer,
    vesting : vestingAnswer,
    contractPricing : contractPriceAnswer,
    earnestMoney : emdAnswer,
    closing : dispoData.closing,
    closeEscrowDate : closeEscrowAnswer,
    closingSooner : dispoData.closingSooner,
    contractExecuted : contractDateAnswer,
    buyersPhone : buyerPhoneAnswer,
    emailDocusign : docusignEmailAnswer,
    name : nameAnswer
};

const dispoFormOutput = [uniqueID, addressAnswer, dispoData.Buyer, dispoData.doubleEscrow, titleAttorneyAnswer, titleOfficerAnswer, titleEmailAnswer, titlePhoneAnswer, signerNameAnswer, vestingAnswer, contractPriceAnswer, emdAnswer, dispoData.closing, closeEscrowAnswer, dispoData.closingSooner, contractDateAnswer, buyerPhoneAnswer, docusignEmailAnswer, nameAnswer];

localStorage.setItem(uniqueID, JSON.stringify(dispoFormOutput));
}};



//-------------------Export Form to data.js ------------------------------------------------------
//------------------------------------------------------------------------------------------------


// export const dispoOutput = {



//     Address : propertyAddress.value,
//     Buyer : { wholesaler : wholesaler.checked, agents : agents.checked,investor : investor.checked },
//     doubleEscrow : {yesEscrow : escrowYes.checked, noEscrow : escrowNo.checked},
//     titleCompanyAttorney : titleComp.value,
//     titleOfficerName : titleOfficer.value,
//     titleCompanyEmail : titleEmail.value,
//     titleCompanyNumber : compNum.value,
//     signersName : signerName.value,
//     vesting : vester.value,
//     contractPricing : contractPrice.value,
//     earnestMoney : EMD.value,
//     closing : {yesClose : closeYes.value , noClose : closeNo.value},
//     closeEscrowDate : closeEscrow.value,
//     closingSooner : {closeSoonYes : soonYes.value , closeSoonNo : soonNo.value},
//     contractExecuted : exeEscrow.value,
//     buyersPhone : buyNum.value,
//     emailDocusign : docusign.value,
//     name : userName.value
// }

// var webpack = require("webpack");
// var path = require("path");

// var DISPFORM_DIR = path.resolve(_dirname, "dist");
// var SRC_DIR = path.resolve(_dirname, "src");

// var config = 