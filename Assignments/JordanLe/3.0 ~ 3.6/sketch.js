function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 220, 0);
}

function draw() {
  noStroke();
  if (mouseIsPressed) {
    fill(0,0,110);
    ellipse(100,100,40);
  }
}
