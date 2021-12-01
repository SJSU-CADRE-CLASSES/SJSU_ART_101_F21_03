//// NOTE: Url: http://127.0.0.1:8080/Assignments/ChristianAcosta/4.0/

let state = 'start';
let cnv;
let points = 0;
let player;
let dude;

function setup() {
  cnv = createCanvas(800, 600);

  player = new Player();
  dude = new Dude();
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

  player.display();
  dude.display();
  dude.move();
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
