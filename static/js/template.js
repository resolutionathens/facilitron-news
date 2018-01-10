/** hides an element by adding 'd-none' to the classList */
function hideElement(el) {
  if (el.classList.contains("d-none")) {
    return;
  } else {
    el.classList.add("d-none");
  }
}

/** validates email through regex */
function validateEmail(sEmail) {
  var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (filter.test(sEmail)) {
    return true;
  } else {
    return false;
  }
}

/** capitalizes first letter of a string */
var capitalizeFirstLetter=function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/** takes a string and returns an escaped string  */
var escapeRegExp=function (str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

