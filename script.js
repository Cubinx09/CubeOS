// CLOCK LOGIC
function updateTime() {
    // converts data of date and time into a string //
        var currentTime = new Date().toLocaleString();

        // fetches the time on the desktop //
        var timeText = document.querySelector("#timeElement");

        // time on the desktop now gets automatically updated//
        timeText.innerHTML = currentTime;
    }

    // function runds every 1 second//
    setInterval(updateTime, 1000);




// MAKE THE DIV ELEMENT DRAGGABLE
dragElement(document.getElementById("welcome"));
dragElement(document.querySelector("#fgc"));
dragElement(document.querySelector("#gameRec"));
dragElement(document.querySelector("#CodeName"));
dragElement(document.querySelector("#beetle"));
dragElement(document.querySelector("#spolousEx"));
dragElement(document.querySelector("#goldenIdol"));
dragElement(document.querySelector("#metalDogs"));
dragElement(document.querySelector("#art"));
dragElement(document.querySelector("#notes"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



// 'OPEN' AND 'CLOSE' DIV ELEMENTS
var welcomeScreen = document.querySelector("#welcome");
var welcomeScreenOpen = document.querySelector("#welcomeOpen");

// for the apps
var fgcScreen = document.querySelector("#fgc");
var fgcScreenOpen = document.querySelector("#fgcOpen");
var gameRecScreen = document.querySelector("#gameRec");
var gameRecScreenOpen = document.querySelector("#gameOpen");
var artScreen = document.querySelector("#art");
var artScreenOpen = document.querySelector("#artOpen");
var noteScreen = document.querySelector("#notes");
var noteScreenOpen = document.querySelector("#notesOpen");

// for the articles
var codeNameSteamScreen = document.querySelector("#CodeName");
var codeNameSteamScreenOpen = document.querySelector("#CodeNameOpen");
var beetleScreen = document.querySelector("#beetle");
var beetleScreenOpen = document.querySelector("#beetleOpen");
var spolousExScreen = document.querySelector("#spolousEx");
var spolousExScreenOpen = document.querySelector("#spolousExOpen");
var goldenIdolScreen = document.querySelector("#goldenIdol");
var goldenIdolScreenOpen = document.querySelector("#goldenIdolOpen");
var metalDogsScreen = document.querySelector("#metalDogs");
var metalDogsScreenOpen = document.querySelector("#metalDogsOpen");

// close buttons
var welcomeScreenClose = document.querySelector("#welcomeClose");
var fgcScreenClose = document.querySelector("#fgcClose");
var gameRecScreenClose = document.querySelector("#gameClose");
var codeNameSteamScreenClose = document.querySelector("#CodeNameClose");
var beetleScreenClose = document.querySelector("#beetleClose");
var spolousExScreenClose = document.querySelector("#spolousExClose");
var goldenIdolScreenClose = document.querySelector("#goldenIdolClose");
var metalDogsScreenClose = document.querySelector("#metalDogsClose");
var artScreenClose = document.querySelector("#artClose");
var noteScreenClose = document.querySelector("#notesClose");


// makes window dissapear when clicking on the close button
function closeWindow(elmnt){
  elmnt.style.display = "none";
}

// makes welcome window reappear when clicking on 'CubeOS'
function openWindow(elmnt){
  elmnt.style.display = "block";

}

// makes the close function an event
welcomeScreenClose.addEventListener("click", function(){
  closeWindow(welcomeScreen);
});
fgcScreenClose.addEventListener("click", function(){
  closeWindow(fgcScreen);
});
gameRecScreenClose.addEventListener("click", function(){
  closeWindow(gameRecScreen);
});
codeNameSteamScreenClose.addEventListener("click", function(){
  closeWindow(codeNameSteamScreen);
});
beetleScreenClose.addEventListener("click", function(){
  closeWindow(beetleScreen);
})
spolousExScreenClose.addEventListener("click", function(){
  closeWindow(spolousExScreen);
});
goldenIdolScreenClose.addEventListener("click", function(){
  closeWindow(goldenIdolScreen);
});
metalDogsScreenClose.addEventListener("click", function(){
  closeWindow(metalDogsScreen);
});
artScreenClose.addEventListener("click", function(){
  closeWindow(artScreen);
});
noteScreenClose.addEventListener("click", function(){
  closeWindow(noteScreen);
});


// makes the open function an event
welcomeScreenOpen.addEventListener("click", function(){
  openWindow(welcomeScreen);
});
fgcScreenOpen.addEventListener("click", function(){
  openWindow(fgcScreen);
});
gameRecScreenOpen.addEventListener("click", function(){
  openWindow(gameRecScreen);
});
codeNameSteamScreenOpen.addEventListener("click", function(){
  openWindow(codeNameSteamScreen);
});
beetleScreenOpen.addEventListener("click", function(){
  openWindow(beetleScreen);
});
spolousExScreenOpen.addEventListener("click", function(){
  openWindow(spolousExScreen);
});
goldenIdolScreenOpen.addEventListener("click", function(){
  openWindow(goldenIdolScreen);
});
metalDogsScreenOpen.addEventListener("click", function(){
  openWindow(metalDogsScreen);
});
artScreenOpen.addEventListener("click", function(){
  openWindow(artScreen);
});
noteScreenOpen.addEventListener("click", function(){
  openWindow(noteScreen);
});

// CHANGE Z-INDEX
var windows = document.getElementsByClassName("window");
for(let i = 0; i < windows.length; i++){
    let eachWindow = windows[i];
    eachWindow.addEventListener("mousedown", function(){
        windows = document.getElementsByClassName("window"); // redefine in case number of windows has changed for some reason (depends on the project ig)
        for(let j = 0; j < windows.length; j++){
             windows[j].style.zIndex = "1";
        }
        this.style.zIndex = "2";
    });
}



// MUSIC PLAYER //
let now_playing = document.querySelector(".now-playing");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    name: "Empty Your Mind",
    artist: "KenKoTaiji",
    path: "music/Empty Your Mind - KenKoTaiji.mp3",
  },
  {
    name: "KI-KI-KI-SS ME MORE",
    artist: "DIETRAX",
    path: "music/02 DieTRAX - KI-KI-KI-SS ME MORE.mp3",
  },
  {
    name: "SP-TRIP MACHINE（JUNGLE MIX)",
    artist: "Naoki Maeda (DDR)",
    path: "music/SP-TRIP MACHINE（JUNGLE MIX）.mp3",
  },
];


function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = "<p> Playing </p>";
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = "<p> Paused </p>";
}

function nextTrack() {
  if (track_index < track_list.length)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0){
    track_index -= 1;
  }
  else {
    track_index = track_list.length;
  }
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

// DOWNLOADING NOTES
function download(file, text){
  // creating an invinsible element

  let e = document.createElement('a');

  e.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(text));
  e.setAttribute('download', file);
  document.body.appendChild(e);
  e.click();

  document.body.removeChild(e);
}

// start file download
document.getElementById("btn").addEventListener("click",function(){
  let text = document.getElementById("text").value;

  let filename = "notes.txt";

  download(filename,text);
  
}, false);

//REFRESH TEXTAREA
const textarea = document.getElementById("text");
var refresBtn = document.getElementById("refresh");

refresh.addEventListener('click', function(){
  console.log(textarea.value);
  textarea.value = '';
});