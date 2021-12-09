class Projectile {
  constructor(){
    this.r = 10;
    this.x = player.x;
    this.y = player.y - player.r / 2;
    this.speed = 20;
  }
  
  display(){
    stroke(46, 126 , 255);
    fill(168, 249, 255);
    ellipse(this.x, this.y, this.r, this.r);
  }

  move(){
    this.y -= this.speed;
  }
}



