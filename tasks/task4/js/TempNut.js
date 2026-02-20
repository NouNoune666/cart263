class TempNut {
    constructor(x, y, size, tempNutColor) {
        this.x = x;
        this.y = y;
        this.tempNutColor = tempNutColor;
        this.tempNutDiv = document.createElement("div");
        this.size = size;
        self = this;
    }

    renderTempNut() {
        this.tempNutDiv.classList.add("tempNut");
        this.tempNutDiv.style.background = `rgb(${this.tempNutColor.r},${this.tempNutColor.g},${this.tempNutColor.b})`;
        this.tempNutDiv.style.top = `${this.y}px`
        this.tempNutDiv.style.left = `${this.x}px`
        document.querySelector(".grass").appendChild(this.tempNutDiv);
    }

}