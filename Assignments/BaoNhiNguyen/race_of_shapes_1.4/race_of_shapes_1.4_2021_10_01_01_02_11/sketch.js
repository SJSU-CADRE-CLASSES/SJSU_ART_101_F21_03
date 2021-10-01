
let rectX = 0;
let ellipseX = 0;
let fr = 24;
let clr;

function setup() {
  createCanvas(300,100)
  background(180, 240, 138);
  
  
  frameRate(fr);
  clr = color(180, 240, 138);
}

function draw() {
  background(100, 210, 247);
  
// track finsih lines squares  
     fill(184, 131, 107);
  noStroke();
  rect(0,50, 300,50);
  
  
   fill(9, 35, 72);
  noStroke();
  rect(200,50, 300,50);
  
  fill(237, 243, 253);
  noStroke();
  rect(200,60, 300,50);
  
    fill(9, 35, 72);
  noStroke();
  rect(250,50, 25,50);
  
    fill(9, 35, 72);
  noStroke();
  rect(200,50, 25,50);
  
  fill(237, 243, 253);
  noStroke();
  rect(200,80, 300,50);
  
  fill(9, 35, 72);
  noStroke();
  rect(200,80, 300,50);
  
    fill(237, 243, 253);
  noStroke();
  rect(200,80, 25,50);
  
  fill(237, 243, 253);
  noStroke();
  rect(250,80, 25,50);
  
       fill(237, 243, 253);
  noStroke();
  rect(200,50, 25,10);
  
       fill(237, 243, 253);
  noStroke();
  rect(250,50, 25,10);
  
 // speeeed 
  rectX = rectX + 4 * (deltaTime / 50); 
  ellipseX = ellipseX + 7 * (deltaTime / 50);

 if (ellipseX >= width) {
   
    if (fr === 30) {
      clr = color(240, 138, 207);
      fr = 30;
      frameRate(fr); 
    } else {
      clr = color(138, 190, 240);
      fr = 30;
      frameRate(fr); 
    }
    ellipseX = 0;
    
      
  }  
  
  if (rectX >= width) {
   
    if (fr === 30) {
      clr = color(138, 178, 240);
      fr = 30;
      frameRate(fr); 
    } else {
      clr = color(138, 190, 240);
      fr = 30;
      frameRate(fr); 
    }
    rectX = 0;
       
    
  }
  push();  
  stroke(24);
  fill(clr);
  rect(rectX, 40, 20, 20);
  ellipse(ellipseX, 70,10,10);
  pop();
}