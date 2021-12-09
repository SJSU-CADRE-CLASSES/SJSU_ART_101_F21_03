
class Meteor{
  constructor(){
this.r = 160;
this.x = random(w);
this.y = 0 - this.r;
  }

display(){
  image(img10, this.x, this.y, this.r, this.r);
}

move(){
  this.y++;
}
}