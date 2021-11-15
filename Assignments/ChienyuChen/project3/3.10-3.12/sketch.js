let noiseOffset = 0.0;
let strokeWidth = 5;




function setup() {
  createCanvas(windowWidth, windowHeight);
  background(123, 456, 789);
  strokeWeight(5);
}




function draw() {
  background(123, 546, 789, 20);

  strokeWeight(strokeWidth);
  noiseOffset += 0.05;
  strokeWidth = noise(noiseOffset) * 100;

  stroke(map(mouseX, 0, 600, 0, 255, true))
  line(mouseX, mouseY, pmouseX, pmouseY);
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
}




function keyTyped(){

  if (key === 's'){
//    save this image
  saveCanvas('sketch', 'png');
  }
  else if (key === 'c'){
//    clear the canvas
  clear();
  return false;
  }
}
