// UR TASK (ex2.js):
// Write JavaScript that:

// Clicking the button toggles the secret message(add / remove class hidden)
// Updates button text between "Show Secret" and "Hide Secret"
// Clicking the message changes its text color to a random color

// Hints:

// Use getAttribute() and setAttribute() for custom - visible
// Use classList.add() and classList.remove()
// Use if/else to toggle states

window.onload = go

function go() {

    let button = document.querySelector("button");

    button.addEventListener("click", function (e) {
        let toggle = document.querySelector("#secretMessage").getAttribute("custom-visible");
        let changingText = document.querySelector("button").textContent;

        if (toggle === "hidden" && changingText === "Show Secret") {
            document.querySelector("#secretMessage").classList.remove("hidden");
            document.querySelector("#secretMessage").setAttribute("custom-visible", "visible");
            document.querySelector("button").textContent = "Hide Secret";
        }

        else if (toggle === "visible" && changingText === "Hide Secret") {
            console.log(document.querySelector("#secretMessage").classList.add("hidden"));
            document.querySelector("#secretMessage").setAttribute("custom-visible", "hidden");
            document.querySelector("button").textContent = "Show Secret"
        }
        console.log(toggle)
        console.log(changingText)
    })

    secretMessage = document.querySelector("#secretMessage P")
    secretMessage.addEventListener("click", function (e) {

        let r = Math.ceil(Math.random() * 255);
        let g = Math.ceil(Math.random() * 255);
        let b = Math.ceil(Math.random() * 255);

        this.style.color = `rgba(${r},${g},${b})`;

        console.log(this.style.color)
    })





    // 
}