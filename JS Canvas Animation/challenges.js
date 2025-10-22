// ================================
// Canvas Animation Challenges
// ================================

const canvas = document.getElementById("myCanvas");
const pencil = canvas.getContext("2d");

// -----------------------------------------------
// Challenge 1: Clear the Canvas
// Draw a red square at (50, 50). 
// After 2 seconds, clear the entire canvas.

// pencil.fillStyle = "red";     // color to fill the rectangle
// pencil.fillRect(50, 50, 50, 50); // x, y, width, height

// function clearCanvas() {
//     pencil.clearRect(0,0, 500, 500);
// }

// setTimeout(clearCanvas, 2000);


// -----------------------------------------------
// Challenge 2: Blinking Shape
// Draw a blue circle on the canvas.
// Use setInterval to make it appear and disappear every half second.

// let canDraw = false;

// function blinkCircle() {

//     canDraw = !canDraw

//     if(canDraw) {
//         pencil.beginPath(); //begin your path
//         pencil.arc(150, 200, 50, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
//         pencil.fillStyle = "blue";
//         pencil.fill();
//     } else {
//         pencil.clearRect(0,0, 500, 500);
//     }
// }

// setInterval(blinkCircle, 500);


// -----------------------------------------------
// Challenge 3: Growing Circle
// Draw a small green circle that gets bigger every 50ms.
// Use setInterval, and clear + redraw each frame.
// Stop when its radius reaches 50.

// let radius = 0;

// function growCircle() {

//     if(radius >= 50) return;
//     radius++;
//     pencil.clearRect(0,0, 500, 500);
//     pencil.beginPath(); //begin your path
//     pencil.arc(150, 200, radius, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
//     pencil.fillStyle = "green";
//     pencil.fill();
// }

// setInterval(growCircle, 50);

// -----------------------------------------------
// Challenge 4: Moving Ball
// Draw a circle starting at x = 0.
// Use setInterval to move it to the right by 5 pixels every 100ms.
// Clear the canvas each time before redrawing.
// Stop when the ball goes to the right 100 units (pixels)

// let ballX = 0;

// function moveBall() {

//     if(ballX >= 100) {
//         return;
//     }

//     pencil.clearRect(0,0, 500, 500);
//     ballX = ballX + 5;

//     pencil.beginPath(); //begin your path
//     pencil.arc(150 + ballX, 200, 50, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
//     pencil.fillStyle = "green";
//     pencil.fill();
// }

// setInterval(moveBall, 100);



// -----------------------------------------------
// Challenge 5: Bouncing Balls
// Draw two balls moving at different speeds and directions.
// Each time a ball hits a wall, make it bounce (reverse its direction).
// Use clearRect() each frame to keep the motion smooth.


let redBallX = 100;
let greenBallX = 200;

let redBallSpeed = 2;
let greenBallSpeed = 1;

function moveBalls() {
    pencil.clearRect(0,0, 500, 500);

    //Do stuff with the red ball!
    redBallX += redBallSpeed;

    pencil.beginPath();
    pencil.arc(redBallX, 100, 50, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
    pencil.fillStyle = "red";
    pencil.fill();

    if(redBallX > 450) {
        redBallSpeed *= -1;
    }
    if(redBallX < 50) {
        redBallSpeed *= -1;
    }

    //Do stuff with the green ball!
    greenBallX += greenBallSpeed;

    pencil.beginPath(); 
    pencil.arc(greenBallX, 150, 20, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
    pencil.fillStyle = "green";
    pencil.fill();

    if(greenBallX > 480) {
        greenBallSpeed *= -1;
    }
    if(greenBallX < 20) {
        greenBallSpeed *= -1;
    }

}

setInterval(moveBalls, 5);




