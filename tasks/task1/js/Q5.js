// ??????????

"use strict";

let counter = 1;
let checkcheck;

//starting radius

// let radius = 40;
// let ellipseAlpha = 200;
// let circle = {
//     stroke: 'gray',
// }

let square = {
    w: 20,
    h: 20,
    x: 20,
    y: 20,
    fill: 'orangeRed',
}

function setup() {
    createCanvas(300, 300);
}

function draw() {
    background(0);
    displaySquare();
    checkCollisionWithSquare();
    // displayEllipse();

    //ellipse
    let radius = 40;
    let x = 150;
    let y = 150;
    let alpha = 200;

    push();
    fill(255, 255, 255, alpha);
    ellipse(x, y, radius);
    pop();
    alpha += -20;
    radius += 20;
    push();
    fill(255, 255, 255, alpha);
    ellipse(x, y, radius);
    pop();
    radius += 20;
    alpha += -20
    push();
    fill(255, 255, 255, alpha);
    ellipse(x, y, radius);
    pop();
    radius += 20;
    alpha += -20
    push();
    fill(255, 255, 255, alpha);
    ellipse(x, y, radius);
    pop();
    radius += 20;
    alpha += -20
    push();
    fill(255, 255, 255, alpha);
    ellipse(x, y, radius);
    pop();

}

function displaySquare() {
    push();
    noStroke();
    fill(square.fill);
    rect(square.x, square.y, square.w);
    pop();
}


function checkCollisionWithSquare() {
    // could i write this in a simpler way?

    if (mouseX > 20 && mouseX < 40 && mouseY > 20 && mouseY < 40) {
        checkcheck = true;
    }
    else (checkcheck = false)

    if (checkcheck === true) {
        square.fill = 'orange'
    }
    else (square.fill = 'orangeRed')

}

// why should i not call this function in draw?
function mouseClicked() {
    if (checkcheck === true) {
        counter += 1
    }
    else (counter = counter)
    // how to write ''do nothing''?
}

// function displayEllipse() {
//     push();
//     fill(255, 255, 255, ellipseAlpha);
//     strokeWeight(3);
//     stroke(circle.stroke);
//     ellipse(width / 2, height / 2, radius);
//     pop();
// }

