
window.onload = setup;
function setup() {
    // console.log("drag ex");
    let handleDragging = function (e) {
        console.log("on drag")
        //HERE :: the event target refers to the object being dragged...
        console.log(e.target.id);
        // Clear the drag data cache (for all formats/types)
        e.dataTransfer.clearData();
        // The dataTransfer.setData() method sets the data type and the value of the dragged data
        e.dataTransfer.setData("objDraggedID", e.target.id);
    };

    window.addEventListener("dragstart", handleDragging);

    let handleDraggingStop = function (e) {
        // console.log("on stop")
        // //HERE :: the event target refers to the object being dragged...
        // console.log(e.target.id);
        // // HERE - this refers to the window
        // console.log(this);
    };
    window.addEventListener("dragend", handleDraggingStop);

    /** NEW:: TO HANDLE DROPPING **/
    let handleDrop = function (e) {
        e.preventDefault();
        // console.log("dropped");
        // console.log(e);
        if (e.target.id === "dropTarget") {
            let theObj = e.dataTransfer.getData("objDraggedID");
            console.log(theObj);
            //event.target is the DIV we have dropped into ...
            // and so move it there..
            e.target.appendChild(document.getElementById(theObj));
        }
    }
    window.addEventListener("drop", handleDrop);

    // IMPORTANT::By default, data/elements cannot be dropped in other elements.
    //To allow a drop, we must prevent the default handling of the element
    window.addEventListener("dragover", function (e) {
        // console.log("over");
        e.preventDefault();
    });
}