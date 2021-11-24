let array=[];

function setup() {
  createCanvas(600, 600);
  background(10);

  drawGrid();
  stroke(255,31,248)
  noFill();
}

function draw() {

if (mouseIsPressed){
  backgroundColor -= 5;
// line(mouseX, mouseY, pmouseX, pmouseY);
array.push( [mouseX, mouseY] );
  }
}

function keyTyped(){

  if (key === 's'){
    saveCanvas('fileName', 'png');
  } else if (key === 'd'){

    beginShape();
    for (let i = 0; i < array.length; i++) {

      curveVertex(array[i][0], array[i][1])
    }
    endShape();
    
    
  }

  return false;
}

function mousePressed() {
  array = [];
  backgroundColor = 255;
}

function drawGrid(){
numCells = 20;
fillColor = 300;
strokeWeight(0);

  for (let i = 0; i <= width; i += width / numCells) {
    for (let j = 0; j <= height; j += height / numCells) {
if (fillColor === 300){
  fillColor = 20;
} else{
  fillColor = 300;
}
      fill(fillColor);
      rect(i, j, width / numCells, height / numCells);
    }
  
  }

  strokeWeight(5);
}