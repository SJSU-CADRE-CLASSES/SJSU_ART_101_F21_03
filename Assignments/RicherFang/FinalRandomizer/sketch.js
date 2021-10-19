// How Does This Shit Work?
// Bought a spaceship, now I'm a space cadet (Space cadet)
let planets = [{name: "Sun"},{name: "Mercury"},{name: "Venus"},{name: "Earth"},{name: "Mars"},{name: "Jupiter"},{name: "Saturn"},{name: "Uranus"},{name: "Neptune"},{name: "Pluto"},{name: "Luna"},{name: "Io"},{name: "Europa"},{name: "Triton"},]
let img;
let randomIndex;
let animating = false;
let changeBackground = true;
let Space = [];
let imageCounter = 0;
let button;
let buttonPressed;
function preload(){
  img = loadImage(`assests/Space_Ship.png`);

for (let i = 0; i <= 13; i++){
  Space[i] = loadImage(`assests/Space_${i}.png`)
}

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);
  imageMode (CENTER);
  image(img, 760, 360, windowWidth, windowHeight);
  frameRate(8);
  
  button = createButton('WARPSPEED');
  button.position(1150, 490);
  button.mousePressed();

  let col = color(255,0,0); //use color instead of fill
  button.style('background-color', col);

  redbutton()
}

function draw() {
  background(bg);
  if (animating == true) {
      // clear();
      image(Space[imageCounter], windowWidth, windowHeight);
      if (imageCounter < Space.length - 1) {
      imageCounter++;
    } else{
    imageCounter = 0;
    }

  }


function randomizer(){
  animating = false;
  if (planets[0]) {
    // background(random(200, 255)); 
    clear();
    randomIndex = int( random(planets.length)); 
    text(planets[randomIndex].name, width/2, height - 25);
    image(random(planetss), width/2, height/2);
    planets.splice(randomIndex, 1);
  } else {
    background(random(200, 255)); 
    text("Turn Back, You're Leaving Our Solar System", width/2, height - 25); 
  }

}

  function buttonPressed() {
    animating = true; 
    setTimeout(randomizer, 2000);
  }
}

function redbutton(){
  stroke(50);
  strokeWeight(8);
  c = color(300,0,0)
  fill(c);
  ellipse (1200, 500, 120, 120);
}