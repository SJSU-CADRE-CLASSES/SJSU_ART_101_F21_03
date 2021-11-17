function preload() {
  Dot=loadFont("Dot.ttf");
}

let pen_size;
let clear_button;
let save_button;
let background_color;
let mic;

function setup() {
  cnv=createCanvas(600, 660);
  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  
  background_color = createColorPicker('#f2e8d8');
  background_color.position(300, 5);
  background_color.input(setbackground);
  
  pen_size = createSlider(1,20,3,1);
  pen_size.position(70, 12);
  pen_size.input(set_options);
  textFont(Dot);
  text(pen_size.value(), 100, 50);
  
  clear_button = createButton('Clear Canvas');
  clear_button.position(width-120, 5);
  clear_button.mousePressed(clearcanvas);
  
  save_button = createButton('Save Canvas');
  save_button.position(width-120, 30);
  save_button.mousePressed(savecanvas);
  
  background('#f2e8d8');
}


function draw() {
  fill("white");
  noStroke();
  rect(0,0,width,60);
  fill('black');
  textSize(15);
  text(pen_size.value(),50,25);
  text("Background color",262,50);
  
  colorMode(HSB);
  micvalue = mic.getLevel()*1000;
    if(micvalue>=230){
    micvalue=230
  }
  //micvalue = micvalue*100;
  console.log(micvalue);
  fill(micvalue, 100, 100, 1);
  stroke(micvalue, 100, 100, 1);
  circle(20, 20, pen_size.value()/PI);
   if (mouseIsPressed==true){
     mic.start();
     cursor(CROSS);
     line(mouseX, mouseY, pmouseX, pmouseY);
   } else{
     cursor(ARROW);
   }
}


function keyTyped(){
  if (key === 's'){
    saveCanvas('output','png');
  }
  if (key === 'c'){
    clearcanvas();
  }
}

function savecanvas(){
  saveCanvas('output', 'png');
}

function setbackground(){
  background(background_color.color());
  draw();
}

function set_options(){
  strokeWeight(pen_size.value());
  fill("black");  
  draw();
}

function clearcanvas(){
  background(background_color.color());
  draw();
}