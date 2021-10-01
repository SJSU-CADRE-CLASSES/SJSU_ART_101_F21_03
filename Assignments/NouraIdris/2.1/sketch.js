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
  }];
 
  let randomIndex;
function setup() {
  createCanvas(600, 600);
  background(200);
 

}

function draw() {

}

function mousePressed(){
  background(random(200,255));
  randomIndex = int(random(cars.length));
  text(cars[randomIndex].name, 50,50);
  cars.splice(randomIndex,1);
}