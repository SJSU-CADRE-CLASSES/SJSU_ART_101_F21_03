let array =[];
let backgroundColor =200;


function setup() {
  createCanvas(600, 600);
   // background(backgroundColor);


drawGrid();
noFill();



function draw() {


  if (mouseIsPressed){
    backgroundColor -=5
    background (backgroundColor);
  array.push ([mouseX, pmouseY]);

  beginShape();

  for (let i=0; i <array.length; i++){
    curveVertex(array[i][0], array[i][1])
  }
  endShape();
}
return fale;

}
function mousePressed(){
  array =[];
  backgroundColor =255;
}

function drawGrid(){
  numCells = 20;
  fillColor = 255;
   // noStroke();
   strokeWeight(0)

  for (let i = 0; i<= width; i += width / numCells){
    for (let j = 0; j <= height; j += height / numCells){
      if (fillColor === 255){
      fillColor = 200;
    } else {
      fillColor =255;

    }
      fill(fillColor);
      rect(i, j, width / numCells, height / numCells);
    }

     }

     strokeWeight(5);
  }
