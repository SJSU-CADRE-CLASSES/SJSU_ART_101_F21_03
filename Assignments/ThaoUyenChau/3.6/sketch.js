let array = [];
function setup() {

  createCanvas(windowWidth, windowHeight);
  background(150);

  strokeWeight(4)
}

function draw() {
  if (mouseIsPressed) {
    // stroke(map(mouseX, 0, 600, 0, 255, true));
    // line(mouseX, mouseY, pmouseX, pmouseY);
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    background(0);
    array.push([mouseX, mouseY]);
  }

}

function keyTyped(){

  console.log(`key ${key} is being typed`)

  if (key === 's'){

    saveCanvas('drawIng', 'png');
   } else if (key === 'd'){
     //  display image
  beginShape();
    for(let i = 0; i < array.length; i++){
      // console.log(i);
      // line(array[i][0], array [i][1], array[i + 1][0], array [i + 1][1]);
      curveVertex(array[i][0], array [i][1]);
      background(150,120,220);
    } 
    endShape();
    
  }

  return false;

}