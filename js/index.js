const textContainer = document.querySelector(".card-text-container");
const cardContainer = document.querySelector(".card-arrow-container");
// const sideMenuContainer = document.querySelector(`.menu-right`);
// const hamburger = document.querySelector(`#hamburger`);
// const overlay = document.querySelector(".overlay");
// const storeButtom = document.querySelector(".store-buttom")

let isShowing = false;

textContainer.addEventListener(`mouse-hover`, () => {
    textContainer.classList.toggle("card-text-container:hover");
});

textContainer.addEventListener(`mouse-out`, () => {
    textContainer.classList.toggle("card-text.container:out");
    overlay.classList.remove("active");
});