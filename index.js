alert("Press the key specified to play the corresponding sound, Enjoy!!!");
var noOfButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<noOfButtons;i++){
  document.addEventListener("keydown",onKeyDown);
  document.querySelectorAll(".drum")[i].addEventListener("click",onClick);
}
function onClick(){
  var clicked = this.innerHTML.toLowerCase();
  animateButton(clicked);
  switch(clicked){
  case "a":
  var audio=new Audio('sounds/crash.mp3');
  audio.play();
  break;
  case "s":
  var audio=new Audio("sounds/kick-bass.mp3");
  audio.play();
  break;
  case "d":
  var audio=new Audio("sounds/snare.mp3");
  audio.play();
  break;
  case "f":
  var audio=new Audio("sounds/tom-1.mp3");
  audio.play();
  break;
  case "j":
  var audio=new Audio("sounds/tom-2.mp3");
  audio.play();
  break;
  case "k":
  var audio=new Audio("sounds/tom-3.mp3");
  audio.play();
  break;
  case "l":
  var audio=new Audio("sounds/tom-3.mp3");
  audio.play();
  break;
  default:
}
}

function onKeyDown(event){
  var keyPressed=event.key.toLowerCase();
  animateButton(keyPressed);
  switch(keyPressed){
  case "a":
  var audio=new Audio('sounds/crash.mp3');
  audio.play();
  break;
  case "s":
  var audio=new Audio("sounds/kick-bass.mp3");
  audio.play();
  break;
  case "d":
  var audio=new Audio("sounds/snare.mp3");
  audio.play();
  break;
  case "f":
  var audio=new Audio("sounds/tom-1.mp3");
  audio.play();
  break;
  case "j":
  var audio=new Audio("sounds/tom-2.mp3");
  audio.play();
  break;
  case "k":
  var audio=new Audio("sounds/tom-3.mp3");
  audio.play();
  break;
  case "l":
  var audio=new Audio("sounds/tom-3.mp3");
  audio.play();
  break;
  default:
}
}
//adding animation (flash) to the button pressed

function animateButton(keyToAnimate){
    document.querySelector("."+keyToAnimate).classList.add("pressed");
    setTimeout(delay,100);
    function delay(){
      document.querySelector("."+keyToAnimate).classList.remove("pressed");
    }
}
