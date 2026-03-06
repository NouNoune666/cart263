window.onload = function () {
    let tree = new Tree();
    tree.render();
    let dino = new Dino();
    dino.render();

    animateDino();
    function animateDino() {
        dino.move(tree);
        window.requestAnimationFrame(animateDino);
    }


}