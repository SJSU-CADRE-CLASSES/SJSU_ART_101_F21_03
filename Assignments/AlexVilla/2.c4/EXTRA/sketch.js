// dogs I have loved before
let dogs = [{
  name:"dillon", 
  color: "dog treat color"
}, {
  name: "Ziggy", 
  color:"chartrese"
}, {
  name:"mercedes", 
  color: "poop"
}, {
  name:"petunia",
  color:"rose gold"
}, {
  name:"kloot",
  color:"coffe grind brown"
}, {
name:"nala",
color:"stardust"
}];

let randomIndex;
let animating = false;
let starwars = [];
let imageCounter = 0;
let button;
let cnv;

function preload(){

  for (let i = 0; i <= 12; i++){
    starwars[i] = loadImage(`assets/starwars_${i}.jpg`);
  }

}

function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");

  background(200);
  textSize(24);
  textFont('Arial');
  textStyle(BOLD);
  fill(200);
  imageMode(CENTER);
  frameRate(8);

  text("click to randomize", width/2, height/2);
  // console.log(starwars);

  // button = createButton("click to randomize");
  button = select ('#randButton')
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");
  
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
    text(dogs[randomIndex].name + "'s favorite color is " + 
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