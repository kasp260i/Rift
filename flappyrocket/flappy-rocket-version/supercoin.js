class superCoin {
 
    static spawnInterval = randomBetween(5000, 50000);
    static timeSinceLastSpawn = 1000; // superCoin.spawnInterval
 
    constructor() {
        this.sound = new Audio("../assets/sounds/achi.wav");
        this.sound.volume = 0.3;
        this.image = new Image(60, 60);
        this.image.src = "https://cdn.discordapp.com/attachments/1026804505351827549/1038033794629902387/goldstar.png";
        this.hitboxRadius = 30;
        this.xSpeed = -10;
        this.value = 10;
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
        // move the supercoin
        this.xPosition += this.xSpeed;
        this.oscillate();
 
        if(gameState == "action") {
            // check if the supercoin collides with the rocket
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
                superCoins = superCoins.remove(this);
            }
        }
 
        // remove supercoin if it goes off the screen
        if(this.xPosition < destructionXPosition) {
            superCoins = superCoins.remove(this);
        }


    }

    oscillate() {
        this.oscillilationTime += this.oscillilationSpeed;
        this.yOffset = Math.sin(this.oscillilationTime) * this.oscillilationScale;
    } }

    