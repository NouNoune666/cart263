class Squirrel {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.squirrelBody = document.createElement("div");
        this.vx = randomRange(1, 2);
        this.vy = 0;
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
    move() {

        this.x += this.vx;
        this.y += this.vy;

        // Bounce off right edge
        if (this.x >= window.innerWidth) {
            this.vx *= -1; // flips to negative so the squirrel goes left now
            this.y += this.vy;
        }

        // Bounce off left edge
        if (this.x <= 0) {
            this.vx = this.vx * -1; // flips to positive so the squirrel goes right now
            this.y += this.vy;
        }

        this.squirrelBody.style.left = this.x + "px";
        this.squirrelBody.style.top = this.y + "px";

    }

    // // Wrap the squirrel if it reaches the right edge
    wrap() {
        // if (this.x > window.innerWidth) {
        //     this.x -= window.innerWidth;
        // }
    }



}
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}