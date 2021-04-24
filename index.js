console.log("gdfhdg");
let seconds = 0;
let minutes = 0;
let hours = 0;

//display time value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
//LET TO HOLD SET INTERVEL FUNCTION
let interval = null;

//var to hold status

let status = "stopped"
////////////
function stopwatch() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }
    //adding zeros to  one digites h/m/s
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    };
    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }
    if (hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }
    // ////////////////////////////////////////////   
    //updated time value
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}


function startStop() {
    if (status === "stopped") {
        //start the stopwatch by calling set intervel
        interval = window.setInterval(stopwatch, 100);
        document.getElementById("start").innerHTML = "Stop";
        status = "started";
    } else {
        window.clearInterval(interval);
        document.getElementById("start").innerHTML = "Start";
        status = "stopped";
    }
}
function reset(){
    window.clearInterval(interval);
    seconds= 0;
    minutes = 0;
    hours = 0;

    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("start").innerHTML = "Start"
}

