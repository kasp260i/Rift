class TextObject extends GameObject {

    constructor(text) {
        let drawOrder = 10;
        super(drawOrder)
        this.text = text;
        this.xPosition = 300; // canvas.width / 2.5
        this.yPosition = 300; // canvas.height / 2
        this.size = 50;
        this.color = "white";
    }

    draw() {
        drawText(
            this.text,
            this.xPosition,
            this.yPosition,
            this.size,
            this.color
        );
    }

}