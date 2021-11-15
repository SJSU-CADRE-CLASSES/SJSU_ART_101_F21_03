// let array = [];
let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(231, 145, 255);

  // noFill();

}

function draw() {

background(231, 145, 255, 5);
strokeWeight(strokeWidth);

noiseOffset = noiseOffset += 0.05;
strokeWidth = noise(noiseOffset) * 10;

stroke(map(mouseX, 0, 600, 0, 255, true))
line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
line(mouseX, mouseY, pmouseX, pmouseY);

// if (mouseIsPressed){
//   line(mouseX, mouseY, pmouseX, pmouseY);
//   background(0);
//   array.push([mouseX, mouseY]);

}

function keyTyped(){

  if (key === 's'){
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'e'){
    // clear the image 
    clear();

  // else if (key === 'd'){
    // display image
  //   background(231, 145, 255);
  
  // beginShape();
  //   for(let i = 0; i < array.length - 1; i++){
  //     // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
  //     curveVertex(array[i][0], array[i][1])
  // }
  // endShape();

}

  return false;

}