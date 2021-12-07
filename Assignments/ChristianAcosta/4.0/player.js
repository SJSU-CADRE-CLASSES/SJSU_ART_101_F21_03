

class Player{
  constructor(){
    this.r = 50;
    this.x = width/2;
    this.y = height - this.r;
    this.color = 0;
    this.speed = 2;
    this.direction = 'still';
  }

  display(){
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.r, this.r);
  }

  move(){
    switch(this.direction){
      //do nuthin
      case 'still':
      break;
      //decrease y
      case 'up':
      if (this.y > 0){
      this.y -= this.speed;
    }
      break;
      //increase y
      case 'down':
      if (this.y < height){
      this.y += this.speed;
    }
      break;
      //decrease x
      case 'left':
      if (this.x > 0){
      this.x -= this.speed;
    }
      break;
      //increase x
      case 'right':
      if (this.x < width){
      this.x += this.speed;
    }
      break;
      case 'up-left':
      if (this.y > 0 && this.x > 0){
      this.y -= this.speed;
      this.x -= this.speed;
    }
      break;
      case 'up-right':
      if (this.y > 0 && this.x < width){
      this.y -= this.speed;
      this.x += this.speed;
    }
      break;
      case 'down-left':
      if (this.y < height && this.x > 0){
      this.y += this.speed;
      this.x -= this.speed;
    }
      break;
      case 'down-right':
      if (this.y < height && this.x < width){
      this.y += this.speed;
      this.x += this.speed;
      break;
    }
    }
  }


}
