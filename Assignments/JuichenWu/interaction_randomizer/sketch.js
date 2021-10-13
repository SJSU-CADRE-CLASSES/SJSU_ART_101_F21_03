// dog I have loved be

let dogs = ["dog 1", "dog 2"];

let randomIndex;
let animating = false;
let trolls = []
let imageCounter = 0;
let startRandomizerButton;
let addMoreButton
let cnv;
let nameInputs =[];
let firstTime =true;


function preload() {

  for (let i = 0; i <= 15; i++) {
    trolls[i] = loadImage(`assets/troll_${i}.jpg`)

  }

}


function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");
  background(255, 205, 210);
  textSize(40);
  textFont(`Courier new`)
  // textAlign(CENTER)
  textStyle(BOLD)
  fill(255)
  imageMode(CENTER);
  frameRate(8);


  // text("click to randomize", 50, 50);
  // button = createButton("click to randomize");
  startRandomizerButton = select(`#randButton`)
  startRandomizerButton.mousePressed(buttonPressed);


  addMoreButton = select(`#addMoreButton`)
  addMoreButton.mousePressed(addAnotherInput);

  for (let i =0; i < 3; i++) {
  nameInputs.push(createInput());
  nameInputs[nameInputs. length -1].parent("#inputFields");

  }
}
function draw() {

  if (animating == true) {
    clear();
    image(trolls[imageCounter], width/2, height/2);
    if (imageCounter < trolls.length - 1) {
    imageCounter++;
    console.log(imageCounter);
    } else { imageCounter = 0;

    }

  }
}
function addAnotherInput(){
  nameInputs.push(createInput());
  nameInputs[nameInputs. length -1].parent("#inputFields");

}

function randomizer() {
  animating = false;
  if (dogs[0]) {
    //this displays random name and splices it out of array
    // background(random(200, 255));
    clear();
    randomIndex = int(random(dogs.length));
    text(dogs[randomIndex], width/40, height -5);
    image(random(trolls), width/2, height/2);
    dogs.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left!", 200, 350)
  }
}

function buttonPressed() {
  if (firstTime){
  for(let i = 0; i < nameInputs. length; i++){
    dogs.push(nameInputs[i].value());
  }
   firstTime = false;

 }

  animating = true;
  setTimeout(randomizer, 2000);

}
