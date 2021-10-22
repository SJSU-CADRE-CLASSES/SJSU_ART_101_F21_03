// random place I have / havenever been to 

let planes = [];
// {
//   country: "Japan", 
//   capital: "Tokyo"
// }, {
//   country: "HongKong", 
//   capital: "Central and Western District"
// }, {
//   country: "Thailand", 
//   captal: "Bangkok"
// },{
//   country: "Sweden",
//   capital: "StockHolm"
// },{
//   country: "Norway",
//   capital: "Olso"
// },{
//   country: "Maldives",
//   capital: "Male"
// },{
//   country: "Newzealand",
//   capital: "Wellington"
// }];

let randomIndex;
let animating = false;
let flags = []; 
let imageCounter = 0;
let startRandomizerButton;
let addMoreButton;
let cnv;
let nameInputs = [];
let firstTime = true;


function preload(){
    for (let i = 0; i <= 6; i++){
      flags[i] = loadImage(`assets/flag_${i}.JPG`)
    }
}

function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");

  background(181, 204, 222);
  textSize(36);
  textFont(`Courier new`);
  textAlign(CENTER);
  textStyle(BOLD);
  fill(0);
  imageMode(CENTER);
  frameRate(8);
  
  text("click to randomize", width / 2, height / 2);

  // button = createButton("click to randomize");
  startRandomizerButton = select("#randButton");
  startRandomizerButton.mousePressed(buttonPressed);

  addMoreButton = select("#addMoreButton")
  addMoreButton.mousePressed(addAnotherInput);


for(let i = 0; i <3; i++){
  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");
}  

}

function draw() {

    if(animating == true){
      clear();
      image(flags[imageCounter], width/2, height/2);
      if (imageCounter < flags.length -1){
      imageCounter++;
      console.log(imageCounter);
      } else{
        imageCounter = 0;
      }
}
}

function addAnotherInput(){
  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");
}


function randomizer(){

   animating = false;

   if (planes[0]){

    // background(random(255, 200));
    clear();
    randomIndex = int(random(planes.length));

    
    image(random(flags), width/2, height/2);
    text(planes[randomIndex], width / 2, height - 90);


    planes.splice(randomIndex, 1);
    } else {
      background(random(255, 255, 255));
      text("nothing left!", width / 2, height / 2);
    }
}

function buttonPressed() {

  if(firstTime){
      for (let i = 0; i < nameInputs.length; i++){
      planes.push(nameInputs[i].value());
  }
  firstTime = false;
}

  animating = true;
  setTimeout(randomizer, 2000);


}