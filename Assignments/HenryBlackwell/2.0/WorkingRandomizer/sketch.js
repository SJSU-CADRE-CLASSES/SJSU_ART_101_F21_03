//command+b will make code nice

let games = [{
  name: "Destiny 2",
  thing: "Traveler"
}, {
  name: "Apex Legends",
  thing: "Legend"
}, {
  name: "Hearthstone",
  thing: "Card"
}, {
  name: "Warhammer 40k",
  thing: "Forest"
}, {
  name: "Splitgate",
  thing: "Portal"
}, {
  name: "Phasmophoria",
  thing: "Wall"
}, {
  name: "New World",
  thing: "Sword"
}, {
  name: "Deathloop",
  thing: ""
}, {
  name: "Hades",
  thing: ""
}, {
  name: "Monster Hunter: World",
  thing: ""
}, {
  name: "League of Legends",
  thing: ""
}
]

let randomIndex;
let animating = false;
let vgs = [];

function preload(){

  for (let i = 0; i <= 13; i++)
  vgs[i] = loadImage(`EditedAssets/vgs_${i}.JPG`)
}


function setup() {
  createCanvas(700, 700);
  background(128,128,128);
  textSize(32);
  angleMode(DEGREES)

  fill (200,189,230)
  textAlign(LEFT);
  text(`Click to find what game 
  you should play today`, width/5, height/5)

}

function draw() {

if (animating == true){
  fill(20,155,75)
  ellipse (random(width), random(height), random(50,100))
  }
}

function randomizer(){
  animating = false;
 if (games[0]){ 
  //This shows a random name and splies it our of array
  background(random(200, 255));
  randomIndex = int(random(games.length));
  fill(122,128,144)
  textAlign(LEFT);
  text(`Today, you will play ${games[randomIndex].name}`, width/5, height/6)
  games.splice(randomIndex, 1)

 } else{
  background(random(200, 255));
  textAlign(CENTER);
  text("Nothing left!")
 }
}

function mousePressed(){
  animating = true;
  setTimeout(randomizer, 3000);
}