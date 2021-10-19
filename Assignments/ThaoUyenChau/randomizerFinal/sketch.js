let randomIndex;
let animating = false;
// let bgs = [];
let shapes = [];
let imageCounter = 0;
let button;
let cnvs;

function preload(){
  for (let i = 0; i <= 23; i++){
  shapes[i] = loadImage(`assets/shape_${i}.png`)
    console.log(shapes);
  }
}

function setup() {

  cnvs = createCanvas(600, 600);
  cnvs.parent("#canvasDiv");

  background (20);
  textSize(65);
  imageMode(CENTER);
  frameRate(8);

  button = select('#randButton')
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");
  letsCreate();

}

function resetSketch(){
  if (animating == true){
    clear();
    background(20);
    if (imageCounter < shapes.length - 1){
       imageCounter++;
       console.log(imageCounter);
    }else {
      imageCounter = 0;
      noStroke();
      fill(219, 210, 18);
      rect(random(width), random(height), width*.3, height*.3);
      fill(192, 125, 219);
      rect(random(width), random(height), width*.3, height*.3);
      fill(224, 68, 145);
      circle(random(width), random(height), width*.4, height*.3);
      fill(143, 200, 34);
      rect(random(width), random(height), width*.3, height*.3);

    }
    image(shapes[imageCounter], random(width), random(height));
 }

}

function draw() {

 if (animating == true){
    clear();
    background(20);
    if (imageCounter < shapes.length - 1){
       imageCounter++;
       console.log(imageCounter);
    }else {
      imageCounter = 0;
      noStroke();
      fill(219, 210, 18);
      rect(random(width), random(height), width*.3, height*.3);
      fill(192, 125, 219);
      rect(random(width), random(height), width*.3, height*.3);
      fill(224, 68, 145);
      circle(random(width), random(height), width*.4, height*.3);
      fill(143, 200, 34);
      rect(random(width), random(height), width*.3, height*.3);

    }
    image(shapes[imageCounter], random(width), random(height));
 }
}

function letsCreate(){

  fill(219, 210, 18);
  text("L", 130, 250);
  fill(192, 125, 219);
  text("e", 170, 250);
  fill(224, 68, 145);
  text("t", 210, 250);
  fill(143, 200, 34);
  text("'s", 230, 250);

  fill(224, 68, 145);
  text("c", 130, 320);
  fill(219, 210, 18);
  text("r", 173, 320);
  fill(143, 200, 34);
  text("e", 200, 320);
  fill(224, 68, 145);
  text("a", 240, 320);
  fill(143, 200, 34);
  text("t", 280, 320);
  fill(192, 125, 219);
  text("e", 300, 320);

}

function randomizer(){
  animating = false;

  if (shapes[0]){
    randomIndex = int(random(shapes.length));
    image(random(shapes), width/3, height/3);
    shapes.splice(randomIndex, 2);

  } else {
    // background(random(200, 255));
    fill(219, 210, 18);
    rect(random(width), random(height), width*.3, height*.3);
    fill(192, 125, 219);
    rect(random(width), random(height), width*.3, height*.3);
    fill(224, 68, 145);
    circle(random(width), random(height), width*.4, height*.3);
    fill(143, 200, 34);
    rect(random(width), random(height), width*.3, height*.3);
    fill(250);
    textSize(32);
    text("Hope you got something awesome", 75, 300 );
    // background(0);
    // fill(255);
    // text("REPLAY", 75, 300);



  }
}
function buttonPressed() {
animating = true
setTimeout(randomizer, 1000);
}