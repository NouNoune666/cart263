
window.onload = function () {
    console.log("keys");

    let speedX = 5;
    let boxA = document.querySelector("#boxA");

    window.addEventListener("keydown",
        function (e) {
            if (e.key === "ArrowRight") {
                let currentPos = parseInt(boxA.style.left)
                boxA.style.left = currentPos + speedX + "px"
            }

            if (e.key === "ArrowLeft") {
                let currentPos = parseInt(boxA.style.left)
                boxA.style.left = currentPos - speedX + "px"
            }


            // body of callback function
            // console.log(e.key);
            // console.log(e.code);
            // console.log(e);
        });
}