const header = document.querySelector("header");

const changeMobileMenu = function () {
  const btnToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  btnToggle.addEventListener("click", () => {
    header.classList.toggle("open-header"); //Apply mobile menu styles to headder
    nav.classList.toggle("hidden"); //Show Navigation links
    nav.nextElementSibling.classList.toggle("hidden"); //Show Social icons

    // Toggle between hamburger icon and close icon
    if (btnToggle.classList.contains("bg-menu")) {
      btnToggle.classList.remove("bg-menu");
      btnToggle.classList.add("bg-close");
    } else if (btnToggle.classList.contains("bg-close")) {
      btnToggle.classList.remove("bg-close");
      btnToggle.classList.add("bg-menu");
    }
  });
};

changeMobileMenu();
switchTabs();
switchAccordion();

// sticky navbar
window.addEventListener("scroll", () => {
  console.log();
  if (window.scrollY >= 10) {
    header.classList.add("sticky");
    header.classList.add("shadow-lg");
    // header.nextElementSibling.classList.add('pt-28');
  } else {
    header.classList.remove("sticky");
    header.classList.remove("shadow-lg");
    // header.nextElementSibling.classList.remove('pt-28');
  }
});

// email validation
const emailForm = document.querySelector("#email-form");
const emailInput = document.querySelector("#email");
const errMsg = document.querySelector("[data-error]");
const btnContact = document.querySelector("[data-btn-contact]");
let msg = "";
const pattern =
  /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

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
    console.log(emailInput.value.trim().length);
    msg = "Email can not be empty!";
    showError(msg);
  } else if (pattern.test(emailInput.value)) {
    noError();
    return true;
  } else {
    msg = "Invalid Email!";
    showError(msg);
  }
};

emailInput.addEventListener("keyup", () => {
  validateEmail();
});

emailForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  if (validateEmail()) {
    emailForm.reset();
    btnContact.classList.add("valid");
    btnContact.innerHTML = "Done";
  }
});
