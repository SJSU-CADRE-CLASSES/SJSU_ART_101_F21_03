let array = [];
let backgColor = 50;
let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(220,50,133);

  strokeWeight(5);
  noFill();
}

function draw() {

  background(220,50,133, 5);
  strokeWeight(strokeWidth);

  noiseOffset +- 0.05;
  strokeWidth = noise(noiseOffset) * 100;

  stroke(map(mouseX, 0, 600, 0, 255, true), map(mouseX, 0, 600, 0, 105, true), map(mouseX, 0, 600, 0, 180, true))
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX,mouseY,pmouseX,pmouseY);

}

function keyTyped(){
  //For learning
  console.log(`key ${key} is being typed`) 

  if (key === 's'){
    //Save the image
    saveCanvas('YourSketch', 'png')
    
  } else if (key === 'c'){
    //You would have to put a background here normally, but for this you don't need it because 
    //the background fades in thanks to the 4th value in the background(); code

    //Clears the image
    clear();

  }
  return false;
  
}

function mousePressed(){
  console.log("mouse pressed function");
  array = [];
  console.log(array);
  backgColor = 50;
}