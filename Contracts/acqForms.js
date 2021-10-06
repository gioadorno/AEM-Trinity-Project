
//Property photo upload for Map
function previewFile() {
const propPhoto = document.querySelector('input[type=file]').files[0];
const output = document.getElementById('output_image');
const reader = new FileReader();


reader.addEventListener("load", function () {
    // convert image file to base64 string
    output.src = reader.result;

    const imageOutput = output.src

    }, false);

if (propPhoto) {
reader.readAsDataURL(propPhoto);
}
}


//Your Full Name Form----------------

const nameInput = document.getElementById("yourFullName");


nameInput.addEventListener('blur', function onblurName() {
    nameInput.value.length > "" ? nameInput.style.backgroundColor = "Aquamarine" : null;
});

nameInput.addEventListener('keydown', function runEvent(e) {
    e.key === 'Enter' ? nameInput.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? nameInput.style.backgroundColor = "white" : null;
});


//Written Offer Form----------------

const writtenOfferYes = document.getElementById("writtenYes");
const writtenOfferNo = document.getElementById("writtenNo");

//Who is the Supplier Form---------------

const directToSeller = document.getElementById("directToSeller")
const wholesaler = document.getElementById("wholesaler")
const supplier = document.getElementById("agent")


//Name of Supplier/Agent -------------

const supplierName = document.getElementById("supplierName");

supplierName.addEventListener('blur', function onblurSupplierName() {
    supplierName.value.length > "" ? supplierName.style.backgroundColor = "Aquamarine" : null;
});

supplierName.addEventListener('keydown', function supplierEvent(e) {
    e.key === 'Enter' ? supplierName.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? supplierName.style.backgroundColor = "white" : null;
});


//Supplier's Email ------------------

const supplierEmail = document.getElementById("supplierEmail");
let regexpr1 = new RegExp('\\S+@\\S+.com');

//Field turns green when exiting out of field with text, backspace will turn the field back white
supplierEmail.addEventListener("blur", function onblursupplierEmail() {
    supplierEmail.value.length > "" && supplierEmail.value.includes('@') ? supplierEmail.style.backgroundColor = "Aquamarine" : supplierEmail.style.borderColor = "Red";
});

supplierEmail.addEventListener("keypress", function titleCompanyEmail(e) {
    supplierEmail.style.backgroundColor = "white";
    if (e.key === "Enter" && supplierEmail.value > "") {
        regexpr1.test(supplierEmail.value) ? console.log(supplierEmail.value) : supplierEmail.style.borderColor = "red";
    }
});


//Supplier's Phone Number -----------------------

const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
    );
};

const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        (
            // Allow Ctrl/Command + A,C,V,X,Z
            (event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
};

const enforceFormat = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    !isNumericInput(event) && !isModifierKey(event) ? event.preventDefault() : null;
};

const formatToPhone = (event) => {
    if(isModifierKey(event)) {return;}

    const input = event.target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
    const areaCode = input.substring(0,3);
    const middle = input.substring(3,6);
    const last = input.substring(6,10);

    input.length > 6 ? event.target.value = `(${areaCode}) ${middle} - ${last}` :
    input.length > 3 ? event.target.value = `(${areaCode}) ${middle}` :
    input.length > 0 ? event.target.value = `(${areaCode}` :
    null;
};

const supplierPhone = document.getElementById("supplierPhone");

supplierPhone.addEventListener('blur', function onblurSupplierPhone() {
    supplierPhone.value.length > "" ? supplierPhone.style.backgroundColor = "Aquamarine" : null;
});

supplierPhone.addEventListener('keydown', function supplierPhoneEvent(e) {
    e.key === 'Enter' ? supplierPhone.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? supplierPhone.style.backgroundColor = "white" : null;
});

const inputElement = document.getElementById('supplierPhone');
inputElement.addEventListener('keydown',enforceFormat);
inputElement.addEventListener('keyup',formatToPhone);


//Property Address ------------------

const propertyAddress = document.getElementById("propertyAddress");

propertyAddress.addEventListener('blur', function onblurPropertyAddress() {
    propertyAddress.value.length > "" ? propertyAddress.style.backgroundColor = "Aquamarine" : null;
});

propertyAddress.addEventListener('keydown', function propertyAddressOutput(e) {
    e.key === 'Enter' ? propertyAddress.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? propertyAddress.style.backgroundColor = "white" : null;
});


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


//ARV -----------------------------------

const arv = document.getElementById("arv");

arv.addEventListener('blur', function onblurARV() {
if (arv.value.length > "") {
    arv.style.backgroundColor = "Aquamarine";

    //ensures that the number is properly formatted before being displayed to console.
    arv.value = arv.value.replace(regexpr2, "");
    arv.value = currencyFormat.format(parseFloat(arv.value));
    arv.value = "$" + arv.value;
    console.log(arv.value);
    
}
});

var currencyFormat = new Intl.NumberFormat('en-US', {maximumFractionDigits: 2});
let regexpr2 = /[A-Za-z$,]+/g;


arv.addEventListener("input", function arvOutput(e) {

if (arv.value === "" || arv.value === "$") {
    arv.value = 0;
    //to ensure that the default $0 remains
    arv.value = currencyFormat.format(parseFloat(arv.value));
    arv.value = "$" + arv.value;
}
let last = arv.value.slice(-1);
if (e.data != "." && last != ".") {
    arv.value = arv.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
    arv.value = currencyFormat.format(parseFloat(arv.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
    arv.value = "$" + arv.value; //simply concatenates the $ to the front of the number
}
});

arv.addEventListener('keydown', function printARVPrice(e) {
if (e.key === "Enter" && arv.value > "") {

    arv.style.backgroundColor = "Aquamarine";

    //ensures that the number is properly formatted before being displayed to console.
    arv.value = arv.value.replace(regexpr2, "");
    arv.value = currencyFormat.format(parseFloat(arv.value));
    arv.value = "$" + arv.value;
    console.log(arv.value);
}

e.key === "Backspace" ? arv.style.backgroundColor = "White" : null;

//prevents users from spamming periods
let period = arv.value.search(/\./);

period != -1 && e.key === "." ? e.preventDefault() : null;
});



//Net Price ----------------------------------------

const netPrice = document.getElementById("netPrice");

netPrice.addEventListener('blur', function onblurNetPrice() {
    if (netPrice.value.length > "") {
        netPrice.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        netPrice.value = netPrice.value.replace(regexpr2, "");
        netPrice.value = currencyFormat.format(parseFloat(netPrice.value));
        netPrice.value = "$" + netPrice.value;
        console.log(netPrice.value);
      
    }
});


netPrice.addEventListener("input", function netPriceOutput(e) {

    if (netPrice.value === "" || netPrice.value === "$") {
        netPrice.value = 0;
        //to ensure that the default $0 remains
        netPrice.value = currencyFormat.format(parseFloat(netPrice.value));
        netPrice.value = "$" + arv.value;
    }
    let last = netPrice.value.slice(-1);
    if (e.data != "." && last != ".") {
        netPrice.value = netPrice.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
        netPrice.value = currencyFormat.format(parseFloat(netPrice.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
        netPrice.value = "$" + netPrice.value; //simply concatenates the $ to the front of the number
    }
});

netPrice.addEventListener('keydown', function printNetPrice(e) {
    if (e.key === "Enter" && netPrice.value > "") {

        netPrice.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        netPrice.value = netPrice.value.replace(regexpr2, "");
        netPrice.value = currencyFormat.format(parseFloat(netPrice.value));
        netPrice.value = "$" + netPrice.value;
        console.log(netPrice.value);
    }

    e.key === "Backspace" ? netPrice.style.backgroundColor = "White" : null;

    //prevents users from spamming periods
    let period = netPrice.value.search(/\./);

    period != -1 && e.key === "." ? e.preventDefault() : null;
});



//Sale Price Expectation -----------------------------------

const salePrice = document.getElementById("salePrice");

salePrice.addEventListener('blur', function onblurSalePrice() {
    if (salePrice.value.length > "") {
        salePrice.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        salePrice.value = salePrice.value.replace(regexpr2, "");
        salePrice.value = currencyFormat.format(parseFloat(salePrice.value));
        salePrice.value = "$" + salePrice.value;
        console.log(salePrice.value);
    }
});


salePrice.addEventListener("input", function salePriceOutput(e) {

    if (salePrice.value === "" || salePrice.value === "$") {
        salePrice.value = 0;
        //to ensure that the default $0 remains
        salePrice.value = currencyFormat.format(parseFloat(salePrice.value));
        salePrice.value = "$" + arv.value;
    }
    let last = salePrice.value.slice(-1);
    if (e.data != "." && last != ".") {
        salePrice.value = salePrice.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
        salePrice.value = currencyFormat.format(parseFloat(salePrice.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
        salePrice.value = "$" + salePrice.value; //simply concatenates the $ to the front of the number
    }
});

salePrice.addEventListener('keydown', function printSalePrice(e) {
    if (e.key === "Enter" && salePrice.value > "") {

        salePrice.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        salePrice.value = salePrice.value.replace(regexpr2, "");
        salePrice.value = currencyFormat.format(parseFloat(salePrice.value));
        salePrice.value = "$" + salePrice.value;
        console.log(salePrice.value);
    }

    e.key === "Backspace" ? salePrice.style.backgroundColor = "White" : null;

    //prevents users from spamming periods
    let period = salePrice.value.search(/\./);

    period != -1 && e.key === "." ? e.preventDefault() : null;
});


//Earnest Money Deposit -----------------------------------

const earnestPriceValue = document.getElementById("earnestPrice");

earnestPriceValue.addEventListener('blur', function onblurearnestPriceValue() {
    if (earnestPriceValue.value.length > "") {
        earnestPriceValue.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        earnestPriceValue.value = earnestPriceValue.value.replace(regexpr2, "");
        earnestPriceValue.value = currencyFormat.format(parseFloat(earnestPriceValue.value));
        earnestPriceValue.value = "$" + earnestPriceValue.value;
        console.log(earnestPriceValue.value);
    }
});


earnestPriceValue.addEventListener("input", function earnestPriceValueOutput(e) {

    if (earnestPriceValue.value === "" || earnestPriceValue.value === "$") {
        earnestPriceValue.value = 0;
        //to ensure that the default $0 remains
        earnestPriceValue.value = currencyFormat.format(parseFloat(earnestPriceValue.value));
        earnestPriceValue.value = "$" + arv.value;
    }
    let last = earnestPriceValue.value.slice(-1);
    if (e.data != "." && last != ".") {
        earnestPriceValue.value = earnestPriceValue.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
        earnestPriceValue.value = currencyFormat.format(parseFloat(earnestPriceValue.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
        earnestPriceValue.value = "$" + earnestPriceValue.value; //simply concatenates the $ to the front of the number
    }
});

earnestPriceValue.addEventListener('keydown', function printEarnestPriceValue(e) {
    if (e.key === "Enter" && earnestPriceValue.value > "") {

        earnestPriceValue.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        earnestPriceValue.value = earnestPriceValue.value.replace(regexpr2, "");
        earnestPriceValue.value = currencyFormat.format(parseFloat(earnestPriceValue.value));
        earnestPriceValue.value = "$" + earnestPriceValue.value;
        console.log(earnestPriceValue.value);
    }

    e.key === "Backspace" ? earnestPriceValue.style.backgroundColor = "White" : null;

    //prevents users from spamming periods
    let period = earnestPriceValue.value.search(/\./);

    period != -1 && e.key === "." ? e.preventDefault() : null;
});



//Option Fee -----------------------------------

const optionPrice = document.getElementById("optionPrice");

optionPrice.addEventListener('blur', function onblurOptionPrice() {
    if (optionPrice.value.length > "") {
        optionPrice.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        optionPrice.value = optionPrice.value.replace(regexpr2, "");
        optionPrice.value = currencyFormat.format(parseFloat(optionPrice.value));
        optionPrice.value = "$" + optionPrice.value;
        console.log(optionPrice.value);
    }
});


optionPrice.addEventListener("input", function optionPriceOutput(e) {

    if (optionPrice.value === "" || optionPrice.value === "$") {
        optionPrice.value = 0;
        //to ensure that the default $0 remains
        optionPrice.value = currencyFormat.format(parseFloat(optionPrice.value));
        optionPrice.value = "$" + arv.value;
    }
    let last = optionPrice.value.slice(-1);
    if (e.data != "." && last != ".") {
        optionPrice.value = optionPrice.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
        optionPrice.value = currencyFormat.format(parseFloat(optionPrice.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
        optionPrice.value = "$" + optionPrice.value; //simply concatenates the $ to the front of the number
    }
});

optionPrice.addEventListener('keydown', function printOptionPrice(e) {
    if (e.key === "Enter" && optionPrice.value > "") {

        optionPrice.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        optionPrice.value = optionPrice.value.replace(regexpr2, "");
        optionPrice.value = currencyFormat.format(parseFloat(optionPrice.value));
        optionPrice.value = "$" + optionPrice.value;
        console.log(optionPrice.value);
    }

    e.key === "Backspace" ? optionPrice.style.backgroundColor = "White" : null;

    //prevents users from spamming periods
    let period = optionPrice.value.search(/\./);

    period != -1 && e.key === "." ? e.preventDefault() : null;
});



//How are we splitting this deal with the supplier? -----------------------

const oneHundred = document.getElementById("oneHundred")
const fiftyFifty = document.getElementById("fiftyFifty")
const other = document.getElementById("other")


//Do we need a JV agreement? ------------------------------

const jvYes = document.getElementById("jvYes")
const jvNo = document.getElementById("jvNo")


//Additional Cost ---------------------------------------

const additionalCost = document.getElementById("additionalCost");

additionalCost.addEventListener('blur', function onblurAdditionalCost() {
    if (additionalCost.value.length > "") {
        additionalCost.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        additionalCost.value = additionalCost.value.replace(regexpr2, "");
        additionalCost.value = currencyFormat.format(parseFloat(additionalCost.value));
        additionalCost.value = "$" + additionalCost.value;
        console.log(additionalCost.value);
    }
});


additionalCost.addEventListener("input", function additionalCostOutput(e) {

    if (additionalCost.value === "" || additionalCost.value === "$") {
        additionalCost.value = 0;
        //to ensure that the default $0 remains
        additionalCost.value = currencyFormat.format(parseFloat(additionalCost.value));
        additionalCost.value = "$" + arv.value;
    }
    let last = additionalCost.value.slice(-1);
    if (e.data != "." && last != ".") {
        additionalCost.value = additionalCost.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
        additionalCost.value = currencyFormat.format(parseFloat(additionalCost.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
        additionalCost.value = "$" + additionalCost.value; //simply concatenates the $ to the front of the number
    }
});

additionalCost.addEventListener('keydown', function printAdditionalCost(e) {
    if (e.key === "Enter" && additionalCost.value > "") {

        additionalCost.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        additionalCost.value = additionalCost.value.replace(regexpr2, "");
        additionalCost.value = currencyFormat.format(parseFloat(additionalCost.value));
        additionalCost.value = "$" + additionalCost.value;
        console.log(additionalCost.value);
    }

    e.key === "Backspace" ? additionalCost.style.backgroundColor = "White" : null;

    //prevents users from spamming periods
    let period = additionalCost.value.search(/\./);

    period != -1 && e.key === "." ? e.preventDefault() : null;
});


//Are we paying closing cost? ---------------------

const closingCostYes = document.getElementById("closingCostYes")
const closingCostNo = document.getElementById("closingCostNo")


//When is COE? ----------------------------

const coe = document.getElementById("coe")


//IP Length --------------------------------

const ipLength = document.getElementById("ipLength");

ipLength.addEventListener('blur', function onblurIpLength() {
    ipLength.value.length > "" ? ipLength.style.backgroundColor = "Aquamarine" : null;
});

ipLength.addEventListener('keydown', function ipLengthOutput(e) {
    e.key === 'Enter' ? ipLength.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? ipLength.style.backgroundColor = "white" : null;
});



//Title Company/Attorney Name ----------------------------

const titleAttorneyName = document.getElementById("titleAttorneyName");

titleAttorneyName.addEventListener('blur', function onblurTitleAttorneyName() {
    titleAttorneyName.value.length > "" ? titleAttorneyName.style.backgroundColor = "Aquamarine" : null;
});

titleAttorneyName.addEventListener('keydown', function titleAttorneyNameOutput(e) {
    e.key === 'Enter' ? titleAttorneyName.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? titleAttorneyName.style.backgroundColor = "white" : null;
});



//Title Officer Name -----------------------------------

const titleOfficerName = document.getElementById("titleOfficerName");

titleOfficerName.addEventListener('blur', function onblurTitleOfficerName() {
    titleOfficerName.value.length > "" ? titleOfficerName.style.backgroundColor = "Aquamarine" : null;
});

titleOfficerName.addEventListener('keydown', function titleOfficerNameOutput(e) {
    e.key === 'Enter' ? titleOfficerName.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? titleOfficerName.style.backgroundColor = "white" : null;
});



//Title Officer Email ---------------------------------

const titleOfficerEmail = document.getElementById("titleOfficerEmail");

titleOfficerEmail.addEventListener('keydown', function titleOfficerEmailEvent(e) {
    e.key === 'Enter' ? titleOfficerEmail.style.backgroundColor = "Aquamarine" : null;

    if (!titleOfficerEmail.value.includes('@')) { // not email
        titleOfficerEmail.classList.add('invalid');
        errorTitle.innerHTML = 'Please enter a correct email.'
    }

    e.key === 'Backspace' ? titleOfficerEmail.style.backgroundColor = "white" : null;
});

titleOfficerEmail.onblur = function() {
    if (!titleOfficerEmail.value.includes('@')) { // not email
        titleOfficerEmail.classList.add('invalid');
      errorTitle.innerHTML = 'Please enter a correct email.'
    }
  };
  
  titleOfficerEmail.onfocus = function() {
    if (this.classList.contains('invalid')) {
      // remove the "error" indication, because the user wants to re-enter something
      this.classList.remove('invalid');
      errorTitle.innerHTML = "";
    }
  };



  //Title Company's Phone Number -------------------------

  const titleCompanyPhone = document.getElementById("titleCompanyPhone");

titleCompanyPhone.addEventListener('blur', function onblurTitleCompanyName() {
    titleCompanyPhone.value.length > "" ? titleCompanyPhone.style.backgroundColor = "Aquamarine" : null;
});

titleCompanyPhone.addEventListener('keydown', function titleCompanyPhoneEvent(e) {
    e.key === 'Enter' ? titleCompanyPhone.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? titleCompanyPhone.style.backgroundColor = "white" : null;
});

const titleCompanyInputElement = document.getElementById('titleCompanyPhone');
titleCompanyInputElement.addEventListener('keydown',enforceFormat);
titleCompanyInputElement.addEventListener('keyup',formatToPhone);


// Type of Access ---------------------------------

const byAppointment = document.getElementById("byAppointment")
const lockbox = document.getElementById("lockbox")
const noAccess = document.getElementById("noAccess")


// Post Possession --------------------------

const postPosessionYes = document.getElementById("postPosessionYes")
const postPosessionNo = document.getElementById("postPosessionNo")


// Lease Details --------------------------

const leaseVacant = document.getElementById("leaseVacant")
const tenantOccupiedVacant = document.getElementById("tenantOccupiedVacant")
const tenantOccupiedRent = document.getElementById("tenantOccupiedRent")
const ownerOccupiedVacant = document.getElementById("ownerOccupiedVacant")
const leaseOther = document.getElementById("leaseOther")


// If tenant occupied, what is current rent ---------------------------

const tenantRent = document.getElementById("tenantRent");

tenantRent.addEventListener('blur', function onblurTenantRent() {
    if (tenantRent.value.length > "") {
        tenantRent.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        tenantRent.value = tenantRent.value.replace(regexpr2, "");
        tenantRent.value = currencyFormat.format(parseFloat(tenantRent.value));
        tenantRent.value = "$" + tenantRent.value;
        console.log(tenantRent.value);
      
    }
});

tenantRent.addEventListener('keydown', function tenantRentOutput(e) {
    e.key === 'Enter' ? tenantRent.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? tenantRent.style.backgroundColor = "white" : null;
});


// If tenant occupied, what is lease term ---------------------------

const tenantTerm = document.getElementById("tenantTerm");

tenantTerm.addEventListener('blur', function onblurTenantTerm() {
    tenantTerm.value.length > "" ? tenantTerm.style.backgroundColor = "Aquamarine" : null;
});

tenantTerm.addEventListener('keydown', function tenantTermOutput(e) {
    e.key === 'Enter' ? tenantTerm.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? tenantTerm.style.backgroundColor = "white" : null;
});



// Additional Notes Supplier/Agent Mentioned -------------------------

const additionalSupplierAgentNotes = document.getElementById("additionalSupplierAgentNotes");

additionalSupplierAgentNotes.addEventListener('blur', function onblurAddNotes() {
    additionalSupplierAgentNotes.value.length > "" ? additionalSupplierAgentNotes.style.backgroundColor = "Aquamarine" : null;
});

additionalSupplierAgentNotes.addEventListener('keydown', function additionalSupplierAgentNotesOutput(e) {
    e.key === 'Enter' ? additionalSupplierAgentNotes.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? additionalSupplierAgentNotes.style.backgroundColor = "white" : null;
});



// Number of Bedrooms

const bedroomNumber = document.getElementById("bedroomNumber");

bedroomNumber.addEventListener('blur', function onblurBedNumber() {
    bedroomNumber.value.length > "" ? bedroomNumber.style.backgroundColor = "Aquamarine" : null;
});

bedroomNumber.addEventListener('keydown', function bedroomNumberOutput(e) {
    e.key === 'Enter' ? bedroomNumber.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? bedroomNumber.style.backgroundColor = "white" : null;
});


// Number of Baths

const bathNumber = document.getElementById("bathNumber");

bathNumber.addEventListener('blur', function onblurBathNumber() {
    bathNumber.value.length > "" ? bathNumber.style.backgroundColor = "Aquamarine" : null;
});

bathNumber.addEventListener('keydown', function bathNumberOutput(e) {
    e.key === 'Enter' ? bathNumber.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? bathNumber.style.backgroundColor = "white" : null;
});


// Parking ----------------------------------

const garage = document.getElementById("garage")
const garageDetached = document.getElementById("garageDetached")
const carport = document.getElementById("carport")
const onStreet = document.getElementById("onStreet")
const noParking = document.getElementById("noParking")
const parkingNA = document.getElementById("parkingNA")


// Pool ----------------------------------------------

const poolYes = document.getElementById("poolYes")
const poolNo = document.getElementById("poolNo")


// Living Area: (Put Sqft) --------------------------------------------

const livingArea = document.getElementById("livingArea");

livingArea.addEventListener('blur', function onblurLivingArea() {
    livingArea.value.length > "" ? livingArea.style.backgroundColor = "Aquamarine" : null;
});

livingArea.addEventListener('keydown', function livingAreaOutput(e) {
    e.key === 'Enter' ? livingArea.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? livingArea.style.backgroundColor = "white" : null;
});



// Lot Size: (Put Sqft or Acres) --------------------------------------------

const lotSize = document.getElementById("lotSize");

lotSize.addEventListener('blur', function onblurLotSize() {
    lotSize.value.length > "" ? lotSize.style.backgroundColor = "Aquamarine" : null;
});

lotSize.addEventListener('keydown', function lotSizeOutput(e) {
    e.key === 'Enter' ? lotSize.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? lotSize.style.backgroundColor = "white" : null;
});


// Year Build --------------------------------------------

const yearBuild = document.getElementById("yearBuild");

yearBuild.addEventListener('blur', function onblurYearBuild() {
    yearBuild.value.length > "" ? yearBuild.style.backgroundColor = "Aquamarine" : null;
});

yearBuild.addEventListener('keydown', function yearBuildOutput(e) {
    e.key === 'Enter' ? yearBuild.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? yearBuild.style.backgroundColor = "white" : null;
});



// Link to Pictures ----------------------------------------


const linkToPictures = document.getElementById("linkToPictures");

linkToPictures.addEventListener('blur', function onblurPics() {
    linkToPictures.value.length > "" ? linkToPictures.style.backgroundColor = "Aquamarine" : null;
}); 

linkToPictures.addEventListener('keydown', function linkToPicturesOutput(e) {
    e.key === 'Enter' ? linkToPictures.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? linkToPictures.style.backgroundColor = "white" : null;
});


// Market

const market = document.getElementById("market");

market.addEventListener('blur', function onblurMarket() {
    market.value.length > "" ? market.style.backgroundColor = "Aquamarine" : null;
}); 

market.addEventListener('keydown', function marketOutput(e) {
    e.key === 'Enter' ? market.style.backgroundColor = "Aquamarine" : null;
    e.key === 'Backspace' ? market.style.backgroundColor = "white" : null;
});


//------------------------------------------------------------------------------
//------------------------------Submit Form -----------------------------------
//------------------------------------------------------------------------------


const acqData = document.getElementById("submitAcqForm");


if (acqData) {
acqData.addEventListener("click", acqSubmit)

function acqSubmit(e) {
e.preventDefault();

const fullNameValue = document.getElementById("yourFullName").value;

//----------------------------------------------------------------------------


const writtenYes = document.getElementById('writtenYes');
const writtenNo = document.getElementById('writtenNo');

    if (writtenYes.checked) {
        var writtenYesAnswer = document.getElementById("writtenYes").value
    };
    if (writtenNo.checked) {
        var writtenNoAnswer = document.getElementById("writtenNo").value
    };


//--------------------------------------------

const directToSeller = document.getElementById('directToSeller');
const wholesaler = document.getElementById('wholesaler');
const agent = document.getElementById('agent');


    if (directToSeller.checked) {
        var directToSellerAnswer = document.getElementById('directToSeller').value;
    }
    if (wholesaler.checked) {
        var wholesalerAnswer = document.getElementById('wholesaler').value;
    }
    if (agent.checked) {
        var agentAnswer = document.getElementById('agent').value
    }




//----------------------------------------------------------------------------


const supplierName = document.getElementById("supplierName").value;    

const supplierEmail = document.getElementById("supplierEmail").value;    

const supplierNumber = document.getElementById("supplierPhone").value; 


const addressValue = document.getElementById("propertyAddress").value;
const addressAnswer = addressValue.replace(', USA', '');


const ARV = document.getElementById("arv").value;

const netPrice = document.getElementById("netPrice").value;

const salePrice = document.getElementById("salePrice").value;

const EMD = document.getElementById("earnestPrice").value;

const optionFee = document.getElementById("optionPrice").value;



//--------------------------------------------

const oneHundred = document.getElementById('oneHundred');
const fiftyFifty = document.getElementById('fiftyFifty');
const other = document.getElementById('other');


    if (oneHundred.checked) {
        var oneHundredAnswer = document.getElementById('oneHundred').value;
    }
    if (fiftyFifty.checked) {
        var fiftyFiftyAnswer = document.getElementById('fiftyFifty').value;
    }
    if (other.checked) {
        var otherAnswer = document.getElementById('other').value
    }

//----------------------------------------------------------------------------


const jvYes = document.getElementById('jvYes');
const jvNo = document.getElementById('jvNo');

    if (jvYes.checked) {
        var jvYesAnswer = document.getElementById("jvYes").value
    };
    if (jvNo.checked) {
        var jvNoAnswer = document.getElementById("jvNo").value
    };


//----------------------------------------------------------------------------


const additionalCost = document.getElementById("additionalCost").value;




//----------------------------------------------------------------------------


const closeYes = document.getElementById('closingCostYes');
const closeNo = document.getElementById('closingCostNo');


    if (closeYes.checked) {
    var closingcostYesAnswer = document.getElementById("closingCostYes").value}
    if (closeNo.checked) {
    var closingCostNoAnswer = document.getElementById("closingCostNo").value}



const COE = document.getElementById('coe').value;

const ipLength = document.getElementById('ipLength').value;

const titleAttorney = document.getElementById('titleAttorneyName').value;

const titleOfficer = document.getElementById('titleOfficerName').value;

const titleOfficerEmail = document.getElementById('titleOfficerEmail').value;

const titlePhoneNumber = document.getElementById('titleCompanyPhone').value;


//----------------------------------------------------------------------------


const byAppointment = document.getElementById('byAppointment');
const lockbox = document.getElementById('lockbox');
const noAccess = document.getElementById('noAccess');


    if (byAppointment.checked) {
var byAppointmentAnswer = document.getElementById('byAppointment').value;}

    if (lockbox.checked)
{var lockboxAnswer = document.getElementById('lockbox').value;}

    if (noAccess.checked)
{var noAccessAnswer = document.getElementById('noAccess').value}




//----------------------------------------------------------------------------


const postPossessionYes = document.getElementById('postPosessionYes');
const postPossessionNo = document.getElementById('postPosessionNo');


    if (postPossessionYes.checked)
{var postPossessionYesAnswer = document.getElementById("postPosessionYes").value}
    if (postPossessionNo.checked)
{var postPossessionNoAnswer = document.getElementById("postPosessionNo").value}


//--------------------------------------------

const leaseVacant = document.getElementById('leaseVacant');
const tenantOccupiedVacant = document.getElementById('tenantOccupiedVacant');
const tenantOccupiedRent = document.getElementById('tenantOccupiedRent');
const ownerOccupiedVacant = document.getElementById('ownerOccupiedVacant');
const leaseOther = document.getElementById('leaseOther')


    if (leaseVacant.checked)
{var leaseVacantAnswer = document.getElementById('leaseVacant').value;}

    if (tenantOccupiedVacant.checked)
{var tenantOccupiedVacantAnswer = document.getElementById('tenantOccupiedVacant').value;}

    if (tenantOccupiedRent.checked)
{var tenantOccupiedRentAnswer = document.getElementById('tenantOccupiedRent').value}

    if (ownerOccupiedVacant.checked)
{var ownerOccupiedVacantAnswer = document.getElementById('ownerOccupiedVacant').value;}

    if (leaseOther.checked)
{var leaseOtherAnswer = document.getElementById('leaseOther').value}


//----------------------------------------------------------------------------


const tenantRent = document.getElementById('tenantRent').value;

const tenantTerm = document.getElementById('tenantTerm').value;

const additionalNotes = document.getElementById('additionalSupplierAgentNotes').value;

const beds = document.getElementById('bedroomNumber').value;

const baths = document.getElementById('bathNumber').value;

const marketValue = document.getElementById('market').value;

//----------------------------------------------------------------------------


const garage = document.getElementById('garage');
const garageDetached = document.getElementById('garageDetached');
const carport = document.getElementById('carport');
const onStreet = document.getElementById('onStreet');
const noParking = document.getElementById('noParking');
const parkingNA = document.getElementById('parkingNA');


    if (garage.checked)
{var garageAnswer = document.getElementById('garage').value;}

    if (garageDetached.checked)
{var garageDetachedAnswer = document.getElementById('garageDetached').value;}

    if (carport.checked)
{var carportAnswer = document.getElementById('carport').value}

    if (onStreet.checked)
{var onStreetAnswer = document.getElementById('onStreet').value;}

    if (noParking.checked)
{var noParkingAnswer = document.getElementById('noParking').value}

    if (parkingNA.checked)
{var parkingNAAnswer = document.getElementById('parkingNA').value}



//----------------------------------------------------------------------------


const poolYes = document.getElementById('poolYes');
const poolNo = document.getElementById('poolNo');

    if (poolYes.checked)
    {var poolYesAnswer = document.getElementById("poolYes").value}

    if (poolNo.checked)
    {var poolNoAnswer = document.getElementById("poolNo").value}




//----------------------------------------------------------------------------


const livingArea = document.getElementById('livingArea').value;

const lotSize = document.getElementById('lotSize').value;

const yearBuild = document.getElementById('yearBuild').value;

const pictureLink = document.getElementById('linkToPictures').value;



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

//If Else for Selections

//Supplier Selection

directToSellerAnswer != undefined ? acqData.supplier = "Direct To Seller" :
wholesalerAnswer != undefined ? acqData.supplier = "Wholesaler" :
agentAnswer != undefined ? acqData.supplier = "Agent" :
null;

//Written Offer Selection

writtenYesAnswer != undefined ? acqData.writtenOffer = "Yes" :
writtenNoAnswer != undefined ? acqData.writtenOffer = "No" :
null;

//Are we Paying Closing Cost Selection

closingcostYesAnswer != undefined ? acqData.closing = "Yes" :
closingCostNoAnswer != undefined ? acqData.closing = "No" :
null;

//JV Agreement Selection

jvYesAnswer != undefined ? acqData.jv = "Yes" :
jvNoAnswer != undefined ? acqData.jv = "No" :
null;

//Split with Supplier Selection

oneHundredAnswer != undefined ? acqData.dealSplit = "100" :
fiftyFiftyAnswer != undefined ? acqData.dealSplit = "50/50" :
otherAnswer != undefined ? acqData.dealSplit = "Other" :
null;

//Type of Access Selection

byAppointmentAnswer != undefined ? acqData.typeOfAccess = "By Appointment" :
lockboxAnswer != undefined ? acqData.typeOfAccess = "Lockbox" :
noAccessAnswer != undefined ? acqData.typeOfAccess = "No Access" :
null;

//Post Possession Selection

postPossessionYesAnswer != undefined ? acqData.postPosession = "Yes" :
postPossessionNoAnswer != undefined ? acqData.postPosession = "No" :
null;

//Lease Details Selection

leaseVacantAnswer != undefined ? acqData.leaseDetails = "Vacant" :
tenantOccupiedVacantAnswer != undefined ? acqData.leaseDetails = "Tenent Occupied - Vacant @ COE" :
tenantOccupiedRentAnswer != undefined ? acqData.leaseDetails = "Tenent Occupied - Wants to continue rent" :
ownerOccupiedVacantAnswer != undefined ? acqData.leaseDetails = "Owner Occupied - Vacant @ COE" :
leaseOtherAnswer != undefined ? acqData.leaseDetails = "Other" :
null;

//Parking Selection

garageAnswer != undefined ? acqData.parking = "Garage" :
garageDetachedAnswer != undefined ? acqData.parking = "Garage - Detached" :
carportAnswer != undefined ? acqData.parking = "Carport" :
onStreetAnswer != undefined ? acqData.parking = "On Street" :
noParkingAnswer != undefined ? acqData.parking = "No Parking" :
parkingNAAnswer != undefined ? acqData.parking = "N/A" :
null;

//Pool Selection

poolYesAnswer != undefined ? acqData.pool = "Yes" :
poolNoAnswer != undefined ? acqData.pool = "No" :
null;


// Image field

const propPhoto = document.getElementById('output_image').src

console.log(propPhoto)



/*Variable Outputs--------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

//Creating a Unique ID with current date and random string
var acqID = Math.random().toString(36).substr(2, 5);
var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
var uniqueID = acqID + utc;

//All value variables to be submitted in to form
const acqFormOutput = [uniqueID, fullNameValue, acqData.writtenOffer, acqData.supplier, supplierName, supplierEmail, supplierNumber, addressAnswer, ARV, netPrice, salePrice, EMD, optionFee,  acqData.dealSplit, acqData.jv , additionalCost, acqData.closing, COE, ipLength, titleAttorney, titleOfficer, titleOfficerEmail, titlePhoneNumber, acqData.typeOfAccess, acqData.postPosession,
acqData.leaseDetails, tenantRent, tenantTerm, additionalNotes, beds, baths, acqData.parking, acqData.pool, livingArea, lotSize, yearBuild, pictureLink, marketValue, propPhoto];


// var blob = new Blob(JSON.stringify(acqFormOutput), {type: "text/plain;charset=utf-8"});
// FileSaver.saveAs(blob, "AcqData.txt");


//Save variables in to one local storage file
localStorage.setItem("A-" + uniqueID, JSON.stringify(acqFormOutput)); //Saves Form to Local Storage with a Unique ID to be received from other Javascript Files----------------

//Reload page after clicking submit
window.location.reload();


//Currently not functioning. After submit, this is supposed to scroll to top of page
window.onbeforeunload = function () {
    window.scrollTo(0,0);
};
}};