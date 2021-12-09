'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coins;

function setup() {
  cnv = createCanvas(w, h);

  textFont('arial');

  player = new Player();

  coins = new Coins();
  
}

function draw() {

switch (state){
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
  }  
}

function keyPressed(){
  if (keyCode == LEFT_ARROW){
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'up'
  } else if (keyCode == DOWN_ARROW) {
  player.direction = 'down'
  } else if (key = ' '){
    player.direction = 'still';
  }
}

function title(){
  background(104, 93, 110);
  textSize(65);
  fill(255);
  textAlign(CENTER);
  text('SQUARE ATTACK', w/2, h/5);

  textSize(30);
  text('* click to start *', w/2, h/2);
}

function titleMouseClicked(){
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1() {
  background(152, 227, 188);
  // text('click for points', w/2, h - 30);

  player.display();
  player.move();

  coins.display();
  coins.move();
}

function level1MouseClicked() {
  points++;
  console.log('points = ' + points);

  if (points >= 10){
    state = 'you win';
  }
}

function youWin(){
  background(245, 194, 166);
  textSize(80);
  stroke(255);
  text('YOU WIN!!! :)', w/2, h/2);

  textSize(30);
  text('* click to restart *', w/2, h * 3/4);
}

function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
}