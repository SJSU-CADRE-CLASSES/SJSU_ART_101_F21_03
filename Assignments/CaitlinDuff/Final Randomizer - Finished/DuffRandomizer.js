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
  let button;

function preload(){

  for (let i = 0; i <= 4; i++){
    soots[i] = loadImage(`assets/soot_${i}.JPG`);
  }
}


  function setup() {
    createCanvas(600, 600);
    textSize(40);
    background('#430037');
    imageMode(CENTER);
    frameRate(7);
    textFont( 'Dancing Script');
    fill("white");
    textStyle(BOLD);

    text("Click to meet your sprite!", 125, 300);
   
   button = createButton("Summon Your Sprite");
   button.mousePressed(buttonPressed);
    button.class("randomizerButton");
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
 clear();
randomIndex = int(random(sprites.length));

image(soots [randomIndex], width/2, height/2);

 text(`${sprites[randomIndex].name} 's candy flavor is ${sprites[randomIndex].flavor} !`, 30, 80);


text(sprites[randomIndex].none , width/2, height/2);
      } else {
        background('#00546F');
        text("The sprites went home...", 150, 300);
      }
 sprites.splice(randomIndex, none);
    }

  function buttonPressed () { 
animating = true; 
setTimeout(randomizer, 2500);

  }
 