let backgroundColor = 255;
let array = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backgroundColor);

  strokeWeight(3);
}

function draw() {
  //if (mouseIsPressed == true){
  //}else {}
  if (mouseIsPressed) {
    backgroundColor -= 4;
    background(backgroundColor);
    //line(mouseX, mouseY, pmouseX, pmouseY);
    //stroke(map(mouseX, 0, 600, 0, 255, true));
    //line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    array.push([mouseX, mouseY]);
    beginShape();
    for (let i = 0; i < array.length - 1; i++) {
      curveVertex(array[i][0], array[i][1]);
      //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    }
    endShape();

  }
}

function keyTyped() {
  if (key === 's') {
    //save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    //display image
    background(51, 0, 102);
    beginShape();
    for (let i = 0; i < array.length - 1; i++) {
      curveVertex(array[i][0], array[i][1]);
      //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    }
    endShape();
  }
  return false;
}

function mouseIsPressed() {
  array = [];
  backgroundColor = 255;
}
