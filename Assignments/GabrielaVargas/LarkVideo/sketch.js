// which succulent will you get?
let succulents = [{
  name: "seed",
  color: "baby seed color"
}, {
  name: "leaf",
  color: "green"
}, {
  name: "root",
  color: "turquoise"
}, {
  name: "baby plant",
  color: "yellow"
}, {
  name: "succulent",
  color: "fuscha"
}, {
  name: "rotten",
  color: "brown"
}];

let randomIndex;
let animating = false;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

  text("click to randomize", 50, 50);

}

function draw() {

  if (animating == true) {
    ellipse(random(width), random(height), random(50, 200));
  }
}

function randomizer() {
  animating = false;

  if (succulents[0]) {
    // this displays random name and splices it out of array
    background(random(200, 255));
    randomIndex = int(random(succulents.length));
    text(`${succulents[randomIndex].name}'s phase is
    ${succulents[randomIndex].color}`, 50, 50);
    succulents.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left!", 50, 50);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);
}
