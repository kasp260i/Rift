class SStar extends GameObject {

    static timeSinceLastSpawn = 0; // milliseconds
    static spawnInterval = randomBetween(1000, 30000); // milliseconds

    constructor (xPosition) {
        let drawOrder = 0;
        super(drawOrder);
        this.image = new Image(10,10);
        this.image.src = "../assets/images/asteroid/startrans.png";
        this.xPosition = xPosition == undefined ? spawnXPosition : xPosition;
        this.yPosition = randomBetween(0, canvas.height); 
        this.xSpeed = -250;
    }

    draw() {
        drawImage(
            this.image,
            this.xPosition,
            this.yPosition,
            this.image.width,
            this.image.height
        );
    }

    update() {
        //move sstar to the left
        this.xPosition += this.xSpeed;

        //destroy sstar if it moves too far left
        if(this.xPosition < destructionXPosition) {
            this.destroy();
        }

    }
}