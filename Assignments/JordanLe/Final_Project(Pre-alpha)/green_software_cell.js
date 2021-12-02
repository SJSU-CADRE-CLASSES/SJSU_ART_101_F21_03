class GreenSoftwareCell {
  constructor(xpos, ypos, size) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.size = size;
  }
  display() {
    fill(0, 255, 128);
    ellipse(this.xpos, this.ypos, this.size); // (100, 100, 80)
  }
  move() {
    if (this.xpos < windowWidth && this.xpos > windowWidth / (65 / 64)) {
      this.xpos -= 1;
    } else if (this.ypos < windowHeight && this.ypos > windowHeight / (65 / 64)){
      this.ypos -= 1;
    } else if (this.xpos > -1 && this.xpos < windowWidth / 64) {
      this.xpos += 1;
    } else if (this.ypos > -1 && this.ypos < windowHeight / 64) {
      this.ypos += 1;
    } else {
      if (random(1) < 0.25) {
        this.xpos -= 1;
      } else if (random(1) < 0.5) {
        this.xpos += 1;
      } else if (random(1) < 0.75) {
        this.ypos -= 1;
      } else {
        this.ypos += 1;
      }
    }
  }
}
