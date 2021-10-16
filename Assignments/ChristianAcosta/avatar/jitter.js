class jitter{
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.diameter = (5,5);
    this.speed = 2;
    this.myWobble = 1;
    //this.myFill = (255, 103, 186);
    this.myFill1 = (0);
    this.myFill2 = random (200, 255);
    this.myFill3 = random (200, 255);
    this.clear = 50;

  }
  
  move(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }
  
  display(){
    fill(this.myFill1, this.myFill2, this.myFill3, this.clear);
    console.log(this.clear);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  
  
}