// WORKING CLOCK //


// WORKING CLOCK//

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