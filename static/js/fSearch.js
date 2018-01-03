// import fetch from 'node-fetch';
const endpoint = '/js/activities-scratch.js';

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

function findMatches(wordToMatch, activities) {
  return activities.filter(activity => {
    const regex = new RegExp(wordToMatch, 'gi');
    return activity.name.match(regex)
  });
}

function displayMatches() {
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

const searchInput = document.querySelector('#fActivity');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
