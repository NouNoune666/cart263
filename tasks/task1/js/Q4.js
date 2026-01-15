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

    noStroke();
    push();
    fill(color.one)
    rect(0, 0, 100, 300)
    pop();
    push();
    fill(color.two)
    rect(100, 0, 100, 300)
    pop();
    push();
    fill(color.three)
    rect(200, 0, 100, 300)
    pop();

    checkRectOne();
    checkRectThree();
    checkRectTwo();

}

function checkRectOne() {
    if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 300) {
        color.one = 'white'
    }
    else (color.one = '#017072')
}

function checkRectTwo() {
    if (mouseX > 100 && mouseX < 200 && mouseY > 0 && mouseY < 300) {
        color.two = 'white'
    }
    else (color.two = '#0071FD')
}

function checkRectThree() {
    if (mouseX > 200 && mouseX < 300 && mouseY > 0 && mouseY < 300) {
        color.three = 'white'
    }
    else (color.three = '#00FEFF')
}







