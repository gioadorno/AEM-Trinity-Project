// import { Children } from "react";

fetch("/JSON_Files/sendgrid_metrics.json")
.then(response => response.json()).then(data => { 

    console.log(data.stats)

// Filter Function

$(document).ready(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('MM-DD-YYYY') + ' to ' + end.format('MM-DD-YYYY'));
      
    });
  });


var openPopup = document.getElementById("uniqueClicksP");
var closePopup= document.getElementById("closeX");
var unfocusPopup = document.getElementById("popupWin");

//when the user presses the percentage symbol, the popup window will appear
// openPopup.onclick = function() {
//     unfocusPopup.style.display = "block"
// }

//if the user presses the x at the top right, the popup window will disappear
// closePopup.onclick = function() {
//     unfocusPopup.style.display = "none"
// }

//if the user presses off the popupwindow (if they press the grayed out area) it will lose focus and close the popupwindow
// window.onclick = function(e) {
//     if (e.target == unfocusPopup) {
//         unfocusPopup.style.display = "none";
//     }
// }

//code for filtering the different markets
//general variables that will be altered when filtering
const autoBlast = document.getElementById("market"); //the name of the market
const displayDate = document.getElementById("displayDate"); //the date for the statistics
const deliveredP = document.getElementById("deliveredP"); //the delivered percentage stat
const deliveredN = document.getElementById("deliveredN"); //the actual delivered number
const uniqueClicksP = document.getElementById("uniqueClicksP"); //the unique clicks percentage stat
const uniqueClicksN = document.getElementById("uniqueClicksN"); //the actual unique clicks number
const openedP = document.getElementById("openedP"); //the opened percentage stat
const openedN = document.getElementById("openedN"); //the actual opened number
const uniqueOpensP = document.getElementById("uniqueOpensP"); //the unique opens percentage stats
const uniqueOpensN = document.getElementById("uniqueOpensN"); //the actual unique opens number
const emailList = document.getElementById("emailList"); //the list of emails that appear with the popup window

// const deliverPercent = 


data.stats.map(sendgrid => {

// `${document.write("<p style='border-bottom: 0.5pt solid gray; padding: 0% 8% 3% 8%; font-size: 22px; font-style: italic;'>" + "Delivered" + "</p>")}` 

const titles = document.createElement("span");


const deliveredText = document.querySelector(".tableTitles");
// deliveredText.innerHTML('<span style="border-bottom: 0.5pt solid gray; padding: 0% 8% 3% 8%; font-size: 22px;">Delivered</span>')

// var deliveredTitle = $('td').html('<b>Delivered</b>')

// deliveredText.innerText = "Delivered";
// deliveredText.style = "border-bottom: 0.5pt solid gray; padding: 0% 8% 3% 8%; font-size: 22px;";


const statsArray = [
["Delivered" + `\n` + `\n` + ((sendgrid.metrics.delivered/sendgrid.metrics.requests) * 100).toFixed(2) + "%" + `\n` + `\n` + sendgrid.metrics.delivered], ["Clicks"  + `\n` + `\n` + ((sendgrid.metrics.clicks/sendgrid.metrics.delivered) * 100).toFixed(2) + "%"  + `\n` + `\n` + sendgrid.metrics.clicks], ["Opens"  + `\n` + `\n` + ((sendgrid.metrics.opens/sendgrid.metrics.delivered) * 100).toFixed(2) + "%"  + `\n` + `\n` + sendgrid.metrics.opens], ["Bounces"  + `\n` + `\n` + ((sendgrid.metrics.bounces/sendgrid.metrics.delivered) * 100).toFixed(2) + "%"  + `\n` + `\n` + sendgrid.metrics.bounces]];

// const testingOne = document.querySelector("td.actualNum");
// console.log(testingOne)
// testingOne.style = "border-bottom: 0.5pt solid gray; padding: 0% 8% 3% 8%; font-size: 22px;"

var table = document.getElementById("statsTable");
var tr = document.createElement('tr');
var div = document.createElement('div');
var divTwo = document.createElement('div');
divTwo.style ="display: flex; justify-content: space-around;";
div.style ="display: flex; justify-content: space-around;";
tr.classList.add("statBox");


const headsArray = ["Category:" + sendgrid.name + " " + " - " + " " + data.date];

const tableHeadArray = ["Delivered", "Clicks", "Opens", "Bounces"];

for (let heads of tableHeadArray) {
    var th= document.createElement('th');
    th.classList.add("tableHead")

    th.innerText = heads;

    
}

for (let headers of headsArray) {
    var head = document.createElement('h3');
    head.classList.add("date");
    head.innerText = headers;
    head.style = "display: flex; justify-content: space-evenly; font-size: 30px; text-align: center; font-family: monospace;"
 
    divTwo.appendChild(head)
    table.appendChild(div);
}

for (let dataRows of statsArray) {
    var td = document.createElement('td');
    var tbody = document.createElement('tbody');
    var th = document.createElement('th');
    th.style = "border-bottom: 0.5pt solid gray; padding: 0% 8% 3% 8%; font-size: 22px;"


    td.classList.add("actualNum");
    th.classList.add("tableHead");

    td.innerText = dataRows;


    th.appendChild(td);
    tr.appendChild(th);
    tbody.appendChild(head);
    tbody.appendChild(tr);
    table.appendChild(tbody);
    };
    
    // divTwo.appendChild()

// Filter Function

$(document).ready(function() {
    $("#filterCategory").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("tbody").filter(function() {
    $(this).toggle($(this).text()
    .toLowerCase().indexOf(value) > -1)})})});



// //atlanta filter
// const atlanta = document.getElementById("atlanta");
// atlanta.addEventListener("click", isAtlanta);

// function isAtlanta() {
//     autoBlast.innerText = "Atlanta Market Statistics"
//     displayDate.innerText = data.date

//     if (sendgrid.name === Atlanta) {for (let dataRows of statsArray) {
//     var a = document.createElement('a');
//     var i = document.createElement('i');
//     var tbody = document.createElement('tbody');
//     var th = document.createElement('th');

//     a.classList.add("actualNum");
//     i.classList.add("tableTitles");
//     tr.classList.add("statBox");
//     th.classList.add("tableHead");

//     a.innerText = dataRows;
    
//     i.appendChild(a);
//     th.appendChild(i);
//     tr.appendChild(th);
//     tbody.appendChild(tr);
//     table.appendChild(tbody);
//     }}

  

//     sendgrid.name === "atlanta" ?  deliveredP.innerText = ((sendgrid.metrics.delivered/sendgrid.metrics.requests) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "atlanta" ?  deliveredN.innerText = sendgrid.metrics.delivered : null;
//     sendgrid.name === "atlanta" ?  uniqueClicksP.innerText = ((sendgrid.metrics.unique_clicks/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "atlanta" ?  uniqueClicksN.innerText = sendgrid.metrics.unique_clicks : null;
//     sendgrid.name === "atlanta" ?  openedP.innerText = ((sendgrid.metrics.opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "atlanta" ?  openedN.innerText = sendgrid.metrics.opens : null;
//     sendgrid.name === "atlanta" ?  uniqueOpensP.innerText = ((sendgrid.metrics.unique_opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "atlanta" ?  uniqueOpensN.innerText = sendgrid.metrics.unique_opens : null;
// }


// /*
//     Values have not been set for the following filters. 
//     It has been set up to hopefully speed up the process of importing the information into the table.
// */



// //birmingham filter
// const birmingham = document.getElementById("birmingham");
// birmingham.addEventListener("click", isBirmingham);

// function isBirmingham() {
//     autoBlast.innerText = "Birmingham Market Statistics"
//     displayDate.innerText = data.date
//     sendgrid.name === "birmingham" ?  deliveredP.innerText = ((sendgrid.metrics.delivered/sendgrid.metrics.requests) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "birmingham" ?  deliveredN.innerText = sendgrid.metrics.delivered : null;
//     sendgrid.name === "birmingham" ?  uniqueClicksP.innerText = ((sendgrid.metrics.unique_clicks/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "birmingham" ?  uniqueClicksN.innerText = sendgrid.metrics.unique_clicks : null;
//     sendgrid.name === "birmingham" ?  openedP.innerText = ((sendgrid.metrics.opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "birmingham" ?  openedN.innerText = sendgrid.metrics.opens : null;
//     sendgrid.name === "birmingham" ?  uniqueOpensP.innerText = ((sendgrid.metrics.unique_opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "birmingham" ?  uniqueOpensN.innerText = sendgrid.metrics.unique_opens : null;
// }

// //charlotte filter
// const charlotte = document.getElementById("charlotte");
// charlotte.addEventListener("click", isCharlotte);

// function isCharlotte() {
//     autoBlast.innerText = "Charlotte Market Statistics"
//     displayDate.innerText = data.date
//     sendgrid.name === "charlotte" ?  deliveredP.innerText = ((sendgrid.metrics.delivered/sendgrid.metrics.requests) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "charlotte" ?  deliveredN.innerText = sendgrid.metrics.delivered : null;
//     sendgrid.name === "charlotte" ?  uniqueClicksP.innerText = ((sendgrid.metrics.unique_clicks/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "charlotte" ?  uniqueClicksN.innerText = sendgrid.metrics.unique_clicks : null;
//     sendgrid.name === "charlotte" ?  openedP.innerText = ((sendgrid.metrics.opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "charlotte" ?  openedN.innerText = sendgrid.metrics.opens : null;
//     sendgrid.name === "charlotte" ?  uniqueOpensP.innerText = ((sendgrid.metrics.unique_opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "charlotte" ?  uniqueOpensN.innerText = sendgrid.metrics.unique_opens : null;
// }

// //columbus filter
// const columbus = document.getElementById("columbus");
// columbus.addEventListener("click", isColumbus);

// function isColumbus() {
//     autoBlast.innerText = "Columbus Market Statistics"
//     displayDate.innerText = data.date
//     sendgrid.name === "columbus" ?  deliveredP.innerText = ((sendgrid.metrics.delivered/sendgrid.metrics.requests) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "columbus" ?  deliveredN.innerText = sendgrid.metrics.delivered : null;
//     sendgrid.name === "columbus" ?  uniqueClicksP.innerText = ((sendgrid.metrics.unique_clicks/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "columbus" ?  uniqueClicksN.innerText = sendgrid.metrics.unique_clicks : null;
//     sendgrid.name === "columbus" ?  openedP.innerText = ((sendgrid.metrics.opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "columbus" ?  openedN.innerText = sendgrid.metrics.opens : null;
//     sendgrid.name === "columbus" ?  uniqueOpensP.innerText = ((sendgrid.metrics.unique_opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "columbus" ?  uniqueOpensN.innerText = sendgrid.metrics.unique_opens : null;
// }

// //dallas filter
// const dallas = document.getElementById("dallas");
// dallas.addEventListener("click", isDallas);

// function isDallas() {

//     for (let dates of data.date) {
//     autoBlast.innerText = "Dallas Market Statistics"
//     displayDate.innerText = data.date
//     sendgrid.name === "dallas" ?  deliveredP.innerText = ((sendgrid.metrics.delivered/sendgrid.metrics.requests) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "dallas" ?  deliveredN.innerText = sendgrid.metrics.delivered : null;
//     sendgrid.name === "dallas" ?  uniqueClicksP.innerText = ((sendgrid.metrics.unique_clicks/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "dallas" ?  uniqueClicksN.innerText = sendgrid.metrics.unique_clicks : null;
//     sendgrid.name === "dallas" ?  openedP.innerText = ((sendgrid.metrics.opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "dallas" ?  openedN.innerText = sendgrid.metrics.opens : null;
//     sendgrid.name === "dallas" ?  uniqueOpensP.innerText = ((sendgrid.metrics.unique_opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "dallas" ?  uniqueOpensN.innerText = sendgrid.metrics.unique_opens : null;}
// };



// console.log(sendgrid.name)

// //houston filter
// const houston = document.getElementById("houston");
// houston.addEventListener("click", isHouston);

// function isHouston() {
//     autoBlast.innerText = "Houston Market Statistics"
//     displayDate.innerText = data.date
//     sendgrid.name === "houston" ?  deliveredP.innerText = ((sendgrid.metrics.delivered/sendgrid.metrics.requests) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "houston" ?  deliveredN.innerText = sendgrid.metrics.delivered : null;
//     sendgrid.name === "houston" ?  uniqueClicksP.innerText = ((sendgrid.metrics.unique_clicks/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "houston" ?  uniqueClicksN.innerText = sendgrid.metrics.unique_clicks : null;
//     sendgrid.name === "houston" ?  openedP.innerText = ((sendgrid.metrics.opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "houston" ?  openedN.innerText = sendgrid.metrics.opens : null;
//     sendgrid.name === "houston" ?  uniqueOpensP.innerText = ((sendgrid.metrics.unique_opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "houston" ?  uniqueOpensN.innerText = sendgrid.metrics.unique_opens : null;
// }

// //kansasCity filter
// const kansasCity = document.getElementById("kansasCity");
// kansasCity.addEventListener("click", isKansasCity);

// function isKansasCity() {
//     autoBlast.innerText = "Kansas City Market Statistics"
//     displayDate.innerText = data.date
//     sendgrid.name === "kansas_city" ?  deliveredP.innerText = ((sendgrid.metrics.delivered/sendgrid.metrics.requests) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "kansas_city" ?  deliveredN.innerText = sendgrid.metrics.delivered : null;
//     sendgrid.name === "kansas_city" ?  uniqueClicksP.innerText = ((sendgrid.metrics.unique_clicks/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "kansas_city" ?  uniqueClicksN.innerText = sendgrid.metrics.unique_clicks : null;
//     sendgrid.name === "kansas_city" ?  openedP.innerText = ((sendgrid.metrics.opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "kansas_city" ?  openedN.innerText = sendgrid.metrics.opens : null;
//     sendgrid.name === "kansas_city" ?  uniqueOpensP.innerText = ((sendgrid.metrics.unique_opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "kansas_city" ?  uniqueOpensN.innerText = sendgrid.metrics.unique_opens : null;
// }

// //lasVegas filter
// const lasVegas = document.getElementById("lasVegas");
// lasVegas.addEventListener("click", isLasVegas);

// function isLasVegas() {
//     autoBlast.innerText = "Las Vegas Market Statistics"
//     displayDate.innerText = data.date
//     sendgrid.name === "las_vegas" ?  deliveredP.innerText = ((sendgrid.metrics.delivered/sendgrid.metrics.requests) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "las_vegas" ?  deliveredN.innerText = sendgrid.metrics.delivered : null;
//     sendgrid.name === "las_vegas" ?  uniqueClicksP.innerText = ((sendgrid.metrics.unique_clicks/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "las_vegas" ?  uniqueClicksN.innerText = sendgrid.metrics.unique_clicks : null;
//     sendgrid.name === "las_vegas" ?  openedP.innerText = ((sendgrid.metrics.opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "las_vegas" ?  openedN.innerText = sendgrid.metrics.opens : null;
//     sendgrid.name === "las_vegas" ?  uniqueOpensP.innerText = ((sendgrid.metrics.unique_opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "las_vegas" ?  uniqueOpensN.innerText = sendgrid.metrics.unique_opens : null;
// }

// //memphis filter
// const memphis = document.getElementById("memphis");
// memphis.addEventListener("click", isMemphis);

// function isMemphis() {
//     autoBlast.innerText = "Memphis Market Statistics"
//     displayDate.innerText = data.date
//     sendgrid.name === "Memphis" ?  deliveredP.innerText = ((sendgrid.metrics.delivered/sendgrid.metrics.requests) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "Memphis" ?  deliveredN.innerText = sendgrid.metrics.delivered : null;
//     sendgrid.name === "Memphis" ?  uniqueClicksP.innerText = ((sendgrid.metrics.unique_clicks/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "Memphis" ?  uniqueClicksN.innerText = sendgrid.metrics.unique_clicks : null;
//     sendgrid.name === "Memphis" ?  openedP.innerText = ((sendgrid.metrics.opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "Memphis" ?  openedN.innerText = sendgrid.metrics.opens : null;
//     sendgrid.name === "Memphis" ?  uniqueOpensP.innerText = ((sendgrid.metrics.unique_opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "Memphis" ?  uniqueOpensN.innerText = sendgrid.metrics.unique_opens : null;
// }

// //northernAZ filter
// const northernAZ = document.getElementById("northernAZ");
// northernAZ.addEventListener("click", isNorthernAZ);

// function isNorthernAZ() {
//     autoBlast.innerText = "Northern AZ Market Statistics"
//     displayDate.innerText = data.date
//     sendgrid.name === "northern_az" ?  deliveredP.innerText = ((sendgrid.metrics.delivered/sendgrid.metrics.requests) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "northern_az" ?  deliveredN.innerText = sendgrid.metrics.delivered : null;
//     sendgrid.name === "northern_az" ?  uniqueClicksP.innerText = ((sendgrid.metrics.unique_clicks/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "northern_az" ?  uniqueClicksN.innerText = sendgrid.metrics.unique_clicks : null;
//     sendgrid.name === "northern_az" ?  openedP.innerText = ((sendgrid.metrics.opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "northern_az" ?  openedN.innerText = sendgrid.metrics.opens : null;
//     sendgrid.name === "northern_az" ?  uniqueOpensP.innerText = ((sendgrid.metrics.unique_opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "northern_az" ?  uniqueOpensN.innerText = sendgrid.metrics.unique_opens : null;
// }

// //sanAntonio filter
// const sanAntonio = document.getElementById("sanAntonio");
// sanAntonio.addEventListener("click", isSanAntonio);

// function isSanAntonio() {
//     autoBlast.innerText = "San Antonio Market Statistics"
//     displayDate.innerText = data.date
//     sendgrid.name === "san_antonio" ?  deliveredP.innerText = ((sendgrid.metrics.delivered/sendgrid.metrics.requests) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "san_antonio" ?  deliveredN.innerText = sendgrid.metrics.delivered : null;
//     sendgrid.name === "san_antonio" ?  uniqueClicksP.innerText = ((sendgrid.metrics.unique_clicks/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "san_antonio" ?  uniqueClicksN.innerText = sendgrid.metrics.unique_clicks : null;
//     sendgrid.name === "san_antonio" ?  openedP.innerText = ((sendgrid.metrics.opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "san_antonio" ?  openedN.innerText = sendgrid.metrics.opens : null;
//     sendgrid.name === "san_antonio" ?  uniqueOpensP.innerText = ((sendgrid.metrics.unique_opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "san_antonio" ?  uniqueOpensN.innerText = sendgrid.metrics.unique_opens : null;
// }

// //stLouis filter
// const stLouis = document.getElementById("stLouis");
// stLouis.addEventListener("click", isStLouis);

// function isStLouis() {
//     autoBlast.innerText = "St. Louis Market Statistics"
//     displayDate.innerText = data.date
//     sendgrid.name === "st_louis" ?  deliveredP.innerText = ((sendgrid.metrics.delivered/sendgrid.metrics.requests) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "st_louis" ?  deliveredN.innerText = sendgrid.metrics.delivered : null;
//     sendgrid.name === "st_louis" ?  uniqueClicksP.innerText = ((sendgrid.metrics.unique_clicks/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "st_louis" ?  uniqueClicksN.innerText = sendgrid.metrics.unique_clicks : null;
//     sendgrid.name === "st_louis" ?  openedP.innerText = ((sendgrid.metrics.opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "st_louis" ?  openedN.innerText = sendgrid.metrics.opens : null;
//     sendgrid.name === "st_louis" ?  uniqueOpensP.innerText = ((sendgrid.metrics.unique_opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "st_louis" ?  uniqueOpensN.innerText = sendgrid.metrics.unique_opens : null;
// }

// //tucson filter
// const tucson = document.getElementById("tucson");
// tucson.addEventListener("click", isTucson);

// function isTucson() {
//     autoBlast.innerText = "Tucson Market Statistics"
//     displayDate.innerText = data.date
//     sendgrid.name === "Tucson" ?  deliveredP.innerText = ((sendgrid.metrics.delivered/sendgrid.metrics.requests) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "Tucson" ?  deliveredN.innerText = sendgrid.metrics.delivered : null;
//     sendgrid.name === "Tucson" ?  uniqueClicksP.innerText = ((sendgrid.metrics.unique_clicks/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "Tucson" ?  uniqueClicksN.innerText = sendgrid.metrics.unique_clicks : null;
//     sendgrid.name === "Tucson" ?  openedP.innerText = ((sendgrid.metrics.opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "Tucson" ?  openedN.innerText = sendgrid.metrics.opens : null;
//     sendgrid.name === "Tucson" ?  uniqueOpensP.innerText = ((sendgrid.metrics.unique_opens/sendgrid.metrics.delivered) * 100).toFixed(2) +'%' : null;
//     sendgrid.name === "Tucson" ?  uniqueOpensN.innerText = sendgrid.metrics.unique_opens : null;
// }

});
});