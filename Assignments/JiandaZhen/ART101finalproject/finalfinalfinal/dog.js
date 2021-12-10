class Dog {
  constructor() {
    this.r = 60;
    this.X = w / 2;
    this.y = h - this.r;
    this.vy = 0;
    this.gravity = 0.6;
    this.speed = 2;
  }

  display() {
    image(imgDog, this.x, this.y + 2, this.w, this.h);
  }

  jump() {
    this.elev = h - this.y - this.r
    if (this.elev == 0) {
      this.vy = -slider.value();
    }
  }

  hits(block) {
    return collideRectRect(this.x, this.y, this.r, this.r, block.x, block.y, block.w, block.h);
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, h - this.r);
  }
}
