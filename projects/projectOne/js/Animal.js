class Animal {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;

        this.vx = 0;
        this.vy = 0;

        this.animalBody = document.createElement("img");
    }

    move() {
        this.x = this.x + this.vx;

        this.animalBody.style.left = this.x + "px";
        this.animalBody.style.top = this.y + "px";
    }

    render() {
        this.animalBody.style.width = this.size + "px";
        this.animalBody.style.height = this.size + "px";
        this.animalBody.style.left = this.x + "px";
        this.animalBody.style.top = this.y + "px";

        let parent = document.querySelector(".drawings");
        parent.appendChild(this.animalBody);
    }
}