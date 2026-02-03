
window.onload = function () {

    let speedX = 5;

    window.addEventListener("keydown", function (e) {
        // console.log(e.key);
        // document.querySelector("#textContainer").textContent += `${e.key}`;
        // document.querySelector("#textContainer").textContent += `${e.code}`;

        if (e.key === "ArrowRight") {
            document.getElementById("boxA").style.left =
                parseInt(document.getElementById("boxA").style.left) + speedX + "px";

        } else if (e.key === "ArrowLeft") {
            document.getElementById("boxA").style.left =
                parseInt(document.getElementById("boxA").style.left) - speedX + "px";
        }
        else if (e.code === "Space") {
            let bool = document.getElementById("boxB").getAttribute("custom-bool");
            if (bool === "off") {
                document.getElementById("boxB").style.background = "orange";
                document.getElementById("boxB").setAttribute("custom-bool", "on");
            } else {
                document.getElementById("boxB").style.background = "rgb(112, 184, 226)";
                document.getElementById("boxB").setAttribute("custom-bool", "off");
            }
        }

        else if (e.key === "Shift") {
            document.getElementById("boxA").style.background = "rgb(226, 112, 177)";
        }
    });
    window.addEventListener("keyup", function (e) {
        console.log("keyup");
        //2: change color when space is down

        if (e.key === "Shift") {
            document.getElementById("boxA").style.background = "rgb(112, 184, 226)";
        }
        else {
            console.log(`key up not shift:`);
            console.log(e);
        }
    });

}
