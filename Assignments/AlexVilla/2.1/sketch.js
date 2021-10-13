// dogs I have loved before
let dogs = ["dillon", "Ziggy", "mercedes", "nala", "kloot", "petunia"];

function setup() {
  createCanvas(600, 600);

  console.log("initial array is ");
  console.log(dogs);

  dogs.splice();
  console.log("array after splice");
  console.log(dogs);

}

function draw() {
  background(200);
}