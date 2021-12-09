class Projectile {
  constructor(){
    this.r = 5;
    this.x = mouse.x;
    this.y = mouse.y;
    this.speed = 10;
  }
  
  display(){
    image(img10, this.x, this.y, this.r, this.r);
  }

  move(){
    this.y -= this.speed;
  }
}



