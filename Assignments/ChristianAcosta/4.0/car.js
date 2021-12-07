

class Car{
  constructor(){
    this.w = 80;
    this.h = 160;
    this.x = random(200, 600);
    this.y = 0 - this.h;
    this.color = color(255, 0, 0);
  }

  display(){
    noStroke();
    rectMode(CENTER);
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
  }
  move(){
    this.y++;
  }
}
