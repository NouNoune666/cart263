window.onload = start

function start() {

    borderColors = [
        "pink",
        "red",
        "blue",
        "orange",
        "green",
        "purple"
    ];


    // click event on box A
    let colorIndex = 0;
    let boxA = document.querySelector("#boxA");

    boxA.addEventListener("click", function (e) {
        console.log("click")

        // changing border color with array
        this.style.borderColor = borderColors[colorIndex]
        colorIndex = (colorIndex + 1) % borderColors.length  // loops back to 0
        // console.log(colorIndex)

        // changing background color with HSL (lightness)
        let randomL = Math.ceil(Math.random() * 100)  // 0 to 100
        this.style.backgroundColor = `hsl(324, 59%, ${randomL}%)`;
        // console.log(randomL)
    });



    // keyboard event on box B
    let boxB = document.querySelector("#boxB");

    let speed = 10;
    window.addEventListener("keydown", function (e) {

        console.log(e.key)
        let currentY = parseInt(boxB.style.left);
        let currentX = parseInt(boxB.style.top);
        // console.log(currentY);
        // console.log(currentX);

        if (e.key === "a") {
            boxB.style.left = currentY - speed + "px"
        }
        else if (e.key === "d") {
            boxB.style.left = currentY + speed + "px"
        }
        else if (e.key === "w") {
            boxB.style.top = currentX - speed + "px"
        }
        else if (e.key === "s") {
            boxB.style.top = currentX + speed + "px"
        }
    })

    // keyboard event on box C
    let growth = 10;
    let boxC = document.querySelector("#boxC")

    window.addEventListener("keydown", function (e) {

        if (e.key === "Shift") {

            let boxCWidth = parseInt(getComputedStyle(document.querySelector("#boxC")).width);
            let boxCHeight = parseInt(getComputedStyle(document.querySelector("#boxC")).height);

            // console.log(boxCWidth);
            // console.log(boxCHeight);

            boxC.style.width = boxCWidth + growth + "px";
            boxC.style.height = boxCHeight + growth + "px";
        }

        if (e.key === "Backspace") {

            let boxCWidth = parseInt(getComputedStyle(document.querySelector("#boxC")).width);
            let boxCHeight = parseInt(getComputedStyle(document.querySelector("#boxC")).height);

            boxC.style.width = boxCWidth - growth + "px";
            boxC.style.height = boxCHeight - growth + "px";
        }
    })

    // custom bool hidden
    let button = document.querySelectorAll(".box")[3];
    let pingu = document.querySelector(".pinguImg");
    console.log(pingu)
    button.addEventListener("click", function (e) {
        // Check current state
        pingu.classList.toggle("active-class")
    });


    // mouse event - drawing dots
    let canvas = document.querySelector("#allBoxes");

    let width = 10;
    let height = 10;

    canvas.addEventListener("mousemove", function (e) {
        // create new div, append to parent "div", set style
        let parent = document.querySelector("body");
        let newDiv = document.createElement("div");
        newDiv.classList.add("dot");
        parent.appendChild(newDiv);
        newDiv.style.left = `${e.clientX}px`;
        newDiv.style.top = `${e.clientY}px`;
        newDiv.style.width = width + "px";
        newDiv.style.height = height + "px";

        // dot color
        r = Math.random() * 255;
        g = Math.random() * 255;
        b = Math.random() * 255;
        newDiv.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
    });


}