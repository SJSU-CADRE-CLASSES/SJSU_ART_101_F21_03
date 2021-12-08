'use strict';

//  To convert to SCHMUP
//1) Create Projectile class
//2) Change play controls to go to left to right, up will launch projectle
//3) Test Collissions between projectile and coins/enemies, instead of player

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let titleImg;
let player = 1;
let playerImg;
let oneUps = [];
let oneUpImg;
let enemies = [];
let enemyImg;
let projectiles = [];
let lives = 3;

function preload() {
  playerImg = loadImage('Assets/PlayerAvatar.png')
  oneUpImg = loadImage('Assets/HPup.png')
  enemyImg = loadImage('Assets/Enemy.png')
  titleImg = loadImage('Assets/VSscreen.png')
  //If creating image for projectile, load it here
}

function setup() {
  cnv = createCanvas(600, 600);

  imageMode(CENTER);
  rectMode(CENTER);

  textFont('monospace');

  player = new Player();

  oneUps.push(new oneUp);
  enemies.push(new Enemy());
  projectiles.push(new Projectile);
}

function draw() {

  //Cleaner than doing If statements. Each case is an If statement
  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked)
      break;

    case 'tutorial':
      tutorial();
      cnv.mouseClicked(tutorialMouseClicked)
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
    projectiles.push(new Projectile)
  } else if (keyCode == LEFT_ARROW) {
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  }

  console.log(projectiles);

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
  textSize(50);
  fill(0, 255, 255);
  textAlign(CENTER);
  text('Welcome to Galagas', w / 2, h / 5);

  fill(255, 0, 0)
  textSize(30);
  text('Click anywhere to go to tutorial', w / 2, h / 2);

  textSize(20);
  fill(125, 255, 255)
  text('Press S to skip tutorial', w /2, w / 1.5 );

  if (key === 's'){
    //Skip tutorial
    state = 'level 1';
  } 
}

//When mouse is clicked on Title screen, change to level1
function titleMouseClicked() {
  state = 'tutorial'
}

function tutorial() {
  background(0);
  fill(255);
  textSize(25);

  text('Use Left and Right Arrow keys to move', w / 2, h / 4.5);
  text('Use Up Arrow to fire', w / 2, h / 3.5);
  text('Fire at enemies to gain points', w / 2, h / 2.5);
  text(`Collect one-ups to gain lives`, w / 2, h / 2);

  fill(255, 0, 0)
  text('Click anywhere to start', w / 2, h / 1.5);
}

function tutorialMouseClicked() {
  state = 'level 1'
}

function level1() {
  background(50, 50, 100);

  //Creates a new oneUp, <= is frequency of spawn
  if (random(1) <= 0.005) {
    oneUps.push(new oneUp)
  }

  //Creates a new enemy, <= is frequency of spawn
  if (random(1) <= 0.025) {
    enemies.push(new Enemy())
  }

  //Creates a new projectile, BEFORE the player was drawn, so the projectile shoots from under the player
  for (let i = 0; i < projectiles.length; i++) {
    projectiles[i].display();
    projectiles[i].move();
  }

  //Creates player on screen
  player.display();
  player.move();

  //Tells oneUps to show and move
  for (let i = 0; i < oneUps.length; i++) {
    oneUps[i].display();
    oneUps[i].move();
  }
  //Tells enemies to show and move
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].display();
    enemies[i].move();
  }

  //For projectile collission with enemies and oneUps
  for (let i = projectiles.length - 1; i >= 0; i--) {

    //Check for PROJECTILE collision with ENEMIES, if there is a collision increase points by 1 AND splice that enemy out of the array
    //Need to iterate backwards in array, then splices out an enemy when touched
    for (let j = enemies.length - 1; j >= 0; j--) {
      //Measuring distance between players x-y and enemies x-y
      if (projectiles[i] && dist(projectiles[i].x, projectiles[i].y, enemies[j].x, enemies[j].y) <= (projectiles[i].r + enemies[j].r) / 2) {
        points++;
        enemies.splice(j, 1);
        projectiles.splice(i, 1);
      } else if (enemies[j].y > h) {
        enemies.splice(j, 1);
      }
    }

    for (let j = oneUps.length - 1; j >= 0; j--) {
      //Measuring distance between players x-y and oneUps x-y
      if (projectiles[i] && dist(projectiles[i].x, projectiles[i].y, oneUps[j].x, oneUps[j].y) <= (projectiles[i].r + oneUps[j].r) / 2) {
        oneUps.splice(j, 1);
        projectiles.splice(i, 1);
      } else if (oneUps[j].y > h) {
        oneUps.splice(j, 1);
      }
    }

  }

  //Check for PLAYER collision with ONEUPS, if there is a collision increase points by 1 AND splice that oneUp out of the array
  //Need to iterate backwards in array, then splices out a oneUP when touched
  for (let i = oneUps.length - 1; i >= 0; i--) {
    //Measuring distance between players x-y and oneUps x-y
    if (dist(player.x, player.y, oneUps[i].x, oneUps[i].y) <= (player.r + oneUps[i].r) / 2) {
      lives++;
      console.log(lives);
      oneUps.splice(i, 1);
    } else if (oneUps[i].y > h) {
      oneUps.splice(i, 1);
    }
  }

  //Checking for PLAYER collission with ENEMIES, if there is a collission, reduce lives by 1 AND splice that enemy out of the array
  for (let i = enemies.length - 1; i >= 0; i--) {
    //Measuring distance between players x-y and enemies x-y
    if (dist(player.x, player.y, enemies[i].x, enemies[i].y) <= (player.r + enemies[i].r) / 2) {
      lives--;
      enemies.splice(i, 1);
    } else if (enemies[i].y > h) {
      enemies.splice(i, 1);
    }
  }

  //Shows how many points you have
  text(`Points: ${points}`, w / 4, h - 30);

  //Shows how many lives you have
  text(`Lives: ${lives}`, w / 4, h - 55);

  if (lives <= 0) {
    state = 'game over';
  }

  //Check points and lives, when 10-15 points show messages, if 10 points they win, if 30 points they win
  if (points >= 0 && points < 5) {
    text('Get to 30 points to win!', w / 2, h / 2);
  }
  if (points >= 10 && points < 13) {
    text('You got the hang of it!', w / 2, h / 2)
  } else if (points >= 15 && points < 18) {
    text(`You're almost there`, w / 2, h / 2)
  } else if (points >= 20 && points < 28) {
    text('So close :D', w / 2, h / 2)
  } else if (points >= 30) {
    state = 'you win';
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
  background(50, 255, 80);
  textSize(80);
  text('You Won!', w / 2, h / 2);

  textSize(30);
  text('Click anywhere to restart', w / 2, h * 3 / 4);
}

function youWinMouseClicked() {
  state = 'title'
  oneUps = [];
  enemies = [];
  projectiles = [];
  points = 0;
  lives = 3;
}

function gameOver() {
  background(255, 50, 80);
  textSize(80);

  //Check number of lives

  //Game over
  textSize(50);
  text('Game Over!', w / 2, h / 2.5);

  //Shows text after death, depending on how many points they got
  textSize(30);
  if (points < 10) {
    text(`It happens, Try again!`, w / 2, h / 2)
  } else if (points >= 10 && points < 20) {
    text(`You got far!`, w / 2, h / 2)
  } else if (points >= 20 && points < 28) {
    text('So close D:', w / 2, h / 2)
  } else {
    text('NOOOOOOOOOOOOOO!', w / 2, h / 2)
  }

  textSize(30);
  text('Click anywhere to return to title', w / 2, h * 3 / 4);

}

function gameOverMouseClicked() {

  if (lives == 0) { //This makes sure they have 0 lives before resetting to the Title screen
    state = 'title';
    oneUps = [];
    enemies = [];
    projectiles = [];
    points = 0;
    lives = 3;
  }

}