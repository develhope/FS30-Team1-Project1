const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const sideMenuContainer = document.querySelector(`.menu-right`);
const hamburger = document.querySelector(`#hamburger`);
const overlay = document.querySelector(".overlay");

const closeIkea = document.querySelector(".close-Ikea");

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

closeIkea.addEventListener(`click`, () => {
  document
    .querySelector(".box-yellow")
    .classList.toggle("go-shopping-menu-closed");
  document
    .querySelector(".box-light-yellow")
    .classList.toggle("go-shopping-menu-closed");
  document
    .querySelector(".search-icon")
    .classList.toggle("go-shopping-menu-closed");
  document
    .querySelector(".find-store-input")
    .classList.toggle("go-shopping-menu-closed");
  document
    .querySelector(".find-store-input")
    .classList.toggle(".find-store-input-open");
  document
    .querySelector("#button-list")
    .classList.toggle("go-shopping-menu-closed");
  document.querySelector("#button-list").classList.toggle("button-list-open");
});
