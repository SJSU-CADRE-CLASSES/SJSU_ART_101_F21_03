//random fishes
let fishs = [{
  name: "a mermaid",
  result: "The mermaid winked at you, but you thought of your wife at home, so you had to send the mermaid back to the sea",
}, {
  name: "a shark",
  result: "Seeing the shark hit the bait, you let go of your hand in fright, so you lost your fishing rod and need to pay 100 to get a new one",
}, {
  name: "a tuna",
  result: "You caught a tuna and sold it at the market",
}, {
  name: "a salmon",
  result: "You caught a salmon and sold it at the market",
}, {
  name: "a bass",
  result: "You caught a bass and sold it at the market",
}, {
  name: "a codfish",
  result: "You caught a codfish and sold it at the market",
}, {
  name: "a grouper",
  result: "You caught a grouper and sold it at the market",
}, {
  name: "nothing",
  result: "You didn't catch anything, but the sea view is pretty good",
}];

let randomIndex;
let animating = false;
let pics = [];
let imageCounter = 0;
let startRandomizerButton;
let addMoreButton;
let cnv;
let nameInputs= [];
let firstTime = true;

function preload() {
  for (let i = 0; i <= 7; i++) {
    pics[i] = loadImage(`assets/pic_${i}.JPG`)
  }

}

function setup() {
  cnv = createCanvas(900, 900);
  cnv.parent("#canvasDiv")

  background(220);
  textSize(23);
  //textFont('Courier new');
  textAlign(CENTER);
  textStyle(BOLD);
  fill(0);
  imageMode(CENTER);
  frameRate(8);

  text("You are a fisherman who makes a living by fishing, ", width / 2, height / 4);
  text("but recently your wife thinks that you don't make enough money.", width / 2, height / 3);
  text("Today your wife asks you to make 500 dollars.", width / 2, height / 2);

  startRandomizerButton = select('#randButton');
  startRandomizerButton.mousePressed(buttonPressed);

  addMoreButton = select('#addMoreButton');
  addMoreButton.mousePressed(addAnotherInput);

  // button = createButton("click to randomize")
  // button.mousePressed(buttonPressed);

  for (let i = 0; i < 7; i++) {
  nameInputs.push(createInput());
  nameInputs[nameInputs.length].parent("#inputFields");
}
}

function draw() {

  if (animating == true) {
    clear();
    image(pics[imageCounter], width / 4, height / 4);
    if (imageCounter < pics.length) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }
}

function addAnotherInput(){
  nameInputs.push(createInput());
  nameInputs[nameInputs.length -1].parent("#inputFields");
}

function randomizer() {
  animating = false;
  if (fishs[0]) {
    //background(200, 255);
    clear();
    randomIndex = int(random(fishs.length));
    image(random(pics), width / 2, height / 2);
    text(`It is a ${fishs[randomIndex].name}, ${fishs[randomIndex].result}`, width / 2, height - 100);
    fishs.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left! Refresh the page", 50, 50);
  }
}

function buttonPressed() {
  if (firstTime){
    for (let i = 0; i < nameInputs.length; i++){

      cats.push(nameInputs[i].value());
    }
    firstTime = false;
  }
    animating = true;
    setTimeout(randomizer, 2000);
}
