class Projectile {
    constructor(){
    //r is radius/size
    this.r = 5;
    this.x = player.x;
    this.y = player.y - player.r / 2;
    this.speed = 7;
  }

  display (){
    strokeWeight(0);
    fill(125, 255, 215)
    ellipse(this.x, this.y, this.r, this.r)

  }

  move (){
    this.y -= this.speed;
  }
}