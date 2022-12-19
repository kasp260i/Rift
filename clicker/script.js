/***
 *    ...........__....__.........______.........__.......__.........______..........______.........__.......__........________.........______..
 *    ..........|..\../..\......./......\.......|..\...../..\......./......\......../......\.......|..\...../..\......|........\......./......\.
 *    ..........|.$$./..$$......|..$$$$$$\......|.$$\.../..$$......|..$$$$$$\......|..$$$$$$\......|.$$\.../..$$......|.$$$$$$$$......|..$$$$$$\
 *    ..........|.$$/..$$.......|.$$..|.$$......|.$$$\./..$$$......|.$$.__\$$......|.$$__|.$$......|.$$$\./..$$$......|.$$__..........|.$$___\$$
 *    ..........|.$$..$$........|.$$..|.$$......|.$$$$\..$$$$......|.$$|....\......|.$$....$$......|.$$$$\..$$$$......|.$$..\..........\$$....\.
 *    ..........|.$$$$$\........|.$$..|.$$......|.$$\$$.$$.$$......|.$$.\$$$$......|.$$$$$$$$......|.$$\$$.$$.$$......|.$$$$$.........._\$$$$$$\
 *    .__.......|.$$.\$$\.......|.$$__/.$$......|.$$.\$$$|.$$......|.$$__|.$$......|.$$..|.$$......|.$$.\$$$|.$$......|.$$_____.......|..\__|.$$
 *    |..\......|.$$..\$$\.......\$$....$$......|.$$..\$.|.$$.......\$$....$$......|.$$..|.$$......|.$$..\$.|.$$......|.$$.....\.......\$$....$$
 *    .\$$.......\$$...\$$........\$$$$$$........\$$......\$$........\$$$$$$........\$$...\$$.......\$$......\$$.......\$$$$$$$$........\$$$$$$.
 *    ..........................................................................................................................................
 *    ..........................................................................................................................................
 *    ..........................................................................................................................................
 */

//Generale stats
var stars = 0;
var starsPerSecond = 0;
var starsPerClick = 1;
//Priser
var astronautCost = 15;
var rocketCost = 500;
var starsuckerCost = 10000;
var alienCost = 1000000;
//Antal
var astronauts = 0;
var rockets = 0;
var starsuckers = 0;
var aliens = 0;


function check() {
	let savedstars = JSON.parse(localStorage.getItem('stars'));
	savedstars = Math.floor(savedstars);
	// console.log('test load');
	stars += savedstars;

 
	// ASTRONAUTS
	// *
	
	if(localStorage.getItem('astronauts')) {
		let savedastronauts = JSON.parse(localStorage.getItem('astronauts'));
		savedastronauts = Math.floor(savedastronauts);
		astronauts += savedastronauts;
		starsPerClick = astronauts * 1;
	}

	let savedastronautCost = JSON.parse(localStorage.getItem('astronautCost'));
	savedastronautCost = Math.floor(savedastronautCost);
	if(astronauts) {
		astronautCost = savedastronautCost;
	}
	
	document.getElementById("astronautNum").innerText = Math.ceil(astronauts);
	document.getElementById("astronautCost").innerText = Math.ceil(astronautCost);


	// ROCKETS
	// *
	if(localStorage.getItem('rockets')) {
		let savedrockets = JSON.parse(localStorage.getItem('rockets'));
		savedrockets = Math.floor(savedrockets);
		rockets += savedrockets;
		starsPerSecond += rockets * 10;
	}

	let savedrocketCost = JSON.parse(localStorage.getItem('rocketCost'));
	savedrocketCost = Math.floor(savedrocketCost);
	if(rockets) {
		rocketCost = savedrocketCost;
	}
	
	document.getElementById("rocketNum").innerText = Math.ceil(rockets);
	document.getElementById("rocketCost").innerText = Math.ceil(rocketCost);


	// STAR SUCKERS
	// *
	if(localStorage.getItem('starsuckers')) {
		let savedstarsuckers = JSON.parse(localStorage.getItem('starsuckers'));
		savedstarsuckers = Math.floor(savedstarsuckers);
		starsuckers += savedstarsuckers;
		starsPerSecond += starsuckers * 200;
	}

	let savedstarsuckerCost = JSON.parse(localStorage.getItem('starsuckerCost'));
	savedstarsuckerCost = Math.floor(savedstarsuckerCost);
	if(starsuckers) {
		starsuckerCost = savedstarsuckerCost;
	}
	
	document.getElementById("starsuckerNum").innerText = Math.ceil(starsuckers);
	document.getElementById("starsuckerCost").innerText = Math.ceil(starsuckerCost);


	// ALIENS
	// *
	if(localStorage.getItem('aliens')) {
		let savedaliens = JSON.parse(localStorage.getItem('aliens'));
		savedaliens = Math.floor(savedaliens);
		aliens += savedaliens;
		starsPerSecond += aliens * 10000;
	}

	let savedalienCost = JSON.parse(localStorage.getItem('alienCost'));
	savedalienCost = Math.floor(savedalienCost);
	if(aliens) {
		alienCost = savedalienCost;
	}
	
	document.getElementById("alienNum").innerText = Math.ceil(aliens);
	document.getElementById("alienCost").innerText = Math.ceil(alienCost);


	// console.log(savedastronauts, savedrockets, savedstarsuckers, savedaliens);
}

// Bliver kaldet når man trykker på baguette
function increment() {
	stars += starsPerClick; // tilføjre "Startperclick" til antallet af stars
	document.getElementById("showstars").innerText = Math.ceil(stars); // Bruger DOM til at ændre numeret af stjerne i html
	console.log('test inc' + stars);

	localStorage.setItem('stars', stars);
}

// Funktionen bliver kaldt i et interval
setInterval(function() {
	stars += starsPerSecond; // Tilføjre starspersecond til antallet af stars
	stars=Math.floor(stars)
	document.getElementById("showstars").innerText = Math.ceil(stars); // Bruger DOM til at ændre numeret af stjerne i html

	localStorage.setItem('stars', stars);
	localStorage.setItem('stars-sec', starsPerSecond);
}, 1000) // intervallet bliver kandt hver 1000ms (1 sekund)


// Resten af koden er funktioner når man køber de foskekslvlige ting, koden er meget ens så forklare kun i den første funktion
function buyastronaut() {

	if (stars >= astronautCost) // Tjekker om man har nok stjerner til at købe upgraderingen
	{
		
		stars -= astronautCost; // Fjerner det opgraderingen koster fra ens stars

		document.getElementById("showstars").innerText = Math.ceil(stars); //Bruger DOM til at ændre koden i HTML, bruger math.ceil til at runde tallet om så der ikke kommer til at så man har 131254,129259 men sitedet 131254

		astronauts++; // Tilføjer 1 til antallet af denne opgradering man har

		document.getElementById("astronautNum").innerText = Math.ceil(astronauts); // --||--
	

		astronautCost *=1.3; // Gange prisen med 1.3 så opgraderingen ikke altid koster det samme

		document.getElementById("astronautCost").innerText = Math.ceil(astronautCost); // --||--


		starsPerClick += 1; // Denne opgradering gør så man får flere stjerne i sekundet, nogle gør man får fler når man klikker

		localStorage.setItem('astronauts', astronauts);
		localStorage.setItem('astronautCost', astronautCost);
	}	
}


function buyrocket() {

	if (stars >= rocketCost) { 
		
		stars -= rocketCost; 

		document.getElementById("showstars").innerText = Math.ceil(stars);

		rockets++;

		document.getElementById("rocketNum").innerText = Math.ceil(rockets);
	

		rocketCost *=1.3; 

		document.getElementById("rocketCost").innerText = Math.ceil(rocketCost);


		starsPerSecond += 10;

		localStorage.setItem('rockets', rockets);
		localStorage.setItem('rocketCost', rocketCost);
	} 
}


function buystarsucker() {

	if (stars >= starsuckerCost) 
	{
		
		stars -= starsuckerCost; 

		document.getElementById("showstars").innerText = Math.ceil(stars);

		starsuckers++; 
		document.getElementById("starsuckerNum").innerText = Math.ceil(starsuckers);
	

		starsuckerCost *=1.3; 

		document.getElementById("starsuckerCost").innerText = Math.ceil(starsuckerCost);


		starsPerSecond += 200; 

		localStorage.setItem('starsuckers', starsuckers);
		localStorage.setItem('starsuckerCost', starsuckerCost);
	} 
}


function buyalien() { 

	if (stars >= alienCost) { 
		
		stars -= alienCost;  

		document.getElementById("showstars").innerText = Math.ceil(stars);

		aliens++; 

		document.getElementById("alienNum").innerText = Math.ceil(aliens);
	

		alienCost *=1.3; 

		document.getElementById("alienCost").innerText = Math.ceil(alienCost);


		starsPerSecond += 10000; 

		localStorage.setItem('aliens', aliens);
		localStorage.setItem('alienCost', alienCost);
	}	
}

function playMyAudio(){
    document.getElementById("myAudio").play();
}
function pauseMyAudio(){
    document.getElementById("myAudio").pause();
}


function nulstil() {
	//Generale stats
	stars = 0;
	starsPerSecond = 0;
	starsPerClick = 1;
	//Priser
	astronautCost = 15;
	rocketCost = 500;
	starsuckerCost = 10000;
	alienCost = 1000000;
	//Antal
	astronauts = 0;
	rockets = 0;
	starsuckers = 0;
	aliens = 0;


	localStorage.clear()
	// localStorage.clear('stars');

}