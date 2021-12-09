let array=[];

function setup() {
  createCanvas(600, 600);
  background('#69B00B');
  
  strokeWeight(5);
  noFill();
}

function draw() {
  
  if (mouseIsPressed){
    //stroke(map(mouseX,0,600,0,255,true));
    line(mouseX,mouseY,pmouseX,pmouseY);
    array.push([mouseX,mouseY]);
    //line(width - mouseX,height - mouseY,width - pmouseX,height - pmouseY)
  }
  
}

function keyTyped(){
 // console.log(`key ${key} is being typed`)
  
  if(key === 's'){
    saveCanvas('fileName','jpg')
  } else if (key==='r') {
      for (let i=0;i<array.length-1;i++){
        line(array[i][0], array[i][1], array[i+1][0], array[i+1][1]);
    }
  } else if (key==='v') {
    background(255);
    beginShape();
      for (let i=0;i<array.length-1;i++){
        curveVertex(array[i][0], array[i][1]);
      }
    endShape();
    }
  
  return false;
}