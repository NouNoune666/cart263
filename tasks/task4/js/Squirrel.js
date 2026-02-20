class Squirrel {


    constructor(x, y, width, height, path) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.squirrelBody = document.createElement("img");
        this.squirrelBody.src = path
        this.vx = Math.random() * 2 + 1;
        this.vy = Math.random() * 2 + 1;
    }


    renderSquirrel() {
        this.squirrelBody.classList.add("squirrel");
        this.squirrelBody.style.width = this.width + "px";
        this.squirrelBody.style.height = this.height + "px";
        this.squirrelBody.style.left = this.x + "px";
        this.squirrelBody.style.top = this.y + "px";
        // this.squirrelBody.style.background = `rgb(${this.color.r},${this.color.g},${this.color.b})`;
        //add to the DOM
        document.getElementsByClassName("grass")[0].appendChild(this.squirrelBody);
        console.log(this.squirrelBody.src)
    }

    // Move the squirrel according to its velocity
    move() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off right edge
        if (this.x + this.width >= window.innerWidth) {
            this.vx *= -1; // flips to negative so the squirrel goes left now
        }

        // Bounce off left edge
        if (this.x <= 0) {
            this.vx = this.vx * -1; // flips to positive so the squirrel goes right now
        }

        let bottomOfGrass = document.querySelector(".grass").getBoundingClientRect().height

        // Bounce off bottom edge
        if (this.y + this.width >= bottomOfGrass) {
            this.vy *= -1; // flips to negative so the squirrel goes left now
            this.y += this.vy;
        }

        // Bounce off top edge of grass
        if (this.y + this.width - 20 < 0) {
            this.vy *= -1; // flips to negative so the squirrel goes left now
            this.y += this.vy;
        }

        // console.log(this.squirrelBody.style.top)
        // console.log(this.vx)

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
