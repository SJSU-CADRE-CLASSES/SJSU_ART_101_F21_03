let mic;
count = 0;

let myColorOne = 0, myColorTwo = 0, myColorThree = 0;

function setup() {
createCanvas(600, 600);
  
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {  
background(color('rgb(0,255,0)'));
  
  if (count<360){
  count++
  }else if (count==360)(count=0)
  
var vol =   mic.getLevel();
console.log(vol);
  ellipse(290,300,400,400);
  fill(255, 204, 0);
 ellipse(290,300,400,400);
    fill(255,255,255);
  ellipse(300,300,100,100);
    fill(255,255,255);
  ellipse(425,300,100,100);
    fill(0,0,0);
  ellipse(mouseY,300,40,40);
    fill(0,0,0);
  ellipse(mouseX,300,40,40);
    fill(0,0,0);
  rect(250,200,100,10);
  rect(400,200,100,10);
  arc(300, 100, 300, 100, 200, PI + QUARTER_PI)
  fill('rgb(100%,0%,10%)');
arc(350, 400, 100, 100, 100, vol * 100, vol * 500, PI + QUARTER_PI, CHORD);
}


  

