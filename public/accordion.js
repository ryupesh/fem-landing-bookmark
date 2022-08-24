const switchAccordion = function () {
  const accordion = document.querySelector("[data-accordion]");
  const labels = document.querySelectorAll("[data-accordion-label]");
  const panels = document.querySelectorAll("[data-accordion-panel]");

  const hideAllPanels = function () {
    panels.forEach((panel, i) => {
      panel.classList.remove("max-h-48");
      panel.classList.add("max-h-0");
      panel.removeAttribute("data-open");
    });
  };

  const resetAllArrows = function () {
    labels.forEach((label) => {
      label.classList.add("arrow-rotate-0");
      label.classList.remove("arrow-rotate-180");
    });
  };

  accordion.addEventListener("click", (ev) => {
    labels.forEach((label, i) => {
      //check if clicked item == label div
      if (ev.target.tagName === "DIV" && ev.target.isEqualNode(label)) {
        let panelHeight = panels[i].scrollHeight;

        if (panels[i].hasAttribute("data-open")) {
          //if panel is already opened => close the panel
          hideAllPanels();
          resetAllArrows();
        } else {
          hideAllPanels();
          resetAllArrows();
          //open the curent panel
          panels[i].classList.remove("max-h-0");
          panels[i].classList.add("max-h-48");
          panels[i].setAttribute("data-open", "");

          label.classList.add("arrow-rotate-180");
          label.classList.remove("arrow-rotate-0");
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
