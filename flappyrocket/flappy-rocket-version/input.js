document.addEventListener("keydown", function(event) {
    
    // start the game if the startkey is pressed
    if(gameState == "menu" && event.key == startKey) {
        if (music.paused) music.play();
        gameState = "action";
        rocket.canFlap = true;
        startText.isActive = false;
        flapText.isActive = true;
        return; 
    }

    // flap the rocket if the flapkey is pressed
    if (gameState == "action" && 
    event.key == rocket.flapKey && 
    rocket.canFlap == true) {
        if(rocket.yAccelleration == 0) rocket.yAccelleration = rocket.beginningYAccelleration;
        rocket.flap();
        rocket.canFlap = false;
        rocket.flapSound.currentTime = 0.1;
        rocket.flapSound.play();
        flapText.isActive = false;
        return;
    }

    // reset the game if the restart key is pressed
    if(gameState == "gameover" && event.key == restartKey) {
        gameState = "menu";
        rocket.destroy();
        rocket = new Rocket();
        GameObject.destroyAllWithTag("meteor");
        GameObject.destroyAllWithTag("coin");
        GameObject.destroyAllWithTag("satelite");
        score.value = 0;
        gameOverText.isActive = false;
        startText.isActive = true;

        return; 
    }

});

document.addEventListener("keyup", function(event) {

    // make the rocket able to flap again if the flapkey is released
    if (gameState == "action" && event.key == rocket.flapKey) {
        rocket.canFlap = true;
        return;
    }

});