let array = [];
let noiseOffset = 0.0;
let strokeWidth = 5;
let xPos, yPos, dia = 80;
let brush1 = true;
let brush2 = true;
let brush3 = false;

function setup() {

  createCanvas(600, 600);
  background(150);
  strokeWeight(4)
  drawGrid();
  noStroke();
  // rect(26,25,355,230);

}

function draw() {
  if (mouseIsPressed) {
  
  xPos = mouseX
  yPos = mouseY
  if(brush1){
  noStroke();
  fill(228,239,0,80);
  circle(xPos,yPos,dia);
  } else {
  brush2 = true;
  stroke(1);
  fill(255,179,219,60);
  rect(xPos,yPos,dia,dia);
  }

  // if(brush3){
  //   fill(143,200,34,120);
  //   circle(xPos,yPos,dia); 
  // }
}



  // if (mouseIsPressed) {
  //   background(100, 120, 200, 10);
  //   strokeWeight(strokeWidth);
    
  //   noiseOffset += 0.025;
  //   strokeWidth = noise(noiseOffset) * 100;
  //   stroke(map(mouseX, 0, 600, 0, 50, true));
  //   line(mouseX, mouseY, pmouseX, pmouseY);
  //   line(width - mouseX, height - mouseY);
    // // background(0);
    // array.push([mouseX, mouseY]);
  // }

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
    // rect(26,25,355,230);
  // beginShape();
  //   for(let i = 0; i < array.length; i++){
  //     // console.log(i);
  //     // line(array[i][0], array [i][1], array[i + 1][0], array [i + 1][1]);
  //     curveVertex(array[i][0], array [i][1]);
  //     background(150,120,220);
  //   } 
  //   endShape();
    
  }

  if(key === '1'){
    brush1 = !brush1;
  }

  if(key === '2'){
    noStroke();
    fill(random(255),random(255),random(255));
    circle(xPos,yPos,dia); 
  }

  return false;

}