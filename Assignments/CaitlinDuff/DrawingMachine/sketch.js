function setup() {
  createCanvas(600, 600);
  background(220);
}

function draw() {
 
  if (mouseIsPressed == true) {
    ellipse(mouseX, mouseY, 10, 10);
  }
}