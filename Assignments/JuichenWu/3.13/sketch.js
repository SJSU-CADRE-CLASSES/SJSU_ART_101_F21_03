let array =[];
let backgroundColor =200;


function setup() {
  createCanvas(600, 600);
   // background(backgroundColor);

drawGrid();
strokeWeight(5);
noFill();
}


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
function mousePressed(){
  array =[];
  backgroundColor =255;
}
function drawGrid(){
  numCells = 20;
  for (i = 0; i <= width; i += width / numCells){
    rect(i, 50, width / numCells, height / numCells)

  }
  }
