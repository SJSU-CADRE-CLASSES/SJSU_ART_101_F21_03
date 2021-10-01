//cars I want to have in the future
let cars = ["bentley", "Infiniti", "Mercedes", "Range-rover", "Acura"];

function setup() {
  createCanvas(600, 600);
  background(200);
 
  console.log("initial array is ")
  console.log(cars);

  cars.splice(2,1);
  console.log("array after splice")
  console.log(cars);

 

}

function draw() {

}