window.onload = go;

function go() {

    let allSections = document.querySelectorAll(".mouseclick-active-section");
    //go through each section and apply the event listener
    for (let element of allSections) {
        // console.log(element)
        //add click to each element
        element.addEventListener("click", function (e) {
            // console.log(this);

            //check if is inactive
            if (this.getAttribute("custom-bool") === "inactive") {
                console.log("is inactive");
                // console.log(this.id)

                // :: new access the class of parent (this)
                let class_to_add = `${this.id}-section-active`;
                this.classList.add(class_to_add)
                // :: new access the class of child 
                let class_to_add_p = `${this.id}-section-p-active`;
                document.querySelector(`#${this.id} p`).classList.add(class_to_add_p)
                this.setAttribute("custom-bool", "active")
            }
            else {
                console.log("is now active");
                this.setAttribute("custom-bool", "inactive");
                let class_to_remove = `${this.id}-section-active`;
                this.classList.remove(class_to_remove);
                // :: new access the class of child
                let class_to_remove_p = `${this.id}-section-p-active`;
                document.querySelector(`#${this.id} p`).classList.remove(class_to_remove_p);
            }
        });
    }



    document.querySelector("#bubbleButton").addEventListener("click", function (e) {
        console.log("button clicked");

        //<< CREATE A NEW ELEMENT ON THE FLY >>>
        //this could be its own custom function ... 
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
        bubble.style.top = `${Math.random() * (window.innerHeight - 200)}px`;

        let r = Math.ceil(Math.random() * 255); //new Math.ceil
        let g = Math.ceil(Math.random() * 255);
        let b = Math.ceil(Math.random() * 255);

        bubble.style.background = `rgba(${r},${g},${b})`;
        document.getElementById("top-layer").appendChild(bubble)
        console.log(e)

    })

}