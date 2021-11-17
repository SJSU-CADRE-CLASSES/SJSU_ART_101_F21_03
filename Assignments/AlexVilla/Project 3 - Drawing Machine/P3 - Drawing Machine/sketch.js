let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(231, 145, 255);

}

function draw() {

background(231, 145, 255, 5);
strokeWeight(strokeWidth);

noiseOffset = noiseOffset += 0.05;
strokeWidth = noise(noiseOffset) * 10;

stroke(map(mouseX, 0, 600, 0, 255, true))
line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
line(mouseX, mouseY, pmouseX, pmouseY);

}

function keyTyped(){

  if (key === 's'){
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'e'){
    // clear the image 
    clear();

}

  return false;

}