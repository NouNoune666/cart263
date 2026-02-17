
class Bird extends Animal {
    // Create a new bird object that moves to the right
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.vx = Math.random() * 5 + 1;
        this.vy = 0;
        this.animalBody = document.createElement("div");


        this.originalY = this.y;
        //ONLY in the Bird class : new variables
        this.angle = 0;
        this.sleepiness = 0.1;

    }

    move() {
        this.y = this.originalY + Math.sin(this.angle) * 8
        this.angle += 0.05;
        this.veer;
        super.move();
    }


    veer() {
        let r = Math.random();
        //console.log("in veer "+r)
        if (r < this.sleepiness) {
            this.vy += randomRange(-.1, .1);
        }
    }

    // Overriding the superclass' wrap() method!
    wrap() {
        // NEW! Call the superclass (Animal) version of wrap()
        // This will handle wrapping on the x axis for us.
        // We use "super" to access methods in the SUPERclass (Animal)
        // So this calls the Animal version of wrap() after we make the specific changes 
        // in the SUBclass.

        if (this.x > window.innerWidth) {
            //reset
            this.vy = 0;
        }
        super.wrap();
    }

    // Display the bird as a ellipse
    renderAnimal() {
        super.renderAnimal();

        this.animalBody.style.backgroundColor = `rgb(106, 90, 205)`;
        //add to the DOM
        document.getElementsByClassName("sky")[0].appendChild(this.animalBody);
    }


}

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



