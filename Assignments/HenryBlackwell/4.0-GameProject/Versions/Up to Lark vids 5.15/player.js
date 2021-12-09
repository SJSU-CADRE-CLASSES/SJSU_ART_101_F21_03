class Player {
  constructor() {
    //r is radius/size
    this.r = 60; // this is actually the diameter, NOT radius
    this.x = w / 2;
    this.y = h - this.r;
    this.speed = 2;
    this.direction = 'still';
  }

  display() {
    // rect(this.x, this.y, this.r, this.r)
    image(playerImg, this.x, this.y, this.r, this.r)
  }

  move() {
    switch (this.direction) {
      case 'still':
        //Dont move anything
        break;

      case 'up':
        //Decrease Y pos
        if (this.y - this.r / 2 > 0 ){ // this.r is actually the diameter, we need to check for the radius
          this.y -= this.speed; //same as y = y - speed
        }
        break;

      case 'down':
        //Increase Y pos
        if (this.y < h - this.r / 2){
          this.y += this.speed;
        }
        break;

      case 'left':
        //Decrease X pos
        if (this.x - this.r / 2> 0){
          this.x -= this.speed; //same as y = y - speed
        }
        break;

      case 'right':
        //Increase X pos
        if (this.x < w - this.r / 2){
          this.x += this.speed; //same as y = y - speed
        }
        
        break;

      default:
        break;
    }
  }
}