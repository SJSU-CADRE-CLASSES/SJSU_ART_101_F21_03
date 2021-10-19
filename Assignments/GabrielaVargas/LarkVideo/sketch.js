// which succulent will you get?
let succulents = [{
  name: "seed",
  color: "baby seed color"
}, {
  name: "leaf",
  color: "green"
}, {
  name: "root",
  color: "turquoise"
}, {
  name: "baby plant",
  color: "yellow"
}, {
  name: "succulent",
  color: "fuscha"
}, {
  name: "rotten",
  color: "brown"
}];

let randomIndex;
let animating = false;
let succpix = [];
let imageCounter = 0;
let button; 

function preload() {

  for (let i = 0; i <= 5; i++) {
    succpix[i] = loadImage(`assets/succ_${i}.JPG`);
  }
}

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);
  textFont('fantasy');


  imageMode(CENTER);
  frameRate(8);

  text("↓ ↓ click down below to randomize ↓↓", 50, 300,);
 button = createButton ("click to randomize");
 button.mousePressed (buttonPressed);

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

function randomizer() {
  animating = false;

  if (succulents[0]) {
    // this displays random name and splices it out of array
   // background(random(200, 255));
   clear();
    randomIndex = int(random(succulents.length));
    //shows the image
    image(succpix [randomIndex], width / 2, height / 2);
    //shows the text
    text("Succulent is in phase" ,
     width - 330, height - 50);
    text(succulents[randomIndex].name, width/2, height /2)

  } else {
    background(random(200, 255));
    text("nothing left!", 50, 50);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);
}