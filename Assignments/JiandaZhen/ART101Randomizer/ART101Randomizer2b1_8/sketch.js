//random animals
let therion = [{
  name: "owl",
  color: "purple"
}, {
  name: "koala",
  color: "yellow"
}, {
  name: "turtle",
  color: "green"
}, {
  name: "fox",
  color: "orange"
}, {
  name: "panda",
  color: "red"
}, {
  name: "fish",
  color: "blue"
}];

let randomIndex;
let animating = false;

function setup() {
  createCanvas(800, 800);
  background(220);
  textSize(32);

  text("click to randomize", 50, 50);

}

function draw() {
  if (animating == true) {
    square(random(width), random(height), random(50, 200));
  }
}

function randomizer(){
  animating = false;
    if (therion[0]) {
      background(random(200, 255));
      randomIndex = int(random(therion.length));
      text(`${therion[randomIndex].name}'s color is ${therion[randomIndex].color}`, 50, 50);
      therion.splice(randomIndex, 1);
  } else{
    background(random(200, 255));
    text("nothing left!", 50, 50);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);


}
