

class Player{
  constructor(){
    this.r = 50;
    this.x = width/2;
    this.y = height - this.r;
    this.speed = 2;
    this.direction = 'still';
  }

  display(){
    ellipse(this.x, this.y, this.r, this.r);
  }

  move(){
    switch(this.direction){
      //do nuthin
      case 'still':
      break;
      //decrease y
      case 'up':
      this.y -= this.speed;
      break;
      //increase y
      case 'down':
      this.y += this.speed;
      break;
      //decrease x
      case 'left':
      this.x -= this.speed;
      break;
      //increase x
      case 'right':
      this.x += this.speed;
      break;
      case 'up-left':
      this.y -= this.speed;
      this.x -= this.speed;
      break;
      case 'up-right':
      this.y -= this.speed;
      this.x += this.speed;
      break;
      case 'down-left':
      this.y += this.speed;
      this.x -= this.speed;
      break;
      case 'down-right':
      this.y += this.speed;
      this.x += this.speed;
      break;
    }
  }


}
