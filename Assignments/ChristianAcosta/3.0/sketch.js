//// NOTE: Url: http://127.0.0.1:8080/Assignments/ChristianAcosta/3.0/

function setup(){
  createCanvas(1080, 720);
  background(200);
  strokeWeight(5);
}

function draw(){

  //if mpuse is pressed, draw lines (norm and inversed)
  if (mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  }
 }

 function keyTyped(){

//console.log(`key s is being typed`)

//s key saves canvas
   if (key == 's'){
     saveCanvas('fileName', 'png');
   }

   return false;
 }
