'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;

function setup() {

  cnv = createCanvas(600, 600);
  textFont('monospace');

}

function draw() {

  //Cleaner than doing If statements. Each case is an If statement
  switch (state){
    case 'title':
    title();
    cnv.mouseClicked(titleMouseClicked)
    break;

    case 'level 1':
    level1();
    cnv.mouseClicked(level1MouseClicked)
    break;

    case 'you win':
    youWin();
    cnv.mouseClicked(youWinMouseClicked)
    break;

  default:
    break;
  }
}

//Starting/Title Page
function title(){
  background(0);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('My Game', w/2, h/5);

  textSize(30);
  text('click anywhere to start', w/2, h/2)
}

//When mouse is clicked, change to level 1
function titleMouseClicked(){
  console.log('canvas is clicked on title page')
  state = 'level 1'
}

function level1(){
  background(50,50,100);
  text('Click for Points', w/2, h - 30);
}

function level1MouseClicked(){
  //Everytime they click, it adds 1 point and at 10 points, they win
  points++;
  console.log('points ' + points)

  if (points >= 10){
    state = 'you win';
  }
};

function youWin(){
  background(255,50,80);
  textSize(80);
  stroke(255);
  text('You Won!', w/2, h/2);

  textSize(30);
  text('Click anywhere to restart', w/2, h * 3/4)
}

function youWinMouseClicked(){
  state = 'level 1'
  points = 0;
}