
window.onload = setup


function setup() {
    // document.querySelector(".square_shape").classList.remove("square_shape");
    // document.querySelector("p span").classList.add("change_span");
    // document.getElementById("one").style.background = "pink";
    // console.log("running setup");
    // //Accessing by ID
    // console.log(document.getElementById("one"));
    // console.log(document.querySelector("#one"));
    // //Accessing by tag name (returns array)
    // console.log(document.getElementsByTagName("div"));
    // console.log(document.getElementsByTagName("div").length);
    // console.log(document.getElementsByTagName("div")[0]);
    // //Accessing by tag name (no array)
    // console.log(document.querySelector("div"));
    // // Accessing tag name (more generic way)
    // console.log(document.querySelectorAll("div"));
    // console.log(document.querySelectorAll("div").length);
    // console.log(document.querySelectorAll("div")[0]);
    // //Accessing class name (array)
    // console.log(document.getElementsByClassName("square_shape"));
    // console.log(document.getElementsByClassName("square_shape").length);
    // console.log(document.getElementsByClassName("square_shape")[0]);
    // //Accessing class name (no array + first match)
    // console.log(document.querySelector(".square_shape"));
    // //Accessing class name (generic, all matches, arrays)
    // console.log(document.querySelectorAll(".square_shape"));
    // console.log(document.querySelectorAll(".square_shape").length);
    // console.log(document.querySelectorAll(".square_shape")[0]);

    // //innerHTML
    // console.log(document.getElementById("two").innerHTML);
    // //text content
    // console.log(document.getElementById("two").textContent);

    // //accessing content of elements
    // console.log(document.querySelector("#five").getAttribute("id"));
    // console.log(document.querySelector("#five").getAttribute("class"));

    // //accessing attribute of elements
    // console.log(document.querySelector("#five").getAttribute("id")); // references it self, silly!
    // console.log(document.querySelector("#five").getAttribute("class"));
    // // attribute : list of classes
    // console.log(document.querySelector("#two").classList);
    // // attribute: attribute names:
    // console.log(document.querySelector("#five").getAttributeNames());
    // // attribute: style attributes
    // console.log(document.querySelector("#one").style);
    // console.log(document.querySelector("#one").style.background);

    // // accessing family
    // console.log(document.querySelector("#one").children);
    // console.log(document.querySelector("#one").children[0]);
    // console.log(document.querySelectorAll("span")[0].parentElement)
    // console.log(document.querySelectorAll("span")[2].parentElement.parentElement)

    // //modyfing HTML
    // console.log(document.querySelector("#two").children[0].innerHTML = "<h2> this is now a header</h2>");

    // // modifying a group of elements
    // //get the group
    // let allSquareShapes = document.querySelectorAll(".square_shape");
    // //go through each element
    // for (let singleSquareShape of allSquareShapes) {
    //     //get children
    //     console.log(singleSquareShape.children[0])
    //     // add text
    //     singleSquareShape.children[0].textContent += "adding content"
    // }

    // //modify (adding,removing) from classlist
    // document.querySelector(".square_shape").classList.remove("square_shape"); //first one only
    // console.log(document.querySelector("p span").classList.add("change_span"));

    // //modify using setAttribute()
    // document.querySelectorAll(".another_class")[0].setAttribute("id", "newTest");
    // console.log(document.querySelectorAll(".another_class")[0]);

    // //modify using removeAttribute() - multiple elements
    // let element = document.querySelectorAll("span")[1].parentElement.parentElement
    // element.removeAttribute("id")
    // console.log(element)

    // // add
    // document.querySelector("#four").style.background = "cornflowerBlue";
    // document.querySelector("#four").style.borderColor = "darkblue";
    // //modify
    // document.querySelector("#one").style.background = "pink";
    // document.querySelector("#one").style.borderColor = "darkblue";

    //adding new element
    let newDiv = document.createElement("div");
    newDiv.classList.add("square_shape");
    newDiv.innerHTML = " NEW ELEMENT ";
    newDiv.style.backgroundColor = "purple";
    //acces parent element
    let parentElement = document.querySelector(".wrapper_flex_box");
    parentElement.appendChild(newDiv);

    let newDivTwo = document.createElement("div");
    newDivTwo.classList.add("square_shape");
    newDivTwo.innerHTML = " NEW ELEMENT TWO ";
    newDivTwo.style.backgroundColor = "yellow";
    newDivTwo.style.color = "black"
    // access parent element
    let sibling = document.querySelector("#three")
    let parentElementAgain = document.querySelector(".wrapper_flex_box")
    parentElementAgain.insertBefore(newDivTwo, sibling);

    // //Removing elements from the DOM
    // let parentElementToRemoveFrom = document.querySelector(".wrapper_flexbox")
    // let toRemove = document.getElementById("six");
    // parentElementToRemoveFrom.removeChild(toRemove);



}


