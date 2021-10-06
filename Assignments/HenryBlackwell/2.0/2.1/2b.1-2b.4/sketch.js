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

}

function draw() {
}

function mousePressed(){
  background(random(200, 255));
  randomIndex = int(random(games.length));
  text(games[randomIndex].name, 50, 50)
  // games.splice(randomIndex, 1)
}