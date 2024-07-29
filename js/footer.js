const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const light_svg = document.getElementById('light_svg');
light_svg.style.visibility = 'hidden';

function turnOffOn() {
  if (light_svg.style.visibility === 'hidden') {
    light_svg.style.visibility = 'visible';
  } else {
    light_svg.style.visibility = 'hidden';
  }
}

button1.onclick = turnOffOn();
button2.onclick = turnOffOn();
button3.onclick = turnOffOn();
