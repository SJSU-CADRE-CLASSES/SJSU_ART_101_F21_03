// 2c Sprite Practice
let sprites = [{
    name: "pink", 
    flavor:"strawberry"
  }, {
    name: "yellow", 
    flavor: "lemon"
  }, {
    name: "teal",
    flavor: "mint"
  }, {
    name: "blue", 
    flavor: "cotton candy"
  }, {
    name: "purple", 
    flavor: "grape"
  }];
  
  let randomIndex;
  let animating = false;
  let soots = [];
  let imageCounter = 0;

function preload(){

  for (let i = 0; i <= 4; i++){
    soots[i] = loadImage(`assets/soot_${i}.JPG`)
  }
}


  function setup() {
    createCanvas(600, 600);
    textSize(32);
    background('#FFDFF2');
    imageMode(CENTER);
    frameRate(5);

    text("Click to meet your sprite!", 130, 300);
    console.log(soots);
  }
  
  function draw() {
    if (animating == true){
  image(soots[imageCounter], width/2, height/2);
 
  if (imageCounter < soots.length - 1){
  imageCounter++;
  console.log(imageCounter);
  } else{
    imageCounter = 0;
  }
    }
  }
  
  
  function mousePressed () { 
  animating = true;
    if (sprites[0]){
    background(random (200, 255));
    randomIndex = int(random(sprites.length));
    
    image(random(soots), width/2, height/2);
    text(sprites[randomIndex].name, 100, 100);
    sprites.splice(randomIndex, 1); 
  } else {
    background('#BDC8FF');
    text("The sprites went home...", 140, 300)
  }
  }