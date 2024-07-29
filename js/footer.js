const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const light_svg = document.querySelector('#light_svg');
light_svg.style.visibility = 'hidden';
let light_on = false;

function turnOffOn() {
  if (light_on == false) {
    light_on = true;
    light_svg.style.visibility = 'visible';
  } else {
    light_on = false;
    light_svg.style.visibility = 'hidden';
  }
}

button1.onclick = turnOffOn();
button2.onclick = turnOffOn();
button3.onclick = turnOffOn();
