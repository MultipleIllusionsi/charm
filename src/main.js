(function() {
  document.addEventListener("DOMContentLoaded", () => appInit());
})();

const appInit = () => {
  settingBcgColor();
};

const settingBcgColor = () => {
  const appBody = document.querySelector("body");
  const currentPageColor = window.getComputedStyle(appBody)
    .backgroundColor;

  if (window.innerWidth < 601) {
    const menu = document.querySelector(".header__nav");
    menu.style.backgroundColor = currentPageColor;
  }
};
