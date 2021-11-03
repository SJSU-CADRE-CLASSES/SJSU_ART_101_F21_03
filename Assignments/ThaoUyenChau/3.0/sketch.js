function setup() {
  createCanvas(600, 600);
  background(150,120,220);

  strokeWeight(4)
}

function draw() {
  if (mouseIsPressed) {
    stroke(map(mouseX, 0, 600, 0, 255, true));
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  }

}

function keyTyped(){

  console.log(`key ${key} is being typed`)

  if (key === 's'){

    saveCanvas('drawIng', 'png');
    
  }

  return false;

}