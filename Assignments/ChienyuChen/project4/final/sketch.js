'use strict';
let state = 'title';
let cnv;
let points = 1;
let w = 600;
let h = 600;
let player = 1;
let coins = [];
let enemies = [];
let playerImg;
let coinImg;
let enemyImg;




function preload() {
  playerImg = loadImage('assets/player.png');
  coinImg = loadImage('assets/coin.png');
  enemyImg = loadImage('assets/enemy.png');
  winImg = loadImage('assets/win.png');
  loseImg = loadImage('assets/lose.png');
}




function setup() {
cnv = createCanvas(w, h);
frameRate(300);
imageMode(CENTER);
rectMode(CENTER);
textFont('monospace');

player = new Player();
//coin[0] = new Coin();
  coins.push(new Coin());
  enemies.push(new Enemy());

}




function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  } else if (keyCode == UP_ARROW) {
    player.direction = 'up'
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down'
  } else if (key = ' ') {
    player.direction = 'still';
  }
}




function keyReleased() {
  let numberKeysPressed = 0;
  if (keyIsDown(LEFT_ARROW)) {
    numberKeysPressed++;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    numberKeysPressed++;
  }

  if (keyIsDown(UP_ARROW)) {
    numberKeysPressed++;
  }

  if (keyIsDown(DOWN_ARROW)) {
    numberKeysPressed++;
  }

  console.log(numberKeysPressed);

  if (numberKeysPressed == 0) {
    player.direction = 'still';
  }
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
    case 'game over':
    gameOver();
    cnv.mouseClicked(gameOverMouseClicked);
    break;
    default:
    break;
  }
//  if (state === 'title') {
//    title();
//    cnv.mouseClicked(titleMouseClicked)
//  } else if (state === 'level 1') {
//    level1();
//    cnv.mouseClicked(level1MouseClicked);
//  }
}




function title (){
  background(234, 221, 202);
  textSize(80);
  image(coinImg, w/2, w/2, 300, 300);
  fill(255);
  textAlign(CENTER);
  text('Sweet Tooth', w/2, h/5);

  textSize(30);
  text('click anywhere to start', w/2, h/2);
}




function titleMouseClicked(){
  console.log('canvas is clicked on title page');
  state = 'level 1';
}




function level1(){
  background(252, 239, 217);

  if (random(1) <= 0.02){
    coins.push(new Coin());
  }

  if (random(1) <= 0.03){
    enemies.push(new Enemy());
  }

  player.display();
  player.move();

  //iterating through coins array to display and move them

  /////using for loop/////
  for (let i = 0; i < coins.length; i++){
    coins[i].display();
    coins[i].move();
  }

  /////using forEach loop/////
//  coins.forEach(function(coin) {
//    coin.display();
//    coin.move();
//  })

  /////using for of loop/////
//  for (let coin of coins) {
//    coin.display();
//    coin.move();
//  }

  for (let i = 0; i < enemies.length; i++){
    enemies[i].display();
    enemies[i].move();
  }

  //check for collision, if there is a collision increase points by 1 AND splice that coin out of array
  //need to iterate backwards through array
  for (let i = coins.length - 1; i >= 0; i--) {
    //check for collision with player
    if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2 ){
    points++;
    coins.splice(i, 1);
  } else if (coins[i].y > h) {
    coins.splice(i, 1);
//    console.log('coin is out of town');
    }
  }

  //check for collision, if there is a collision increase points by 1 AND splice that enemy out of array
  //need to iterate backwards through array
  for (let i = enemies.length - 1; i >= 0; i--) {
    //check for collision with player
    if (dist(player.x, player.y, enemies[i].x, enemies[i].y) <= (player.r + enemies[i].r) / 2 ){
    points--;
    enemies.splice(i, 1);
  } else if (enemies[i].y > h) {
    enemies.splice(i, 1);
//    console.log('enemy is out of town');
    }
  }

  text(`points: ${points}`, w/4, h - 30);
  fill(138, 104, 48);

//check point values to win or lose the game
  if (points >= 20) {
    state = 'you win';
  } else if (points <= -1) {
    state = 'game over';
  }
}




function level1MouseClicked(){
//   points++;
//   console.log('points = ' + points);

//   if (points >= 10){
//     state = 'you win';
//   }
}




function youWin(){
  background(255, 50, 80);
  image(winImg, w/2, w/2, 300, 300);
  textSize(80);
  stroke(255);
  text('YOU WIN', w/2, h/2);

  textSize(30);
  text('click anywhere to restart', w/2, h * 3 /4);
}




function youWinMouseClicked(){
  state = 'title';
  points = 1;
}




function gameOver(){
  background(100);
  image(loseImg, w/2, w/2, 300, 300);
  textSize(80);
  stroke(255);
  text('GAME OVER', w/2, h/2);

  textSize(30);
  text('click anywhere to restart', w/2, h * 3 /4);
}




function gameOverMouseClicked(){
  state = 'title';
  points = 1;
}
