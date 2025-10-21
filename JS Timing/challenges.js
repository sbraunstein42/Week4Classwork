// ================================
// JavaScript Timing Challenges
// ================================

// -----------------------------------------------
// Challenge 1: Basic Timeout
// Use setTimeout to log "Hello after 2 seconds!" after exactly 2000 milliseconds.

function sayHello() {
    console.log("Hello after 2 seconds!")
}
setTimeout(sayHello, 2000);

// -----------------------------------------------
// Challenge 2: Countdown
// Write a countdown from 3 to 1 using three setTimeout calls.
// Each number should appear one second apart in the console.

function say3() {
    console.log("3");
}

function say2() {
    console.log("2");
}

function say1() {
    console.log("1");
}

setTimeout(say3, 1000);
setTimeout(say2, 2000);
setTimeout(say1, 3000);


// -----------------------------------------------
// Challenge 3: Repeating Message
// Use setInterval to log "Still going..." every second.
// After 5 seconds, stop the interval using clearInterval.

function onInterval() {
    console.log("Still going...")
}

let intervalId = setInterval(onInterval, 1000);

function stopIt() {
    console.log("Stopped the interval!");
    clearInterval(intervalId);
}

setTimeout(stopIt, 5000);


// -----------------------------------------------
// Challenge 4: Delayed Color Change
// Create a <div> in your HTML file with id="box". Put some text in it.
// After 3 seconds, change its background color to blue using setTimeout.
let box = document.getElementById("box");

function turnItBlue() {
    box.style.backgroundColor = "#0000ff";
}

setTimeout(turnItBlue, 3000);

// -----------------------------------------------
// Challenge 5: Flashing Box
// Create a <div> in your HTML file with id="box2". Put some text in it.
// Using setInterval, make the same box’s background color toggle
// between red and white every half second (500 ms).
// Add a setTimeout to stop the flashing after 5 seconds... or when you click on it!

let isRed = false;
let box2 = document.getElementById("box2");

function changeColors() {
    if(isRed) {
        box2.style.backgroundColor = "red";
        isRed = false;
    } else {
        box2.style.backgroundColor = "white";
        isRed = true;
    }
}

let changingColorsIntervalId = setInterval(changeColors, 500);

function stopChangingColors() {
    clearInterval(changingColorsIntervalId);
}
let stopChangingColorsId = setTimeout(stopChangingColors, 5000);

function onClickedBox2() {
    clearInterval(changingColorsIntervalId);
    clearInterval(stopChangingColorsId);
}
box2.addEventListener("click", onClickedBox2)

