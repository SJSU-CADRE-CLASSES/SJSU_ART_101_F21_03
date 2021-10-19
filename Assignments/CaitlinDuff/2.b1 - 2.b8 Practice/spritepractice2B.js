// sprites w/stars
let sprites = [{
  name: "pink", 
  flavor:"strawberry"
}, {
  name: "yellow", 
  flavor: "lemon"
}, {
  name: "teal",
  flavor: "mint"
}, {
  name: "blue", 
  flavor: "cotton candy"
}, {
  name: "purple", 
  flavor: "grape"
}];

let randomIndex;
let animating = false;
function setup() {
  createCanvas(600, 600);
  textSize(32);
  background('#FFDFF2');
  text("Click to meet your sprite!", 130, 300);

}

function draw() {

  if (animating == true){
ellipse(random(width), random (height), random(50, 200));

  }

}


function mousePressed () { 
animating = true;
  if (sprites[0]){
  background(random (200, 255));
  randomIndex = int(random(sprites.length));
  text(sprites[randomIndex].name, 100, 100);
  sprites.splice(randomIndex, 1); 
} else {
  background('#BDC8FF');
  text("The sprites went home...", 140, 300)
}
}