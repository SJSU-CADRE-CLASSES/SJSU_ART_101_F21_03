// solar system
let planets = [{
  name: "mercury",
  color: "black"
} {
  name: "venus",
  color: "yellow"
} {
  name: "earth",
  color: "blue"
} {
  name: "mars",
  color: "red"
} {
  name: "jupiter",
  color: "gold"
} {
  name: "saturn",
  color: "silver"
}];

let randomIndex;

function setup() {
  createCanvas(500, 500);
  background(200);

}

function draw() {

}

function mousePressed(){
  background(random(255));
  randomIndex = int(random(planets.length));
  text(planets[randomindex].name, 50, 50);
  planets.splice(randomIndex, 1);

}
