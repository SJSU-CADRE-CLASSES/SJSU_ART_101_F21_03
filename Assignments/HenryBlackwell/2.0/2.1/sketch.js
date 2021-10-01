//command+b will make code nice

let games = [{
  name: "Destiny",
  color: "Traveler"
}, {
  name: "Apex",
  color: "Apex symbol"
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

function setup() {
  createCanvas(400, 400);
  background(200);

  console.log(random(5));
  console.log(games[random(4)]);

}

function draw() {
  background(220);


}