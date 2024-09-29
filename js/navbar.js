const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const sideMenuContainer = document.querySelector(`.menu-right`);
const hamburger = document.querySelector(`#hamburger`);
const overlay = document.querySelector(".overlay");

let isShowing = false;

openButton.addEventListener(`click`, () => {
  sideMenuContainer.classList.toggle("open");
  overlay.classList.toggle("active");
  hamburger1.style.display = `block`;
});
closeButton.addEventListener(`click`, () => {
  sideMenuContainer.classList.toggle("open");
  overlay.classList.remove("active");
});
