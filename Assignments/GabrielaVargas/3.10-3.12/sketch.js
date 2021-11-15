let array = [];
let noiseOffset = 0.0;
let strokeWidth= 5;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 199, 136, 5);
}

function draw() {
  background(255, 199, 136, 5);
  strokeWeight(strokeWidth);

noiseOffset += 0.05;
strokeWidth = noise(noiseOffset)  * 100;



  stroke(map(mouseX, 0, 600, 113, 255, true))
  line(mouseX, mouseY, pmouseX, pmouseY);
  array.push([mouseX, mouseY]);
}

function keyTyped() {

  if (key === 's') {
    // save this image
    saveCanvas(`fileName`, `png`);
  } else if (key === 'c') {
    // clear the image
    clear();
  }
  return false;
}