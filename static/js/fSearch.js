// import fetch from 'node-fetch';

// grab the fields and listen
const activityInput = document.querySelector('#fActivity');
const suggestions = document.querySelector('.suggestions');

activityInput.addEventListener('change', displayMatches);
activityInput.addEventListener('keyup', displayMatches);

// json endpoint for facilities/activities
const endpoint = '/js/activities-scratch.js';

const activities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => activities.push(...data));

// type ahead functions for activities field
// match on activity name
function findMatches(wordToMatch, activities) {
  return activities.filter(activity => {
    const regex = new RegExp(wordToMatch, 'gi');
    return activity.name.match(regex)
  });
}

// add first five matches to suggestions list
function displayMatches() {
  // get the matches and slice the top five
  const matchArray = findMatches(this.value, activities).slice(0,5);
  const html = matchArray.map(activity => {
    const regex = new RegExp(this.value, 'gi');
    const activityName = activity.name.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${activityName}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
  if (this.value === '') {
    suggestions.innerHTML = '';
  }
}

// map stuff
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
