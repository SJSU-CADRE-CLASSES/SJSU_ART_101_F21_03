let array = [];
let backgColor = 50;

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(50);

  strokeWeight(5);
  noFill();
}

function draw() {
  
  if (mouseIsPressed){

    backgColor -= 5;
    background(backgColor);
    //Push mouse position into the array
    array.push([mouseX, mouseY])
    array.push([width - pmouseX,height - pmouseY])
    stroke(map(mouseX, 0, 600, 0, 255, true), map(mouseX, 0, 600, 0, 105, true), map(mouseX, 0, 600, 0, 180, true))
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX,mouseY,pmouseX,pmouseY);

  }

  

}

function keyTyped(){
  //For learning
  console.log(`key ${key} is being typed`) 

  if (key === 's'){
    //Save the image
    saveCanvas('YourSketch', 'png')
    
  } 
  
  else if (key === 'd'){
    background(50);

    //Display image with curved lines
    beginShape();
      for(let i = 0; i < array.length; i++){
        //Array 1 and 3 are the X's and 2 and 4 are the Y's
        // line(array[i][0], array [i][1], array[i + 1][0], array [i + 1][1]);
        curveVertex(array[i][0], array [i][1])
      }
     endShape();
     

  }
  return false;
  
}

function mousePressed(){
  console.log("mouse pressed function");
  array = [];
  console.log(array);
  backgColor = 50;
}