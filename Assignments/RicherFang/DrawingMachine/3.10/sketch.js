let array=[];
let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(10);

  stroke(255,31,248)
  noFill();
}

function draw() {


background(220, 50, 133, 5);
strokeWeight(strokeWidth);

noiseOffset += 0.01;
strokeWidth = noise(noiseOffset) * 10
stroke(map(mouseX, 0 , 600, 0, 255, true))
line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
line(mouseX, mouseY, pmouseX, pmouseY);

}

function keyTyped(){

  if (key === 's'){
    saveCanvas('fileName', 'png');
  } else if (key === 'c'){

    clear();
    
  }

  return false;
}