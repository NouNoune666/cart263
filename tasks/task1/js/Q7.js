"use strict";

let state = "circle";

let circleSize = 20;
let circleXstart = 0;
let circleYstart = 0;
let circleSpacing = 20;

let fillR;
let fillG;
let fillB;
// possible to do colors in other system than RGB?

let squareSize = 20;
let squareXstart = -10;
let squareYstart = -10;
let squareSpacing = 20;


function setup() {
    createCanvas(800, 800);
    giveColor();
}

function draw() {
    background(0);

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            if (state === "circle") {
                fill(fillR, fillG, fillB);
                ellipse(circleXstart + circleSpacing * x, circleYstart + circleSpacing * y, circleSize)
            }
            else if (state === "square") {
                fill(fillR, fillG, fillB);
                rect(squareXstart + squareSpacing * x, squareYstart + squareSpacing * y, squareSize);
            }
        }
    }
}

function giveColor() {
    fillR = random(255);
    fillG = random(255);
    fillB = random(255);
}

function keyPressed() {
    // difference between key vs keycode
    if (keyCode === 32) {
        giveColor();
    }
}

function mouseClicked() {
    if (state === "circle") {
        state = "square"
    }
    else if (state === "square") {
        state = "circle"
    }
}