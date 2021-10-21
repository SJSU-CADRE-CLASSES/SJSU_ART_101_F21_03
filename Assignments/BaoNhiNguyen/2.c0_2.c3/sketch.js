/// what is my meals for today?

let meals = [{
  name: "cereal",
  color: "pink"
}, {
  name: "cheap steak",
  color: "brown"
}, {
  name: "chicken wings",
  color: "browngreen"
}, {
  name: "cupcake",
  color: "red"
}, {
  name: "dim sum",
  color: "lightbrown"
}, {
  name: "fancy steak",
  color: "redbrn"
}, {
  name: "ice cream",
  color: "tan"
}, {
  name: "instant noodles",
  color: "orange"
}, {
  name: "katsu",
  color: "currybrown"
}, {
  name: "Mc Donalds",
  color: "redyellow"
}, {
  name: "pancakes",
  color: "berrybrown"
}, {
  name: "ramen",
  color: "lightyelow"
}, {
  name: "salad",
  color: "green"
}, {
  name: "sandwich",
  color: "tangreen"
}, {
  name: "poke",
  color: "lightorange"
}, {
  name: "sushi",
  color: "orange"
}, ];


///// set up functions
var hye = Math.floor(Math.random() * 360);
var pastel = 'hsl(' + hye + ', 100%, 88%)';

let randomIndex;
let animating = false;
let food = [];
let imageCounter = 0;
let = cnv;

/// thinking man image
let hmm;
/// full from meals man image
let full;
///empty plate
let plate;

let hammock;

let button;

//////functions

function preload() {

  for (let i = 0; i <= 15; i++) {
    food[i] = loadImage(`foodassets/food_${i}.jpg`);
    hmm = loadImage('person/hmm.png');
    full = loadImage('person/full.png');
    plate = loadImage('assets/emptyplate.jpeg');
    hammock = loadImage('assets/hammock.jpg');
  }
}



function setup() {
  cnv = createCanvas(1000, 1000);
  cnv.parent("#canvasDiv");
  textSize(32);

  imageMode(CENTER);
  frameRate(4);

  background(pastel);

  push();
  image(plate, 400, 500, 1280, 854)
  // imageMode();
  pop();
  image(hmm, 580, 550, 1000, 1000);

  text("I don't know what to eat for today...", 50, 50);

  // button = createButton("Meal options here!");

  button = select('#randButton');
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");
  // button.size(150, 50)
  // button.position(480,900); 

}

function draw() {


  if (animating == true) {
    clear();
    image(food[imageCounter], width / 2, height / 2);
    if (imageCounter < food.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }
}


function randomizer() {
  animating = false;

  if (meals[0]) {

    clear();
    randomIndex = int(random(meals.length));
    image(random(food), width / 2, height / 2);

    textSize(33)
    text(`${meals[randomIndex].name} looks a little ${meals[randomIndex].color}`, 50, 100);

    text(`${meals[randomIndex].name} for todays meal?`, 50, 150);

    meals.splice(randomIndex, 1);
  } else {
    background(pastel);
    image(hammock, 570, 500, 1344, 739);
    image(full, 630, 650, 1000, 1000);
    text("Tummy's full!", 100, 100);
    text("Time for a nap.", 300, 100);


  }

}

function buttonPressed() {

  animating = true;
  setTimeout(randomizer, 2000);


}