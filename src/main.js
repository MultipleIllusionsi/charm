(function() {
  document.addEventListener("DOMContentLoaded", () => appInit());
})();

const appInit = () => {
  settingBcgColor();
};

const settingBcgColor = () => {
  const appBody = document.querySelector("body");
  const mainPageElement = document.querySelector("main");
  const currentPageBgColor = window.getComputedStyle(mainPageElement)
    .backgroundColor;
  appBody.style.background = currentPageBgColor;

  if (window.innerWidth < 601) {
    const menu = document.querySelector(".header__nav");
    menu.style.backgroundColor = currentPageBgColor;
  }
};
