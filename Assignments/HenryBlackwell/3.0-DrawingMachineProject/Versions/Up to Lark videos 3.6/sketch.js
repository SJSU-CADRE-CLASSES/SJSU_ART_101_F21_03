let array = [];

function setup() {
  createCanvas(600, 600);
  background(255);

  strokeWeight(5);
  noFill();
}

function draw() {
  
  if (mouseIsPressed){
    //Creating the lines and making them change depending
    // line(mouseX, mouseY, pmouseX,pmouseY);
    //Push mouse position into the array
    //When you're drawing, background turns black
    background(0);
    array.push([mouseX, mouseY])
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
     endShape ();
  } else if(key === 'e'){
    clear();
  }
  return false;
  
}