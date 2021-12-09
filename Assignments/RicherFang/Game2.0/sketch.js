// 'use strict';
let stars = [];
let i;
let j;
let counter = 0;
let d;
let count = 0;
let count2 = 0;
let player;
let points = 1;
let projectiles = [];
let bg;
let img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12;
let state = 'title';
let canvas;
let w = 800
let h = 800
let meteors = [];
let value = 0;
// let song;

function setup(){
// bg = loadImage('assests/SpaceTitle.png');
canvas = createCanvas (w, h);
background(20)
stroke(195,34,80)
strokeWeight(3)
fill(49, 2, 61)

// song = loadSound('assets/textsound.mp3');

rectMode(CENTER);

player = new Player();

meteors[0] = new Meteor();
// projectiles[0] = new Projectile();
}

function preload(){
  img = loadImage("assests/SpaceTitle.png")
  img1 = loadImage("assests/Textbox1.png")
  img2 = loadImage("assests/Textbox2.png")
  img3 = loadImage("assests/Textbox3.png")
  img4 = loadImage("assests/Textbox4.png")
  img5 = loadImage("assests/Textbox5.png")
  img6 = loadImage("assests/Textbox6.png")
  img7 = loadImage("assests/Textbox7.png")
  img8 = loadImage("assests/Textbox8.png")
  img9 = loadImage('assests/Ship.png')
  img10 = loadImage('assests/FallingMeteor.png')
  img11 = loadImage('assests/WinScreen.png')
  img12 = loadImage('assests/EndScreen.png')
}

function draw(){
switch (state){
  case 'title':
     title();
     canvas.mouseClicked(titleMouseClicked);
     break;
   case 'Text 1':
    //execute code
    Text1();
    canvas.mouseClicked(Text1MouseClicked);
    break;
  case 'Text 2':
      //execute code
      Text2();
      canvas.mouseClicked(Text2MouseClicked);
      break;
  case 'Text 3':
      //execute code
      Text3();
      canvas.mouseClicked(Text3MouseClicked);
      break;
  case 'Text 4':
      //execute code
      Text4();
      canvas.mouseClicked(Text4MouseClicked);
      break;
  case 'Text 5':
        //execute code
        Text5();
        canvas.mouseClicked(Text5MouseClicked);
        break;
  case 'Text 6':
        //execute code
        Text6();
        canvas.mouseClicked(Text6MouseClicked);
        break;
  case 'Text 7':
          //execute code
          Text7();
          canvas.mouseClicked(Text7MouseClicked);
          break;
  case 'Text 8':
            //execute code
            Text8();
            canvas.mouseClicked(Text8MouseClicked);
            break;
  case 'level 1':
            //execute code
            level1();
            // canvas.mouseClicked(level1MouseClicked);
            break;
  case 'you win':
youWin();
canvas.mouseClicked(youWinMouseClicked);
    break;
    case 'game over':
      gameOver();
      canvas.mouseClicked(gameOverMouseClicked);
          break;
  default:
    break;
}
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.direction = 'left'
  } else if (keyCode === RIGHT_ARROW) {
    player.direction = 'right'
  } else if (keyCode === UP_ARROW) {
    projectiles.push(new Projectile);
  }

}

function keyReleased(){

let numberKeysPressed = 0;

if (keyIsDown(LEFT_ARROW)){
  numberKeysPressed++;
} 
if (keyIsDown(RIGHT_ARROW)){
  numberKeysPressed++;
} 
if (keyIsDown(UP_ARROW)){
  numberKeysPressed++;
} 
if (keyIsDown(DOWN_ARROW)){
  numberKeysPressed++;
}  
  if (numberKeysPressed == 0){
  player.direction = 'still';
  }
}


function title(){
  background (20)
  image(img, 0 , 0);
  // background(bg)
// textSize(80);
// text('Space Defenders', 95, 250);

// textSize(30)
// text('Click Anywhere To Start', 235,500);
}

function titleMouseClicked(){
    console.log('canvas is Clicked on title page');
    state = 'Text 1'
  }

function Text1(){
  background(20)
  image(img1, 0 , 0)

  // if (song.isPlaying()) {
  //   // .isPlaying() returns a boolean
  //   song.stop();
  // } else {
  //   song.play();
  // }
  }

   function Text1MouseClicked(){
    state = 'Text 2'
}

  function Text2(){
    background(20)
    image(img2, 0 , 0)

    // if (song.isPlaying()) {
    //   // .isPlaying() returns a boolean
    //   song.stop();
    // } else {
    //   song.play();
    // }
    }

    function Text2MouseClicked(){
      state = 'Text 3'
  }

  function Text3(){
    background(20)
    image(img3, 0 , 0)

    // if (song.isPlaying()) {
    //   // .isPlaying() returns a boolean
    //   song.stop();
    // } else {
    //   song.play();
    // }
    }

    function Text3MouseClicked(){
      state = 'Text 4'
  }

  function Text4(){
    background(20)
    image(img4, 0 , 0)

    // if (song.isPlaying()) {
    //   // .isPlaying() returns a boolean
    //   song.stop();
    // } else {
    //   song.play();
    // }
    }

    function Text4MouseClicked(){
      state = 'Text 5'
  }

  function Text5(){
    background(20)
    image(img5, 0 , 0)

    // if (song.isPlaying()) {
    //   // .isPlaying() returns a boolean
    //   song.stop();
    // } else {
    //   song.play();
    // }
    }

    function Text5MouseClicked(){
      state = 'Text 6'
  }

  function Text6(){
    background(20)
    image(img6, 0 , 0)

    // if (song.isPlaying()) {
    //   // .isPlaying() returns a boolean
    //   song.stop();
    // } else {
    //   song.play();
    // }
    }

    function Text6MouseClicked(){
      state = 'Text 7'
  }

  function Text7(){
    background(20)
    image(img7, 0 , 0)

    // if (song.isPlaying()) {
    //   // .isPlaying() returns a boolean
    //   song.stop();
    // } else {
    //   song.play();
    // }
    }

    function Text7MouseClicked(){
      state = 'Text 8'
  }

  function Text8(){
    background(20)
    image(img8, 0 , 0)

    // if (song.isPlaying()) {
    //   // .isPlaying() returns a boolean
    //   song.stop();
    // } else {
    //   song.play();
    // }
    }

    function Text8MouseClicked(){
      state = 'level 1'
  }

  function level1(){
    background(20,35,50)
    noCursor()
    imageMode(CENTER)
    // image(img9, mouseX, mouseY, 200, 200)
 
 
  let s = new Star(random (0,width), random (0,height/2), random (2,4), random (2,7), 5, 250, 250, 200);
  for (i = 0; i < random(3); i+=1) {
  stars.push(s);}
  for (let star of stars) {
  star.moveStar();
  star.createStar();}
  
  if (random(1) <= 0.01){
    meteors.push(new Meteor());
  }

  for (let i = 0; i < meteors.length; i++){
    meteors[i].display();
    meteors[i].move();

    if (meteors[i].y >= h - meteors[i].r / 2){
      points--;
      meteors.splice(i, 1);
    }
  }

  for (let i = projectiles.length - 1; i >= 0; i--){

  for (let j = meteors.length - 1; j >= 0; j--){
  if (projectiles[i] && dist(projectiles[i].x, projectiles[i].y, meteors[j].x, meteors[j].y) <= (projectiles[i].r + meteors[j].r) / 2){
    points++;
    // console.log(points);
    meteors.splice(j, 1);
    projectiles.splice(i, 1);
    } 
  }
}

for (let i = 0; i < projectiles.length; i++){
  projectiles[i].display();
  projectiles[i].move();
}

player.display();
player.move();

  text('points: ' + points, 20, h -30);

  if (points >= 35){
    state = 'you win'
  } else if (points <= 0){
    state = 'game over';
  }
    }
 

  //   function level1MouseClicked(){
  //     state = 'level 2'
  // }

//   function level1MouseClicked(){
//     points++;
//     console.log('points = ' + points);

//     if (points >= 10){
//       state = 'you win'
//     }
//   }
// }

function youWin(){
  image(img11, 400, 400)
}

function youWinMouseClicked(){
state = 'level 1';
points = 1;

meteors = [];
projectiles = [];
}
  
function gameOver(){
  background (20)
  image(img12, 400, 400)
}

function gameOverMouseClicked(){
state = 'level 1';
points = 1;
meteors = [];
projectiles = [];
}
