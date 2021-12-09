'use strict';

let state = 'title';
let cnv;
let points = 1;
let w = 600;
let h = 600;
let player = 1;
let playerImg;
let coins = [];
let coinImg;
let enemies = [];
let enemyImg;
let lives = 3;

function preload() {
  playerImg = loadImage('Assets/soccerball.png')
  coinImg = loadImage('Assets/soccerplayer.png')
  enemyImg = loadImage('Assets/redcard.jpg')

}

function setup() {
  cnv = createCanvas(600, 600);


  imageMode(CENTER);
  rectMode(CENTER);

  textFont('monospace');

  player = new Player();

  coins.push(new Coin());

  enemies.push(new Enemy());

}

function draw() {

  //Cleaner than doing If statements. Each case is an If statement
  switch (state) {
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

    case 'game over':
      gameOver();
      cnv.mouseClicked(gameOverMouseClicked)
      break;

    default:
      break;
  }
}

//Player Arrow Controls
function keyPressed() {
  if (keyCode == UP_ARROW) {
    player.direction = 'up'
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down'
  } else if (keyCode == LEFT_ARROW) {
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  } else if (key = ' ') { //This is for the spacebar
    player.direction = 'still'
  }
}

function keyReleased() {

  let numberKeysPressed = 0;

  if (keyIsDown(UP_ARROW)) {
    numberKeysPressed++;
  }

  if (keyIsDown(DOWN_ARROW)) {
    numberKeysPressed++;
  }

  if (keyIsDown(LEFT_ARROW)) {
    numberKeysPressed++;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    numberKeysPressed++;
  }

  console.log(numberKeysPressed)

  if (numberKeysPressed == 0) {
    player.direction = 'still'
  }
}

//Starting/Title Page
function title() {
  background(0);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('My Game', w / 2, h / 5);

  textSize(30);
  text('click anywhere to start', w / 2, h / 2)
}

//When mouse is clicked, change to level1
function titleMouseClicked() {
  console.log('canvas is clicked on title page')
  state = 'level 1'
}

function level1() {
  background(50, 50, 100);

  //Creates a new coin, <= is frequency of spawn
  if (random(1) <= 0.04) {
    coins.push(new Coin())
  }

  player.display();
  player.move();


  //Going through array to display and move them. Using- are other ways to do arrays for this

  //Using For Loops
  for (let i = 0; i < coins.length; i++) {
    coins[i].display();
    coins[i].move();
  }

  //Using forEach, can access i variable
  // coins.forEach(function (coin) {
  //   coin.display();
  //   coin.move();
  // })

  // //Using for of Loop, which is good but you can't access any i variables
  // for (let coin of coins) {
  //   coin.display();
  //   coin.move();
  // }

  //Check for collision with COINS, if there is a collision increase points by 1 AND splice that coin out of the array
  //Need to iterate backwards in array, then splices out a coin when touched
  for (let i = coins.length - 1; i >= 0; i--) {
    //Measuring distance between players x-y and coins x-y
    if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2) {
      points++;
      console.log(points);
      coins.splice(i, 1);
    } else if (coins[i].y > h) {
      coins.splice(i, 1);
      console.log('coin is out of town')
    }
  }

  //Creates a new coin, <= is frequency of spawn
  if (random(1) <= 0.03) {
    enemies.push(new Enemy())
  }

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].display();
    enemies[i].move();
  }

  //Check for collision with ENEMIES, if there is a collision increase points by 1 AND splice that coin out of the array
  //Need to iterate backwards in array, then splices out a coin when touched
  for (let i = enemies.length - 1; i >= 0; i--) {
    //Measuring distance between players x-y and enemies x-y
    if (dist(player.x, player.y, enemies[i].x, enemies[i].y) <= (player.r + enemies[i].r) / 2) {
      points--;
      enemies.splice(i, 1);
    } else if (enemies[i].y > h) {
      enemies.splice(i, 1);
      console.log('enemy is out of town')
    }
  }

  //Shows how many points you have
  text(`points: ${points}`, w / 4, h - 30);

  //Check points to win or lose
  if (points >= 10) {
    state = 'you win';
  } else if (points <= 0) {
    state = 'game over';
  }

}

function level1MouseClicked() {
  //Every click, it adds 1 point and at 10 points, they win
  // points++;
  // console.log('points ' + points)

  // if (points >= 10) {
  //   state = 'you win';
  // }
};

function youWin() {
  background(255, 50, 80);
  textSize(80);
  text('You Won!', w / 2, h / 2);

  textSize(30);
  text('Click anywhere to restart', w / 2, h * 3 / 4);
}

function youWinMouseClicked() {
  state = 'title'
  points = 1;
}

function gameOver() {
  background(255, 50, 80);
  textSize(80);

  //Check number of lives
  if (lives >= 0) {

    //Display # of lives to the screen, then resets enemies and coins
    text(`Lives: ${lives}`, w / 2, h * 3 / 4);
    coins = [];
    enemies = [];

    textSize(30);
    text('Click anywhere to continue', w / 2, h * 3.5 / 4);
  } else {
    //Game over

    text('Game over', w / 2, h * 3 / 4);

    textSize(30);
    text('Click anywhere to restart', w / 2, h * 3.5 / 4);
  }

}

function gameOverMouseClicked() {
  if (lives >= 0) { //This makes sure they have 0 lives going into it because life was already taken away in gameOver() function
    lives--;
    state = 'level 1';
  } else { 
    state = 'title'; //Changes to title screen and resets enemies
    coins = [];
    enemies = [];
  }

  points = 1;
}