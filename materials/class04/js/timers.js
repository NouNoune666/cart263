/**
 * This js script will load only after the HTML is done loading its whole page
 */
window.onload = function () {

    //create a particle div
    let particleDiv = document.createElement("div");
    particleDiv.id = "particle";
    document.querySelector("#parent").appendChild(particleDiv);
    particleDiv.style.left = "25px";
    particleDiv.style.top = "25px";


    let speedX = 2;
    let speedY = 3;
    window.requestAnimationFrame(animate);

    function animate() {
        let p = document.getElementById("particle");
        p.style.left = parseInt(p.style.left) + speedX + "px";
        p.style.top = parseInt(p.style.top) + speedY + "px";
        window.requestAnimationFrame(animate);
        checkBounds(document.getElementById("parent"), p);

    }

    function checkBounds(parent, p) {
        let bounds = parent.getBoundingClientRect();

        if (parseInt(p.style.left) > bounds.right) {
            speedX *= -1;

        } else if (parseInt(p.style.left) < bounds.left) {
            speedX *= -1;
        }

        if (parseInt(p.style.top) > bounds.bottom) {
            speedY *= -1;

        } else if (parseInt(p.style.top) < bounds.top) {
            speedY *= -1;
        }
    }

    // let randomChanceToRun = setTimeout(oneTimeText, 500);

    // let num = Math.random();
    // if (num < 0.5) { // 50% chance
    //     defusedText();
    //     clearTimeout(randomChanceToRun);
    // }
    // console.log(num);

    // function oneTimeText() {
    //     let sp = document.createElement("span");
    //     sp.textContent = " TIME OUT ";
    //     sp.classList.add("timeOutText");
    //     document.getElementById("parent").appendChild(sp);
    // }


    // function defusedText() {
    //     let sp = document.createElement("span");
    //     sp.textContent = "DEFUSED";
    //     sp.classList.add("timeOutText");
    //     document.getElementById("parent").appendChild(sp);
    // }

    // // We attribute a variable to our setInterval function to be able to stop it later
    // let ref = window.setInterval(addOtherText, 500);

    // // We creater a counter. We use our counter to determine when the interval function stops.
    // let counter = 0;

    // function addOtherText() {
    //     // Creating and appending our text
    //     let sp = document.createElement("span");
    //     sp.textContent = " ***-*** ";
    //     sp.classList.add("appearInStarText");
    //     document.getElementById("parent").appendChild(sp);

    //     // Each time the text is written, the counter goes up
    //     counter += 1;

    //     // Using an if statement with counter and calling to stop the setInterval function
    //     if (counter === 10) {
    //         clearInterval(ref);
    //     }
    //     console.log(counter)
    // }


    // let speed = 1000;

    // addTextDynamic();

    // function addTextDynamic() {
    //     console.log("adding");
    //     console.log(speed);
    //     let sp = document.createElement("span");
    //     sp.textContent = " adding Text ";
    //     sp.classList.add("appearInText");
    //     document.getElementById("parent").appendChild(sp);
    //     if (speed > 20) {
    //         speed -= 20;
    //     }
    //     setTimeout(addTextDynamic, speed);
    // }






    // // these shades will be used later on, they are an array of colors to pick from
    // let shades = [
    //     "#7fb3d5", //0
    //     "#76d7c4", //1
    //     "#f7dc6f", //2
    //     "#eb984e", //3
    //     "#cb4335", //4
    //     "#8e44ad", //5
    //     "#2e4053", //6
    //     "#e5e7e9", //7
    // ];

    // // this nested loop will make the grid 
    // // i represents the x coords (the horizontal)
    // for (let i = 0; i < 24; i++) {

    //     // for each x, we make a column of changing y's
    //     for (let j = 0; j < 24; j++) {

    //         // we locate the parent to which we will attach something
    //         let parent = document.getElementById("parent")

    //         // we create this new something
    //         let d = document.createElement("div");

    //         // we add a class to this new div
    //         d.classList.add("grid-cell");

    //         // we append the new div to the parent
    //         parent.appendChild(d);

    //         // each cell is positioned by spacing it 25 pixels apart horizontally (using i) and vertically (using j)
    //         d.style.left = (i + 1) * 25 + "px";
    //         d.style.top = (j + 1) * 25 + "px";
    //     }
    // }

    // // the changing number starts at 0
    // let changingNum = 0
    // console.log(changingNum);

    // // the setInterval function will trigger our new function/the call back every 1 second
    // setInterval(animate_cells_mod_rows, 1000);

    // /**
    //  * Our new function aka the call back
    //  */
    // function animate_cells_mod_rows() {


    //     // this function that colors in the rows is called before we change the number
    //     drawGrid();

    //     // every second the changing number will go up and trigger a color change
    //     changingNum += 1;

    //     // since we have 8 colors, will reset the changing number to zero once it hits to bottom of the color list
    //     if (changingNum === 8) {
    //         changingNum = 0;
    //     }

    // }

    // // we need this because we will be adressing each individual grid cell in the drawGrid() function below
    // let gridCells = this.document.querySelectorAll(".grid-cell")
    // console.log(gridCells.length);
    // /**
    //  * This function colors in the grid
    //  */
    // function drawGrid() {

    //     for (let i = 0; i < gridCells.length; i++) {

    //         // check what the remainder is
    //         if (i % changingNum === 0) {
    //             gridCells[i].style.background = shades[0];
    //         }
    //         else if (i % changingNum === 1) {
    //             gridCells[i].style.background = shades[1];
    //         }
    //         else if (i % changingNum === 2) {
    //             gridCells[i].style.background = shades[2];
    //         }
    //         else if (i % changingNum === 3) {
    //             gridCells[i].style.background = shades[3];
    //         }
    //         else if (i % changingNum === 4) {
    //             gridCells[i].style.background = shades[4];
    //         }
    //         else if (i % changingNum === 5) {
    //             gridCells[i].style.background = shades[5];
    //         }
    //         else if (i % changingNum === 6) {
    //             gridCells[i].style.background = shades[6];
    //         }
    //         else if (i % changingNum === 7) {
    //             gridCells[i].style.background = shades[7];
    //         }
    //     }

    //     // hmmm : we could just remove the if /else and write: gridCells[index].style.background = shades[index%changingNum];
    // }
}