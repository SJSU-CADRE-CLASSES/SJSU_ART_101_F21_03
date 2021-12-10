
class Meteor{
  constructor(){
this.r = 300;
this.x = random(w);
this.y = 0 - this.r;
this.speed = 10;
  }

display(){
  image(img10, this.x, this.y, this.r, this.r);
}

move(){
  this.y++;
}
}