//command+b will make code nice

let games = [{
  name: "Destiny",
  color: "Traveler"
}, {
  name: "Apex",
  color: "Legend"
}, {
  name: "Hearthstone",
  color: "Card"
}, {
  name: "Warhammer",
  color: "Forest"
}, {
  name: "Splitgate",
  color: "Portal"
}, {
  name: "Phasmo",
  color: "Wall"
}]

let randomIndex;

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(32);

  text("Click to Randomize",)

}

function draw() {

}

function mousePressed(){

 if (games[0]){ 
  //This shows a random name and splies it our of array
  background(random(200, 255));
  randomIndex = int(random(games.length));
  text(games[randomIndex].name, 50, 50)
  games.splice(randomIndex, 1)
 } else{
  background(random(200, 255));
  text("nothing left!", 50, 50)
 }

}