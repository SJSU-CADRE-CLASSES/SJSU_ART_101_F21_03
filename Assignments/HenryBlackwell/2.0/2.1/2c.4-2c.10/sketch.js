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

let inputGames = []

let randomIndex;
let animating = false;
let vgs = [];
let imageCounter = 0;
let tries = 0;
let startRandomizerButton;
let addMoreButton;
let cnv;
let nameInputs = [];

//Loads the images beforehand
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
  text(`Input games you want to play
  or click to randomize from a set list`, width / 5, height / 5)

  //Button to Randomize
  startRandomizerButton = select("#randButton");
  startRandomizerButton.mousePressed(buttonPressed);

  //Button to add more inputs
  addMoreButton = select("#addMoreButton")
  addMoreButton.mousePressed(addAnotherInput);

  //Starts with 3 inputs
  for (let i = 0; i < 1; i++) {
    nameInputs.push(createInput())
    nameInputs[nameInputs.length - 1].parent("#inputFields");
  }
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

function addAnotherInput() {
  //Each time "Add More" is pressed, it adds another space
  nameInputs.push(createInput())
  nameInputs[nameInputs.length - 1].parent("#inputFields");
}

function randomizer() {
  animating = false;
  if (nameInputs.length == 1) {
    if (tries < 15) {
      //This shows a random game
      clear();
      randomIndex = int(random(games.length));
      fill(122, 128, 144)
      textAlign(CENTER);
      textSize(32);
      text(`Today, you will play`, width / 2, height / 20);
      text('Refresh to add your own inputs', width / 2, height * 0.9)
      //Display what game to play
      text(games[randomIndex].name, width / 2, height / 10);
      //Shows image for what game to play
      image(vgs[randomIndex], width / 2, height / 2);
      // text('Click once to reroll', width / 2, height / 1.17)
      tries = tries + 1;

    } else {
      background(random(200, 255));
      textAlign(CENTER);
      fill(255, 0, 0)
      text("You've tried too many times, pick one already!", width / 2, height / 5)
    }
  } else {
    //This makes it cycle through the inputs    
    clear();
    textAlign(CENTER);
    textSize(32);
    randomIndex = int(random(inputGames.length))
    text(`Today, you will play`, width / 2, height / 20);
    text(inputGames[randomIndex], width / 2, height / 10);
  }
}

function buttonPressed() {

  //Pushing up into array
  for (let i = 0; i < nameInputs.length; i++) {
    inputGames.push(nameInputs[i].value());
  }

  //Animate for Xms
  animating = true;
  setTimeout(randomizer, 1000);
}