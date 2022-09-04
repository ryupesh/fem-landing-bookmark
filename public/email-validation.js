const emailForm = document.querySelector("#email-form");
const emailInput = document.querySelector("#email");
const errMsg = document.querySelector("[data-error]");
const btnContact = document.querySelector("[data-btn-contact]");
const pattern =
  /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  
  
//   on err => 
//   inputGroup container = bg-red-500 rounded-lg
//   data-email = border-2 border-red-500
//   data-error = remove(hidden)
const showError = function (msg) {
  emailInput.parentElement.classList.add("bg-red-500");
  emailInput.parentElement.classList.add("rounded-lg");

  emailInput.classList.add("border-2");
  emailInput.classList.add("border-red-500");

  emailInput.nextElementSibling.classList.remove("hidden");

  errMsg.innerHTML = msg;
};

const noError = function () {
  emailInput.parentElement.classList.remove("bg-red-500");
  emailInput.parentElement.classList.add("rounded-lg");

  emailInput.classList.remove("border-2");
  emailInput.classList.remove("border-red-500");

  emailInput.nextElementSibling.classList.add("hidden");
};

const validateEmail = function () {
  // check empty
  if (emailInput.value.trim().length === 0) {
    showError("Email can not be empty!");
  } else if (pattern.test(emailInput.value)) {
    noError();
    return true;
  } else {
    showError("Whoops! your email id is invalid!");
  }
};

emailInput.addEventListener("keyup", () => {
  validateEmail();
});

emailForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  if (validateEmail()) {
    emailForm.reset();
    btnContact.classList.add("hidden");
    emailInput.classList.add("bg-green-500");
    emailInput.classList.add("text-white");
    emailInput.value="Your email id is submitted!"
    emailInput.setAttribute("disabled","");
  }
});
