
let noiseOffset = 0.0;
let strokeWidth = 5;
let backgroundColor=200

function setup() {
  createCanvas(600, 600);


  drawGrid();
  strokeWeight(5);
  noFill();
}

function draw() {

if (mouseIsPressed){

  backgroundColor -= 5;
  background(backgroundColor);

  array.push ([mouseX,mouseY]);

   beginShape();
   for (let i =0; i < array.length; i ++){
    curveVertex(array[i][0], array[i][1])
      }
    endShape();
   }

   return false;

  }
  

function keyTyped(){

    if(key === 's'){
      //save this image
      saveCanvas('fileName', 'png');
  } else if (key === 'c'){
    //clear the image
    clear();
  }

  return false;
}

function mousePressed(){

  array = [];
  backgroundColor = 255;
}


function drawGrid(){
  numCells = 20;
  fillColor = 255;
  strokeWeight(0);

  for (let i = 0; i <= width; i += width/ numCells){
    for (let j = 0; j <=height; j += height/numCells){
      if(fillColor == 255){
        fillColor= 200;
      } else {
        fillColor = 255;
      }
        fill(fillColor);
        rect(i , j,  width/ numCells ,  height/ numCells);

  }
}

strokeWeight(5);
}