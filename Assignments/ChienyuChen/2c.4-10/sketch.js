let cats = [{
  name: "Chartreux",
  color: "blue"
}, {
  name: "Bombay",
  color: "Black"
}, {
  name: "Siamese",
  color: "cream and chocolate"
}
];


let randomIndex;
let animating = false;
let trolls = [];
let imageCounter = 0
let button;
let cnv;
let nameInput;




function preload() {
  for (let i = 1; i<=3 ; i++){
    trolls[i] = loadImage(`2c.4-10/assets/troll_${i}.JPG`)
  }
}




function setup() {
  //createCanvas(windowWidth, windowHeight);
cnv = createCanvas(600,600);
cnv.parent("#canvasDiv")

background(20,40,200);
textSize(32);
//textFont('Courier new');
textAlign(CENTER);
textStyle(BOLD);
fill(255);
imageMode(CENTER);
frameRate(8);

text("click to randomize", width/2, height/2);

button = select('#randButton');
button.mousePressed(buttonPressed);
button.class("randomizerButton");

//nameInputs.push(createInput());
nameInput = createInput();
nameInput.parent("#inputFields");
}




function draw() {
  if( animating == true){
    clear();
    image(trolls[imageCounter], width/2, height/2);

    if (imageCounter < trolls.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    }
    else {
      imageCounter = 0;
    }
  }
}




function randomizer(){
  animating = false
  if (cats[0]){
  //  background(random(200, 255));
  clear();
    randomIndex = int(random(cats.length));
    text(cats[randomIndex].name, width/2,height - 100);
    cats.splice(randomIndex, 1);
  }
  else {
    background(random(200, 255));
    text("click to randomize again!", 50, 50);
  }
}




function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);
}




//function changeBackground(){
//  if (counter <= 2) {
//    counter++;
//    console.log(counter)
//    background(random(255), random(255), random(255));
//  }
//  }

//}s
