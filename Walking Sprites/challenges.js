// ===============================
// Canvas Walking Sprite Challenge
// ===============================

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");

pencil.imageSmoothingEnabled = false;

let directionFacing = "front";

let zombieBack = document.getElementById("zombie_back");
let zombieFront = document.getElementById("zombie_front");
let zombieRight = document.getElementById("zombie_right");
let zombieLeft = document.getElementById("zombie_left");

let x = 150;
let y = 100;

function draw() {
  let image = zombieRight;
  if(directionFacing == "front") {
    image = zombieFront;
  } else if (directionFacing == "back") {
    image = zombieBack;
  } else if (directionFacing == "left") {
    image = zombieLeft
  }

  pencil.clearRect(0, 0, canvas.width, canvas.height);
  pencil.drawImage(image, x, y, 100, 100);
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    x += 5;
    directionFacing = "right"
  } else if (e.key === "ArrowLeft") {
    x -= 5;
    directionFacing = "left"
  } else if (e.key === "ArrowUp") {
    y -= 5;
    directionFacing = "back"
  } else if (e.key === "ArrowDown") {
    y += 5;
    directionFacing = "front"
  }

  draw();

});

// initial draw
draw();