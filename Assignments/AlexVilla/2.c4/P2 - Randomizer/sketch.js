// dogs I have loved before
let dogs = [{
  name:"'The galaxy far, far away is filled with words of wisdom and wit from Jedi masters...'", 
  color: "Starwars"
}, {
  name: "'Try not. Do or do not. There is no try.'", 
  color:"Starwars"
}, {
  name:"'In a dark place we find ourselves and a little more knowledge lights our way.'", 
  color: "Starwars"
}, {
  name:"'Once you start down the dark path, forever will it dominate your destiny.'",
  color:"Starwars"
}, {
  name:"'The fear of loss is a path to the dark side.'",
  color:"Starwars"
}, {
name:"'I’m a Mandalorian. Weapons are part of my religion.'",
  color:"Starwars"
}];

let randomIndex;
let animating = false;
let starwars = [];
let imageCounter = 0;
let button;
let cnv;
// let nameInputs = [];

function preload(){

  for (let i = 0; i <= 12; i++){
    starwars[i] = loadImage(`assets/starwars_${i}.jpg`);
  }
}

function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");

  background(14, 15, 28);
  textSize(12);
  textFont('Arial');
  textStyle(BOLD);
  fill(90, 94, 145);
  imageMode(CENTER);
  frameRate(8);

  button = select ('#randButton')
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");

// for (let i = 0; i < 3; i++){
//   nameInputs.push(createInput());
//   nameInputs[nameInputs.length - 1].parent("#inputFields");
// }
}

function draw() {
  
  if(animating == true){
    clear();
    image(starwars[imageCounter], width/2, height/2);

    if (imageCounter < starwars.length - 1){
    imageCounter++;
    console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
  }
}

function randomizer(){
  animating = false;
  if (dogs[0]){
    // this displays random name and splices it out of array
    // background(random(200, 255));
    clear();
    randomIndex = int(random(dogs.length));
    text(dogs[randomIndex].name + " - " + 
    dogs[randomIndex].color, 50, 50);
    image(random(starwars), width/2, height/2);
    dogs.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left!", 50, 50);
}
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);
  
}