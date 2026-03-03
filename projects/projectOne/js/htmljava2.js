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


    // click event(something happens to a square)

    let colorIndex = 0;
    let boxA = document.querySelector("#boxA");

    boxA.addEventListener("click", function (e) {
        console.log("click")

        // changing border color with array
        boxA.style.borderColor = borderColors[colorIndex]
        colorIndex = (colorIndex + 1) % borderColors.length  // loops back to 0
        console.log(colorIndex)

        // changing background color with HSL (lightness)
        let randomL = Math.ceil(Math.random() * 100)  // 0 to 100
        boxA.style.backgroundColor = `hsl(324, 59%, ${randomL}%)`;
        console.log(randomL)
    });





    // mouse move(something moves)

    // key space(becomes bigger)

    // key enter - custom bool active, inactive

    // drag event

    // make dot or image at location



}