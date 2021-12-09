class Player {
  constructor() {
    this.r = 60;
    this.x = w / 2;
    this.y = h - this.r;
    this.speed = 3;
    this.direction = 'still';
  }


  display() {
    image(playerImg, this.x, this.y, this.r, this.r);
    // rect(this.x, this.y, this.r, this.r);
  }

  move() {

    switch (this.direction) {
      case 'still':
        //don't move anything
        break;
      case 'up':
        //decrease y pos
        if (this.y - this.r / 2 > 0) {
          this.y -= this.speed;
        }
        break;
      case 'down':
        // increase ypos
        if (this.y < h - this.r /2) {
          this.y += this.speed;
        }
        break;
      case 'right':
        //icreasing x pos
        if (this.x < w - this.r / 2) {
          this.x += this.speed
        }

        break;
      case 'left':
        //decreasing x pos
        if (this.x - this.r / 2 > 0) {
          this.x -= this.speed;
        }
        break;
      default:
        break;





    }

  }


}
