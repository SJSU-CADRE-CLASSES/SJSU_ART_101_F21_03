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
return fale;

}
function mousePressed(){
  array =[];
  backgroundColor =255;
}

function drawGrid(){
  numCells = 20;

  for (let i = 0; i<= width; i += width / numCells){
    for (let j = 0; j <= height; j += height / numCells){
      rect(i, j, width / numCells, height / numCells);
    }


     }
  }
