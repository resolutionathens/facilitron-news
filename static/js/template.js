/** hides an element by adding 'd-none' to the classList */
function hideElement(el) {
  if (el.classList.contains("d-none")) {
    return;
  } else {
    el.classList.add("d-none");
  }
}
