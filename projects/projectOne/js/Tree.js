class Tree {

    constructor() {
        let parent = document.querySelector(".drawings");
        let bounds = parent.getBoundingClientRect();
        let treeSize = 400

        this.x = 0;
        this.y = bounds.height - treeSize;
        this.size = treeSize;
        this.treeBody = document.createElement("img");
        this.treeBody.src = "assets/images/tree.png"
    }

    render() {
        this.treeBody.classList.add("tree");
        this.treeBody.style.width = this.size + "px";
        this.treeBody.style.height = this.size + "px";
        this.treeBody.style.left = this.x + "px";
        this.treeBody.style.top = this.y + "px";

        //add to the DOM
        let parent = document.querySelector(".drawings")
        parent.appendChild(this.treeBody)
    }

}