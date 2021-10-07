// How Does This Shit Work?
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
} {
  name: "uranus",
  color: "green"
}];

let randomIndex;
let animating = false;

function setup() {
  createCanvas(500, 500);
  background(200);

  text("Click to Blast Off into Space", 50, 50);

  setTimeout(changeBackground, 1000);
}

function draw() {

  if (animating == true) {
    ellipse(random(width), random(height), random(50, 200));

  }
}

function randomizer() {
  animating = false;

  if (planets[0] {

      background(random(200, 255));
      randomIndex = int(random(planets.length));
      text(`${planets[randomIndex.name}  's color is
      ${planets[randomIndex].color}`, 50, 50);
      planets.splice(randomIndex, 1);
      // text(planets[randomIndex].name + "'s color is" + planets[randomIndex].color, 50, 50);
      // planets.splice(randomIndex, 1);
    } else {
      background(random(200, 255));
      text("Turn Back, You're Leaving Our Solar System", 50, 50);
    }
  }

  function mousePressed() {
    animating = true;
    setTimeout(randomizer, 2000);


  }
