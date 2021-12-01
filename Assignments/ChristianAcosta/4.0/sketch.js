//// NOTE: Url: http://127.0.0.1:8080/Assignments/ChristianAcosta/4.0/

let state = 'start';
let cnv;
let points = 0;

function setup() {
  cnv = createCanvas(800, 600);
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
  background(220);
  textAlign(CENTER);
  textSize(100);
  stroke(255);
  text("mississippi", width/2, height/3);
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
  textAlign(CENTER);
  textSize(50);
  stroke(255);
  text("click to get points", width/2, height/3);
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
  background(255);
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
  textAlign(CENTER);
  textSize(100);
  stroke(255);
  text("You Lost", width/2, height/3);
}
function lost_OneMouseClicked(){

}
