
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

