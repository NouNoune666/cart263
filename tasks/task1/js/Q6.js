"use strict";



let textObject = {
    string: 'test',
    fill: 'white',
    size: 28,
    x: 150,
    y: 150
}

function setup() {
    createCanvas(300, 300);
}

function draw() {
    background(0);

    push();
    textAlign(CENTER, CENTER);
    fill(textObject.fill);
    stroke(textObject.size);
    text(textObject.string, textObject.x, textObject.y);
    pop();

    let horizontalY = 30;
    let horizontalStartX = 30;
    let horizontalSpacing = 10;

    for (let i = 0; i < 10; i++) {
        push();
        fill(textObject.fill);
        stroke(textObject.size);
        text(i, horizontalStartX + horizontalSpacing * i, horizontalY);
        pop();
    }

    // vertical line
    let verticalX = 30;
    let verticalStartY = 30;
    let verticalSpacing = 15;

    for (let i = 15; i > 0; i--) {
        push();
        fill(textObject.fill);
        stroke(textObject.size);
        text(i, verticalX, verticalStartY + verticalSpacing * i);
        pop();
    }
}

// bonus??