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
window.addEventListener('scroll',()=>{
  console.log();
if(window.scrollY>=10){
  header.classList.add('sticky');
  header.classList.add('shadow-lg');
  // header.nextElementSibling.classList.add('pt-28');

}
  else {
    header.classList.remove('sticky');
    header.classList.remove('shadow-lg');
    // header.nextElementSibling.classList.remove('pt-28');
  }
});
