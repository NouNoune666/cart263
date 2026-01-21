window.onload = setup

function setup() {
    // console.log("running setup");
    // console.log(document.getElementById("one"));
    // console.log(document.querySelector("#one"));

    // let allDivs = document.getElementsByTagName("div");
    // console.log(allDivs[1]);
    // console.log(allDivs.length);

    // console.log(document.getElementsByTagName("div"));
    // console.log(document.querySelectorAll("div p"));

    // console.log(document.getElementById("two").textContent);

    // console.log(document.querySelector("#five").getAttribute("id"));
    // console.log(document.querySelector("#five").getAttribute("class"));

    // console.log(document.querySelector("#two").classList);

    // console.log(document.querySelector("#one").style.background);


    // MODIFYING DOM ELEMENTS

    // console.log(document.querySelectorAll("span")[0].parentElement.parentElement)
    // console.log(document.querySelector(".wrapper_flex_box").children[0])


    // document.getElementById("two").children[0].innerHTML = "<h3> Hello Js </h3>";

    let childrenOfTwo = document.getElementById("two").children;
    for (let i = 0; i < childrenOfTwo.length; i++) {
        childrenOfTwo[i].innerHTML = "<h3> Hello Js </h3>"
    }

}