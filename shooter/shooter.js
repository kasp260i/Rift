var gammelmax = 1
var nymax = 1
var antal = 0
var tiden = 30;
var spiligang = false;
var skudantal = 0;


function start(){
  skudantal++
  tiden=30;
  ramt();
  document.getElementById("tid").innerHTML = "Tid tilbage: " + tiden;
  document.getElementById("antal").style.display = 'block';
  document.getElementById("tid").style.display = 'block';
  var skudlyden = setInterval(function(){
    skudantal++
  }, 100);
}
/*
addEventListener('load', (event) => {});

onload = (event) => { ramt(); document.getElementById("tid").innerHTML = "Tid tilbage: " + tiden;};
*/

function ramt(){
    document.getElementById("antal").innerHTML = "Ramt: " + antal
   
     gammelmax=nymax;
    nymax = Math.floor(Math.random(0)*50)+1;
    if(nymax==gammelmax){
      ramt()
    } else {
        document.getElementById(nymax).style.display = "block";
        antal++
    }
    }

   var timer =  setInterval(function () {
      document.getElementById("tid").innerHTML = "Tid tilbage: " + tiden
      tiden--
      if(tiden<=-1){
        tiden=0;
        afslutspil();
      }
  }, 1000);



  function afslutspil(){
    document.getElementById(nymax).style.display = 'none';
    document.getElementById("antal").style.display = 'none';
    document.getElementById("tid").style.display = 'none';
    document.getElementById("done").innerHTML = "Du ramte  " + antal + " stjerner!"
    document.getElementById("done").style.display = 'block';
    document.getElementById("retry").style.display = 'block';
  }

  var shootsound = new Audio('assets/Sounds/shoot.wav');

 
  
  function skudlyd(){
    if(skudantal>=2){
    shootsound.play();
    }
   }
  