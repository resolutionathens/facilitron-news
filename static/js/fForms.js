var registerOrganizationCheckbox = document.querySelector('#registerOrganizationCheckbox');
var registerOrganizationFields = document.querySelector('#registerOrganizationFields');

registerOrganizationCheckbox.addEventListener('change', toggleOrganizationFields);


// fLoginForm functions

// fGetStartedForm functions

/** toggles visibility of organization fields in signup form */
function toggleOrganizationFields(e){
  if (registerOrganizationCheckbox.checked){
    registerOrganizationFields.classList.remove('d-none');
  } else {
    registerOrganizationFields.classList.add('d-none');
  }
}