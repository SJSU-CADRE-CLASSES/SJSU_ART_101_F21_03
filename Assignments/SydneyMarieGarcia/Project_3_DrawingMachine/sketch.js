let pen_size;
let clear_button;
let save_button;
let background_color;
let mic;
let checkbox;
let checkbox_value;

function preload() {
  Dot=loadFont("Dot.ttf");
}

function setup() {
  cnv=createCanvas(600, 660);
  cnv.parent("#scream");
  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  
  background_color = createColorPicker('#f2e8d8');
  background_color.position(250, 157);
  background_color.input(setbackground);
  
  manual_color = createColorPicker('#ff0000');
  manual_color.position(330, 157);
  //manual_color.input(setManualColor);
  
  checkbox = createCheckbox('Manual Mode', false);
  checkbox.position(330, 185);
  checkbox.changed(checkbox_event);
  
  pen_size = createSlider(1,20,3,1);
  pen_size.position(90, 165);
  pen_size.input(set_options);
  textFont(Dot);
  text(pen_size.value(), 100, 30);
  
  clear_button = createButton('Clear Canvas');
  clear_button.position(width-120, 150);
  clear_button.mousePressed(clearcanvas);
  save_button = createButton('Save Canvas');
  save_button.position(width-120, 180);
  save_button.mousePressed(savecanvas);
  
  background('#f2e8d8');
}

function draw() {
  fill("white");
  noStroke();
  rect(0,0,width,60);
  fill('#73644e');
  textSize(15);
  text(pen_size.value(),50,25);
  text("BG",245,50);
  
  colorMode(HSB);
  micvalue = mic.getLevel()*1000;
  
  if(micvalue>=230){
    micvalue=230
  }
  
  console.log(micvalue);
  
  if (checkbox_value == 1){
    fill(manual_color.color())
    stroke(manual_color.color())
  }
  else {
    fill(micvalue, 100, 100, 1);
    stroke(micvalue, 100, 100, 1);
  }

  circle(20, 20, pen_size.value()/PI);
  
  
   if (mouseIsPressed==true){
     mic.start();
     cursor(CROSS);
     line(mouseX, mouseY, pmouseX, pmouseY);
   } else{
     cursor(ARROW);
   }
}


function checkbox_event() {
  if (this.checked()) {
    console.log('Check');
    checkbox_value = 1;
  } else {
    console.log('Uncheck');
    checkbox_value = 0;
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