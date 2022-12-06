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




// Bliver kaldet når man trykker på baguette
function increment() {
	stars += starsPerClick; // tilføjre "Startperclick" til antallet af stars
	document.getElementById("showstars").innerText = Math.ceil(stars); // Bruger DOM til at ændre numeret af stjerne i html

	
}

// Funktionen bliver kaldt i et interval
setInterval(function() {
	stars += starsPerSecond; // Tilføjre starspersecond til antallet af stars
	stars=Math.floor(stars)
	document.getElementById("showstars").innerText = Math.ceil(stars); // Bruger DOM til at ændre numeret af stjerne i html
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

	}	
}

function playMyAudio(){
    document.getElementById("myAudio").play();
}
    function pauseMyAudio(){
    document.getElementById("myAudio").pause();
  }




