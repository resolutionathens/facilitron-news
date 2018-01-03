// import fetch from 'node-fetch';
const endpoint = './activities.js';

const activities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => activities.push(...data));

function initMap(){
  var options = {
    componentRestrictions: {
      country: 'us'
    }
  }
  var fLocation = document.getElementById('fLocation')
  var autocomplete = new google.maps.places.Autocomplete(fLocation, options)
}

function initSearch() {
  console.log('initSearch fired and all else was loaded.')
}

