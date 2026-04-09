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
var welcomeScreenClose = document.querySelector("#welcomeClose");
var welcomeScreenOpen = document.querySelector("#welcomeOpen");


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

// makes the open function an event
welcomeScreenOpen.addEventListener("click", function(){
  openWindow(welcomeScreen);
});
