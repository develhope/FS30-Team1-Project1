const playPauseButton = document.getElementsByClassName("player-button");
      const video = document.getElementsByClassName("video-card");
      let isPlaying = false;

      playPauseButton.addEventListener("click", function () {
        const icon = playPauseButton.querySelector(".icon");

        if (isPlaying) {
          video.pause();
          icon.classList.remove("pause");
          icon.classList.add("play");
        } else {
          video.play();
          icon.classList.remove("play");
          icon.classList.add("pause");
        }
        isPlaying = !isPlaying;
      });