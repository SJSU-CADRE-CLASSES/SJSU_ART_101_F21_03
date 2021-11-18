let array = [];
let backgroundColor = (204,204,255);
let noiseOffset = 0.0;
let strokeAmount = 5;

var resetButton = document.getElementbyId('resetButton');
resetButton.onclick= reloadPage;

function setup() {
  createCanvas(600, 600);
  // background(240, 255, 245);
  // background(backgroundColor);

  drawGrid();
  noFill();
  //makes line of the drawing tool thicker

}

function draw() {
  background(204, 204, 255, 10);
  strokeWeight(strokeAmount);

  noiseOffset += 0.05;
  strokeAmount = noise(noiseOffset) * 100;

  stroke(map(mouseX, 0, 600, 0, 255, true), 30, 180, 244, 12);
  // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);

  if (mouseIsPressed) {
    backgroundColor -= 5;
    background(backgroundColor);
    drawGrid();

    // array.push([mouseX, mouseY]);

    // beginShape();
    // for  (let i = 0; i < array.length; i++) {

    //   curvedVertex(array[i][0], array[i][1])
    // }
    // endShape();



  }

}

//saving the image
function keyTyped() {

  if (key === 's') {
    saveCanvas('fileName', 'png');

  } else if (key === 'c') {
    // clears canvas and somewhat resets it   
    clear();
    setup();
   

  } else if (key === 'r') {
    // reset window
    reloadPage();

  }

  return false;
}

function mousePressed() {
  array = [];
  backgroundColor = 255;
  setup();
}

//adding stylized grid
function drawGrid() {
  numCells = 20;
  fillColor = 255;
  // strokeWeight(0);

  for (let i = 0; i <= width; i += width / numCells) {
    for (let j = 0; j <= height; j += height / numCells) {
      if (fill === 255) {
        fillColor = 200;
      } else {
        fillColor = 255;
      }
      fill(fillColor);
      rect(i, j, 30, width / numCells, height / numCells);

    }
  }

    strokeWeight(5);
}

function reloadPage(){
  window.location.reload();
}