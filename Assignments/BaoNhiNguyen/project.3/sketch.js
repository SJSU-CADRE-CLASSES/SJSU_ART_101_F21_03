let array = [];
let backgroundColor = (204, 204, 255);
let noiseOffset = 0.0;
let strokeAmount = 5;
let witch;
let char;

var song;
var slider;

var resetButton = document.getElementbyId('resetButton');
resetButton.onclick = reloadPage;

function preload() {
  soundFormats('mp3');
  // song = loadSound('assets/softsongsnow.mp3');
  witch = loadImage('assets/cafe girl.png');
  char = loadImage('assets/cafe girl (2).png');
  
  song = loadSound('assets/girlsong.mp3');
  song.setVolume(0.2);

}

function setup() {
  createCanvas(1000,1000);
  background(204, 204, 255, 5);
  // song = loadSound("softsongsnow.mp3");

  slider = createSlider(0, 1, 0.5, 0.01);
  // song.setVolume(0.2);
  song.loop();
  

  // background(240, 255, 245);
  // background(backgroundColor);

  // drawGrid();
  noFill();
  image(witch,-20,700,300,300);
  image(char,60,-50,1110,1110);
  //makes line of the drawing tool thicker

}

function loaded() {
song.play();

}

function draw() {
  background(204, 204, 255, 1);
  strokeWeight(strokeAmount);
  song.setVolume(slider.value());

  // line(mouseX, mouseY, pmouseX, pmouseY);
  noiseOffset += 0.05;
  strokeAmount = noise(noiseOffset) * 10;

  stroke(map(mouseX, 0, 600, 0, 255, true), 30, 180, 244, 12);

  // image(witch,630,650,1000,1000);



  if (mouseIsPressed) {

    fill(255, 249, 161);
    line(mouseX, mouseY, pmouseX, pmouseY);

  }

}

//saving the image
function keyTyped() {

  if (key === 's') {
    saveCanvas('fileName', 'png');

  } else if (key === 'c') {
    // clears canvas and somewhat resets it   
    clear();
    image(witch,-20,700,300,300);
    image(char,60,-50,1110,1110);
    
    // drawGrid();
    background(22, 204, 255, 4);
    // setup();


  } else if (key === 'r') {
    // reset window

    reloadPage();

  }
  

  return false;
}

function mousePressed() {
  array = [];
  backgroundColor = 255;

  array.push([mouseX, mouseY]);

  // setup();
}

//adding stylized grid
function drawGrid() {
  numCells = 20;
  fillColor = 255;
  // strokeWeight(0);

  for (let i = 0; i <= width; i += width / numCells) {
    for (let j = 0; j <= height; j += height / numCells) {
      if (fill === 255) {
        fillColor = 200;
      } else {
        fillColor = 255;
      }
      fill(fillColor);
      rect(i, j, 30, width / numCells, height / numCells);

    }
  }

  strokeWeight(5);
}

function reloadPage() {
  window.location.reload();
}