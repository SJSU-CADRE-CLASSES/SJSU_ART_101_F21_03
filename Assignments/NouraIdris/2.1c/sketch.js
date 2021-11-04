//cars I want to have in the future
let cars = [{
  name:"bentley",
   color:"black"
  }, {
    name:"Infiniti", 
    color: "charcoal"
  }, {
    name:"Mercedes",
     color:"blue"
  }, {
    name:"Range rover",
    color:"red"
  }, {
    name:"Acura",
    color:"dark blue"
  }];
 
  let randomIndex;
  let animating = false;
  let Cars = [] ;
  let imageCounter = 0;
  let startRandomizerButton;
  let addMoreButton;
  let cnv;
  let nameInputs = [];

  function preload(){
    
    for (let i = 0; i <=4; i++){
      Cars[i] = loadImage(`assets/Car_${i}.jpg`)
    }
  }

function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");

  background(200);
  textSize(24);
  textFont('Courier new');
  textAlign(CENTER);
  textStyle(BOLD);
  fill(0);
  imageMode(CENTER);
  frameRate(8);
  


  startRandomizerButton = select ('#randButton')
  startRandomizerButton.mousePressed(buttonPressed);

  addMoreButton = select ('#addMoreButton')
  addMoreButton.mousePressed(addAnotherInput);


  for (let i = 0; i <3; i++) {  
  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");
  }
}

function draw() {
 
if (animating== true){
  clear();
 image(Cars [imageCounter], width/2, height/2);

 if (imageCounter < Cars.length - 1){
 imageCounter++;
 console.log(imageCounter);
 } else {
   imageCounter = 0;
 }
}
}
function addAnotherInput(){
  nameInputs.push(createInput());
nameInputs[nameInputs.length - 1].parent("#inputFields");
}

function randomizer (){
  animating = false;
  if (cars[0]){
    //displacys random names and splices it out of array
    // background(random(200,255));
    clear();
    randomIndex = int(random(cars.length));
    text(`${cars[randomIndex].name} 's color is
    ${ cars[randomIndex].color}`, width/2, height - 50);
    // text(cars[randomIndex].name + "'s color is" + cars[randomIndex].color, 50,50);
    image(random(Cars) , width/2, height/2);
    cars.splice(randomIndex,1);
    } else {
      background(random(200,255));
     text ("nothing left?", 50,50);
  }
}
function buttonPressed(){   
  animating = true;
  setTimeout (randomizer,2000);
}