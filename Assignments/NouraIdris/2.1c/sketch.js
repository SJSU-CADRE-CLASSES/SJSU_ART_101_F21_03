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
  let cars_path = [];

  function preload(){

    for (let i = 0; i <= 5; i++){
      cars_path[i] = loadImage('assets/origCars/car_${i}.jpg')
      
    }
  }
  

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);
  
  text("click to randomize",50,50);
 console.log(cars_path);

}

function draw() {
if (animating== true){
  ellipse(random(width), random(height),random(50,200));
}
}

function randomizer (){
  animating = false;
  if (cars[0]){
    //displacys random names and splices it out of array
    background(random(200,255));
    randomIndex = int(random(cars.length));
    text(`${cars[randomIndex].name} 's color is
    ${ cars[randomIndex].color}`, 50,50);
    // text(cars[randomIndex].name + "'s color is" + cars[randomIndex].color, 50,50);
    cars.splice(randomIndex,1);
    } else {
      background(random(200,255));
     text ("nothing left?", 50,50);
  }
}
function mousePressed(){   
  animating = true;
  setTimeout (randomizer,2000);
}