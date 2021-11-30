'use strict';

let state = 'title';
let cnv;

function setup() {

  cnv = createCanvas(600, 600);
  

}

function draw() {
  if (state === 'title'){
    title();
    cnv.mouseClicked(titleMouseClicked)
  } else if (state === 'level 1'){
    level1();
    cnv.mouseClicked(level1MouseClicked)
  }
}

//Starting/Title Page
function title(){
  background(100);
  textSize(80);
  stroke(255);
  text('My Game',100, 100);

  textSize(30);
  text('click anywhere to start', 100, 300)
}

//When mouse is clicked, change to level 1
function titleMouseClicked(){
  console.log('canvas is clicked on title page')
  state = 'level 1'
}

function level1(){
  background(50,50,100);
}

function level1MouseClicked(){
  console.log('canvas is clicked on level 1 page')
  state = 'level 1'
};