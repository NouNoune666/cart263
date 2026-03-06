class Dino {

    constructor() {
        let parent = document.querySelector(".drawings");
        let bounds = parent.getBoundingClientRect();
        let dinoSize = 400

        this.x = bounds.width - dinoSize;
        this.y = bounds.height - dinoSize;
        this.size = dinoSize;
        this.dinoBody = document.createElement("img");
        this.dinoBody.src = "assets/images/dino.png";

        this.velocity = 1;
    }

    render() {
        this.dinoBody.classList.add("dino");
        this.dinoBody.style.width = this.size + "px";
        this.dinoBody.style.height = this.size + "px";
        this.dinoBody.style.left = this.x + "px";
        this.dinoBody.style.top = this.y + "px";

        //add to the DOM
        let parent = document.querySelector(".drawings")
        parent.appendChild(this.dinoBody)
    }

    move(tree) {
        let parent = document.querySelector(".drawings");
        let bounds = parent.getBoundingClientRect();

        // movement
        this.x = this.x - this.velocity;

        // bounce off left and right edges
        if (this.x < tree.size) {
            this.velocity *= -1;
        }

        if (this.x > bounds.width - this.size) {
            this.velocity *= -1;
        }

        // update the DOM
        this.dinoBody.style.left = this.x + "px";
    }



}