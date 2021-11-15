let array = [];

function setup() {
  createCanvas(600, 600);
  background(255, 199, 239);

  strokeWeight(10);
  noFill(); 
}

function draw() {

  if (mouseIsPressed) {
    background(255, 199, 239);
    //stroke(map(mouseX, 0, 600, 113, 255, true))
    //line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
  }
}

function keyTyped() {

  if (key === 's') {
    // save this image
    saveCanvas(`fileName`, `png`);
  } else if (key === 'd') {
    //display image
    background(181, 220, 255);

    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();

  }


  return false;
}