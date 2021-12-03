
class Dude{
  constructor(){
    this.r = 30;
    this.x = random(width);
    this.y = 0 - this.r;
    this.color = (255);
    this.sick = (0);
  }

  display(){
    fill(this.color);
    ellipse(this.x, this.y, this.r, this.r);
  }
  move(){
    this.y++;
  }
}
