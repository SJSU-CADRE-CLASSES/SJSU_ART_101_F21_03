'use strict'

let state = 'title';
let cnv;
let w = 800;
let h = 600;
let imgDog;
let dog;
let block;
let randint;
let score;
let lost;
let next;
let jumpMult;
let slider;

function preload() {
  imgDog = loadImage("assets/ydog1.png", 50, 50);
}

function setup() {
  cnv = createCanvas(w, h);
  textFont('monospace');
  textSize(24);
  slider = createSlider(10, 20, 12, 1);
  slider.position(width - slider.width, 0);
  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    default:
      break;
      dog = new Dog();
      new Block();
  }
}

function title() {
  background(0);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('Running Dog', w / 2, h / 5);

  textSize(30);
  text('click anywhere to start', w / 2, h / 2);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function draw() {
  background(0);
  text(score, 5, 24);
  score = 0;
  lost = false;
  block = [];
  next = 0;

}

function level1() {
  background(50, 150, 200);
  //text('click for points', w/2, h - 30);
  next += 1
  if (next == randint) {
    block.push(new Block())
    score += 1
    next = 0
    //spread = slider.value()
    randint = int(random(40, width / 5))
  }
  for (let b of block) {
    if (b.x < 0) {
      if (block.length > 3) {
        block.shift()
      }
    }
    b.move();
    b.show();
    if (dog.hits(b)) {
      console.log("Game Over!")
      lost = true;
      noLoop();
    }
  }
  dog.display();
  dog.move();
}

function keyPressed() {
  if (key == ' ') {
    dog.jump();
  }
}

function level1MouseClicked() {
  points++;
  console.log('points = ' + points);
  if (points >= 10) {
    state = 'you win';
  }
}

function youWin() {
  background(255, 50, 80);
  textSize(80);
  stroke(255);
  text('YOU WIN', w / 2, h / 2);

  textSize(30);
  text('click anywhere to restart', w / 2, h * 3 / 4);
}
