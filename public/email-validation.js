const emailForm = document.querySelector("#email-form");
const emailInput = document.querySelector("#email");
const errMsg = document.querySelector("[data-error]");
const btnContact = document.querySelector("[data-btn-contact]");
const pattern =
  /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

// show error message
const showErrorMsg = function (msg) {
  emailInput.classList.add("border-2", "border-red-500");
  emailInput.parentElement.classList.add("bg-red-500", "rounded-lg");
  emailInput.nextElementSibling.classList.remove("hidden");

  errMsg.innerHTML = msg;
};

// hide error message
const clearErrorMsg = function () {
  emailInput.classList.remove("border-2", "border-red-500");
  emailInput.parentElement.classList.remove("bg-red-500", "rounded-lg");
  emailInput.nextElementSibling.classList.add("hidden");
};

// show success message
const showSuccessMsg = function () {
  const successToast = document.createElement("div");
  successToast.className =
    "p-2 my-8 bg-green-300 text-green-800 rounded-lg border border-green-800";
  successToast.setAttribute("data-success", "");
  let html = `
  <span>${emailInput.value} has been added. Thank you!</span>
  `;
  successToast.innerHTML = html;
  emailForm.parentElement.append(successToast);
};

// validation logic for  email id
const validateEmail = function () {
  // check empty
  if (emailInput.value.trim().length === 0) {
    showErrorMsg("Email can not be empty!");
  } else if (pattern.test(emailInput.value)) {
    clearErrorMsg();
    return true;
  } else {
    showErrorMsg("Whoops! your email id is invalid!");
  }
};

// on input from user validate email id and show/hide error msgs
emailInput.addEventListener("keyup", () => {
  validateEmail();
});

// on submit
emailForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  if (validateEmail()) {
    showSuccessMsg();
    emailForm.reset();
    setTimeout(() => {
      document.querySelector("[data-success]").remove();
    }, 4000);
  }
});
