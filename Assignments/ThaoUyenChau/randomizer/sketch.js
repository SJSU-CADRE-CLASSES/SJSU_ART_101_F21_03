let randomIndex;
let animating = false;
// let bgs = [];
let shapes = [];
let imageCounter = 0;
let button;

function preload(){
  for (let i = 0; i <= 11; i++){
  shapes[i] = loadImage(`assets/shape_${i}.png`)
    console.log(shapes);
  }
}

function setup() {

  createCanvas(600, 600);
  background (255);
  textSize(24);
  imageMode(CENTER);
  frameRate(8);

  text("Let's create", 170, 250);
  console.log(shapes);

  button = createButton("click to randomize");
  button.mousePressed(buttonPressed);

}

function draw() {
 if (animating == true){
    clear();
    if (imageCounter < shapes.length - 1){
       imageCounter++;
       console.log(imageCounter);
    }else {
      imageCounter = 0;

    }
    image(shapes[imageCounter], random(width), random(height));
 }
}

function randomizer(){
  animating = false;

  if (shapes[0]){
    // background(random(255));
    // clear();
    randomIndex = int(random(shapes.length));
    // fill(50);
    text(`What art movement is it?`, 170, 580);
    image(random(shapes), width/3, height/3);
    shapes.splice(randomIndex, 2);

  } else {
    // background(random(200, 255));
    fill(50);
    text("Nothing left!", 75, 300 );
    rect(width*.2,height*.1, width*.3, height*.5);

  }
}
function buttonPressed() {
animating = true
setTimeout(randomizer, 2000);
}