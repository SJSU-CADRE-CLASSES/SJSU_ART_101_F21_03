

class Player{
  constructor(){
    this.r = 50;
    this.x = width/2;
    this.y = height - this.r;
  }

  display(){
    rect(this.x, this.y, this.r, this.r);
  }



}
