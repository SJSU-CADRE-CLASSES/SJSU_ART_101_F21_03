// random place I have / havenever been to 

let planes = [{
  country: "Japan", 
  capital: "Tokyo"
}, {
  country: "HongKong", 
  capital: "Central and Western District"
}, {
  country: "Thailand", 
  captal: "Bangkok"
},{
  country: "Sweden",
  capital: "StockHolm"
},{
  country: "Norway",
  capital: "Olso"
},{
  country: "Maldives",
  capital: "Male"
},{
  country: "Newzealand",
  capital: "Wellington"
}];

let randomIndex;
let animating = false;
let flags = []; 
let imageCounter = 0;
let button;

function preload(){

    for (let i = 0; i <= 6; i++){
      flags[i] = loadImage(`assets/flag_${i}.JPG`)
    }
}

function setup() {
  createCanvas(600, 600);
  background(181, 204, 222);
  textSize(36);
  textFont(`Courier new`);
  textAlign(CENTER);
  textStyle(BOLD);
  fill(0);
  imageMode(CENTER);
  frameRate(8);
  
  text("click to randomize", width / 2, height / 2);

  button = createButton("click to randomize");
  button.mousePressed(buttonPressed);

  console.log(flags);
  

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


function randomizer(){

   animating = false;

   if (planes[0]){

    // background(random(255, 200));
    clear();
    randomIndex = int(random(planes.length));

    
    image(random(flags), width/2, height/2);
    text(planes[randomIndex].country, width / 2, height - 90);


    planes.splice(randomIndex, 1);
    } else {
      background(random(255, 255, 255));
      text("nothing left!", width / 2, height / 2);
    }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);


}