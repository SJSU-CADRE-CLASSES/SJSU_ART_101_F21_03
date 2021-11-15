let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(100, 120, 200);

  strokeWeight(4)
}

function draw() {
  
    background(100, 120, 200, 10);
    strokeWeight(strokeWidth);

    noiseOffset += 0.025;
    strokeWidth = noise(noiseOffset) * 100;

    stroke(map(mouseX, 0, 600, 0, 255, true));
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);

 
}

function keyTyped(){

  console.log(`key ${key} is being typed`)

  if (key === 's'){

    saveCanvas('drawIng', 'png');
   } else if (key === 'c'){
     //  clear the image
    clear();
    
  }

  return false;

}