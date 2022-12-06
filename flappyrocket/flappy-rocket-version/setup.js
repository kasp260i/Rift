//game variables
const gameOverSound = new Audio("../assets/sounds/itsover.wav");
const music = new Audio("../assets/sounds/bgmusic.wav");
music.loop = true;
music.volume = 0.5;
const timeBetweenUpdates = 10; //milliseconds
const debugModeIsOn = false;
const startKey = "s";
const restartKey = "r";
const hitboxColor = "#000000";
const destructionXPosition = -1000;
const spawnXPosition = canvas.width * 1.2
let gameState = "menu"; // menu, action or gameover


// make the rocket
let rocket = new Rocket();

// create the score
let score = new Score ();

// create new stars in beginning
new Star();
new Star(spawnXPosition-500);
new Star(spawnXPosition-1000);
new Star(spawnXPosition-250);

// create the moon
new Moon(spawnXPosition-750);

// create the shooting star in the beginning
new SStar();


// create menu texts
let startText = new TextObject(
    "PRESS S TO START" // text // startKey "s"
);

let flapText = new TextObject(
    "PRESS SPACE TO FLY"
);
flapText.isActive = false;

let gameOverText = new TextObject (
    "PRESS R TO RESTART" // restartKey "r"
);
gameOverText.isActive = false;



// make a supercoin
let superCoins = [];

//make a money bag
let bags = [];
