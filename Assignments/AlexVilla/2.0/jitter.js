class Jitter{
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(40, 80);
    this.speed = 3;
    this.myFill = random(500);
    this.myFill1 = random(3);
    this.myFill2 = random(255);
    this.myWobble = 2;
    this.clear = random(255);
    
  }
  
  move(){
    this.x += random(-this.speed, this.speed*this.myWobble);
    this.y += random(-this.speed, this.speed*this.myWobble);
  }
  
  display(){
    fill(this.myFill, this.myFill1, this.myFill2, this.clear);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  
}