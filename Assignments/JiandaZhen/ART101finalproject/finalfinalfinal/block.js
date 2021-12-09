class Block {

  constructor() {
    this.h = 50
    this.w = 20
    this.x = width
    this.y = height - this.h
  }

  move() {
    this.x -= 6
  }

  show() {
    rect(this.x, this.y, this.w, this.h)
  }
}
