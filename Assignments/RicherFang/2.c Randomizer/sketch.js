// How Does This Shit Work?
// solar system
let planets = [{name: "Mercury", color: "Black"},{name: "Venus", color: "Yellow"},{name: "Earth", color: "Blue"},{name: "Mars", color: "Red"},{name: "Jupiter", colors: "Gold"},{name: "Saturn", colors: "Silver"},{name: "Uranus", colors: "Green"},{name: "Neptune", color: "Colbalt"}]

let randomIndex;
let animating = false;
let changeBackground = true;

let randomIndex;
let animating = false;
let SpaceBoi = [];

function preload(){

  for (let i =0; i <= 15; i++){
    SpaceBoi[i] = loadimage('assests/Space Boi_${i}.JPG')
  }
}

function setup() {
  createCanvas(500, 500);
  background(200);

  text("Click to Blast Off into Space", 50, 50);

  setTimeout(changeBackground, 1000);

  console.log(SpaceBoi);
}

function setup() {
  createCanvas(500, 500);
  background(200);
  textSize(24);

  text("click to blast off into space", 50, 50);

}

function draw() {

  if (animating == true) {
    ellipse(random(width), random(height), random(50, 200));

  }
}

function randomizer(){
  animating = false;

  if (planets[0]) {
    background(random(200, 255)); 
    randomIndex = int( random(planets.length)); 
    text(`${planets[randomIndex].name} 's color is  ${planets[randomIndex].color}`, 50, 50);
    planets.splice(randomIndex, 1);
    // text(planets[randomIndex].name + "'s color is " + planets[randomIndex].color, 50, 50);
    // planets.splice(randomIndex, 1);
  } else {
    background(random(200, 255)); 
    text("Turn Back, You're Leaving Our Solar System", 50, 50); 
  }
}

  function mousePressed() {
    animating = true; 
    setTimeout(randomizer, 2000);
}
