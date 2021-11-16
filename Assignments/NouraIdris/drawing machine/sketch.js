

let noiseOffset = 0.0;
let strokeWidth = 5;
let backgroundColor= 200
let colorPicker;
let drawing_index = 0;
let shapeModes = ["TRINGLES", "QUADS", "SQUARE"];

function setup() {
  createCanvas(600, 600);
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(600, 300);
  // drawGrid();
  strokeWeight();
  noFill();
}

function draw() {
  console.log("Current Index: %i", drawing_index);
  console.log("Current Shape: %s", shapeModes[drawing_index]);

if (mouseIsPressed){
  background(backgroundColor);
  background(colorPicker.color());
  array.push ([mouseX,mouseY]);
  restricted_mouse_X = mouseX;
  restricted_mouse_Y = mouseY;
  if (restricted_mouse_X > 255) restricted_mouse_X = 255;
  if (restricted_mouse_Y > 255) restricted_mouse_Y = 255;
  fill(restricted_mouse_X, restricted_mouse_Y);
   if(shapeModes[drawing_index] == "TRIANGLES"){
     beginShape(TRIANGLES);
   }else if(shapeModes[drawing_index] == "QUADS"){
     beginShape(QUADS);
   }else if(shapeModes[drawing_index] == "SQUARE"){
     beginShape(SQUARE);
   }
   else{
     beginShape();
   }
   for (let i =0; i < array.length; i++){
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
  }else if(key === 'd'){
    drawing_index++;
    if (drawing_index > 2) {
      drawing_index = 0;
    }
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