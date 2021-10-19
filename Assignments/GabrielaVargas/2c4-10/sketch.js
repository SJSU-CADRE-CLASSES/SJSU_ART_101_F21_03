// which succulent will you get?
let succulents = [];

let randomIndex;
let animating = false;
let succpix = [];
let imageCounter = 0;
let startRandomizerButton;
let addMoreButton;
let cnv;
let nameInputs = [];
let newInputButton;
let firstTime = true; 

function preload() {

  for (let i = 0; i <= 5; i++) {
    succpix[i] = loadImage(`assets/succ_${i}.JPG`);
  }
}

function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");
  background(200);
  textSize(32);
  imageMode(CENTER);
  frameRate(8);

  //text("click to randomize", 130, 300);
  // button = createButton("click to randomize");
  startRandomizerButton = select("#randButton")
  startRandomizerButton.mousePressed(buttonPressed);

  addMoreButton = select('#addMoreButton')
  addMoreButton.mousePressed(addAnotherInput);
  

for (let i = 0; i < 3; i++) {
  nameInputs.push(createInput()); 
  nameInputs[nameInputs.length - 
    1].parent("#inputFields");
}
}

function draw() {

  if (animating == true) {
    clear();
    image(succpix[imageCounter], width / 2, height / 2);
    if (imageCounter < succpix.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }

  }
}

function addAnotherInput(){
  nameInputs.push(createInput()); 
  nameInputs[nameInputs.length - 
    1].parent("#inputFields");
}

function randomizer() {
  animating = false;

  if (succulents[0]) {
    // this displays random name and splices it out of array
    // background(random(200, 255));
    clear();
    randomIndex = int(random(succulents.length));
    image(random(succpix), width / 2, height / 2);
    text(succulents[randomIndex], width - 450, height - 200);
    succulents.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left!", 50, 50);
  }
} 
//
function buttonPressed() {

if (firstTime == true){

  for (let i = 0; i < nameInputs.length; i++){
    succulents.push(nameInputs[i].value()); 
  }
  firstTime == false; 
}
    animating = true;
    setTimeout(randomizer, 2000);
  
}

  
