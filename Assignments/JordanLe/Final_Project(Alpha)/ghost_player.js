// apparently, color() is not defined in the global scope but how is it pre-defined in the display function?
let typeColor;
let typeFaceColor;
let typeDetailColor;

class GhostPlayer {
  constructor(xpos, ypos, size) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.size = size;
    this.speed = 1;
  }

  display() {
    //let ghostColor = [color(60, 140, 250)];
    //let ghostFaceColor = [color(200, 230, 250)];

    // the ghost's form
    fill(60, 140, 250);
    ellipse(this.xpos, this.ypos, this.size); // (100, 100, 80)

    // the ghost's face
    fill(200, 230, 250);
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
