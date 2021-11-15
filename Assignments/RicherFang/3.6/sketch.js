let array=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);

  stroke(255,31,248)
  strokeWeight(5);
  noFill();
}

function draw() {

if (mouseIsPressed){
// line(mouseX, mouseY, pmouseX, pmouseY);
array.push( [mouseX, mouseY] );
  }
}

function keyTyped(){

  if (key === 's'){
    saveCanvas('fileName', 'png');
  } else if (key === 'd'){

    beginShape();
    for (let i = 0; i < array.length; i++) {

      curveVertex(array[i][0], array[i][1])
    }
    endShape();
    
    
  }

  return false;
}