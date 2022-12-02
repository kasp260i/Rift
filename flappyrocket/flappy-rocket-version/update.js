// execute the update function every 10 milliseconds
function update() {

    fillCanvas("rgb(80, 80, 80)"); // rgb(16, 22, 28)


    GameObject.drawAll();
    GameObject.updateAll();

    
//superCoins
    for(let superCoin of superCoins) [
        superCoin.draw(),
       superCoin.update(),
    ]

// spawn new supercoin when it is time
    superCoin.timeSinceLastSpawn += timeSinceLastFrame;
    if(gameState == "action" && superCoin.timeSinceLastSpawn>superCoin.spawnInterval) {
        superCoins.push(new superCoin());
        superCoin.timeSinceLastSpawn = 0;
    }


//Moneybag
    for(let bag of bags) [
        bag.draw(),
        bag.update(),
    ]

    
 // spawn a new star when it is time
     Star.timeSinceLastSpawn += timeSinceLastFrame;
     if(Star.timeSinceLastSpawn>Star.spawnInterval) {
         new Star ();
         Star.timeSinceLastSpawn = 0;
     }

// spawn a new shooting star when it is time
    SStar.timeSinceLastSpawn += timeSinceLastFrame;
    if(SStar.timeSinceLastSpawn>SStar.spawnInterval) {
        new SStar ();
        SStar.timeSinceLastSpawn = 0;
    }
    
// spawn new meteors if it is time
    if(gameState == "action" &&
    Meteor.timeSinceLastSpawn > Meteor.spawnInterval) {
        new Meteor();
        Meteor.timeSinceLastSpawn = 0;
    }

    if(gameState == "action") {
        Meteor.timeSinceLastSpawn += timeSinceLastFrame;
    }

// spawn new satelites if it is time
    if(gameState == "action" &&
    Satelite.timeSinceLastSpawn > Satelite.spawnInterval) {
        new Satelite();
        Satelite.timeSinceLastSpawn = 0;
    }

    if(gameState == "action") {
        Satelite.timeSinceLastSpawn += timeSinceLastFrame;
    }
    
    // spawn new coins
    if(gameState == "action" &&
    Coin.timeSinceLastSpawn > Coin.spawnInterval) {
        new Coin ();
        Coin.timeSinceLastSpawn = 0;
    }

    if(gameState == "action") {
        Coin.timeSinceLastSpawn += timeSinceLastFrame;
    }

    if(debugModeIsOn) {
        drawText(
            "timeSinceLastFrame: " + timeSinceLastFrame,
            canvas.width/2,
            20,
            12,
            "white"
        );
    }

    // update timeSinceLastFrame and draw next frame
    timeOfCurrentFrame = new Date().getTime();
    timeSinceLastFrame = timeOfCurrentFrame - timeOfLastFrame;
    timeOfLastFrame = timeOfCurrentFrame;
    window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);


 