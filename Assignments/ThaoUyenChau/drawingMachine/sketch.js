let strokeWidth = 1;
let xPos, yPos, dia = 75;
let brush1 = true;
let brush2 = true;
let brush3 = false;

function setup() {

  createCanvas(600, 600);
  background(150);
  strokeWeight(1)
  drawGrid();

}
function colorFlower(){
  fill(random(255), random(255), random(255));
  ellipse(xPos,yPos,30,30)
  ellipse(xPos-15,yPos+5,20,20)
  ellipse(xPos-25,yPos-5,20,20)
  ellipse(xPos-17,yPos-20,20,20)
  ellipse(xPos,yPos-15,20,20)
  fill (225, random(225), random(225));
  ellipse(xPos-12,yPos-7,22,22) 
}

function draw() {

  if (mouseIsPressed) {
  
  xPos = mouseX
  yPos = mouseY
  if(brush1){
  stroke(50);
  strokeWeight(2);
  // noStroke();
  fill(228,239,0,);
  circle(xPos,yPos,dia-20);
  } else {
  brush2 = true;
  // fill(193,0,134);
  stroke(193, 0, 134);
  strokeWeight(2);
  fill(255,179,219);
  rect(xPos,yPos,dia,dia);
  }
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

  if(key === 'b'){
    background(random(225), 225, random(225));

  }

  if (key === 's'){

    saveCanvas('drawIng', 'png');
   } else if (key === 'c'){
     clear();
    drawGrid();
    noStroke(); 
  }

  if(key === '1'){
    brush1 = !brush1;
  }

  if(key === '2'){
    fill(random(255), random(255), random(255));
    noStroke();
    ellipse(xPos,yPos,22,22)
    ellipse(xPos-15,yPos+5,22,22)
    ellipse(xPos-25,yPos-5,22,22)
    ellipse(xPos-17,yPos-20,22,22)
    ellipse(xPos,yPos-15,22,22)
    // fill(255, 230, 51);
    fill (225, random(225), random(225));
    ellipse(xPos-12,yPos-7,25,25) 
  }

}