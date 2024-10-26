const player = document.querySelector(".video-container");
const video = document.querySelector(".video-clip");
const playButton = document.querySelector(".play-button");
const bigPlayButton = document.querySelector(".big-play-button");
const progressBar = document.querySelector("#progress-bar");
const progress = document.querySelector("#progress");
const volumeRange = document.querySelector("#volume");
const volumeImg = document.querySelector(".volume-img");
const progressTime = document.querySelector(".current-time");
const videoDuration = document.querySelector(".video-duration");

function togglePlay() {
  if (video.paused) {
    video.play();
    playButton.textContent = "❚❚";
    bigPlayButton.style.display = "none";
  } else {
    video.pause();
    playButton.textContent = "▶";
    bigPlayButton.style.display = "block";
  }
}

function updateProgressBar() {
  const percent = (video.currentTime / video.duration) * 100;
  progress.style.width = `${percent}%`;
}

function slide(e) {
  video.currentTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
}

function setVolume() {
  video.volume = volumeRange.value;
  if (volumeRange.value == 0) {
    volumeImg.src = "./media/volume-off.svg";
  } else {
    volumeImg.src = "./media/volume.svg";
  }
}

function toggleVolume() {
  if (volumeImg.src.includes("media/volume.svg")) {
    volumeRange.value = 0; 
    volumeImg.src = "./media/volume-off.svg";
  } else {
    volumeRange.value = 0.5;
    volumeImg.src = "./media/volume.svg"; 
  }
}

function duration() {
  videoDuration.textContent = formatTime(video.duration);
}

function updateTime() {
  progressTime.textContent = formatTime(video.currentTime);
}

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return `${minutes}:${seconds}`;
}

video.addEventListener("click", togglePlay);
bigPlayButton.addEventListener("click", togglePlay);
playButton.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateProgressBar);
progressBar.addEventListener("click", slide);
volumeImg.addEventListener("click", toggleVolume);
volumeRange.addEventListener("input", setVolume);
video.addEventListener("loadedmetadata", duration);
video.addEventListener("timeupdate", updateTime);
