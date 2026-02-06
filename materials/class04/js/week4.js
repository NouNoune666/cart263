window.onload = setup;

function setup() {
  console.log("in week 4 ;)")

  // Timeout (only once)
  // window.setTimeout(addTimeoutText, 2000)

  function addTimeoutText() {
    let parent = document.getElementById("parent");
    parent.innerHTML += " NEW TEXT TO APPEAR ";
  }

  // Interval (many times)
  window.setInterval(addTextRecur, 2000);
  function addTextRecur() {
    let parent = document.getElementById("parent");
    parent.innerHTML += " NEW TEXT TO APPEAR RECUR ";
  }
}
