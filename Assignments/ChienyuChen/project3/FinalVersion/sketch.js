let noiseOffset = 0.0;
let strokeWidth = 20;
var r=200;
var g=200;
var b=200;







function setup() {
 let cnv =  createCanvas(600, 600);
  cnv.position(0,0,'relative');
    left();
    right();
  strokeWeight(5);
  angleMode(DEGREES);
}




function draw() {
    if (mouseIsPressed){
  strokeWeight(strokeWidth);
//  noiseOffset += 0.05;
//  strokeWidth = noise(noiseOffset) * 70;

  r=map(mouseX,0,200,0,200);
  g=map(mouseX,0,400,0,200);
  b=map(mouseY,0,600,100,200);

  stroke(r,g,b ,  map(mouseX, 0, 230, 230, 230, true))
  line(mouseX, mouseY, pmouseX, pmouseY);
//  line(mouseX, mouseY, pmouseX, pmouseY);
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(height - mouseX, mouseY, height - pmouseX, pmouseY);
  line(mouseX, height - mouseY, pmouseX, height - pmouseY);
    }
}




function left(){
  noStroke();
  fill(123, 456, 789, 70);
  rect(0,0,width/2,width);
}




function right(){
  noStroke();
  fill(2, 25, 200, 70);
  rect(width/2 ,0 , width/2, width);
}




function keyTyped(){

  if (key === 's'){
//    save this image
  saveCanvas('sketch', 'png');
  }
  else if (key === 'c'){
//    clear the canvas

  clear();
    right();
    left();
  return false;

  }
}
