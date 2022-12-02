class Moon extends GameObject {

    static timeSinceLastSpawn = 0; // milliseconds
    static spawnInterval = 10000; // milliseconds

    constructor (xPosition) {
        let drawOrder = 0;
        super(drawOrder);
        this.image = new Image(90, 90);
        this.image.src = "../assets/images/asteroid/moontrans.png";
        this.xPosition = xPosition == undefined ? spawnXPosition : xPosition;
        this.yPosition = 200;  // canvas.height/2
        this.xSpeed = -0.07;
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
        //move moon to the left
        this.xPosition += this.xSpeed;

        //destroy moon if it moves too far left
        if(this.xPosition < destructionXPosition) {
            this.destroy();
        }
    }
}