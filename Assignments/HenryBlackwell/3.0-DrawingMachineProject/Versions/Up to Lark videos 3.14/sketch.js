let array = [];
let backgColor = 200;

function setup() {
  createCanvas(windowWidth, windowHeight)
  // background(50);
  

  drawGrid();


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
    background(255);

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
  array = [];
  backgColor = 255;
}

function drawGrid(){
  numCells = 20;
  fillColor = 255;
  strokeWeight(0);

  //basically X
  for (let i = 0; i <= width; i += width / numCells){ 
    //Basically Y
    for (let j = 0; j <= height; j += height/ numCells){
      if(fillColor === 255){
        fillColor = 200;
      } else {
        fillColor = 255;
      }
      fill(fillColor);
      rect(i, j, width / numCells, height / numCells);

    }
  }

  strokeWeight(5);
}