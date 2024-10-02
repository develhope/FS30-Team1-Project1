const pauseButton = document.querySelector("pause-button");
const playButton = document.querySelector("play-button");
const playerButton = document.querySelector("player-button");

var isPaused = false;
const video = document.querySelector("video-card");

playButton.display = "none"

pauseButton.addEventListener("click", () => {
    if (video.paused) {
       video.play();
       playButton.display = "none";
       pauseButton.display = "block";
    } else {
        video.pause();
        pauseButton.display = "none";
        playButton.display = "block";
    }
       
} )