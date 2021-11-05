//// NOTE: Url: http://127.0.0.1:8080/Assignments/ChristianAcosta/3.0/

let art = [];

function setup(){
  createCanvas(1080, 720);
  background(200);
  strokeWeight(5);
}

function draw(){

  //if mpuse is pressed, draw lines (norm and inversed)
  if (mouseIsPressed){
    //line(mouseX, mouseY, pmouseX, pmouseY);
    //line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);

    art.push([mouseX, mouseY]);
  }
 }

 function keyTyped(){

//s key saves canvas
   if (key == 's'){
     saveCanvas('fileName', 'png');
   } else if (key == 'd'){
     //console.log(art);
     for(let i = 0; i < art.length - 1; i++ ){
       line(art[i][0], art[i][1], art[i+1][0], art[i+1][1]);
     }
   }


   return false;
 }
