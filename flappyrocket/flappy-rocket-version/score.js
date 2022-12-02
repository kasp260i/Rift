class Score extends GameObject {

    constructor () {
        let drawOrder = 9;
        super(drawOrder);
        this.image = new Image(50, 50);
        this.image.src = "https://cdn.discordapp.com/attachments/1026804505351827549/1038066958479925248/star.png";
        this.imageXPosition = 100;
        this.imageYPosition = 100;
        this.textXPosition = 150;
        this.textYPosition = 115;
        this.textSize = 45;
        this.textColor = "white";
        this.value = 0;
    }

    draw() {
        drawImage(this.image,
            this.imageXPosition,
            this.imageYPosition,
            this.image.width,
            this.image.height
        );
        drawText(
            this.value,
            this.textXPosition,
            this.textYPosition,
            this.textSize,
            this.textColor
        );
    }

    addPoints (points) {
        this.value += points;
    }
    
}

