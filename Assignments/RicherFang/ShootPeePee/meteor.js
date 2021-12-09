
class Meteor{
  constructor(){
this.r = 80;
this.x = random(w);
this.y = 0 - this.r;
  }

display(){
  rect(this.x, this.y, this.r, this.r);
}

move(){
  this.y++;
}
}