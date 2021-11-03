//command+b will make code nice

let games = [{
  name: "Apex Legends",
  thing: "Legend"
}, {
  name: "Deathloop",
  thing: ""
}, {
  name: "Destiny 2",
  thing: "Traveler"
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
  name: "Phasmophobia",
  thing: "Wall"
}, {
  name: "New World",
  thing: "Sword"
}, {
  name: "Hades",
  thing: ""
}, {
  name: "Monster Hunter",
  thing: ""
}, {
  name: "League of Legends",
  thing: ""
}]

let randomIndex;
let animating = false;
let vgs = [];
let imageCounter = 0;
let tries = 0;
let button;
let cnv;

//Loads the iamges before they're called
function preload() {
  for (let i = 0; i <= 10; i++)
    vgs[i] = loadImage(`EditedAssets/vgs_${i}.jpg`)
}


function setup() {
  cnv = createCanvas(800, 800);
  cnv.parent("#canvasDiv");

  background(128, 128, 128);
  textSize(32);
  imageMode(CENTER);
  frameRate(10);

  //Text at start
  fill(200, 189, 230)
  textAlign(LEFT);
  text(`Click once to find what game 
you should play today`, width / 5, height / 5)


  button = select("#randButton")
  button.mousePressed(buttonPressed)
  button.position(width / 3, height)
  button.class("randomizerButton");

}

function draw() {

  //Cycling through the games
  if (animating == true) {
    clear();
    image(vgs[imageCounter], width / 2, height / 2);
    if (imageCounter < vgs.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }
}

function randomizer() {
  animating = false;
  if (tries < 5) {
    //This shows a random game
    clear();
    randomIndex = int(random(games.length));
    fill(122, 128, 144)
    textAlign(CENTER);
    textSize(32);
    text(`Today, you will play`, width / 2, height / 20);
    //Display what game to play
    text(games[randomIndex].name, width / 2, height / 10);
    //Shows image for what game to play
    image(vgs[randomIndex], width / 2, height / 2);
    text('Click once to reroll', width / 2, height / 1.17)
    tries = tries + 1;

  } else {
    background(random(200, 255));
    textAlign(CENTER);
    fill(255, 0, 0)
    text("You've tried too many times, pick one already!", width / 2, height / 5)
  }
}

function buttonPressed() {
  //Animate for Xms
  animating = true;
  setTimeout(randomizer, 1000);
}