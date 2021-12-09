// apparently, color() is not defined in the global scope but how is it pre-defined in the display function?
let typeColor;
let typeFaceColor;
let typeDetailColor;

// let r1;
// let g1;
// let b1;
//
// let r2;
// let g2;
// let b2;

class GhostPlayer {
  constructor(xpos, ypos, size) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.size = size;
    this.speed = 1; // the speed value of the ghost player cannot be modified from the parameters

    this.greenValue = 0;
    //this.blueValue = 0;
    this.magentaValue = 0;

    this.r1 = 60;  this.r2 = 200;
    this.g1 = 140; this.g2 = 230;
    this.b1 = 250; this.b2 = 250;
  }

  display() {
    if (this.greenValue > this.magentaValue) {
      this.r1 = map(this.greenValue, 0, 40, 60, 0);
      this.g1 = map(this.greenValue, 0, 40, 140, 250);
      this.b1 = map(this.greenValue, 0, 40, 250, 0);

      this.r2 = map(this.greenValue, 0, 40, 200, 0);
      this.g2 = map(this.greenValue, 0, 40, 230, 120);
      this.b2 = map(this.greenValue, 0, 40, 250, 0);
    }
    if (this.magentaValue > this.greenValue) {
      this.r1 = map(this.magentaValue, 0, 40, 60, 255);
      this.g1 = map(this.magentaValue, 0, 40, 140, 0);
      this.b1 = map(this.magentaValue, 0, 40, 250, 127);

      this.r2 = map(this.magentaValue, 0, 40, 200, 127);
      this.g2 = map(this.magentaValue, 0, 40, 230, 0);
      this.b2 = map(this.magentaValue, 0, 40, 250, 255);
    }
    if (this.greenValue == this.magentaValue) {
      this.r1 = 60;  this.r2 = 200;
      this.g1 = 140; this.g2 = 230;
      this.b1 = 250; this.b2 = 250;
    }


    // the ghost's form
    fill(this.r1, this.g1, this.b1);
    ellipse(this.xpos, this.ypos, this.size); // (100, 100, 80)

    // the ghost's face
    fill(this.r2, this.g2, this.b2);
    // eyes
    ellipse(this.xpos - (this.size / 5), this.ypos - (this.size / (20 / 3)), this.size / 8); // (84, 88, 10)
    ellipse(this.xpos + (this.size / 5), this.ypos - (this.size / (20 / 3)), this.size / 8); // (116, 88, 10)
    //fill(typeDetailColor);
    // mouth
    rect(this.xpos - (this.size / 8), this.ypos, this.size / 4, this.size / (8 / 3)); // (90, 100, 20, 30)
  }

  move() {
    if (keyIsDown(LEFT_ARROW))  this.xpos -= this.speed;
    if (keyIsDown(RIGHT_ARROW))  this.xpos += this.speed;
    if (keyIsDown(UP_ARROW))  this.ypos -= this.speed;
    if (keyIsDown(DOWN_ARROW))  this.ypos += this.speed;
  }
  // https://p5js.org/reference/#/p5/keyIsDown
}
