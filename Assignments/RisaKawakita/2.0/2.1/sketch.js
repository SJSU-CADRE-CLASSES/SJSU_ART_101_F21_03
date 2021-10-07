let mic;
var value1 = 225; 
var value2 = 225;
var value3 = 0;

let x=100;
let y=200;
let s=50;
let speedX=5;
let speedY=5;

let m1;
let m2;
let m3;



function setup() {
  createCanvas(400, 400);
  
  background(0, 0, 225);
  strokeWeight(0);
  
  mic = new p5.AudioIn();
  mic.start();
  
  m1 = new maru(200, 100, 30, 2, 1, color(255,201,118));
  m2 = new maru(150, 70, 30, 3, 4, color(81,123,189));
  m3 = new maru(100, 50, 30, 4, 5, color(225,225,0));
  
}

function draw(){
  
  m1.display();
  m1.move();
  m2.display();
  m2.move();
  m3.display();
  m3.move();
  
 mouseINT();
  
 movingOb(); 
  
 leftEar();
  
 rightEar();
  
 leftearBlue();
  
 rightearBlue();
  
 leftWing();
  
 rightWing();

 face();
  
 ring();
  
 playbackButton();

 leftEye();
  
 rightEye();

 mouth();
 
 cheek();

 nose();


}

function mouseINT() {
 
  fill(230);
  ellipse(mouseX, mouseY, 40, 40);
  noStroke();
}

function movingOb(){
  background(100,30);
  noStroke();
  x=x+speedX;
  if(x>width||x<0){
    speedX=speedX*-1;
  }
  
  y=y+speedY;
  if(y>height||y<0){
    speedY=speedY*-1;
    
    ellipse(x,y,s,s);
  }
}

function leftEar() {
    // left ear //
  fill(300)
  strokeWeight(0);
  triangle(100, 250, 170, 160, 110, 100);
}

function leftearBlue(){ 
    // left ear blue //
  fill(81,123,189);
  stroke(105,156,255)
  triangle(110, 250, 150, 170, 120, 140);

}

function rightEar(){
   //right ear
  triangle(300, 250, 225, 160, 280, 100);
  
}

function rightearBlue(){
    triangle(290, 250, 240, 170, 270, 140);
  
}

function leftEye(){
    
  //left eye
  noFill();
  strokeWeight(3);
  stroke(100);
  arc(260,290,100,130,10,30, HALF_PI);
  
   //pupil//
   fill(0);
  noStroke();
  ellipse(map(mouseX,0,width,230,235),250,15,25);
  
}

function rightEye(){
   //right eye
  noFill();
  strokeWeight(3);
  stroke(100);
  arc(128,275,100,100,36,50, HALF_PI);
  
  //pupil//
   fill(0);
  noStroke();
  ellipse(map(mouseX,0,width,150,155),250,15,25);
}

function face(){
    //face//
  fill(500)
  stroke(0)
  circle(200,250,200);
}

function mouth(){
   //mouth//
 fill(216, 96, 75);
 strokeWeight(3);
   ellipse(200, 300,60, mic.getLevel()*300);
}

function playbackButton(){
  //playback button
  fill(value1,value2,value3)
  stroke(225,225,0)
  strokeWeight(3);
  triangle(180,80, 240, 50, 180, 10)  
  
}

function mouseClicked(){
  
  if (value1 == 225){
    value1 = 0;
    value2 = 0;
    value3 = 0;
  }else{
    value1 = 225;  
    value2 = 225;
    value3 = 0;
  }
}

function ring(){
  //ring//
 noFill();
 strokeWeight(5);
 stroke(255,255,255);
 arc(200, 70, 250, 40, 100, PI + QUARTER_PI);
  
}

function leftWing(){
  //left wing
  fill(255,255,255)
  stroke(0)
// quad(320, 280, 390, 240, 350, 290, 300, 300);//
  
}

function rightWing(){
  
  //right wing
  fill(255,255,255)
  stroke(0)
 // quad(10, 240, 80, 280, 100, 300, 50, 290);//
  fill(255,255,255);
  ellipse(180, 290, 200, 100);
  ellipse(220, 290, 200, 100);
  
}

function cheek(){
  noStroke();
  fill(255,201,108);
  ellipse(120, 290, 60, 50);
  ellipse(280, 290, 60, 50);
  
}

function nose(){
  

  triangle(185, 275, 195, 285, 205, 275);
  
}



