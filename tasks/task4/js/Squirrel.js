class Squirrel {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.squirrelBody = document.createElement("div");

    }

    renderSquirrel() {
        this.squirrelBody.classList.add("squirrel");
        this.squirrelBody.style.width = this.width + "px";
        this.squirrelBody.style.height = this.height + "px";
        this.squirrelBody.style.left = this.x + "px";
        this.squirrelBody.style.top = this.y + "px";
        this.squirrelBody.style.background = `rgb(${this.color.r},${this.color.g},${this.color.b})`;
        //add to the DOM
        document.getElementsByClassName("grass")[0].appendChild(this.squirrelBody);
    }


    // Move the squirrel according to its velocity
    // move() {
    //     this.x += this.vx;
    //     this.y += this.vy;
    //     //update the actual div...
    //     this.squirrelBody.style.left = this.x + "px";
    //     this.squirrelBody.style.top = this.y + "px";
    // }

    // // Wrap the squirrel if it reaches the right edge
    // wrap() {
    //     if (this.x > window.innerWidth) {
    //         this.x -= window.innerWidth;
    //     }
    // }



}