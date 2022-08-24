const switchTabs = function () {
  const tabList = document.querySelector("[data-tab-list]");
  const panelList = document.querySelector("[data-panel-list]");

  const tabs = Array.from(tabList.children);
  const panels = Array.from(panelList.children);

  tabList.addEventListener("click", (ev) => {
    //hide all tabs/panels and later only active-tab/panel visible
    tabs.forEach((tab) => tab.classList.remove("active"));
    panels.forEach((panel) => panel.classList.add("hidden"));

    if (ev.target.tagName === "LI") {
      ev.target.classList.add("active"); //make clicked tab active

      // if (clicked tab == tab from tabs) => make Panel[tab-index] visible
      tabs.forEach((tab, i) => {
        if (ev.target.isEqualNode(tab)) panels[i].classList.remove("hidden");
      });
    }
  });
};

/*
! HTML structure
* ul['data-tab-list'] > li*3 and li[0].active
* div['data-panel-list'] > div*3 and div[not(0)].hidden

! CSS classes needed
* ul[data-tab-list].active { active-tab-styles }
*/
