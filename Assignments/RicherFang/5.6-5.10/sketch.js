'use strict';

let state = 'title';
let canvas;
let points = 0;

function setup(){
canvas = createCanvas (800, 800);
stroke(195,34,80)
strokeWeight(3)
fill(49, 2, 61)
}

function draw(){

switch (state){
  case 'title':
     title();
     canvas.mouseClicked(titleMouseClicked);
     break;
   case 'level 1':
    //execute code
    level1();
    canvas.mouseClicked(level1MouseClicked);
    break;
  case 'you win':
youWin();
canvas.mouseClicked(youWinMouseClicked);
    break;
  default:
    break;
}



function title(){
background(10); 
textSize(80);
text('Space Defenders', 95, 250);

textSize(30)
text('Click Anywhere To Start', 235,500);
}

function titleMouseClicked(){
    console.log('canvas is Clicked on title page');
    state = 'level 1'
  }

function level1(){
  background(10); 
  textSize(20)
  text('click for points', 240,200);
  }

  function level1MouseClicked(){
    points++;
    console.log('points = ' + points);

    if (points >= 10){
      state = 'you win'
    }
  }
}

function youWin(){
  background(10); 
  textSize(80);
  text('You Win!', 135, 100);
  
  textSize(30)
  text('Click Anywhere To Restart', 125,300);
}

function youWinMouseClicked(){
state = 'level 1';
points = 0;
}