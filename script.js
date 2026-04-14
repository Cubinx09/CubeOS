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


// RESIZE DIV ELEMENTS


// 'OPEN' AND 'CLOSE' DIV ELEMENTS
var welcomeScreen = document.querySelector("#welcome");
var welcomeScreenOpen = document.querySelector("#welcomeOpen");

// for the apps
var fgcScreen = document.querySelector("#fgc");
var fgcScreenOpen = document.querySelector("#fgcOpen");
var gameRecScreen = document.querySelector("#gameRec");
var gameRecScreenOpen = document.querySelector("#gameOpen");

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
})


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
})




