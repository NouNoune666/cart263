
window.onload = function () {
    // console.log("move");

    // we want to do something when the mouse is over the box :)
    let drawBox = document.querySelector("#draw-box-a");
    console.log(drawBox);

    // A - add event listener and callback
    drawBox.addEventListener("mousemove", function (e) {
        console.log("mouse move");
        // B - these are the same
        console.log(this);
        console.log(e.target);

        // C - get the mouse coords relative to the WINDOW
        // drawBox.innerHTML = `x: ${e.clientX}, y:${e.clientY}`;
        let rect = this.getBoundingClientRect();
        console.log(rect);
        //DIFFERENCE TO ENSURE COORDS ARE RELATIVE
        let offsetX = e.clientX - rect.x;
        let offsetY = e.clientY - rect.y;
        drawBox.innerHTML = `offset_x: ${offsetX}, offset_y:${offsetY}`;
    });

}