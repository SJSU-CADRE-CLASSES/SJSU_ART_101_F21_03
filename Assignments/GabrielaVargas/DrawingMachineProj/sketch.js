let array = [];
let img;
let img2;
let backgroundColor = 255;
function preload() {
  img = loadImage('images/secretdiary.png');
  img2 = loadImage('images/vignette.png');
}

function setup() {
  createCanvas(600, 600);
  background(backgroundColor);

  strokeWeight(10);
  stroke(201, 255, 255)
  noFill();
  image(img, 0,-100)
}

function draw() {

  if (mouseIsPressed) {
    background(backgroundColor);
    backgroundColor -= 2;
    image(img, 0,-100)
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
    background(67, 10, 255);
    image(img2, -20,-100)

    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();

  }


  return false;
}

function mousePressed() {
array = [];
backgroundColor = 255;
}