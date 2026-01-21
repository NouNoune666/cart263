"use strict";

let state = "circleSquare";

let circleSize = 20;
let circleXstart = 10;
let circleYstart = 10;
let circleSpacingX = 20;
let circleSpacingY = 40;

let fillR;
let fillG;
let fillB;
// possible to do colors in other system than RGB? yes, you could use JSON for 'colors'

let squareSize = 20;
let squareXstart = 0;
let squareYstart = 20;
let squareSpacingX = 20;
let squareSpacingY = 40;


function setup() {
    createCanvas(400, 400);
    giveColor();
}

function draw() {
    background(0);

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            if (state === "circleSquare") {
                fill(fillR, fillG, fillB);
                ellipse(circleXstart + circleSpacingX * x, circleYstart + circleSpacingY * y, circleSize)

                fill(fillR, fillG, fillB);
                rect(squareXstart + squareSpacingX * x, squareYstart + squareSpacingY * y, squareSize);

            }
            else if (state === "squareCircle") {

                let circleXstart = 10;
                let circleYstart = 30;

                let squareXstart = 0;
                let squareYstart = 0;


                fill(fillR, fillG, fillB);
                ellipse(circleXstart + circleSpacingX * x, circleYstart + circleSpacingY * y, circleSize)

                fill(fillR, fillG, fillB);
                rect(squareXstart + squareSpacingX * x, squareYstart + squareSpacingY * y, squareSize);
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

function mousePressed() {
    if (state === "circleSquare") {
        state = "squareCircle"
    }
    else if (state === "squareCircle") {
        state = "circleSquare"
    }
}

// mouseClicked could also be

// function mousePressed() {
//  isCircle = !isCircle
// }
