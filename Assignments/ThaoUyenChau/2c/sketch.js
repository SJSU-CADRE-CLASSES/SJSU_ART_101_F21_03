let randomIndex;
let animating = false;
let artmms = [];
let imageCounter = 0;
let button;

function preload(){
  for (let i = 0; i <= 11; i++){
    artmms[i] = loadImage(`assets/artmm_${i}.jpeg`)
  }
}

function setup() {

  createCanvas(600, 600);
  background (200);
  textSize(24);
  imageMode(CENTER);
  frameRate(6);

  text("Art Movements", 170, 300);

  button = createButton("click to randomize");
  button.mousePressed(buttonPressed);

}

function draw() {
 if (animating == true){
    clear();
    image(artmms[imageCounter], width/2, height/2);

    if (imageCounter < artmms.lengths - 1){
       imageCounter++;
       console.log(imageCounter);
    }else {
      imageCounter = 0;
    }
 }
}
function randomizer(){
  animating = false;

  if (artmms[0]){
    // background(random(200, 255));
    clear();
    randomIndex = int(random(artmms.length));
    fill(50);
    text(`What art movement is it?`, 170, 580);
    image(random(artmms), width/2, height/2);
    artmms.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    fill(50);
    text("nothing left", 75, 300 );
  }
}
function buttonPressed() {
animating = true
setTimeout(randomizer, 2000);

}