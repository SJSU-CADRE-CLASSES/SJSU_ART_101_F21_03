let array=[];
let bgColor=255;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background('#69B00B');
  
  strokeWeight(5);
  noFill();
}

function draw() {
  
  if (mouseIsPressed){
    //stroke(map(mouseX,0,600,0,255,true));
    //line(mouseX,mouseY,pmouseX,pmouseY);
    bgColor -= 3;
    background(bgColor);
    array.push([mouseX,mouseY]);
    //line(width - mouseX,height - mouseY,width - pmouseX,height - pmouseY)
    beginShape();
      for (let i=0;i<array.length-1;i++){
        curveVertex(array[i][0], array[i][1]);
      }
    endShape();
  }
  
}

function keyTyped(){
 // console.log(`key ${key} is being typed`)
  
  if(key === 's'){
    saveCanvas('fileName','jpg')
    
  } else if (key==='v') {
    background('#69B00B');
    beginShape();
      for (let i=0;i<array.length-1;i++){
        curveVertex(array[i][0], array[i][1]);
      }
    endShape();
    }
  
  return false;
}
 // function mousePressed(){
   // array=[];
 // }