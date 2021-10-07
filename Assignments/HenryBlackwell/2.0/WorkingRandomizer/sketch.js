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
}]

let randomIndex;
let animating = false;
let vgs = [];
let imageCounter = 0;

function preload() {

  for (let i = 0; i <= 10; i++)
    vgs[i] = loadImage(`EditedAssets/vgs_${i}.jpg`)
}


function setup() {
  createCanvas(700, 700);
  background(128, 128, 128);
  textSize(32);
  imageMode(CENTER);
  frameRate(10);

  fill(200, 189, 230)
  textAlign(LEFT);
  text(`Click to find what game 
  you should play today`, width / 5, height / 5)

  console.log(vgs);

}

function draw() {

  if (animating == true) {
    // fill(20,155,75)
    // ellipse (random(width), random(height), random(50,100))
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
  if (games[0]) {
    //This shows a random name and splies it our of array
    // background(random(200, 255));
    clear();
    randomIndex = int(random(games.length));
    fill(122, 128, 144)
    textAlign(LEFT);
    
    text(`Today, you will play ${games[randomIndex].name}`, width / 5, height / 6);
    image(random[vgs], width / 2, height / 2);
    games.splice(randomIndex, 1)
    
  } else {
    background(random(200, 255));
    textAlign(CENTER);
    text("You've run out of games to play!")
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 3000);
}