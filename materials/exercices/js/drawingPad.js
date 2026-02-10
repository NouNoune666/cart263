//YOUR TASK (ex3.js):

// When mouse moves over canvas, creates a dot at mouse position
// Each dot has a random background color
// Clicking "Clear Canvas" removes all dots

// Hints:

// Use getBoundingClientRect() to get canvas position
// Calculate offsetX and offsetY
// Create div with class dot, set left and top
// For clear button: canvas.innerHTML = ""

window.onload = function () {

    let canvas = document.querySelector("#canvas");

    let width = 20;
    let height = 20;

    canvas.addEventListener("mousemove", function (e) {
        console.log(width);
        // create new div, append to parent "div", set style
        let parent = document.querySelector("div");
        let newDiv = document.createElement("div");
        newDiv.classList.add("dot");
        parent.appendChild(newDiv);
        newDiv.style.left = `${e.clientX}px`;
        newDiv.style.top = `${e.clientY}px`;
        newDiv.style.width = width + "px";
        newDiv.style.height = height + "px";

        // console.log(width)
        // console.log(height)

        // dot color
        r = Math.random() * 255;
        g = Math.random() * 255;
        b = Math.random() * 255;
        newDiv.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;

        allDivs = document.querySelectorAll(".dot");
        // console.log(allDivs.length);

    });

    window.addEventListener
        ("keydown", function (e) {

            let dots = document.querySelectorAll(".dot");


            for (let i = 0; i < dots.length; i++) {

                let newWidth = parseInt(width);
                dots[i].style.width = (newWidth + 20) + "px";

                let newHeight = parseInt(height);
                dots[i].style.height = (newHeight + 20) + "px";
            }
            width += 20;
            height += 20;
        });



}