window.onload = start

function start() {

    // Accessing a bunch of stuff for practice
    console.log(document.querySelector("body"));
    console.log(document.querySelector("#firstShape"));
    console.log(document.querySelector("#secondShape"));
    console.log(document.querySelector("#thirdShape"));
    console.log(document.querySelector("#fourthShape"));
    console.log(document.querySelectorAll(".squareShape"));
    console.log(document.querySelectorAll(".circleShape"));
    console.log(document.querySelector("body").children);
    console.log(document.querySelector("body").style);
    console.log(document.querySelector("#firstShape").parentElement);

    // changing the innerHTML of a shape
    let squares = document.querySelectorAll(".squareShape")
    console.log(squares.length)
    squareTwo = squares[1]
    squareTwo.innerHTML += "<p> nou noune was <span>here</span> (˵˃ ᗜ ˂˵)</p>"

    // changing the text of a shape
    let shapeFour = document.querySelector("#fourthShape p")
    shapeFour.textContent = "my notes"

    // adding a class to a shape
    shapeTwo = document.querySelectorAll(".allShapes div")[1];
    shapeTwo.classList.add("circleShape");

    // adding padding (style)
    document.querySelector(".circleShape").style.padding = "100px";

    // changing the background
    body = document.querySelector("main").parentElement.style;
    body.background = "purple";


    // changing the font (loop)
    let allH1 = document.querySelectorAll("h1");
    console.log(allH1)

    for (let eachH1 of allH1) {
        eachH1.style.fontFamily = "Comic Sans MS";
    }

    // added a div, class, id and text
    let newDiv = document.createElement("div")
    newDiv.classList.add("circleShape")
    newDiv.setAttribute("id", "fifthShape")
    newDiv.innerHTML = " <h1> hey </h1> <p>I'm new here </p>"
    let parentElement = document.querySelector(".allShapes")
    parentElement.appendChild(newDiv);

    // changing the border color (loop)
    let allShapeBorders = document.querySelector(".allShapes").children
    console.log(allShapeBorders)
    for (let eachShapeBorder of allShapeBorders) {
        eachShapeBorder.style.borderColor = "white"
    }

    // adding an image
    let newImg = document.createElement("img");
    newImg.setAttribute("src", "assets/images/stardewValleyPortrait.png");
    parentElement.appendChild(newImg);
    newImg.style.width = "500px";
    newImg.style.height = "500px";
    newImg.style.display = "block"
    newImg.style.margin = "auto"
    newImg.style.padding = "20px"

}