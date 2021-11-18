let array = [];
let backgroundColor = 200;
let noiseOffset = 0.0;
let strokeAmount = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(240, 255, 245);
  background(backgroundColor);

  noFill();
  //makes line of the drawing tool thicker

}

function draw() {
  background(204, 204, 255, 10);
  strokeWeight(strokeAmount);

  noiseOffset += 0.05;
  strokeAmount = noise(noiseOffset) * 100;

  stroke(map(mouseX, 0, 600, 0, 255, true));
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);

}

//saving the image
function keyTyped() {

  if (key === 's') {
    saveCanvas('fileName', 'png');

  } else if (key === 'c') {
   // clears canvas   
    clear();

  }  
    

  return false;
}

function mousePressed() {
  array = [];
  backgroundColor = 255;
}