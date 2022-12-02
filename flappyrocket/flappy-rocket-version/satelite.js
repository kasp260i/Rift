class Satelite extends GameObject {

    static spawnInterval = 10000;
    static timeSinceLastSpawn = 1000;

    constructor () {
        let drawOrder = 9;
        let tag = "satelite";
        super(drawOrder, tag);
        this.image = new Image(100, 75);
        this.image.src = "https://cdn.discordapp.com/attachments/1026804505351827549/1038039429526331463/satelit.png"; 
        this.xPosition = spawnXPosition;
        this.yPosition = randomBetween(0, canvas.height);
        this.xSpeed = -20.5;
        this.hitboxRadius = 35;
        this.oscillilationScale = randomBetween(0, 1); // randomBetween(0, 500)
        this.oscillilationTime = 1;
        this.oscillilationSpeed = randomBetween(0, 0.001); // randomBetween(0, 0.1)
    }

    draw() {
        drawImage(
            this.image,
            this.xPosition,
            this.yPosition + this.yOffset,
            this.image.width,
            this.image.height
        );

        if(debugModeIsOn) {
            drawCircle(
                this.xPosition, 
                this.yPosition + this.yOffset, 
                this.hitboxRadius, 
                hitboxColor
            );
        }
    }

    update() {
        this.xPosition += this.xSpeed;
        this.oscillate();

        if(this.xPosition < destructionXPosition) {
            this.destroy();
        }

        if  (
            theseCirclesCollide(
                rocket.xPosition,
                rocket.yPosition,
                rocket.hitboxRadius,
                this.xPosition,
                this.yPosition + this.yOffset,
                this.hitboxRadius)
            && gameState == "action") 
        {
            rocket.canFlap = false;
            gameOverSound.play();
            flapText.isActive = false;
            gameOverText.isActive = true;
            gameState = "gameover";
        }
    }

    static getRandomYPosition() {
        return Utility.randomBetween(0, Canvas.getHeight());
    }

    oscillate() {
        this.oscillilationTime += this.oscillilationSpeed;
        this.yOffset = Math.sin(this.oscillilationTime) * this.oscillilationScale;
    } 


} 



