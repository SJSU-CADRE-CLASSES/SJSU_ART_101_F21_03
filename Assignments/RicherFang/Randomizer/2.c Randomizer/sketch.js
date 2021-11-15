// How Does This Shit Work?
// solar system
let planets = [{name: "Mercury", color: "Black"},{name: "Venus", color: "Yellow"},{name: "Earth", color: "Blue"},{name: "Mars", color: "Red"},{name: "Jupiter", colors: "Gold"},{name: "Saturn", colors: "Silver"},{name: "Uranus", colors: "Green"},{name: "Neptune", color: "Colbalt"}]
let img;
let randomIndex;
let animating = false;
let changeBackground = true;
let planetss = [];
let imageCounter = 0;
let button;
let buttonPressed;

function preload(){
  img = loadImage(`assests/Space Boi.png`);

for (let i = 0; i <= 7; i++){
  planetss[i] = loadImage(`assests/Planet_${i}.JPG`)
}

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);
  imageMode (CENTER);
  image(img, 768, 400, 800, 800);
  frameRate(8);
  text("click to blast off into space", 50, 50);

  button = createButton("Press For Warp Speed");
  button.mousePressed(buttonPressed);
}

function draw() {
  background(bg);
  if (animating == true) {
      clear();
      image(planetss[imageCounter], width/2, height/2);

      if (imageCounter < planetss.length - 1){
      imageCounter++;
      console.log(imageCounter)
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
