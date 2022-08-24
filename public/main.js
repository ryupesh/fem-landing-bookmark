const changeMobileMenu = function () {
  const header = document.querySelector("header");
  const btnToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  btnToggle.addEventListener("click", () => {
    header.classList.toggle("open-header");
    nav.classList.toggle("hidden"); //Navigation links
    nav.nextElementSibling.classList.toggle("hidden"); //Social icons

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
