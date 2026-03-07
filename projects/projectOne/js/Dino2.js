class Dino2 extends Animal {

    constructor(x, y, size) {
        super(x, y, size);
        this.vx = -1;
        this.animalBody.src = "assets/images/dino.png"
    }

    move(tree) {
        let bounds = document.querySelector(".drawings").getBoundingClientRect();

        if (this.x < tree.size) {
            this.vx *= -1
        };

        if (this.x > bounds.width - this.size) {
            this.vx *= -1
        };

        super.move();
    }
    render() {
        this.animalBody.classList.add("dino");
        super.render();
    }

}