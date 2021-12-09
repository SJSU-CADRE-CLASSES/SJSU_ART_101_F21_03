let array=[];
let bgColor=255;

function setup() {
  createCanvas(600,600);
  background('#69B00B');
  
  drawGrid();
  
  strokeWeight(5);
  noFill();
}

function draw() {
  
  if (mouseIsPressed){
    //stroke(map(mouseX,0,600,0,255,true));
    line(mouseX,mouseY,pmouseX,pmouseY);
    array.push([mouseX,mouseY]);
    line(width - mouseX,height - mouseY,width - pmouseX,height - pmouseY)
    //beginShape();
      //for (let i=0;i<array.length-1;i++){
      //  curveVertex(array[i][0], array[i][1]);
     // }
    //endShape();
  }
  
}

function keyTyped(){
 // console.log(`key ${key} is being typed`)
  
  if(key === 's'){
    saveCanvas('fileName','jpg')
    
  } else if (key==='c'){
    clear();
    drawGrid();
    strokeWeight(5);
    //background('#69B00B');
  }
  
  return false;
}
 function mousePressed(){
   array=[];
 }

function drawGrid(){
  numCells=20;
  fillColor=255;
  strokeWeight(0);
  for(let x=0;x<=width;x+=width/numCells){
    for (let y=0;y<=height;y+=height/numCells){
      if(fillColor===255){
        fillColor=200;
      } else {
        fillColor=255;
      }
      fill(fillColor);
    rect(x,y,width/numCells,height/numCells);
  }
  }
}
strokeWeight(5);