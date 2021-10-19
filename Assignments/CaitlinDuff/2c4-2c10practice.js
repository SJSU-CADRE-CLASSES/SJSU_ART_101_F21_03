// 2c Sprite Practice
let sprites = [{
    name: "Pink", 
    flavor:"strawberry"
  }, {
    name: "Yellow", 
    flavor: "lemon"
  }, {
    name: "Teal",
    flavor: "mint"
  }, {
    name: "Blue", 
    flavor: "cotton candy"
  }, {
    name: "Purple", 
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
    background('#430037');
    imageMode(CENTER);
    frameRate(5);
    textFont( 'Dancing Script');
    fill("white");
    textStyle(BOLD);

    text("Click to meet your sprite!", 150, 300);
   
    createButton("Summon Your Sprite");

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

function randomizer(){
 animating = false;
  if (sprites[0]){
 background(random (200, 255));
randomIndex = int(random(sprites.length));
image(random(soots), width/2, height/2);
 text(`${sprites[randomIndex].name} 's candy flavor is ${sprites[randomIndex].flavor} !`, 80, 80);
sprites.splice(randomIndex, 1); 
      } else {
        background('#00546F');
        text("The sprites went home...", 150, 300)
      }
    }

  function mousePressed () { 
animating = true; 
setTimeout(randomizer, 2000);

  }