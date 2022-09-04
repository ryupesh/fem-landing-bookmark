const accordion = document.querySelector("[data-accordion]");
const labels = document.querySelectorAll("[data-accordion-label]");
const arrows = document.querySelectorAll("[data-accordion-arrow]");
const panels = document.querySelectorAll("[data-accordion-panel]");

const resetAllPanelsArrows = function () {
  panels.forEach((panel) => {
    panel.classList.remove("max-h-48");
    panel.classList.add("max-h-0");
    panel.removeAttribute("data-open");
  });

  arrows.forEach((arrow) => {
    arrow.classList.add("rotate-0");
    arrow.classList.remove("rotate-180");
  });
};

const switchAccordion = function () {
  accordion.addEventListener("click", (ev) => {
    labels.forEach((label, i) => {
      //check if clicked item == label div
      if (ev.target.tagName === "DIV" && ev.target.isEqualNode(label)) {

        if (panels[i].hasAttribute("data-open")) {
          //if panel is already opened => close the panel
          resetAllPanelsArrows();
        } else {
          resetAllPanelsArrows();
          //open the curent panel
          panels[i].classList.remove("max-h-0");
          panels[i].classList.add("max-h-48");
          panels[i].setAttribute("data-open", "");

          //change direction of current dropdown arrow to open
          arrows[i].classList.add("rotate-180");
          arrows[i].classList.remove("rotate-0");
        }
      }
    });
  });
};

/**
 * ! HTML Structure
 * * ul[data-accordion] > li.overflow-hidden*3 > div[data-accordion-label] + div[data-accordion-panel].h-0
 */

/**
 * ! CSS classes
 * * .open
 */
