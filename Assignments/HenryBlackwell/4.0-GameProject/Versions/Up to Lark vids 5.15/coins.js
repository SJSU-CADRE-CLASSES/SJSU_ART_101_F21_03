class Coin {
    constructor(){
    //r is radius/size
    this.r = 50;
    this.x = random(w);
    this.y = 0 - this.r;
    this.speed = 3;
  }

  display (){
    // rect (this.x, this.y, this.r, this.r)
    image(coinImg, this.x, this.y, this.r, this.r)

  }

  move (){
    this.y += this.speed;
  }
}