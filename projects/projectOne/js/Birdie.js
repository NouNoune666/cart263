class Birdie extends Animal {

    constructor(x, y, size) {
        super(x, y, size);

        this.animalBody.src = "assets/images/birdie.png";

        this.vx = 2;
        this.baseY = 100
        this.angle = 0
        this.amplitude = 50
    }

    render() {
        this.animalBody.classList.add("birdie");
        super.render();
    }

    move() {
        let parent = document.querySelector(".drawings");
        let bounds = parent.getBoundingClientRect();

        this.x += this.vx  // add this!

        // sin for y movement
        this.y = this.baseY + Math.sin(this.angle) * this.amplitude
        this.angle += 0.02

        // bounce off left and right edges
        if (this.x < 2) {
            this.vx *= -1;
        }

        if (this.x > bounds.width - this.size) {
            this.vx *= -1;
        }

        this.animalBody.style.left = this.x + "px";
        this.animalBody.style.top = this.y + "px";
    }
}

