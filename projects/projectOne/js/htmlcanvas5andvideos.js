

window.onload = start

function start() {
    let canvas = document.querySelector("#canvas1");
    let width = canvas.width
    let height = canvas.height
    let context = canvas.getContext("2d");

    // border
    context.beginPath();
    context.fillStyle = "#26B1F3"
    context.fillRect(0, 0, width, height);
    context.clearRect(10, 10, width - 20, height - 20);
    context.closePath();

    // arc
    context.beginPath();
    context.fillStyle = "#e4f89c";
    let x = width / 2;
    let y = height / 2;
    let radius = 80;
    let startAngle = 0;
    context.arc(x, y, radius, startAngle, 360, false);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "#9caef8";
    context.arc(x, y, 10, 0, 360, false);
    context.fill();
    context.closePath();


    context.beginPath();
    context.moveTo(x, y + 80);
    context.lineTo(width * 0.25, height - 50);
    context.lineTo(width * 0.25, y + 190);
    context.lineTo(width * 0.75, y + 190);
    context.lineTo(width * 0.75, height - 50);
    context.lineTo(x, y + 80);
    context.strokeStyle = "#FFFFFF";
    context.fillStyle = "rgba(187, 37, 213, 0)"
    context.lineWidth = 3;
    context.stroke();
    context.fill();
    context.closePath();



    // ANIMATION

    let canvas2 = document.querySelector("#canvas2");
    let context2 = canvas2.getContext("2d");



    function oneCircle(x, y, r, color) {
        context2.beginPath()
        context2.fillStyle = color;
        context2.arc(x, y, r, 0, Math.PI * 2, true);
        context2.fill();
        context2.closePath();
    }

    function manyCircles(x, y, r, color) {
        oneCircle(x, y, r, color);
        oneCircle(x + 100, y, r, color);
        oneCircle(x - 100, y, r, color);
    }

    let size = 3;
    let growth = 5;
    let growing = true;

    requestAnimationFrame(animate);

    function animate() {
        context2.clearRect(0, 0, canvas2.width, canvas2.height);

        // border
        context2.beginPath();
        context2.lineWidth = 10;
        context2.strokeStyle = "pink";
        context2.strokeRect(0, 0, 400, 400);
        context2.stroke();
        context2.closePath();

        manyCircles(canvas2.width / 2, canvas.height / 2, size, "pink")
        // console.log(size)

        if (growing) {
            size += growth;
        }
        else {
            size -= growth
        }

        if (size > 250) {
            growing = false
        }
        if (size === 3) {
            growing = true
        }

        // console.log(growing)

        requestAnimationFrame(animate);
    }


    /// VIDEO
    let video = document.getElementById("video");
    let playButton = document.getElementById("play");
    let pauseButton = document.getElementById("pause");
    let reloadButton = document.getElementById("reload");
    let soundButton = document.getElementById("sound");
    let speedButton = document.getElementById("speed");

    playButton.addEventListener("click", function () {
        video.play();
    });

    pauseButton.addEventListener("click", function () {
        video.pause();
    });

    reloadButton.addEventListener("click", function () {
        video.load();
    });

    let click = 0
    soundButton.addEventListener("click", function () {
        click = click + 1
        if (click % 2) {
            video.muted = true
            soundButton.style.background = "black"
        }
        else {
            video.muted = false
            soundButton.style.background = ""
        }
    });

    let clicky = 0
    speedButton.addEventListener("click", function () {
        clicky = clicky + 1
        if (clicky % 2) {
            video.playbackRate = 5
            speedButton.style.background = "black"
            console.log("speeding")

        }
        else {
            video.playbackRate = 1
            speedButton.style.background = ""
        }
    });

    video.loop = true;
}
