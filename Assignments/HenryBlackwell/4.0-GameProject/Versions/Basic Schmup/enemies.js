class Enemy {
    constructor(){
    //r is radius/size
    this.r = 50;
    this.x = random(w);
    this.y = 0 - this.r;
    this.speed = 4;
  }

  display (){
    // rect (this.x, this.y, this.r, this.r)
    image(enemyImg, this.x, this.y, this.r, this.r)

  }

  move (){
    this.y += this.speed;
  }
}