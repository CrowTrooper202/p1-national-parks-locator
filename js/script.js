

//variable for map box API
var mapKey = "pk.eyJ1IjoiYXNiMjAyIiwiYSI6ImNsZzJkcmxudTA0aDkzdHFzMHh1Mzk0a3cifQ.HQAX2YLQBEZjcagat-k8vw"

mapboxgl.accessToken = mapKey;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-98.7, 39.7], // starting position [lng, lat]
    zoom: 2, // starting zoom
});


map.on('load', () => {
    // Load an image from an external URL.
    map.loadImage(
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_of_the_United_States_National_Park_Service.svg/1200px-Logo_of_the_United_States_National_Park_Service.svg.png',
        (error, image) => {
            if (error) throw error;

            // Add the image to the map style.
            map.addImage('cat', image);

            // Add a data source containing one point feature.
            map.addSource('point', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-98.7, 39.7]
                            }
                        }
                    ]
                }
            });

            // Add a layer to use the image to represent the data.
            map.addLayer({
                'id': 'points',
                'type': 'symbol',
                'source': 'point', // reference the data source
                'layout': {
                    'icon-image': 'cat', // reference the image
                    'icon-size': 0.02
                }
            });
        }
    );
});


// National parks API call: need to replace STATE with the results of the state pulldown menu; returns lat and lon by park
var STATE = document.selectArtibute('.dropdown-item')
var apiKey = "6Nd3QpLEE05BdiKDL5AMEu9GVW08cRlapS83eKaQ"
var apiCall = 'https://developer.nps.gov/api/v1/parks?stateCode=' + "PA" + '&api_key=' + apiKey

fetch(apiCall)

    .then(function (response) {
        console.log(response);
        return response.json();

    })
    .then(function (data) {
        console.log(data);
    })

//nationalParckBtn.on('click', function(){
//    var lat = [park].place.date(lat);
//    var long = [park].place.date(long);
// -----------------------------------------------------------------------------------------------
// Code to take results of natl parks API call and append it to the search result tiles

for (var i = 0; i < 10; i++) {
    var searchResults = document.querySelector('#search-results');
    searchResults.style.cssText = 'display: flex; flex-wrap: wrap; justify-content: center; width: 50%'

    var parkCard = document.createElement('div');
    parkCard.style.cssText = 'border: 2px solid #000000; margin: 10px; padding: 10px; width: 40%'
    
    var cardTitle = document.createElement('h3');
    cardTitle.innerHTML = 'CARD TITLE';
    
    var cardState = document.createElement('h3');
    cardState.innerHTML = 'CARD STATE';
    
    var cardActivities = document.createElement('h3');
    cardActivities.innerHTML = 'Available Activities';
    
    var cardList = document.createElement('ul');
    var actList1 = document.createElement('li');
    actList1.innerHTML = 'LIST ITEM 1'
    var actList2 = document.createElement('li');
    actList2.innerHTML = 'LIST ITEM 2'
    var actList3 = document.createElement('li');
    actList3.innerHTML = 'LIST ITEM 3'
   
    parkCard.appendChild(cardTitle);
    parkCard.appendChild(cardState);
    parkCard.appendChild(cardActivities);
    parkCard.appendChild(cardList);
    parkCard.appendChild(actList1);
    parkCard.appendChild(actList2);
    parkCard.appendChild(actList3);
    
    searchResults.appendChild(parkCard);
}

//    const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v12', // style URL
//     center: [long, lat], // starting position [lng, lat]
//     zoom: 9, // starting zoom
// });
// })
//     center: [-74.5, 40], // starting position [lng, lat]
//     zoom: 9, // starting zoom
// });

var clickDropdown = document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function (event) {
        event.stopPropagation();
        dropdown.classList.toggle('is-active');
    });
});


