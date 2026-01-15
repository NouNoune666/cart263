// in this one you'll need if and else, if you don't have else it will not go back to original color

// use p5 function ''mouseMoved''


"use strict";


let color = {
    one: '#017072',
    two: '#0071FD',
    three: '#00FEFF',
}

function setup() {
    createCanvas(300, 300);
}

function draw() {
    background('black');

    drawRectangle(0, 0, 100, 300, color.one);
    drawRectangle(100, 0, 100, 300, color.two);
    drawRectangle(200, 0, 100, 300, color.three);
    // something really weird is going on with the color order
}

function drawRectangle(x, y, w, h, f) {
    noStroke();
    rect(x, y, w, h);
    fill(f);
}







