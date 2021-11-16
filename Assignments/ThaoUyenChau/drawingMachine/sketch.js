let array = [];
function setup() {

  createCanvas(windowWidth, windowHeight);
  background(150);
  strokeWeight(4)
  drawGrid();
  noStroke();
  rect(26,25,355,230);

}

function draw() {
  if (mouseIsPressed) {
    
    stroke(map(mouseX, 0, 600, 0, 50, true));
    line(mouseX, mouseY, pmouseX, pmouseY);
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    // // background(0);
    // array.push([mouseX, mouseY]);
  }

}

function drawGrid(){
  numCells = 50;
  fillColor = 255
  strokeWeight(0);
  for (let i = 0; i <= width; i += width / numCells){
    for (let j = 0; j<= height; j += height / numCells){
      if (fillColor === 255){
        fillColor = 200;
      }else {
        fillColor = 255;
      }
      fill(fillColor);
      rect(i, j, width / numCells, height / numCells);
    }
  }
  strokeWeight (4);
}

function keyTyped(){

  console.log(`key ${key} is being typed`)

  if (key === 's'){

    saveCanvas('drawIng', 'png');
   } else if (key === 'c'){
     clear();
    drawGrid();
    noStroke();
    rect(26,25,360,230);
  // beginShape();
  //   for(let i = 0; i < array.length; i++){
  //     // console.log(i);
  //     // line(array[i][0], array [i][1], array[i + 1][0], array [i + 1][1]);
  //     curveVertex(array[i][0], array [i][1]);
  //     background(150,120,220);
  //   } 
  //   endShape();
    
  }

  return false;

}