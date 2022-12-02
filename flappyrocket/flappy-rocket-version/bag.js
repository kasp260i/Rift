class bag {
 
    static spawnInterval = 100000;
    static timeSinceLastSpawn = bag.spawnInterval;
 
    constructor() {
        this.sound = new Audio("../assets/sounds/achi.wav");
        this.image = new Image(100, 100);
        this.image.src = "../assets/images/coinbag.png";
        this.hitboxRadius = 30;
        this.xSpeed = -10;
        this.value = 20;
        this.xPosition = spawnXPosition;
        this.yPosition = randomBetween(0, canvas.height);
        this.yOffset = 0;
        this.oscillilationScale = randomBetween(0, 500);
        this.oscillilationTime = 0;
        this.oscillilationSpeed = randomBetween(0, 0.1);
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
 
    update(){
        // move the diamond
        this.xPosition += this.xSpeed;
        this.oscillate();
 
        if(gameState == "action") {
            // check if the diamond collides with the rocket
            if(theseCirclesCollide(
                rocket.xPosition,
                rocket.yPosition,
                rocket.hitboxRadius,
                this.xPosition,
                this.yPosition + this.yOffset,
                this.hitboxRadius
            ))
            { // if they do, increase the score
                this.sound.play();
                score.addPoints(this.value);
                bags = bags.remove(this);
            }
        }
 
        // remove diamond if it goes off the screen
        if(this.xPosition < destructionXPosition) {
            bags = bags.remove(this);
        }
    }
 
    oscillate() {
        this.oscillilationTime += this.oscillilationSpeed;
        this.yOffset = Math.sin(this.oscillilationTime) * this.oscillilationScale;
    } }
