//bringing the different elements we need in DOM
let nowPlaying = document.querySelector(".show_song_no");
let trackImg = document.getElementById("track_image");
let trackArtist = document.getElementById("artist");
let trackName = document.getElementById("title");

let previousBtn = document.getElementById("pre");
let playBtn = document.getElementById("play");
let pauseBtn = document.getElementById("pause");
let nextBtn = document.getElementById("next");

let durationSlider = document.getElementById("duration_slider");
let volumeSlider = document.querySelector(".volume-slider");
let currentTrack = document.createElement("audio");

let trackIndex = 0;
let isPlaying = false;

//an array for our music list
const musicList = [
  {
    img: "images/faded.jpeg",
    name: "Faded",
    artist: "Alan Walker",
    music: "music/Alan-Walker-Faded.mp3",
  },
  {
    img: "images/themonster.jpeg",
    name: "monster",
    artist: "Eminem ft Rihanna",
    music: "music/Eminem-ft.-Rihanna-The-Monster-wowplus.net_.mp3",
  },
  {
    img: "images/alive.jpeg",
    name: "Alive",
    artist: "Sia",
    music: "music/Sia-Alive-wowplus.net_.mp3",
  }
];

//loading our songs into the DOM

loadTrack(trackIndex);

function loadTrack(trackIndex) {
  currentTrack.src = musicList[trackIndex].music;
  currentTrack.load();
  // trackImg.style.backgroundImage = "url (" + musicList[trackIndex].img + ")";
  trackImg.src = musicList[trackIndex].img;
  trackName.textContent = musicList[trackIndex].name;
  trackArtist.textContent = musicList[trackIndex].artist;
  nowPlaying.textContent = [trackIndex + 1] + "of" + musicList.length;

  currentTrack.addEventListener("ended", nextSong);
}

//a function to repeat current song
function repeatTrack() {
  let currentIndex = trackIndex;
  loadTrack(currentIndex);
  playTrack();
}

//function to play track
function justPlay() {
  isPlaying ? pauseTrack() : playTrack();
}

//function to pause track
function justPause() {
  isPlaying ? pauseTrack() : playTrack();
}

//a function to make the songs play
function playTrack() {
  currentTrack.play();
  isPlaying = true;
  trackImg.classList.add("rotate");
  justPlay.innerHtml = `<i class="fa fa-pause-circle-o"></i>`;
}

//a function to pause the songs
function pauseTrack() {
  currentTrack.pause();
  isPlaying = false;
  trackImg.classList.remove("rotate");
  justPlay.innerHtml = `<i class="fas fa-play-circle"></i>`;
}

//a function to move to the next song
function nextSong() {
  if (trackIndex < musicList.length - 1) {
    trackIndex += 1;
  } else {
    trackIndex = 0;
  }
  loadTrack(trackIndex);
  playTrack();
}

//a function to move to the previous song
function previouSong() {
  if (trackIndex > 0) {
    trackIndex -= 1;
  } else {
    trackIndex = musicList.length - 1;
  }
  loadTrack(trackIndex);
  playTrack();
}
