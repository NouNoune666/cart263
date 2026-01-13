"use strict";

// rect1
let rect1Fill = 'pink';
let rect1X = 20;
let rect1Y = 20;
let rect1W = 40;
// rect2
let rect2Fill = 'purple';
let rect2X = 40;
let rect2Y = 40;
let rect2W = 40;
// rect3
let rect3Fill = 'teal';
let rect3X = 60;
let rect3Y = 60;
let rect3W = 40;


function setup() {
    console.log("go");
    createCanvas(300, 300);
}

function draw() {

    background(0);
    push();
    fill(rect1Fill);
    rect(rect1X, rect1Y, rect1W);
    pop();
    push();
    fill(rect2Fill);
    rect(rect2X, rect2Y, rect2W);
    pop();
    push();
    fill(rect3Fill);
    rect(rect3X, rect3Y, rect3W);
    pop();
    rect3Y += -1;

    // Handle the canvas bounds
    if (rect3Y <= 0) {
        rect3Y = height;
    }
}
function mouseClicked() {
    rect1X += random(0, 100);
    rect1Y += random(0, 100);
}
function keyPressed() {
    if (keyCode === 32) {
        rect2X += random(0, 100);
    }
}






