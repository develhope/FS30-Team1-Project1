const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const light_svg = document.querySelector('#light_svg');
light_svg.style.visibility = 'hidden';

function turnOffOn() {
  if (light_svg.style.visibility === 'hidden') {
    light_svg.style.visibility = 'visible';
  } else {
    light_svg.style.visibility = 'hidden';
  }
}

button1.onclick = turnOffOn;
button2.onclick = turnOffOn;
button3.onclick = turnOffOn;

// const hourHand = document.querySelector('.hour-hand');
// const minuteHand = document.querySelector('.minute-hand');
// const secondHand = document.querySelector('.second-hand');

// function setDate() {
//   const now = new Date();

//   const seconds = now.getSeconds();
//   const secondsDegrees = (second / 60) * 360 + 90;
//   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

//   const minutes = now.getMinutes();
//   const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
//   minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

//   const hours = now.getHours();
//   const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
//   hourHand.style.transform = `rotate(${minutesDegrees}deg)`;
// }

// setInterval(setDate, 1000);
// setDate();

const lightsSVG = document.querySelector('#light_svg');

function rgbLight() {
  
}

setInterval(rgbLight, 1000);