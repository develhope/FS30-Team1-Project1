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

carousel.addEventListener('scroll', updateButtonVisibility);

function updateButtonVisibility() {
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
  const itemWidth = 320;
  const threshold = itemWidth * 2;

  if (carousel.scrollLeft >= threshold) {
    prevButton.style.display = 'flex';
  } else {
    prevButton.style.display = 'none';
  }

  if (carousel.scrollLeft <= maxScrollLeft - threshold) {
    nextButton.style.display = 'flex';
  } else {
    nextButton.style.display = 'none';
  }
}
updateButtonVisibility();
nextButton.addEventListener('click', () => {
  carousel.scrollBy({
    left: itemWidth + 20,
    behavior: 'smooth',
  });
});

prevButton.addEventListener('click', () => {
  carousel.scrollBy({
    left: -(itemWidth + 20),
    behavior: 'smooth',
  });
});
