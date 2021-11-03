
function setup(){
  createCanvas(720, 1080);
  background(220, 50, 133);

  strokeweight(5);
}

function draw(){

  if mousePressed(){
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  }

}
