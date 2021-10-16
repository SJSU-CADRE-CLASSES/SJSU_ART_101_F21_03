let bug1; 
let bug2;
let bug3;
let bug4;
let bug5;
let bug6;

let mic;

function setup() {
  createCanvas(400, 400);
  background(243, 209, 255);
  noStroke();

  bug1 = new Jitter();
  bug2 = new Jitter();
  bug3 = new Jitter();
  bug4 = new Jitter();
  bug5 = new Jitter();
  bug6 = new Jitter();

  mic = new p5.AudioIn();
  mic.start();

}

function draw() {

  micLevel = mic.getLevel();
  
  headphones();
  head();
  eyes();
  mouth();

  bug1.display();
  bug2.display();
  bug3.display();
  bug4.display();
  bug5.display();
  bug6.display();

  bug1.move();
  bug2.move();
  bug3.move();
  bug4.move();
  bug5.move();
  bug6.move();

  console.log(mouseX);
  console.log(mouseY);
  
}

function headphones(){
  
  // top headphone
  fill(223, 97, 255);
  circle(width* .50, width* .40, width* .65);

  // headphones
  fill(223, 97, 255);
  circle(width* .2, width* .40, width* .25);
  circle(width* .8, width* .40, width* .25);

  fill(177, 60, 207);
  let mouse_factor = 40
  circle(width* .2+(mouseX/mouse_factor), width* .40+(mouseY/mouse_factor), width* .20);
  circle(width* .8+(mouseX/mouse_factor), width* .40+(mouseY/mouse_factor), width* .20);
  
}

function head(){
  
  fill(255, 224, 230);
  circle(width* .50, width* .45, width* .65);
  
}

function eyes(){
  
  // glasses
  fill(219, 215, 219);
  stroke(random (255), random(255), random(255));
  strokeWeight(6);
  circle(width* .35, width* .40, width* .20);
  circle(width* .65, width* .40, width* .20);
  

  // pupils
  noStroke();
  fill(87, 86, 86);
  ellipse(width* .35, width* .40, 30, 30);
  fill(219, 215, 219);
  ellipse(width* .35, width* .38, 30, 30);

  fill(87, 86, 86);
  ellipse(width* .65, width* .40, 30, 30);
  fill(219, 215, 219);
  ellipse(width* .65, width* .38, 30, 30);
  
}

function mouth(){
  
  // mouth
  push();
  fill(87, 86, 86);
  arc(width* .5, width* .6, width* .1, width* micLevel, 0, PI + QUARTER_PI, CHORD);
  pop();
  
}