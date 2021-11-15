function preload(){
  audio = loadSound("sound/lofi.mp3")
}



function setup() {
  textAlign(CENTER);
  textWrap(CHAR);
  fill(0);
  let cnv = createCanvas(displayWidth, displayHeight);
  var button = createButton('click me');
  textSize (60)
  button.position(715, 300);
  button.mousePressed(qoutesRandomizer);
  audio.setLoop(true)
  cnv.mousePressed(canvasPressed)
  
}

function draw() {
  background(245, 199, 191);
  fill(255)
  textAlign (CENTER)
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
var qoute = "Welcome \n Click the button to display today's inspirational quote";
var qoutes = 
["Keep people in your life\n who truly love you, motivate you,\n encourage you, enhance you and\n make you happy. \n -Unknown",
  "No storm can last forever \n - Unknown",
  "You can't go back and change the beginning \n but you can start where you are \n and change the ending.\n - CS. Lewis",
  "You must want to spend the rest of your life \n with yourself first.\n - Rupi Kaur",
  "Believe in your infinite potential. Your only \n limitations are those you set upon yourself. \n - Roy Bennett",
  "The secret to getting ahead is getting started \n - Emma",
  "Consistency is more important than perfection \n - Emma",
  "Intelligence is the ability to adapt to change \n - Stephen Hawking",
  "Talk a little nicer to yourself today - \n Unknown",
  "When you can’t control what’s happening, challenge yourself \n to control the way you are responding to what’s happening. \n That’s where the power is. \n - Unknown",
  "Progress not perfection \n - Unknown",
  "The expert in anything was once a beginner \n - Unknown",
  "The struggles along the way are only meant to shape \n you for your purpose \n - Chadwick Boseman",
  "The art of knowing is knowing what to ignore \n -  Rumi Kaur",

]