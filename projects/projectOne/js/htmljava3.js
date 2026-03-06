window.onload = function () {

    // using setTimeout for text

    window.setTimeout(addTimeoutTextOne, 5000)
    window.setTimeout(addTimeoutTextTwo, 10000)
    window.setTimeout(addTimeoutTextThree, 20000)

    let divOne = document.querySelector(".timeoutText");

    function addTimeoutTextOne() {
        let newP = document.createElement("p");
        newP.textContent = "This is a timeout text after 5 seconds"
        divOne.appendChild(newP)
    }

    function addTimeoutTextTwo() {
        let newP = document.createElement("p");
        newP.textContent = "This is a timeout text after 10 seconds"
        divOne.appendChild(newP)
    }

    function addTimeoutTextThree() {
        let newP = document.createElement("p");
        newP.textContent = "This is a timeout text after 20 seconds"
        divOne.appendChild(newP)
    }

    // using setInterval for text
    let divTwo = document.querySelector(".intervalText");
    let p = document.createElement("p");
    divTwo.appendChild(p);

    window.setInterval(addIntervalText, 1000);

    function addIntervalText() {
        p.textContent += "."
    }


    // using setTimeout() for a dynamic delay
    let delay = 0;
    let divThree = document.querySelector(".dynamicTimeoutText")
    let pg = document.createElement("p");
    divThree.appendChild(pg);
    addDynamicText();

    function addDynamicText() {
        pg.textContent = "current delay " + (delay * 0.001) + " seconds";
        delay += 1000;
        // console.log(delay)
        setTimeout(addDynamicText, delay);
    }

    // using clearInterval()
    let divFour = document.querySelector(".clearInterval");
    let prg = document.createElement("p");
    divFour.appendChild(prg);

    let heartCounter = 0;
    ref = window.setInterval(IntervalText, 1000);

    let text = document.createElement("p")
    divFour.appendChild(text)


    function IntervalText() {
        prg.textContent += "💗"
        heartCounter += 1;
        text.textContent = "number of hearts: " + heartCounter
        // console.log(heartCounter)
        if (heartCounter === 25) {
            clearInterval(ref)
        }
    }


    // making a grid with rows
    cellSize = 50

    for (let i = 0; i < 10; i++) {
        for (let y = 0; y < 10; y++) {
            let parent = document.querySelector(".grid-cells");
            let newDiv = document.createElement("div");
            newDiv.classList.add("grid-cell")
            parent.appendChild(newDiv)

            newDiv.style.left = (i + 1) * cellSize + "px";
            newDiv.style.top = (y + 1) * cellSize + "px";
        }
    }

    gridArray = document.querySelectorAll(".grid-cell")

    let fillingWithPink = true;
    window.setInterval(gridColor, 1);

    function gridColor() {
        randomIndex = Math.floor(Math.random() * 100)
        // console.log(randomIndex)
        checkGrids();
        if (fillingWithPink) {
            gridArray[randomIndex].style.background = "pink"
        }
        else {
            gridArray[randomIndex].style.background = "black"
        }
        // console.log(fillingWithPink)
    }


    function checkGrids() {
        let pinkCount = 0;
        for (let grid of gridArray) {
            if (grid.style.background === "pink") {
                pinkCount += 1
            }
        }

        if (pinkCount >= 100) {
            fillingWithPink = false
        }

        if (pinkCount === 0) {
            fillingWithPink = true
        }
        // console.log(pinkCount)
    }

    // using request animation frame
    let circleDiv = document.createElement("div");
    circleDiv.setAttribute("id", "circle");
    let parent = document.querySelector(".animation");
    parent.appendChild(circleDiv)

    circleDiv.style.left = "25px";
    circleDiv.style.top = "25px";

    let speedH = 2;
    let speedV = 2;
    let circle = document.querySelector("#circle");
    let circleSize = 20;

    window.requestAnimationFrame(animate)

    function animate() {

        // console.log(circle.style.top);
        circle.style.top = parseInt(circle.style.top) + speedV + "px"
        circle.style.left = parseInt(circle.style.left) + speedH + "px"

        checkBounds();
        window.requestAnimationFrame(animate);
    }

    function checkBounds() {

        let bounds = parent.getBoundingClientRect();
        console.log(circle.style.top)

        if (parseInt(circle.style.top) > bounds.height - circleSize) {
            speedV *= -1
        }
        else if (parseInt(circle.style.top) < 0) {
            speedV *= -1
        }
        if (parseInt(circle.style.left) > bounds.width - circleSize) {
            speedH *= -1
        }
        else if (parseInt(circle.style.left) < 0) {
            speedH *= -1
        }



    }

}