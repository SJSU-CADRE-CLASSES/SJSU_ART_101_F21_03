let array = [];
let backgroundColor = 200;

function setup() {
  createCanvas(600, 600);
  // background(backgroundColor);

  drawGrid();
  // strokeWeight(5);
  noFill();

}

function draw() {

if (mouseIsPressed){
  backgroundColor -= 5;
  background(backgroundColor);
  // line(mouseX, mouseY, pmouseX, pmouseY);
  // background(0);
  array.push([mouseX, mouseY]);
}

}

function keyTyped(){

  if (key === 's'){
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd'){
    // display image
    background(231, 145, 255);
  
  beginShape();
    for(let i = 0; i < array.length - 1; i++){
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1])
  }
  endShape();

}

  return false;

}

function mousePressed() {
  array = [];
  backgroundColor = 231;
}

function drawGrid(){
  numCells = 20;
  fillColor = 255;
  // noStroke();
  strokeWeight(0);

  for (let i = 0; i <= width; i += width / numCells){
    for (let j = 0; j <= height; j += height / numCells){
      if (fillColor === 255){
        fillColor = 200;
      } else{
        fillColor = 255;
      }
      fill(fillColor);
      rect(i, j, width / numCells, height / numCells);
    }
  }
  strokeWeight(5);
}