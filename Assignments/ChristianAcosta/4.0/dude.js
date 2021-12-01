
class Dude{
  constructor(){
    this.r = 30;
    this.x = random(width);
    this.y = 0 - this.r;
  }

  display(){
    ellipse(this.x, this.y, this.r, this.r);
  }

  move(){
    this.y++;
  }
}
