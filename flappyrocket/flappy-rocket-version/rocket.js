class Rocket extends GameObject {

    // constructor for a rocket object
    constructor () {
        let drawOrder = 5;
        super(drawOrder);
        this.xPosition = 300;
        this.yPosition = 450;
        this.ySpeed = 0;
        this.beginningYAccelleration = 0.7;
        this.yAccelleration = 0;
        this.hitboxRadius = 40;
        this.image = new Image(120, 70);
        this.image.src = "../assets/images/asteroid/player.png"; // "../assets/images/bird.png
        this.flapSound = new Audio("../assets/sounds/jump.wav");
        this.flapSound.volume = 0.3;
        this.flapForce = -12;
        this.flapKey = " ";
        this.canFlap = false;
        this.bagspawner = 25;
    }

    draw() {
        drawImage(this.image,
            this.xPosition,
            this.yPosition,
            this.image.width,
            this.image.height
        );

        if(debugModeIsOn) {
            drawCircle(
                this.xPosition, 
                this.yPosition, 
                this.hitboxRadius, 
                hitboxColor
            );
        }
    }

    update () {

        if (gameState == "action" || gameState == "gameover") {
            this.ySpeed += this.yAccelleration;
            this.yPosition += this.ySpeed;
        }
//Når man kommer over
        if((this.yPosition < 30) && gameState == "action") {
            this.yPosition = 30;
            this.ySpeed=0;
           /* this.canFlap = false;
            gameOverSound.play();
            gameOverSound.volume = 0.3;
            gameState = "gameover";
            flapText.isActive = false;
            gameOverText.isActive = true; */
        }
//Når man kommer under
    if((this.yPosition> canvas.height)&& gameState=="action"){
          this.yPosition = canvas.height-40;
          this.ySpeed=-10;
      }

        // Push new money bag when score reaches 50. score.addPoints(1) is added to prevent spamming.
        if(gameState == "action" && score.value == this.bagspawner) {
            bags.push(new bag());
            this.bagspawner += 25;
        }
    }

    flap () {
        this.ySpeed = this.flapForce;
    }
}
