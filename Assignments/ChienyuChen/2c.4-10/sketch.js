let cats = [];
let randomIndex;
let animating = false;
let trolls = [];
let imageCounter = 1;
let startRandomizerButton;
let addMoreButton;
let cnv;
let nameInputs= [];
let firstTime = true;





function preload() {
  for (let i = 1; i <= 3 ; i++){
    trolls[i] = loadImage(`assets/troll_${i}.JPG`)
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

startRandomizerButton = select('#randButton');
startRandomizerButton.mousePressed(buttonPressed);

addMoreButton = select('#addMoreButton');
addMoreButton.mousePressed(addAnotherInput);

for (let i = 0; i < 3; i++) {
  nameInputs.push(createInput());
  nameInputs[nameInputs.length -1].parent("#inputFields");
}
}




function draw() {
  if( animating == true){
    clear();
    image(trolls[imageCounter], width/2, height/2);

    if (imageCounter   < trolls.length -1) {
      imageCounter++;
      console.log(imageCounter);
    }
    else {
      imageCounter = 1;
    }
  }
}




function addAnotherInput(){
  nameInputs.push(createInput());
  nameInputs[nameInputs.length -1].parent("#inputFields");
}





function randomizer(){
  animating = false
  if (cats[1]){
  //  background(random(200, 255));
  clear();
    randomIndex = int(random(cats.length));
    text(cats[randomIndex], width/2 ,  height -55);
    cats.splice(randomIndex, 1);
  }
  else {
    background(random(200, 255));
    text("click to randomize again!", 50, 50);
  }
}




function buttonPressed() {

if (firstTime == true){
  for (let i = 0; i < nameInputs.length; i++){
    cats.push(nameInputs[i].value());
  }
  firstTime = false;
}
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
