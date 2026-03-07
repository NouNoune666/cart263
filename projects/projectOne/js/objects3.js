window.onload = function () {
    let parent = document.querySelector(".drawings");
    let bounds = parent.getBoundingClientRect();

    let tree = new Tree2();
    tree.render();

    let dino = new Dino2(bounds.width - 400, bounds.height - 400, 400);
    dino.render();

    let birdie = new Birdie(0, bounds.height / 2, 50)
    birdie.render();

    animate();

    function animate() {
        birdie.move();
        dino.move(tree);
        window.requestAnimationFrame(animate);
    }

}