let stars = [];
let i;
let counter = 0;
let d;
let count = 0;
let count2 = 0;

function setup() {
  createCanvas(400, 400);
  
}



function draw() {
  background(10);
  let s = new Star(random (0,width), random (0,height/2), random (2,4), random (2,7), 5, 250, 250, 200);
  for (i = 0; i < random(3); i+=1) {
  stars.push(s);}
  for (let star of stars) {
  star.moveStar();
  star.createStar();
  }
  
    
  thruster();
  leftfin();
  rightfin();
  nose();
  glass();
  mainbody();
  midfin();
}

class Star {
  constructor(_x,_y,_r1,_r2,_npoints,_colr,_colg,_colb) {
    this.x = _x;
    this.y = _y;
    this.r1 = _r1;
    this.r2 = _r2;
    this.npoints = _npoints;
    this.colr = _colr;
    this.colg = _colg;
    this.colb = _colb;
    
    this.sx = 0;
    this.sy = 0;
    this.angle = TWO_PI / _npoints;
    this.halfAngle = TWO_PI / _npoints / 2;
    
  }

  createStar() {
    noStroke();
    fill(this.colr,this.colg,this.colb);
    beginShape();
    
    for (let j = 0; j < TWO_PI; j += this.angle) {
      this.sx = this.x + cos(j) * this.r2;
      this.sy = this.y + sin(j) * this.r2;
      vertex(this.sx, this.sy);
      this.sx = this.x + cos(j+this.halfAngle) * this.r1;
      this.sy = this.y + sin(j+this.halfAngle) * this.r1;
      vertex(this.sx, this.sy);
      }
    endShape(CLOSE);
  }
  
  moveStar() {
    this.y += pow(this.r1, 0.9);
    
    if (this.y > height) {
      let index = stars.indexOf(this);
      stars.splice(index, 1);
    }
  } 
} 

function leftfin() {
c=color(150,0,0)
fill(c)
stroke(20)
strokeWeight(2)
beginShape();
curveVertex(180, 200);
curveVertex(153, 185);
curveVertex(115, 260);
curveVertex(150, 280);
curveVertex(188, 299);
curveVertex(150, 280);
endShape();
}

function rightfin() {
c=color(150,0,0)
fill(c)
stroke(20)
strokeWeight(2)
beginShape();
curveVertex(220, 200);
curveVertex(247, 185);
curveVertex(285, 260);
curveVertex(250, 280);
curveVertex(212, 299);
curveVertex(250, 280);
endShape();
}

function nose(){
  c=color(150,0,0)
  fill(c)
  stroke(20)
  strokeWeight(2)
  ellipse (200,173,88,200)
}

function glass(){
  c = color(0, 200, 300)
  fill(c)
  stroke(20)
  strokeWeight(1)
  ellipse (200,190,80,205)
  line(185, 95, 190, 105)
  line(215, 95, 210, 105)
}

function mainbody(){
  c=color(244, 244,240)
  fill(c)
  stroke(20)
  strokeWeight(2)
  ellipse (200,200,95,200)
}

function midfin(){
  c=color(150,0,0)
  fill(c)
  stroke(20)
  strokeWeight(2)
  ellipse (200,280,25,100)
  line(200, 240, 200, 300)
  line(200, 310, 200, 320)
}

function thruster(){
  c=color(90)
  fill(c)
  stroke(20)
  strokeWeight(2)
  quad(180, 295, 220, 295, 235, 320, 165, 320);
  line(173, 310, 227, 310)
}