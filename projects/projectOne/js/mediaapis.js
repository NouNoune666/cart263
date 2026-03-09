window.onload = slay

function slay() {
    let p = document.querySelector("p");
    console.log(p)
    let textSize = getComputedStyle(document.querySelector("p")).fontSize

    let growing = true;
    window.requestAnimationFrame(animateText);
    function animateText() {
        if (growing) {
            textSize = parseInt(textSize) + 1
        }
        else {
            textSize = parseInt(textSize) - 1
        }

        if (textSize > 150) {
            growing = false
        }
        if (textSize === 2) {
            growing = true
        }
        p.style.fontSize = textSize + "px"
        // console.log(textSize)
        window.requestAnimationFrame(animateText)

    }

}
