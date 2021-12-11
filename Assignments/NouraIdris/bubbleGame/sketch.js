
function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.diameter = 50;
  this.speed = 3;
  this.colorRed = random(0, 255);
  this.colorGreen = random(0, 255);
  this.colorBlue = random(0, 255);
  this.display = function() {
    return ellipse(this.x,this.y,this.diameter,this.diameter)
  }
}

var bubbles = [];
var window_width = 1400;
var window_height = 800;
var counter = 0;
var time = 0;
var bubble_counter = 0;


function setup() {
  createCanvas(window_width , window_height);
  textSize(32);
  generate_bubbles();
}

function generate_bubbles(){
  bubble_counter = 100;

  for(let i = 0; i<bubble_counter; i++){
    bubbles.push(new Bubble(random(0, window_width-50), random(0, window_height-50)));
  }
}


function draw() {
  background(0);
  // if (counter > 30){
  //   bubbles.push(new Bubble(random(0, window_width-50), random(0, window_height-50)));
  //   counter = 0;
  // }
  // counter++;

  bubbles.forEach(bubble =>{
    fill(bubble.colorRed, bubble.colorGreen, bubble.colorBlue);
    bubble.display();
  });
  time_print = "Timer: " + time;
  textSize(32);
  text(time_print , 10, 30);
  fill(0, 102, 153);

  if(bubbles.length < 1){
    end = "Your Time: " + time;
    textSize(100);
    text(end , window_width/2, window_height/2);
    fill(0, 102, 153);
    noLoop();
  }
  time++;
}

function mousePressed(){
 for(let i = bubbles.length - 1; i >= 0; i--){
   let d = dist(mouseX, mouseY, bubbles[i].x, bubbles[i].y);
   if (d < 25){
    bubbles.splice(i, 1);
    clear();
   }
   
 }
}


