document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
      const video = card.querySelector('.video-card');
      const button = card.querySelector('.player-button');
      const playIcon = button.querySelector('.play');
      const pauseIcon = button.querySelector('.pause');

      // Set the initial state based on autoplay
      video.play(); // Make sure the video is playing
      playIcon.style.display = 'none';   // Hide play icon
      pauseIcon.style.display = 'block';  // Show pause icon

      button.addEventListener('click', function (event) {
          event.preventDefault(); // Prevent default behavior if inside a link
          
          if (video.paused) {
              video.play();
              playIcon.style.display = 'none';  // Hide play icon
              pauseIcon.style.display = 'block'; // Show pause icon
          } else {
              video.pause();
              playIcon.style.display = 'block';   // Show play icon
              pauseIcon.style.display = 'none';    // Hide pause icon
          }
      });

      // Handle video ended event
      video.addEventListener('ended', function () {
          playIcon.style.display = 'block'; // Show play icon when video ends
          pauseIcon.style.display = 'none';  // Hide pause icon
      });
  });
});