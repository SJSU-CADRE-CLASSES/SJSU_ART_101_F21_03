function preload(){
  audio = loadSound("sound/lofi.mp3")
}



function setup() {
 
  textWrap(CHAR);
  fill(0);
  let cnv = createCanvas(1900,970);
  textAlign(CENTER);
  var button = createButton('Start Game');
  textSize (60)
  button.position(715, 300);
  button.mousePressed(qoutesRandomizer);
  audio.setLoop(true)
  cnv.mousePressed(canvasPressed)
}

function draw() {
  background(100, 125, 107);
  fill(255)
  textAlign (CENTER);
  textSize(40);
  textStyle (BOLDITALIC)
  textFont ('Georgia')
  textWrap(CHAR);
  text(qoute, 750,400);
}

function qoutesRandomizer(){
  var getRandomWord= random(qoutes)
  qoute = getRandomWord
}

function canvasPressed(){
  audio.play()
}
let audio;
var qoute = "Clickity Clack";
var qoutes = 
["How fast are you? Use your mouse to click on the appearing circles and get the highest score.",

]