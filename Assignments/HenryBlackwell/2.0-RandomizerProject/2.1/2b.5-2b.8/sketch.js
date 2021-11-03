//command+b will make code nice

let games = [{
  name: "Destiny",
  thing: "Traveler"
}, {
  name: "Apex",
  thing: "Legend"
}, {
  name: "Hearthstone",
  thing: "Card"
}, {
  name: "Warhammer",
  thing: "Forest"
}, {
  name: "Splitgate",
  thing: "Portal"
}, {
  name: "Phasmo",
  thing: "Wall"
}]

let randomIndex;
let animating = false;
let games = [];

function preload(){

  for (let i = 0; i <= 13; i++)

}

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(32);

  text("Click to Randomize", 50, 50)

}

function draw() {

if (animating == true){
  ellipse (random(width), random(height), random(50,100))
}

}

function randomizer(){
  animating = false;
 if (games[0]){ 
  //This shows a random name and splies it our of array
  background(random(200, 255));
  randomIndex = int(random(games.length));
  text(`${games[randomIndex].name}'s thing is 
  ${games[randomIndex].thing}`, 50, 50)
  games.splice(randomIndex, 1)

 } else{
  background(random(200, 255));
  text("nothing left!", 50, 50)
 }
}

function mousePressed(){
  animating = true;
  setTimeout(randomizer, 2000);
}