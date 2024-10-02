const openButton = document.querySelector('.open');
const closeButton = document.querySelector('.close');
const sideMenuContainer = document.querySelector(`.menu-right`);
const hamburger = document.querySelector(`#hamburger`);
const overlay = document.querySelector('.overlay');
const yellowBoxContainer = document.querySelector('.box-yellow');

const closeIkea = document.querySelector('.close-Ikea');
const icon = document.querySelector('.rotate-icon');

const menu = document.querySelector('.menu');

const miniPickerOpener = document.querySelector('.drawer-opener');
const miniPickerContainer = document.querySelector('.mini-picker-container');

const rotateArrowMiniPicker = document.querySelector('.minipicker-list');

let isShowing = false;

openButton.addEventListener(`click`, () => {
  sideMenuContainer.classList.toggle('open');
  overlay.classList.toggle('active');
  hamburger.style.display = `block`;
});
closeButton.addEventListener(`click`, () => {
  sideMenuContainer.classList.toggle('open');
  overlay.classList.remove('active');
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

closeIkea.addEventListener('click', () => {
  yellowBoxContainer.classList.toggle('open');
  icon.classList.toggle('rotate');
});

var prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    menu.style.top = '0';
    miniPickerContainer.style.top = '5%';
  } else {
    menu.style.top = '-100px';
    miniPickerContainer.style.top = '-10%';
  }
  prevScrollPos = currentScrollPos;
};

miniPickerOpener.addEventListener('click', () => {
  document
    .querySelector('.minipicker-list-container')
    .classList.toggle('minipicker-list-container-closed');

  document
    .querySelector('.website-link')
    .classList.toggle('website-link-closed');

  document
    .querySelector('.drawer-opener')
    .classList.toggle('drawer-opener-radius');

  rotateArrowMiniPicker.classList.toggle('open');
  icon.classList.toggle('rotate');
});
