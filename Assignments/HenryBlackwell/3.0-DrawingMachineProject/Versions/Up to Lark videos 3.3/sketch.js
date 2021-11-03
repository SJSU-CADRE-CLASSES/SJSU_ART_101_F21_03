function setup() {
  createCanvas(600, 600);
  background(100);

  strokeWeight(5);
}

function draw() {
  
  if (mouseIsPressed){
    //Creating the lines and making them change depending
    stroke(map(mouseX, 0, 600, 0, 255, true), map(mouseX, 0, 200, 0, 175, true), map(mouseX, 0, 400, 0, 50, true))
    line(mouseX, mouseY, pmouseX,pmouseY);
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);

  }

  

}

function keyTyped(){
  //For learning
  console.log(`key ${key} is being typed`) 

  if (key === 's'){
    //Save the image
    saveCanvas('YourSketch', 'png')
  }
  return false;
  
}