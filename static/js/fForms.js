// #fGetStartedForm
const formContent = document.getElementById("fGetStartedContent");

// form templates to swap in and out in the getStarted modal
// allows us to direct requests to application, sales, or support
const commercialForm = `<form id="signup-form" name="signup_form" novalidate="novalidate"> <input type="text" id="signup-organization-name" name="signup_organization_name" placeholder="Organization name"> <input type="email" id="signup-email" name="signup_email" placeholder="Email address"> <input type="text" id="first-name" name="first_name" placeholder="First name"> <input type="text" id="last_name" name="last_name" placeholder="Last name"> <input type="password" id="signup-password" name="signup_password" placeholder="Password (at least 5 characters)"> <input type="tel" id="phone" name="phone" placeholder="Phone">  <input type="text" id="signup-org-street" name="signup_org_street" placeholder="Street"> <input type="text" id="signup-org-city" name="signup_org_city" placeholder="City"> <select id="signup-org-state" name="signup_org_state" class="form-control modal-field"> <option value="">Select State</option> <option value="AL">Alabama</option> <option value="AK">Alaska</option> <option value="AZ">Arizona</option> <option value="AR">Arkansas</option> <option value="CA">California</option> <option value="CO">Colorado</option> <option value="CT">Connecticut</option> <option value="DE">Delaware</option> <option value="DC">District of Columbia</option> <option value="FL">Florida</option> <option value="GA">Georgia</option> <option value="HI">Hawaii</option> <option value="ID">Idaho</option> <option value="IL">Illinois</option> <option value="IN">Indiana</option> <option value="IA">Iowa</option> <option value="KS">Kansas</option> <option value="KY">Kentucky</option> <option value="LA">Louisiana</option> <option value="ME">Maine</option> <option value="MD">Maryland</option> <option value="MA">Massachusetts</option> <option value="MI">Michigan</option> <option value="MN">Minnesota</option> <option value="MS">Mississippi</option> <option value="MO">Missouri</option> <option value="MT">Montana</option> <option value="NE">Nebraska</option> <option value="NV">Nevada</option> <option value="NH">New Hampshire</option> <option value="NJ">New Jersey</option> <option value="NM">New Mexico</option> <option value="NY">New York</option> <option value="NC">North Carolina</option> <option value="ND">North Dakota</option> <option value="OH">Ohio</option> <option value="OK">Oklahoma</option> <option value="OR">Oregon</option> <option value="PA">Pennsylvania</option> <option value="RI">Rhode Island</option> <option value="SC">South Carolina</option> <option value="SD">South Dakota</option> <option value="TN">Tennessee</option> <option value="TX">Texas</option> <option value="UT">Utah</option> <option value="VT">Vermont</option> <option value="VA">Virginia</option> <option value="WA">Washington</option> <option value="WV">West Virginia</option> <option value="WI">Wisconsin</option> <option value="WY">Wyoming</option> </select> <input type="text" id="signup-org-zip" name="signup_org_zip" placeholder="Zip"> <div id="form-accept"> <p class="small-text">By clicking "Create Account" I agree to Facilitron's <a href="/terms">Terms and Conditions</a> and <a href="/privacy">Privacy Policy</a>.</p> <div class="text-center mt-2"> <button id="btn-signup" type="submit" class="btn btn-primary">Create Account 🚀</button> </div> </div> </form>`;
const individualForm = `<form id="signup-form" name="signup_form" novalidate="novalidate"> <input type="email" id="signup-email" name="signup_email" placeholder="Email address"> <input type="text" id="first-name" name="first_name" placeholder="First name"> <input type="text" id="last_name" name="last_name" placeholder="Last name"> <input type="password" id="signup-password" name="signup_password" placeholder="Password (at least 5 characters)"> <input type="tel" id="phone" name="phone" placeholder="Phone"> <input type="text" id="signup-org-street" name="signup_org_street" placeholder="Street"> <input type="text" id="signup-org-city" name="signup_org_city" placeholder="City"> <select id="signup-org-state" name="signup_org_state" class="form-control modal-field"> <option value="">Select State</option> <option value="AL">Alabama</option> <option value="AK">Alaska</option> <option value="AZ">Arizona</option> <option value="AR">Arkansas</option> <option value="CA">California</option> <option value="CO">Colorado</option> <option value="CT">Connecticut</option> <option value="DE">Delaware</option> <option value="DC">District of Columbia</option> <option value="FL">Florida</option> <option value="GA">Georgia</option> <option value="HI">Hawaii</option> <option value="ID">Idaho</option> <option value="IL">Illinois</option> <option value="IN">Indiana</option> <option value="IA">Iowa</option> <option value="KS">Kansas</option> <option value="KY">Kentucky</option> <option value="LA">Louisiana</option> <option value="ME">Maine</option> <option value="MD">Maryland</option> <option value="MA">Massachusetts</option> <option value="MI">Michigan</option> <option value="MN">Minnesota</option> <option value="MS">Mississippi</option> <option value="MO">Missouri</option> <option value="MT">Montana</option> <option value="NE">Nebraska</option> <option value="NV">Nevada</option> <option value="NH">New Hampshire</option> <option value="NJ">New Jersey</option> <option value="NM">New Mexico</option> <option value="NY">New York</option> <option value="NC">North Carolina</option> <option value="ND">North Dakota</option> <option value="OH">Ohio</option> <option value="OK">Oklahoma</option> <option value="OR">Oregon</option> <option value="PA">Pennsylvania</option> <option value="RI">Rhode Island</option> <option value="SC">South Carolina</option> <option value="SD">South Dakota</option> <option value="TN">Tennessee</option> <option value="TX">Texas</option> <option value="UT">Utah</option> <option value="VT">Vermont</option> <option value="VA">Virginia</option> <option value="WA">Washington</option> <option value="WV">West Virginia</option> <option value="WI">Wisconsin</option> <option value="WY">Wyoming</option> </select> <input type="text" id="signup-org-zip" name="signup_org_zip" placeholder="Zip"> <div id="form-accept"> <p class="small-text">By clicking "Create Account" I agree to Facilitron's <a href="/terms">Terms and Conditions</a> and <a href="/privacy">Privacy Policy</a>.</p> <div class="text-center mt-2"> <button id="btn-signup" type="submit" class="btn btn-primary">Create Account 🚀</button> </div> </div> </form> `;
const nonProfitForm = `<form id="signup-form" name="signup_form" novalidate="novalidate"> <input type="text" id="signup-organization-name" name="signup_organization_name" placeholder="Organization name"> <input type="text" id="signup-org-ein" name="signup_org_ein" placeholder="EIN (required if tax exempt)"> <input type="email" id="signup-email" name="signup_email" placeholder="Email address"> <input type="text" id="first-name" name="first_name" placeholder="First name"> <input type="text" id="last_name" name="last_name" placeholder="Last name"> <input type="password" id="signup-password" name="signup_password" placeholder="Password (at least 5 characters)"> <input type="tel" id="phone" name="phone" placeholder="Phone"> <input type="text" id="signup-org-street" name="signup_org_street" placeholder="Street"> <input type="text" id="signup-org-city" name="signup_org_city" placeholder="City"> <select id="signup-org-state" name="signup_org_state" class="form-control modal-field"> <option value="">Select State</option> <option value="AL">Alabama</option> <option value="AK">Alaska</option> <option value="AZ">Arizona</option> <option value="AR">Arkansas</option> <option value="CA">California</option> <option value="CO">Colorado</option> <option value="CT">Connecticut</option> <option value="DE">Delaware</option> <option value="DC">District of Columbia</option> <option value="FL">Florida</option> <option value="GA">Georgia</option> <option value="HI">Hawaii</option> <option value="ID">Idaho</option> <option value="IL">Illinois</option> <option value="IN">Indiana</option> <option value="IA">Iowa</option> <option value="KS">Kansas</option> <option value="KY">Kentucky</option> <option value="LA">Louisiana</option> <option value="ME">Maine</option> <option value="MD">Maryland</option> <option value="MA">Massachusetts</option> <option value="MI">Michigan</option> <option value="MN">Minnesota</option> <option value="MS">Mississippi</option> <option value="MO">Missouri</option> <option value="MT">Montana</option> <option value="NE">Nebraska</option> <option value="NV">Nevada</option> <option value="NH">New Hampshire</option> <option value="NJ">New Jersey</option> <option value="NM">New Mexico</option> <option value="NY">New York</option> <option value="NC">North Carolina</option> <option value="ND">North Dakota</option> <option value="OH">Ohio</option> <option value="OK">Oklahoma</option> <option value="OR">Oregon</option> <option value="PA">Pennsylvania</option> <option value="RI">Rhode Island</option> <option value="SC">South Carolina</option> <option value="SD">South Dakota</option> <option value="TN">Tennessee</option> <option value="TX">Texas</option> <option value="UT">Utah</option> <option value="VT">Vermont</option> <option value="VA">Virginia</option> <option value="WA">Washington</option> <option value="WV">West Virginia</option> <option value="WI">Wisconsin</option> <option value="WY">Wyoming</option> </select> <input type="text" id="signup-org-zip" name="signup_org_zip" placeholder="Zip"> <div id="form-accept"> <p class="small-text">By clicking "Create Account" I agree to Facilitron's <a href="/terms">Terms and Conditions</a> and <a href="/privacy">Privacy Policy</a>.</p> <div class="text-center mt-2"> <button id="btn-signup" type="submit" class="btn btn-primary">Create Account 🚀</button> </div> </div> </form>`;
const newPartnerForm = `<form id="signup-form" name="signup_form" novalidate="novalidate"> <input type="text" id="signup-organization-name" name="signup_organization_name" placeholder="Organization name"> <input type="email" id="signup-email" name="signup_email" placeholder="Email address"> <input type="text" id="first-name" name="first_name" placeholder="First name"> <input type="text" id="last_name" name="last_name" placeholder="Last name"> <div id="form-accept"> <p class="small-text">By clicking "Create Account" I agree to Facilitron's <a href="/terms">Terms and Conditions</a> and <a href="/privacy">Privacy Policy</a>.</p> <div class="text-center mt-2"> <button id="btn-signup" type="submit" class="btn btn-primary">Create Account 🚀</button> </div> </div> </form>`;
const administratorForm = `<form id="signup-form" name="signup_form" novalidate="novalidate"> <input type="text" id="signup-organization-name" name="signup_organization_name" placeholder="Organization name"> <input type="email" id="signup-email" name="signup_email" placeholder="Email address"> <input type="text" id="first-name" name="first_name" placeholder="First name"> <input type="text" id="last_name" name="last_name" placeholder="Last name"> <input type="tel" id="phone" name="phone" placeholder="Phone"> <input type="text" id="signup-org-zip" name="signup_org_zip" placeholder="Zip"> <div id="form-accept"> <p class="small-text">By clicking "Create Account" I agree to Facilitron's <a href="/terms">Terms and Conditions</a> and <a href="/privacy">Privacy Policy</a>.</p> <div class="text-center mt-2"> <button id="btn-signup" type="submit" class="btn btn-primary">Create Account 🚀</button> </div> </div> </form>`;
const signupDescriptions = `<div id="form-descriptions"> <h5 class="h5-responsive">Organization Types:</h5> <p> <b>Commercial</b> &mdash; My organization is a business</p> <p> <b>Individual</b> &mdash; I'm looking to rent facilities for myself.</p> <p> <b>Non-profit</b> &mdash; My organization is a registered non-profit (EIN required) or receives a special rate. <sup>*</sup> </p> <p> <b>New Partner</b> &mdash; I have facilities I would like to list.</p> <p> <b>Administrator</b> &mdash; I need access to my organization's Facilitron account.</p> <p> <sup>*</sup>Reservations will be assigned a commercial rate until your organization is verified.</p> </div>`;

const orgSelect = document.getElementById("signup-org-type");

/** changes form content based on Organization select */
orgSelect.addEventListener("change", function(e) {
  // values: commercial=8, individual=1, non-profit=2, administrator=0, new-partner=99
  switch (parseInt(e.target.value)) {
    case 1:
      //show individual form
      replaceFormContent(individualForm);
      break;
    case 2:
      // show non-profit form
      replaceFormContent(nonProfitForm);
      break;
    case 8:
      //show commercial form
      replaceFormContent(commercialForm);
      break;
    case 99:
      //show new partner form
      replaceFormContent(newPartnerForm);
      break;
    case 0:
      //show administrator form
      replaceFormContent(administratorForm);
      break;
    default:
      //show descriptions
      replaceFormContent(signupDescriptions);
  }
});

/** replaces formContent */
function replaceFormContent(form) {
  formContent.innerHTML = form;
}

/** opens create account form and selects new-partner */
function openGetStartedTo(theForm) {
  var getStartedModal = $('#fGetStartedForm');
  closeAllModals();
  getStartedModal.modal('show');
  replaceFormContent(theForm);
}

/** opens sign up modal and populates administrator form */
function administratorSignup(){
  $("#signup-org-type").val(0);
  openGetStartedTo(administratorForm);
}

/** opens sign up modal and populates newPartner form */
function newPartnerSignup(){
  $("#signup-org-type").val(99);
  openGetStartedTo(newPartnerForm);
}

function resetGetStarted(){
  $("#signup-org-type").val('');
  replaceFormContent(signupDescriptions);
}

function closeGetStarted(){
  var getStartedModal = $('#fGetStartedForm');
  getStartedModal.modal('hide');
  resetGetStarted();
}

function openGetStartedModal(){
  var getStartedModal = $('#fGetStartedForm');
  var loginModal = $('#fLoginForm')
  closeAllModals();
  resetGetStarted();
  getStartedModal.modal('show');
}

function openLoginModal(){
  var getStartedModal = $('#fGetStartedForm');
  var loginModal = $('#fLoginForm')
  closeAllModals();
  resetGetStarted();
  loginModal.modal('show');
}

function openForgotPassModal(){
  var forgotPassModal = $('#forgotpass-form');
  closeAllModals();
  resetGetStarted();
  forgotPassModal.modal('show');
}

function closeAllModals(){
  var forgotPassModal = $('#forgotpass-form');
  var getStartedModal = $('#fGetStartedForm');
  var loginModal = $('#fLoginForm');
  getStartedModal.modal('hide');
  loginModal.modal('hide');
  forgotPassModal.modal('hide');
}
