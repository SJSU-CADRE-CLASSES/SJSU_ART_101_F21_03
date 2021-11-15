let array = [];
let backgColor = 200;


function setup() {
  createCanvas(600, 600);
  background(200);

  strokeWeight(5);
  noFill();
}

function draw() {
  
  if (mouseIsPressed){
 
    //When you're drawing, background turns black
    background(backgColor);
    backgColor -= 5;
   //Push mouse position into the array
    array.push([mouseX, mouseY])
    //display image
    beginShape();
      for(let i = 0; i < array.length; i++){
        curveVertex(array[i][0], array [i][1])
      }
     endShape ();
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
        curveVertex(array[i][0], array [i][1])
      }
     endShape ();
     

  }
  return false;
  
}

function mousePressed(){
  console.log("mouse pressed function");
  array = [];
  console.log(array);
  backgColor = 200;
}