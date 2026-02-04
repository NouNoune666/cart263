window.onload = setup

function setup() {
    let colorBoxes = document.querySelectorAll(".color-box");

    for (box of colorBoxes) {
        box.addEventListener("click", function (e) {
            console.log("it works")

            let r = Math.ceil(Math.random() * 255);
            let g = Math.ceil(Math.random() * 255);
            let b = Math.ceil(Math.random() * 255);
            let a = Math.random();

            this.style.background = `rgba(${r}, ${g}, ${b}, ${a})`;

            console.log(this.style.background)
        });

    }
}