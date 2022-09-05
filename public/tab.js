const switchTabs = function () {
  const tabList = document.querySelector("[data-tab-list]");
  const panelList = document.querySelector("[data-panel-list]");

  const tabs = [...tabList.children];
  const panels = [...panelList.children];

  tabList.addEventListener("click", (ev) => {
    //hide all tabs and panels
    tabs.forEach((tab) => tab.classList.remove("active-tab"));
    panels.forEach((panel) => panel.classList.add("hidden"));

    if (ev.target.tagName === "LI") {
      ev.target.classList.add("active-tab"); //make clicked tab active

      tabs.forEach((tab, i) => {
        if (ev.target.isEqualNode(tab)) panels[i].classList.remove("hidden"); //make Panel visible for current tab
      });
    }
  });
};

/*
! HTML structure
* ul['data-tab-list'] > li*3 and li[0].active-tab
* div['data-panel-list'] > div*3 and div[not(0)].hidden

! CSS classes needed
* ul[data-tab-list].active-tab { active-tab-styles }
*/
