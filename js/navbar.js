const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const sideMenuContainer = document.querySelector(`.menu-right`);
const hamburger = document.querySelector(`#hamburger`);
const overlay = document.querySelector(".overlay");
const yellowBoxContainer = document.querySelector(".box-yellow");

const closeIkea = document.querySelector(".close-Ikea");
const icon = document.querySelector(".rotate-icon");

const menu = document.querySelector(".menu");

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

// closeIkea.addEventListener(`click`, () => {
//   document
//     .querySelector(".box-yellow")
//     .classList.toggle("go-shopping-menu-closed");
//   document
//     .querySelector(".box-light-yellow")
//     .classList.toggle("go-shopping-menu-closed");
//   document
//     .querySelector(".search-icon")
//     .classList.toggle("go-shopping-menu-closed");
//   document
//     .querySelector(".find-store-input")
//     .classList.toggle("go-shopping-menu-closed");
//   document
//     .querySelector("find-store-input")
//     .classList.toggle("find-store-input-open");
//   document
//     .querySelector("#button-list")
//     .classList.toggle("go-shopping-menu-closed");
//   document.querySelector("#button-list").classList.toggle("button-list-open");

//   // yellowBoxContainer.classList.toggle("open");
//   icon.classList.toggle("rotate");
// });

closeIkea.addEventListener("click", () => {
  yellowBoxContainer.classList.toggle("open");
  icon.classList.toggle("rotate");
});

var prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    menu.style.top = "0";
  } else {
    menu.style.top = "-100px";
  }
  prevScrollPos = currentScrollPos;
};
