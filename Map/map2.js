'use strict';

// import axios from "axios";

/** Hide a DOM element. */
function hideElement(el) {
  el.style.display = 'none';
}

/** Show a DOM element that has been hidden. */
function showElement(el) {
  el.style.display = 'block';
}



// Get items from the local storage ---------------------------

const dispoFormKeys = Object.values(localStorage);

// Seperates each form
const splicedForms = dispoFormKeys.splice(0);

console.log(splicedForms)
/**
 * Defines an instance of the Locator+ solution, to be instantiated
 * when the Maps library is loaded.
 */
function LocatorPlus(configuration) {
  const locator = this;



  const mapEl = document.getElementById('map');
  const panelEl = document.getElementById('locations-panel');
  locator.panelListEl = document.getElementById('locations-panel-list');
  const sectionNameEl =
      document.getElementById('location-results-section-name');
  const resultsContainerEl = document.getElementById('location-results-list');

  const atlantaSectionEl = document.getElementById('titleAtlanta');
  const atlantaResultsEl = document.getElementById('atlanta-results-list');

  const birminghamSectionEl = document.getElementById('titleBirmingham');
  const birminghamResultsEl = document.getElementById('birmingHam-results-list');

  const charlotteSectionEl = document.getElementById('titleCharlotte');
  const charlotteResultsEl = document.getElementById('charlotte-results-list');

  const columbusSectionEl = document.getElementById('titleColumbus');
  const columbusResultsEl = document.getElementById('columbus-results-list');

  const dallasSectionEl = document.getElementById('titleDallas');
  const dallasResultsEl = document.getElementById('dallas-results-list');

  const houstonSectionEl = document.getElementById('titleHouston');
  const houstonResultsEl = document.getElementById('houston-results-list');

  const kansascitySectionEl = document.getElementById('titleKansasCity');
  const kansascityResultsEl = document.getElementById('kansascity-results-list');

  const indianapolisSectionEl = document.getElementById('titleIndianapolis');
  const indianapolisResultsEl = document.getElementById('indianapolis-results-list');

  const memphisSectionEl = document.getElementById('titleMemphis');
  const memphisResultsEl = document.getElementById('memphis-results-list');

  const lasvegasSectionEl = document.getElementById('titleLasVegas');
  const lasvegasResultsEl = document.getElementById('lasvegas-results-list');

  const northernazSectionEl = document.getElementById('titleNorthernAz');
  const northernazResultsEl = document.getElementById('northernaz-results-list');
  
  const sanantonioSectionEl = document.getElementById('titleSanAntonio');
  const sanantonioResultsEl = document.getElementById('sanantonio-results-list');

  const stlouisSectionEl = document.getElementById('titleStLouis');
  const stlouisResultsEl = document.getElementById('stlouis-results-list');

  const tucsonSectionEl = document.getElementById('titleTucson');
  const tucsonResultsEl = document.getElementById('tucson-results-list');

  // const itemsTemplate = Handlebars.compile(
  //     document.getElementById('locator-result-items-tmpl').innerHTML);

   

  locator.searchLocation = null;
  locator.searchLocationMarker = null;
  locator.selectedLocationIdx = null;
  locator.userCountry = null;

  // Initialize the map -------------------------------------------------------
  const mapOptions = configuration.mapOptions;
  locator.map = new google.maps.Map(mapEl, {
    fullscreenControl: mapOptions.fullscreenControl,
    zoomControl: mapOptions.zoomControl,
    streetViewControl: mapOptions.streetViewControl,
    mapTypeControl: mapOptions.mapTypeControl,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT,
    },
  });

  // Store selection.
  // const selectResultItem = function(locationIdx, panToMarker, scrollToResult) {
  //   locator.selectedLocationIdx = locationIdx;
  //   for (let locationElem of resultsContainerEl.children) {
  //     locationElem.classList.remove('selected');
  //     if (getResultIndex(locationElem) === locator.selectedLocationIdx) {
  //       locationElem.classList.add('selected');
  //       if (scrollToResult) {
  //         panelEl.scrollTop = locationElem.offsetTop;
  //       }
  //     }
  //   }
  //   if (panToMarker && (locationIdx != null)) {
  //     locator.map.panTo(locator.locations[locationIdx].coords);
  //   }
  // };





  
  var strictBirminghamBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(-88.07, 31.00), 
    new google.maps.LatLng(-85.22, 31.00),
    new google.maps.LatLng(-85.22, 35.00), 
    new google.maps.LatLng(-88.07, 35.00),
    new google.maps.LatLng(-88.07, 35.00)
  );

  var birminghamMarkerIcon = new google.maps.Marker({
    strokeColor: "#7e7efd",
    strokeOpacity: 1.0,
    strokeWeight: 2
});

  // BirmingHam Marker
  // const birminghamMarkers = locator.locations.map(function(birmingHamLocation, index) {
  //   const birminghamMarker = new google.maps.Marker({
  //     latLng: strictBirminghamBounds,
  //     position: birmingHamLocation.coords,
  //     map: locator.map,
  //     title: birmingHamLocation.title,
  //     icon: birminghamMarkerIcon
  //   });
  //   birminghanMarker.addListener('click', function() {
  //     selectResultItem(index, false, true);
  //   });
  //   return birminghamMarker;
  // });

  




  // locator.updateBounds = function() {
  //   const bounds = new google.maps.LatLngBounds();
  //   if (locator.searchLocationMarker) {
  //     bounds.extend(locator.searchLocationMarker.getPosition());
  //   }
  //   for (let i = 0; i < birminghamMarkers.length; i++) {
  //     bounds.extend(birminghamMarkers[i].getPosition());
  //   }
  //   locator.map.fitBounds(bounds);
  // };
  // locator.updateBounds();


  //Info Field for Markers

  //// When the user clicks the marker, an info window opens.




  

  // markers.addListener("click", () => {
  //   infowindow.open({
  //     anchor: marker,
  //     map,
  //     shouldFocus: false,
  //     // title: location.title,
  //   });
  // });

  // infowindow.addListener('onBlur', () => {
  //   infowindow.close()
  // })





// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

  // Render the results list --------------------------------------------------
  // const getResultIndex = function(elem) {
  //   return parseInt(elem.getAttribute('data-location-index'));
  // };

  locator.renderResultsList = function() {
    // let locations = locator.locations.slice();
    // for (let i = 0; i < locations.length; i++) {
    //   locations[i].index = i;
    // }

    // const resultItemContext = { locations: locations }; 


    splicedForms.map(dispoAnswers => {const arr = JSON.parse("[" + dispoAnswers + "]"); //Loop through string; Wrap string in Array brackets; Parsing each Array
    // console.log(splicedForms)
    // console.log(dispoAnswers)
    // console.log(arr)
    const formID = arr[0].shift(); //Removing the Unique ID from each array and outputting it to a variable
    var finalArray = [arr]; //Creating a Nested Array of the Parsed Arrays
    
    // Create new rows and cells for each submitted form, looping through each array
    
    finalArray.forEach(function(elem) {
    
        console.log(finalArray);
    
        // const marketTitles = ["Atlanta", "Birmingham", "Charlotte", "Columbus", "Dallas", "Houston", "Indianapolis", "Kansas City", "Las Vegas", "Memphis", "Northern AZ", "San Antonio", "St. Louis", "Tucson"];
    
    for (let dataRows of elem) {

      locator.locations = configuration.locations || [];
      locator.capabilities = configuration.capabilities || {};

      console.log(dataRows)

      //Listen for click on map
      // google.maps.addEventListener.addListener(map, 'click', function(event){
      //   // Add Marker
      //   addMarker({coords:event.latLng});
      // })
      


    //   const markers = [
    //     {coords:{lat:42.4668,lng:-70.9495},
    //     iconImage:'/Map Icons/Home_4.png',
    //   content:contentString},
    //   {coords:{lat:42.8584,lng:-70.9300}},
    //   {coords:{lat:42.7762,lng:-71.0773}}
    //   ]

    //   addMarker(
    //     {coords:{lat:42.4668,lng:-70.9495},
    //     iconImage:'/Map Icons/Home_4.png',
    //   content:contentString});
      
    //   addMarker({coords:{lat:42.8584,lng:-70.9300}});
    //   addMarker({coords:{lat:42.7762,lng:-71.0773}});


    // // Loop through markers
    // for(let propMarkers of markers) {
    //   addMarker(propMarkers);
    // }


    //   //Add Marker Function
    //   function addMarker(props){
    //     const marker = new google.maps.Marker({
    //       position: props.coords,
    //       map: locator.map,
    //       title: location.title,
    //     });

    //     //Check for custom icon
    //     if(props.iconImage){
    //       // Set icon image
    //       marker.setIcon(props.iconImage)
    //     }

    //     // Check content
    //     if(props.content) {
    //       const infoWindow = new google.maps.InfoWindow({
    //         content: props.content
    //       });
    //       marker.addListener('click', function() {
    //         infoWindow.open(map, marker);
    //         // selectResultItem(index, false, true);
    //       })
    //     }
    //   }





        const test = document.getElementById('locations-panel-list')

        // const divTitles = document.createElement('div');
        // divTitles.classList.add('section-name');
        // divTitles.innerText = marketTitles;
      
        const resultsList = document.createElement('div')
        resultsList.classList.add('results')
        const atlantaList = document.createElement('div');
        atlantaList.classList.add("atlanta-results-list")
        atlantaList.style = "list-style: none; margin: none;"

        let li = document.createElement("li");
        li.classList.add("location-result");
        li.innerHTML = "<h4 style='cursor: text; margin-bottom: 20px; font-family: auto; font-size: 19px;'>Property: " + dataRows[6] + "</h4>"

        let head = document.createElement('h2');
        head.classList.add("name");
        head.style = "font-weight: 500; font-family: monospace; font-size: 16px;"

        head.innerHTML = "<p>Market: " + dataRows[36] + "</p>"

        li.appendChild(head);
        li.style = "list-style: none; margin-left: 25px; padding: none;"
        atlantaList.appendChild(li);

        let divAddress = document.createElement('div');
        divAddress.classList.add('address')

        let spanAddressOne = document.createElement('span');
        spanAddressOne.classList.add('addressOne');
      

        let spanAddressTwo = document.createElement('span');
        spanAddressTwo.classList.add('addressTwo');
        spanAddressTwo.innerHTML = "<p style='margin-bottom: 20px'>Name: " + dataRows[0] + "</p>"

        let detailsButton = document.createElement('button');
        detailsButton.classList.add('details-button');
        detailsButton.innerHTML = "<button style='color: blue; margin-bottom: 20px;'>View Details</button>"
        
        detailsButton.addEventListener('mouseover', hover)

        function hover() {
          detailsButton.style.color = "red"
        }


        divAddress.appendChild(spanAddressOne);
        divAddress.appendChild(spanAddressTwo);
        divAddress.appendChild(detailsButton);
        atlantaList.appendChild(divAddress);
        // resultsList.appendChild(divTitles)
        resultsList.appendChild(atlantaList);
        test.appendChild(resultsList);


        var urlCreator = window.URL || window.webkitURL;

        // const blobToImage = (blob) => {
        //   return new Promise(resolve => {
        //     const url = URL.createObjectURL(dataRows[37])
        //     let img = new Image()
        //     img.onload = () => {
        //       URL.revokeObjectURL(url)
        //       resolve(img)
        //     }
        //     img.src = url
        //   })
        // }

        const reader = new FileReader();

        // Set the Width and Height you want your resized image to be
var width = 320; 
var height = 250; 

        var canvas = document.createElement('canvas');  // Dynamically Create a Canvas Element
        canvas.width  = width;  // Set the width of the Canvas
        canvas.height = height;  // Set the height of the Canvas

       
        // const reader =  new FileReader(dataRows[37]).readAsDataURL;

        const bedDetails = document.createElement('p');
          bedDetails.innerHTML = 
          
          "<img src='" + dataRows[37] + "'height='250px' width='320px' style='padding-bottom: 25px;'>" +
          "<p class='listTitle'>Beds: " + "<span class='listItems'>" + dataRows[28] + "</span></p>" +
          "<p class='listTitle'>Baths: " + "<span class='listItems'>" + dataRows[29] + "</span></p>" +
          "<p class='listTitle'>Garage: " + "<span class='listItems'>" + dataRows[30] + "</span></p>" +
          "<p class='listTitle'>Pool: " + "<span class='listItems'>" + dataRows[31] + "</span></p>" +
          "<p class='listTitle'>Sq. Foot: " + "<span class='listItems'>" + dataRows[32] + "</span></p>" +
          "<p class='listTitle'>Lot Size: " + "<span class='listItems'>" + dataRows[33] + "</span></p>" +
          "<p class='listTitle'>Year Built: " + "<span class='listItems'>" + dataRows[34] + "</span></p>" +
          "<p class='listTitle'>Wholesale: " + "<span class='listItems'>" + dataRows[8] + "</span></p>" +
          "<p class='listTitle'>After Repair Value: " + "<span class='listItems'>" + dataRows[7] + "</span></p>" +
          "<a href=" + dataRows[34] + "class='listTitle' style='font-weight: 600; font-size: 17px; font-style: italic; margin-left: 15px;' id='propPhotos'>Property Photos</a>" +
          "<p class='listTitle'>Additional Notes: " + "<span class='listItems'>" + dataRows[27] + "</span></p>" +
          "<div class='banner'><img src='/Logos/Keyglee Dispo Logo.png' style='height: 160px; width: 220px; margin-top: 15px; padding: 15px 50px 0px 50px;border-top: 2px ridge black;'></div>" 

          const sidePanel = document.getElementById("locations-panel")

          const propDetails = document.createElement("div");
          propDetails.classList.add('locations-panel-details');
          const divDetails = document.createElement('div');
          divDetails.classList.add('description');

          const backButton = document.createElement('button');
          backButton.innerHTML = "<button class='back-button'><img class='icon' src='https://fonts.gstatic.com/s/i/googlematerialicons/arrow_back/v11/24px.svg' alt=''/>  Back</button>"

          const logo = document.createElement('img');
          logo.innerHTML = "<img src='/Logos/Keyglee Dispo Logo.png' style='height: 120px; width: 120px; margin-left: 15px; margin-bottom: 10px;'>"


        
          propDetails.appendChild(logo);
          propDetails.appendChild(backButton);
          propDetails.appendChild(bedDetails);
          propDetails.appendChild(divDetails);
          sidePanel.appendChild(propDetails);

          propDetails.style ="display: none;"


          function closeDetails() {
            document.getElementById("locations-panel-list").style = "display: block;"
            propDetails.style ="display: none;"
          }

        function openDetails() {
          document.getElementById("locations-panel-list").style = "display: none;"
          
          propDetails.style ="display: block;"

          
        }

        detailsButton.addEventListener("click", openDetails);
        backButton.addEventListener("click", closeDetails)


        //Filter through Left Panel List

        $(document).ready(function() {
          $("#filterTable").on("keyup", function() {
              var value = $(this).val().toLowerCase();
              $(".results").filter(function() {
                  $(this).toggle($(this).text()
                  .toLowerCase().indexOf(value) > -1)
              });
          });
      });








      //Call Geocode
      geocode();
      function geocode() {
        axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
          params:{
            address:dataRows[6],
            key:'AIzaSyDZO4-fjim18Q-HauZlwCvMCpZ_HUPjWA8'
          }
        })
        .then (function(response){
          // Log full response
          console.log(response);

          // Formatted Address
          console.log(response.data.results[0].formatted_address)

               //Content for info window of markers
        const contentString = "<img src='" + dataRows[37] + "'height='170px' width='270px'>" + "<br>" + "<h4 style='font-style: italic;'>" + dataRows[6] + "</h4> <p>Wholesale Price: " + dataRows[8] + "<br><br>" + "ARV: " + dataRows[7] + "<br><br></p>" + "<a href=" + dataRows[35] + "class='listTitle' style='font-weight: 600; font-size: 13px; font-style: italic;' id='propPhotos'>Property Photos</a>" 

                // Create a marker for each location.
      const markers = locator.locations.map(function(location, markerLocations) {
        const marker = new google.maps.Marker({
          position: response.data.results[0].geometry.location,
          map: locator.map,
          title: response.data.results[0].formatted_address,
          icon: '/Map Icons/Home_4.png'
        });
        const infoWindow = new google.maps.InfoWindow({
          content: contentString
        });
        marker.addListener('click', function moveToMarker() {
          infoWindow.open(map, marker);
          locator.map.setZoom(7);
            locator.map.panTo(marker.position)
          // selectResultItem(index, false, true);
        })

        resultsList.addEventListener('click', function moveToArea(){
          locator.updateBounds = function() {
            const bounds = new google.maps.LatLngBounds();
            
            if (locator.searchLocationMarker) {
              bounds.extend(locator.searchLocationMarker.getPosition());
            }
            for (let i = 0; i < markers.length; i++) {
              bounds.extend(markers[i].getPosition());
            }
            locator.map.fitBounds(bounds);
            var listener = google.maps.event.addListener(locator.map, "idle", function() { 
              if (locator.map.getZoom() > 16) locator.map.setZoom(12); 
              google.maps.event.removeListener(listener); 
            });
          };
          locator.updateBounds();
        })
        // resultsList.addListener('click', moveToMarker())

          // locator.map.addListener('click', () => {
          //   locator.map.setZoom(12);
          //   locator.map.setCenter(marker.getPosition)
          // })
        return marker;
      });





   

              // Fit map to marker bounds.
  locator.updateBounds = function() {
    const bounds = new google.maps.LatLngBounds();
    if (locator.searchLocationMarker) {
      bounds.extend(locator.searchLocationMarker.getPosition());
    }
    for (let i = 0; i < markers.length; i++) {
      bounds.extend(markers[i].getPosition());
    }
    locator.map.fitBounds(bounds);
    locator.map.fitBounds(bounds);
    var listener = google.maps.event.addListener(locator.map, "idle", function() { 
      if (locator.map.getZoom() > 16) locator.map.setZoom(6);
      google.maps.event.removeListener(listener); 
    });
  };
  locator.updateBounds();

        })
        .catch(function(error){
          console.log(error);
        })
      };

      
    

        
        

    }})})};

    

        // if (locator.renderResultsList == "Atlanta") {
        //   atlantaSectionEl.textContent = 'Nearest locations (' + locations.length + ')';
        //   locations.sort(function(a, b) {
        //     return getLocationDistance(a) - getLocationDistance(b);
        //   });
        // } else {
        //   atlantaSectionEl.textContent = `Atlanta (${locations.length})`; //List Title
        // }

      // for (let item of resultsList.children) {

      //   const resultSelectionHandler = function() {
      //     selectResultItem(resultIndex, true, false);
      //   };
    
      //   // Clicking anywhere on the item selects this location.
      //   // Additionally, create a button element to make this behavior
      //   // accessible under tab navigation.
      //   item.addEventListener('click', resultSelectionHandler);
      //   // item.querySelector('.select-location')
      //       .addEventListener('click', function(e) {
      //         resultSelectionHandler();
      //         e.stopPropagation();
      //       });}
    
      //   item.querySelector('.details-button')
      //       .addEventListener('click', function() {
      //         locator.showDetails(resultIndex);
      //         var div = document.querySelector(".description")
      //         var p = document.createElement('p');
      //         var span = document.createElement('span')
      //         span.classList.add('listItems')
      //         p.classList.add('listTitle')
      //         span.innerText = "8"

      //         p.appendChild(span)
      //         div.appendChild(p)
      //       });
      //     };

    //  List for Birmingham-----------------------------------------------------------------------

  //   if (locator.renderResultsList == "Alabama") {
  //     birminghamSectionEl.textContent = 'Nearest locations (' + locations.length + ')';
  //     locations.sort(function(a, b) {
  //       return getLocationDistance(a) - getLocationDistance(b);
  //     });
  //   } else {
  //     birminghamSectionEl.textContent = `Birmingham (${locations.length})`; //List Title
  //   }
  //   birminghamResultsEl.innerHTML = itemsTemplate(resultItemContext);
  // for (let item of birminghamResultsEl.children) {
  //   const resultIndex = getResultIndex(item);
  //   if (resultIndex === locator.selectedLocationIdx) {
  //     item.classList.add('selected');
  //   }
  //   const resultSelectionHandler = function() {
  //     selectResultItem(resultIndex, true, false);
  //   };

  //   // Clicking anywhere on the item selects this location.
  //   // Additionally, create a button element to make this behavior
  //   // accessible under tab navigation.
  //   item.addEventListener('click', resultSelectionHandler);
  //   item.querySelector('.select-location')
  //       .addEventListener('click', function(e) {
  //         resultSelectionHandler();
  //         e.stopPropagation();
  //       });

  //   item.querySelector('.details-button')
  //       .addEventListener('click', function() {
  //         locator.showDetails(resultIndex);
  //       });
  //     };


  //       //  List for Charlotte-----------------------------------------------------------------------

  //       if (locator.renderResultsList == "Charlotte") {
  //         charlotteSectionEl.textContent = 'Nearest locations (' + locations.length + ')';
  //         locations.sort(function(a, b) {
  //           return getLocationDistance(a) - getLocationDistance(b);
  //         });
  //       } else {
  //         charlotteSectionEl.textContent = `Charlotte (${locations.length})`; //List Title
  //       }
  //       charlotteResultsEl.innerHTML = itemsTemplate(resultItemContext);
  //     for (let item of charlotteResultsEl.children) {
  //       const resultIndex = getResultIndex(item);
  //       if (resultIndex === locator.selectedLocationIdx) {
  //         item.classList.add('selected');
  //       }
  //       const resultSelectionHandler = function() {
  //         selectResultItem(resultIndex, true, false);
  //       };
    
  //       // Clicking anywhere on the item selects this location.
  //       // Additionally, create a button element to make this behavior
  //       // accessible under tab navigation.
  //       item.addEventListener('click', resultSelectionHandler);
  //       item.querySelector('.select-location')
  //           .addEventListener('click', function(e) {
  //             resultSelectionHandler();
  //             e.stopPropagation();
  //           });
    
  //       item.querySelector('.details-button')
  //           .addEventListener('click', function() {
  //             locator.showDetails(resultIndex);
  //           });
  //         };


  //       //  List for Columbus-----------------------------------------------------------------------

  //       if (locator.renderResultsList == "Ohio") {
  //         columbusSectionEl.textContent = 'Nearest locations (' + locations.length + ')';
  //         locations.sort(function(a, b) {
  //           return getLocationDistance(a) - getLocationDistance(b);
  //         });
  //       } else {
  //         columbusSectionEl.textContent = `Columbus (${locations.length})`; //List Title
  //       }
  //       columbusResultsEl.innerHTML = itemsTemplate(resultItemContext);
  //     for (let item of columbusResultsEl.children) {
  //       const resultIndex = getResultIndex(item);
  //       if (resultIndex === locator.selectedLocationIdx) {
  //         item.classList.add('selected');
  //       }
  //       const resultSelectionHandler = function() {
  //         selectResultItem(resultIndex, true, false);
  //       };
    
  //       // Clicking anywhere on the item selects this location.
  //       // Additionally, create a button element to make this behavior
  //       // accessible under tab navigation.
  //       item.addEventListener('click', resultSelectionHandler);
  //       item.querySelector('.select-location')
  //           .addEventListener('click', function(e) {
  //             resultSelectionHandler();
  //             e.stopPropagation();
  //           });
    
  //       item.querySelector('.details-button')
  //           .addEventListener('click', function() {
  //             locator.showDetails(resultIndex);
  //           });
  //         };

          

  
  //       //  List for Dallas-----------------------------------------------------------------------

  //       if (locator.renderResultsList == "Texas") {
  //         dallasSectionEl.textContent = 'Nearest locations (' + locations.length + ')';
  //         locations.sort(function(a, b) {
  //           return getLocationDistance(a) - getLocationDistance(b);
  //         });
  //       } else {
  //         dallasSectionEl.textContent = `Dallas (${locations.length})`; //List Title
  //       }
  //       dallasResultsEl.innerHTML = itemsTemplate(resultItemContext);
  //     for (let item of dallasResultsEl.children) {
  //       const resultIndex = getResultIndex(item);
  //       if (resultIndex === locator.selectedLocationIdx) {
  //         item.classList.add('selected');
  //       }
  //       const resultSelectionHandler = function() {
  //         selectResultItem(resultIndex, true, false);
  //       };
    
  //       // Clicking anywhere on the item selects this location.
  //       // Additionally, create a button element to make this behavior
  //       // accessible under tab navigation.
  //       item.addEventListener('click', resultSelectionHandler);
  //       item.querySelector('.select-location')
  //           .addEventListener('click', function(e) {
  //             resultSelectionHandler();
  //             e.stopPropagation();
  //           });
    
  //       item.querySelector('.details-button')
  //           .addEventListener('click', function() {
  //             locator.showDetails(resultIndex);
  //           });
  //         };



  //       //  List for Houston-----------------------------------------------------------------------

  //       if (locator.renderResultsList == "Texas") {
  //         houstonSectionEl.textContent = 'Nearest locations (' + locations.length + ')';
  //         locations.sort(function(a, b) {
  //           return getLocationDistance(a) - getLocationDistance(b);
  //         });
  //       } else {
  //         houstonSectionEl.textContent = `Houston (${locations.length})`; //List Title
  //       }
  //       houstonResultsEl.innerHTML = itemsTemplate(resultItemContext);
  //     for (let item of houstonResultsEl.children) {
  //       const resultIndex = getResultIndex(item);
  //       if (resultIndex === locator.selectedLocationIdx) {
  //         item.classList.add('selected');
  //       }
  //       const resultSelectionHandler = function() {
  //         selectResultItem(resultIndex, true, false);
  //       };
    
  //       // Clicking anywhere on the item selects this location.
  //       // Additionally, create a button element to make this behavior
  //       // accessible under tab navigation.
  //       item.addEventListener('click', resultSelectionHandler);
  //       item.querySelector('.select-location')
  //           .addEventListener('click', function(e) {
  //             resultSelectionHandler();
  //             e.stopPropagation();
  //           });
    
  //       item.querySelector('.details-button')
  //           .addEventListener('click', function() {
  //             locator.showDetails(resultIndex);
  //           });
  //         };


  //       //  List for Kansas City-----------------------------------------------------------------------

  //       if (locator.renderResultsList == "Kansas City") {
  //         kansascitySectionEl.textContent = 'Nearest locations (' + locations.length + ')';
  //         locations.sort(function(a, b) {
  //           return getLocationDistance(a) - getLocationDistance(b);
  //         });
  //       } else {
  //         kansascitySectionEl.textContent = `Kansas City (${locations.length})`; //List Title
  //       }
  //       kansascityResultsEl.innerHTML = itemsTemplate(resultItemContext);
  //     for (let item of kansascityResultsEl.children) {
  //       const resultIndex = getResultIndex(item);
  //       if (resultIndex === locator.selectedLocationIdx) {
  //         item.classList.add('selected');
  //       }
  //       const resultSelectionHandler = function() {
  //         selectResultItem(resultIndex, true, false);
  //       };
    
  //       // Clicking anywhere on the item selects this location.
  //       // Additionally, create a button element to make this behavior
  //       // accessible under tab navigation.
  //       item.addEventListener('click', resultSelectionHandler);
  //       item.querySelector('.select-location')
  //           .addEventListener('click', function(e) {
  //             resultSelectionHandler();
  //             e.stopPropagation();
  //           });
    
  //       item.querySelector('.details-button')
  //           .addEventListener('click', function() {
  //             locator.showDetails(resultIndex);
  //           });
  //         };




  //       //  List for Indianapolis-----------------------------------------------------------------------

  //       if (locator.renderResultsList == "Indiana") {
  //         indianapolisSectionEl.textContent = 'Nearest locations (' + locations.length + ')';
  //         locations.sort(function(a, b) {
  //           return getLocationDistance(a) - getLocationDistance(b);
  //         });
  //       } else {
  //         indianapolisSectionEl.textContent = `Indianapolis (${locations.length})`; //List Title
  //       }
  //       indianapolisResultsEl.innerHTML = itemsTemplate(resultItemContext);
  //     for (let item of indianapolisResultsEl.children) {
  //       const resultIndex = getResultIndex(item);
  //       if (resultIndex === locator.selectedLocationIdx) {
  //         item.classList.add('selected');
  //       }
  //       const resultSelectionHandler = function() {
  //         selectResultItem(resultIndex, true, false);
  //       };
    
  //       // Clicking anywhere on the item selects this location.
  //       // Additionally, create a button element to make this behavior
  //       // accessible under tab navigation.
  //       item.addEventListener('click', resultSelectionHandler);
  //       item.querySelector('.select-location')
  //           .addEventListener('click', function(e) {
  //             resultSelectionHandler();
  //             e.stopPropagation();
  //           });
    
  //       item.querySelector('.details-button')
  //           .addEventListener('click', function() {
  //             locator.showDetails(resultIndex);
  //           });
  //         };




  //       //  List for Las Vegas-----------------------------------------------------------------------

  //       if (locator.renderResultsList == "Nevada") {
  //         lasvegasSectionEl.textContent = 'Nearest locations (' + locations.length + ')';
  //         locations.sort(function(a, b) {
  //           return getLocationDistance(a) - getLocationDistance(b);
  //         });
  //       } else {
  //         lasvegasSectionEl.textContent = `Las Vegas (${locations.length})`; //List Title
  //       }
  //       lasvegasResultsEl.innerHTML = itemsTemplate(resultItemContext);
  //     for (let item of lasvegasResultsEl.children) {
  //       const resultIndex = getResultIndex(item);
  //       if (resultIndex === locator.selectedLocationIdx) {
  //         item.classList.add('selected');
  //       }
  //       const resultSelectionHandler = function() {
  //         selectResultItem(resultIndex, true, false);
  //       };
    
  //       // Clicking anywhere on the item selects this location.
  //       // Additionally, create a button element to make this behavior
  //       // accessible under tab navigation.
  //       item.addEventListener('click', resultSelectionHandler);
  //       item.querySelector('.select-location')
  //           .addEventListener('click', function(e) {
  //             resultSelectionHandler();
  //             e.stopPropagation();
  //           });
    
  //       item.querySelector('.details-button')
  //           .addEventListener('click', function() {
  //             locator.showDetails(resultIndex);
  //           });
  //         };



  //       //  List for Memphis-----------------------------------------------------------------------

  //       if (locator.renderResultsList == "Tennessee") {
  //         memphisSectionEl.textContent = 'Nearest locations (' + locations.length + ')';
  //         locations.sort(function(a, b) {
  //           return getLocationDistance(a) - getLocationDistance(b);
  //         });
  //       } else {
  //         memphisSectionEl.textContent = `Memphis (${locations.length})`; //List Title
  //       }
  //       memphisResultsEl.innerHTML = itemsTemplate(resultItemContext);
  //     for (let item of memphisResultsEl.children) {
  //       const resultIndex = getResultIndex(item);
  //       if (resultIndex === locator.selectedLocationIdx) {
  //         item.classList.add('selected');
  //       }
  //       const resultSelectionHandler = function() {
  //         selectResultItem(resultIndex, true, false);
  //       };
    
  //       // Clicking anywhere on the item selects this location.
  //       // Additionally, create a button element to make this behavior
  //       // accessible under tab navigation.
  //       item.addEventListener('click', resultSelectionHandler);
  //       item.querySelector('.select-location')
  //           .addEventListener('click', function(e) {
  //             resultSelectionHandler();
  //             e.stopPropagation();
  //           });
    
  //       item.querySelector('.details-button')
  //           .addEventListener('click', function() {
  //             locator.showDetails(resultIndex);
  //           });
  //         };



  //         //  List for Northern AZ-----------------------------------------------------------------------

  //         if (locator.renderResultsList == "Arizona") {
  //           northernazSectionEl.textContent = 'Nearest locations (' + locations.length + ')';
  //           locations.sort(function(a, b) {
  //             return getLocationDistance(a) - getLocationDistance(b);
  //           });
  //         } else {
  //           northernazSectionEl.textContent = `Northern AZ (${locations.length})`; //List Title
  //         }
  //         northernazResultsEl.innerHTML = itemsTemplate(resultItemContext);
  //       for (let item of northernazResultsEl.children) {
  //         const resultIndex = getResultIndex(item);
  //         if (resultIndex === locator.selectedLocationIdx) {
  //           item.classList.add('selected');
  //         }
  //         const resultSelectionHandler = function() {
  //           selectResultItem(resultIndex, true, false);
  //         };
      
  //         // Clicking anywhere on the item selects this location.
  //         // Additionally, create a button element to make this behavior
  //         // accessible under tab navigation.
  //         item.addEventListener('click', resultSelectionHandler);
  //         item.querySelector('.select-location')
  //             .addEventListener('click', function(e) {
  //               resultSelectionHandler();
  //               e.stopPropagation();
  //             });
      
  //         item.querySelector('.details-button')
  //             .addEventListener('click', function() {
  //               locator.showDetails(resultIndex);
  //             });
  //           };



  //           //  List for San Antonio-----------------------------------------------------------------------

  //           if (locator.renderResultsList == "San Antonio") {
  //             sanantonioSectionEl.textContent = 'Nearest locations (' + locations.length + ')';
  //             locations.sort(function(a, b) {
  //               return getLocationDistance(a) - getLocationDistance(b);
  //             });
  //           } else {
  //             sanantonioSectionEl.textContent = `San Antonio (${locations.length})`; //List Title
  //           }
  //           sanantonioResultsEl.innerHTML = itemsTemplate(resultItemContext);
  //         for (let item of sanantonioResultsEl.children) {
  //           const resultIndex = getResultIndex(item);
  //           if (resultIndex === locator.selectedLocationIdx) {
  //             item.classList.add('selected');
  //           }
  //           const resultSelectionHandler = function() {
  //             selectResultItem(resultIndex, true, false);
  //           };
        
  //           // Clicking anywhere on the item selects this location.
  //           // Additionally, create a button element to make this behavior
  //           // accessible under tab navigation.
  //           item.addEventListener('click', resultSelectionHandler);
  //           item.querySelector('.select-location')
  //               .addEventListener('click', function(e) {
  //                 resultSelectionHandler();
  //                 e.stopPropagation();
  //               });
        
  //           item.querySelector('.details-button')
  //               .addEventListener('click', function() {
  //                 locator.showDetails(resultIndex);
  //               });
  //             };

  //                 //  List for St. Louis-----------------------------------------------------------------------

  //   if (locator.renderResultsList == "Missouri") {
  //     stlouisSectionEl.textContent = 'Nearest locations (' + locations.length + ')';
  //     locations.sort(function(a, b) {
  //       return getLocationDistance(a) - getLocationDistance(b);
  //     });
  //   } else {
  //     stlouisSectionEl.textContent = `St. Louis (${locations.length})`; //List Title
  //   }
  //   stlouisResultsEl.innerHTML = itemsTemplate(resultItemContext);
  // for (let item of stlouisResultsEl.children) {
  //   const resultIndex = getResultIndex(item);
  //   if (resultIndex === locator.selectedLocationIdx) {
  //     item.classList.add('selected');
  //   }
  //   const resultSelectionHandler = function() {
  //     selectResultItem(resultIndex, true, false);
  //   };

  //   // Clicking anywhere on the item selects this location.
  //   // Additionally, create a button element to make this behavior
  //   // accessible under tab navigation.
  //   item.addEventListener('click', resultSelectionHandler);
  //   item.querySelector('.select-location')
  //       .addEventListener('click', function(e) {
  //         resultSelectionHandler();
  //         e.stopPropagation();
  //       });

  //   item.querySelector('.details-button')
  //       .addEventListener('click', function() {
  //         locator.showDetails(resultIndex);
  //       });
  //     };



  //                 //  List for Tucson-----------------------------------------------------------------------

  //                 if (locator.renderResultsList == "Tucson") {
  //                   tucsonSectionEl.textContent = 'Nearest locations (' + locations.length + ')';
  //                   locations.sort(function(a, b) {
  //                     return getLocationDistance(a) - getLocationDistance(b);
  //                   });
  //                 } else {
  //                   tucsonSectionEl.textContent = `Tucson (${locations.length})`; //List Title
  //                 }
  //                 tucsonResultsEl.innerHTML = itemsTemplate(resultItemContext);
  //               for (let item of tucsonResultsEl.children) {
  //                 const resultIndex = getResultIndex(item);
  //                 if (resultIndex === locator.selectedLocationIdx) {
  //                   item.classList.add('selected');
  //                 }
  //                 const resultSelectionHandler = function() {
  //                   selectResultItem(resultIndex, true, false);
  //                 };
              
  //                 // Clicking anywhere on the item selects this location.
  //                 // Additionally, create a button element to make this behavior
  //                 // accessible under tab navigation.
  //                 item.addEventListener('click', resultSelectionHandler);
  //                 item.querySelector('.select-location')
  //                     .addEventListener('click', function(e) {
  //                       resultSelectionHandler();
  //                       e.stopPropagation();
  //                     });
              
  //                 item.querySelector('.details-button')
  //                     .addEventListener('click', function() {
  //                       locator.showDetails(resultIndex);
  //                     });
  //                   };



// Looping through submitted forms to get property details and output to details panel

// splicedForms.map(dispoAnswers => {const arr = JSON.parse("[" + dispoAnswers + "]"); 
// const formID = arr[0].shift(); 
// var finalArray = [arr];



// finalArray.forEach(function(elem) {


// const descripitionTitles = ["Beds: ", "Baths: ", "Garage: ", "Pool: ", "Sq Foot: ", "Lot Size: ", "Year Built: ", "Wholesale: ", "After Repair Value: ", photoLink, "Additional Notes: "];


// // const panelDetailsEl = document.getElementById('locator-details-tmpl');


// const htmlDetails = Handlebars.compile('locator-details-tmpl').innerHTML;



// console.log(elem[0]);



// let testingDetails = 
//   [elem[0][4], 
// "BathsVariable",
// "GarageVariable",
// elem[0][2],
// "SqftVariable",
// "LotSizeVariable",
// "YearVariable",
// elem[0][10],
//   "ARVVariable",
//  photoLink,
//   elem[0][3]]

// for (let testing of testingDetails) {


// var divParent = document.createElement('div');
// var divDescription = document.createElement('div');
// var pTitle = document.createElement('p');
// pTitle.classList.add("listTitle");
// divParent.classList.add('locations-panel-details')
// divDescription.classList.add("description");
// var spanDetails = document.createElement('span');
// spanDetails.classList.add("listItems");

// var photoLink = document.createElement('a'); //Creating a link for Property Photos
// photoLink.setAttribute("href", "link variable goes here") //Adding a link variable to the anchor for photos
// photoLink.style="font-weight: 600; font-size: 17px; font-style: italic;" //Styling the link text

// console.log(testing)
// spanDetails.innerText = testing

// pTitle.appendChild(spanDetails);
// divDescription.appendChild(pTitle);
// divParent.appendChild(divDescription);
// console.log(testingDetails);
// }

// // const html = htmlDetails(testingDetails);

// // document.querySelector(".listItems").append(html);

// const testing2Details = [
// `${'<p class="listTitle"><span class="listItems" id="beds">"Beds: "</span></p>'}` + "bedsVariable",
// "Baths: " + "bathsVariable",
// "Garage: " + "garageVariable",
// "Pool: " + "poolVariable",
// "Sq Foot: " + "sqftVariable",
// "Lot Size: " + "lotSizeVariable",
// "Year Built: " + "lotSizeVariable",
// "Wholesale: " + elem[0][10],
// "After Repair Value: " + "arvVariable",
// "Pictures: " + photoLink,
// "Additional Notes: " + "notesVariable"
// ]

// // const html = htmlDetails(testingDetails);


// const panelDetailsEl = document.getElementById('locations-panel-details');

// const detailsTemplate = Handlebars.compile(
//     document.getElementById('locator-details-tmpl').innerHTML);

  

// const renderDetails = function(context) {
//   panelDetailsEl.innerHTML = detailsTemplate(context);
//   panelDetailsEl.querySelector('.back-button')
//       .addEventListener('click', hideDetails);
// };


// divDescription.classList.add("description");
// pTitle.classList.add("listTitle");
// spanDetails.classList.add("listItems");



// console.log(testing2Details)

// const renderDetails = function(context) {
  
//   panelDetailsEl.innerHTML = htmlDetails(context);
//   panelDetailsEl.querySelector('.listItems')
  
//   renderDetails(context);
// };

// document.getElementById("wholesalePrice").innerText = testing2Details[7]["Wholesale: "]

// console.log(listDetails[7]["Wholesale: "])

// if (elem[0][0] == "AL") {
//   // testingDetails[0]["Wholesale: "] = elem[0][10]

//   pTitle.innerText = testing2Details[7]["Wholesale: "];

// pTitle.appendChild(photoLink);
// divDescription.appendChild(pTitle);
// }

// });
// });

// };









  // -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Optional capability initialization --------------------------------------
  initializeSearchInput(locator);
  initializeDetails(locator);

  // Initial render of results -----------------------------------------------
  locator.renderResultsList();
}

        // Filter Function
        
      //   $(document).ready(function() {
      //     $("#filterTable").on("keyup", function() {
      //         var value = $(this).val().toLowerCase();
      //         $(".results").filter(function() {
      //             $(this).toggle($(this).text()
      //             .toLowerCase().indexOf(value) > -1)
      //         });
      //     });
      // });

 



/** When the search input capability is enabled, initialize it. */
function initializeSearchInput(locator) {
  const geocodeCache = new Map();
  const geocoder = new google.maps.Geocoder();

  const searchInputEl = document.getElementById('location-search-input');
  const searchButtonEl = document.getElementById('location-search-button');

  const updateSearchLocation = function(address, location) {
    if (locator.searchLocationMarker) {
      locator.searchLocationMarker.setMap(null);
    }
    if (!location) {
      locator.searchLocation = null;
      return;
    }
    locator.searchLocation = {'address': address, 'location': location};
    locator.searchLocationMarker = new google.maps.Marker({
      position: location,
      map: locator.map,
      title: 'My location',
      icon: {
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        scale: 9,
        fillColor: '#3367D6',
        fillOpacity: 0.9,
        strokeOpacity: 0,
      }
    });

    // Update the locator's idea of the user's country, used for units. Use
    // `formatted_address` instead of the more structured `address_components`
    // to avoid an additional billed call.
    const addressParts = address.split(' ');
    locator.userCountry = addressParts[addressParts.length - 1];

    // Update map bounds to include the new location marker.
    locator.updateBounds();

    // Update the result list so we can sort it by proximity.
    locator.renderResultsList();
  };

  const geocodeSearch = function(query) {
    if (!query) {
      return;
    }

    const handleResult = function(geocodeResult) {
      searchInputEl.value = geocodeResult.formatted_address;
      updateSearchLocation(
          geocodeResult.formatted_address, geocodeResult.geometry.location);
    };

    if (geocodeCache.has(query)) {
      handleResult(geocodeCache.get(query));
      return;
    }
    const request = {address: query, bounds: locator.map.getBounds()};
    geocoder.geocode(request, function(results, status) {
      if (status === 'OK') {
        if (results.length > 0) {
          const result = results[0];
          geocodeCache.set(query, result);
          handleResult(result);
        }
      }
    });
  };

  // Set up geocoding on the search input.
  searchButtonEl.addEventListener('click', function() {
    geocodeSearch(searchInputEl.value.trim());
  });

  // Initialize Autocomplete.
  initializeSearchInputAutocomplete(
      locator, searchInputEl, geocodeSearch, updateSearchLocation);
}

/** Add Autocomplete to the search input. */
function initializeSearchInputAutocomplete(
    locator, searchInputEl, fallbackSearch, searchLocationUpdater) {
  // Set up Autocomplete on the search input. Bias results to map viewport.
  const autocomplete = new google.maps.places.Autocomplete(searchInputEl, {
    types: ['geocode'],
    fields: ['place_id', 'formatted_address', 'geometry.location']
  });
  autocomplete.bindTo('bounds', locator.map);
  autocomplete.addListener('place_changed', function() {
    const placeResult = autocomplete.getPlace();
    if (!placeResult.geometry) {
      // Hitting 'Enter' without selecting a suggestion will result in a
      // placeResult with only the text input value as the 'name' field.
      fallbackSearch(placeResult.name);
      return;
    }
    searchLocationUpdater(
        placeResult.formatted_address, placeResult.geometry.location);
  });
}

/** Initialize Place Details service and UI for the locator. --------------------------------------------------------------------*/
function initializeDetails(locator) {
  const panelDetailsEl = document.getElementById('locations-panel-details');
  const detailsService = new google.maps.places.PlacesService(locator.map);

  // const detailsTemplate = Handlebars.compile(
  //     document.getElementById('locator-details-tmpl').innerHTML);

    

  const renderDetails = function(context) {
    panelDetailsEl.innerHTML = detailsTemplate(context);
    panelDetailsEl.querySelector('.back-button')
        .addEventListener('click', hideDetails);
  };

  const hideDetails = function() {
    showElement(locator.panelListEl);
    hideElement(panelDetailsEl);
  };

  // locator.showDetails = function(locationIndex) {
  //   const location = locator.locations[locationIndex];
  //   const context = {location};
  

  //   // Helper function to create a fixed-size array.
  //   const initArray = function(arraySize) {
  //     const array = [];
  //     while (array.length < arraySize) {
  //       array.push(0);
  //     }
  //     return array;
  //   };


  //   if (location.placeId) { 
  //     const request = {
  //       placeId: location.placeId,
  //       fields: [
  //         'formatted_phone_number', 'website', 'opening_hours', 'url',
  //         'utc_offset_minutes', 'price_level', 'rating', 'user_ratings_total'
  //       ]
      
  //     };
  //     detailsService.getDetails(request, function(place, status) {
  //       if (status == google.maps.places.PlacesServiceStatus.OK) {
  //         if (place.opening_hours) {
  //           const daysHours =
  //               place.opening_hours.weekday_text.map(e => e.split(/\:\s+/))
  //                   .map(e => ({'days': e[0].substr(0, 3), 'hours': e[1]}));

  //           for (let i = 1; i < daysHours.length; i++) {
  //             if (daysHours[i - 1].hours === daysHours[i].hours) {
  //               if (daysHours[i - 1].days.indexOf('-') !== -1) {
  //                 daysHours[i - 1].days =
  //                     daysHours[i - 1].days.replace(/\w+$/, daysHours[i].days);
  //               } else {
  //                 daysHours[i - 1].days += ' - ' + daysHours[i].days;
  //               }
  //               daysHours.splice(i--, 1);
  //             }
  //           }
  //           place.openingHoursSummary = daysHours;
  //         }
  //         if (place.rating) {
  //           const starsOutOfTen = Math.round(2 * place.rating);
  //           const fullStars = Math.floor(starsOutOfTen / 2);
  //           const halfStars = fullStars !== starsOutOfTen / 2 ? 1 : 0;
  //           const emptyStars = 5 - fullStars - halfStars;

  //           // Express stars as arrays to make iterating in Handlebars easy.
  //           place.fullStarIcons = initArray(fullStars);
  //           place.halfStarIcons = initArray(halfStars);
  //           place.emptyStarIcons = initArray(emptyStars);
  //         }
  //         if (place.price_level) {
  //           place.dollarSigns = initArray(place.price_level);
  //         }
  //         if (place.website) {
  //           const url = new URL(place.website);
  //           place.websiteDomain = url.hostname;
  //         }

  //         context.place = place;
  //         renderDetails(context);
  //       }
  //     });
  //   }
  //   renderDetails(context);
  //   hideElement(locator.panelListEl);
  //   showElement(panelDetailsEl);
  // };
}