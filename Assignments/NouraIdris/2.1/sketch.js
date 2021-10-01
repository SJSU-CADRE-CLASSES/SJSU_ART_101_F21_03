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
function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);
  text("click to randomize",50,50);
 

}

function draw() {

}

function mousePressed(){
  if (cars[0]){
  //displacys random names and splices it out of array
  background(random(200,255));
  randomIndex = int(random(cars.length));
  text(cars[randomIndex].name, 50,50);
  cars.splice(randomIndex,1);
  } else {
    background(random(200,255));
   text ("nothing left?", 50,50);
}
}