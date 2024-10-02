const pauseButton = document.querySelector('pause-button');
const playButton = document.querySelector('play-button');
const playerButton = document.querySelector('player-button');

var isPaused = false;
const video = document.querySelector('video-card');

// playButton.display = 'none';

// pauseButton.addEventListener('click', () => {
//   if (video.paused) {
//     video.play();
//     playButton.display = 'none';
//     pauseButton.display = 'block';
//   } else {
//     video.pause();
//     pauseButton.display = 'none';
//     playButton.display = 'block';
//   }
// });

const carousel = document.querySelector('.carousel');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.previous');

const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
const itemWidth = 320;
const threshold = itemWidth * 2;
const offset = 1;
updateButtonVisibility();
carousel.addEventListener('scroll', updateButtonVisibility);

function updateButtonVisibility() {
  if (carousel.scrollLeft > offset) {
    prevButton.style.display = 'flex';
  } else {
    prevButton.style.display = 'none';
  }

  if (carousel.scrollLeft < maxScrollLeft - offset) {
    nextButton.style.display = 'flex';
  } else {
    nextButton.style.display = 'none';
  }
}

nextButton.addEventListener('click', () => {
  console.log('nextButton clicked');
  carousel.scrollBy({
    left: itemWidth,
    behavior: 'smooth',
  });
});

prevButton.addEventListener('click', () => {
  console.log('prevButton clicked');
  carousel.scrollBy({
    left: -itemWidth,
    behavior: 'smooth',
  });
});
