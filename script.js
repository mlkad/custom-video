const player = document.querySelector('.player');
const video = document.querySelector('.video-clip');
const progress = document.querySelector('.progress');
const playButton = document.querySelector('.play-button');
const volume = document.querySelector('.volume');


function togglePlay() {
  if (video.paused) {
    video.play();
    playButton.textContent = "❚❚";

  } else {
    video.pause();
    playButton.textContent = "▶" ;
  }
}

function handleProcess() {
  const percent = (video.currentTime / video.duration) * 100;
  progress

}

video.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);