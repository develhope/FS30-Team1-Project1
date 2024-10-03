document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
      const video = card.querySelector('.video-card');
      const button = card.querySelector('.player-button');

      // Add null checks to avoid errors
      if (!video || !button) {
          console.error('Video or button not found in:', card);
          return; // Skip this card if video or button is not found
      }

      const playIcon = button.querySelector('.play');
      const pauseIcon = button.querySelector('.pause');

      // Ensure play and pause icons are present
      if (!playIcon || !pauseIcon) {
          console.error('Play or pause icon not found in button for:', card);
          return; // Skip if icons are missing
      }

      // Set initial state based on whether the video is playing
      if (!video.paused) {
          playIcon.style.display = 'none';   // Hide play icon
          pauseIcon.style.display = 'block';  // Show pause icon
      } else {
          playIcon.style.display = 'block';   // Show play icon
          pauseIcon.style.display = 'none';  // Hide pause icon
      }

      // Toggle play/pause on button click
      button.addEventListener('click', function (event) {
          event.preventDefault();
          event.stopPropagation(); // Ensure button does not interact with <a> tag

          if (video.paused) {
              video.play();
          } else {
              video.pause();
          }
      });

      // Update icons when the video starts playing
      video.addEventListener('play', function () {
          playIcon.style.display = 'none';   // Hide play icon
          pauseIcon.style.display = 'block';  // Show pause icon
      });

      // Update icons when the video is paused
      video.addEventListener('pause', function () {
          playIcon.style.display = 'block';   // Show play icon
          pauseIcon.style.display = 'none';    // Hide pause icon
      });

      // Reset to play icon when the video ends
      video.addEventListener('ended', function () {
          playIcon.style.display = 'block';   // Show play icon
          pauseIcon.style.display = 'none';    // Hide pause icon
      });
  });
});