//// NOTE: Url: http://127.0.0.1:8080/Assignments/ChristianAcosta/4.0/

let state = 'start';
let cnv;
let points = 0;
let player;
let dudes = [];

function setup() {
  cnv = createCanvas(800, 600);

  imageMode(CENTER); //images and rects are corners by default
  rectMode(CENTER);

  player = new Player();
  //dudes[0] = new Dude();
  dudes.push(new Dude());
}
///////////////////////////////////////
function draw() {

switch (state){
  case 'start':
  start();
  cnv.mouseClicked(startMouseClicked);
  break;
  case 'lvl_One':
  lvl_One();
  cnv.mouseClicked(lvl_OneMouseClicked);
  break;
  case 'win':
  win();
  cnv.mouseClicked(winMouseClicked);
    break;
    default:
    break;
}

  // if (state == 'start'){
  //   start();
  //   cnv.mouseClicked(startMouseClicked);
  // }else if(state == 'lvl_One'){
  //   lvl_One();
  //    cnv.mouseClicked(lvl_OneMouseClicked);
  // }

}

///////////////////////////////////////
//player movement movement (note-diagonals too op)
//note use booleans to make 2 buttons work together
function keyPressed(){
  if (key == 'w'){
    player.direction = 'up';
  }else if (key == 'a' ){
    player.direction = 'left';
  }else if (key == 's'){
    player.direction = 'down';
  }else if (key == 'd'){
    player.direction = 'right';
  }else if (key == 'q'){
    player.direction = 'up-left';
  }else if (key == 'e'){
    player.direction = 'up-right';
  }else if (key == 'z'){
    player.direction = 'down-left';
  }else if (key == 'x'){
    player.direction = 'down-right';
  }
}
//stop player once key is released
function keyReleased(){
  let numKeysPressed = 0;
//note numbers corrolate to key code number. https://keycode.info
//only stop when all keys are released
  if(keyIsDown(87)){
    numKeysPressed++;
  }
  if(keyIsDown(65)){
    numKeysPressed++;
  }
  if(keyIsDown(83)){
    numKeysPressed++;
  }
  if(keyIsDown(68)){
    numKeysPressed++;
  }
  if(keyIsDown(81)){
    numKeysPressed++;
  }
  if(keyIsDown(69)){
    numKeysPressed++;
  }
  if(keyIsDown(90)){
    numKeysPressed++;
  }
  if(keyIsDown(88)){
    numKeysPressed++;
  }
  if(numKeysPressed == 0){
    player.direction = 'still';
  }
}

//start
function start(){
  background(0);
  textFont('serif');
  textAlign(CENTER);
  textSize(100);
  fill(255);
  text("Spread Covid", width/2, height/3);
  textSize(50);
  text("click anywhere to start", width/2, height-height/3);
  text("use wasd and qezx to move", width/2, height-height/6);

  points = 0;
}
function startMouseClicked(){
  state = 'lvl_One';
}
//lvl_One
function lvl_One(){
  background(50, 150, 200);
  textFont('monospace');
  textAlign(CENTER);
  textSize(50);
  stroke(255);
  text("spread covid", width/2, height/8);

//create new dude
  if (random(1) <= 0.01){
    dudes.push(new Dude);
  }

  player.display();
  player.move();

  for (let i = 0; i < dudes.length; i++){
    dudes[i].display();
    dudes[i].move();
  }

//check for collision
for (let i = dudes.length-1; i >= 0; i--){
  if(dist(player.x, player.y, dudes[i].x, dudes[i].y) <= (player.r + dudes[i].r)/2){
    points++;
    //console.log('points =' + points);
    //remove touched dot
    dudes.splice(i, 1);
  } else if (dudes[i].y > height + dudes[i].r){    //remove dudes when the hit bottom
    dudes.splice(i, 1);
  }
}
  textSize(12);
  text('points: ' + points, width/2, height-height/12);

}
function lvl_OneMouseClicked(){
  points++;
  console.log('points =' + points);

  if (points>=10){
    state = 'win';
  }
}
//win
function win(){
  background(150);
  textFont('monospace');
  textAlign(CENTER);
  textSize(100);
  stroke(255);
  text("You Win", width/2, height/3);
  textSize(50);
  text("click anywhere to restart", width/2, height-height/3);
}
function winMouseClicked(){
  state = 'start';
}
//lost
function lost(){
  background(255);
  textFont('monospace');
  textAlign(CENTER);
  textSize(100);
  stroke(255);
  text("You Lost", width/2, height/3);
}
function lost_OneMouseClicked(){

}
