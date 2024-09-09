const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const sideMenuContainer = document.querySelector(`.menu-right`);

let isShowing = false;

openButton.addEventListener(`click`, () => {
  sideMenuContainer.classList.toggle("open");
});
closeButton.addEventListener(`click`, () => {
  sideMenuContainer.classList.toggle("open");
});
