// dogs I have loved before
let dogs = ["dillon", "Ziggy", "mercedes", "nala", "kloot", "petunia"];

function setup() {
  createCanvas(600, 600);

  console.log("initial array is ");
  console.log(dogs);

  dogs.shift();
  console.log("array after shift");
  console.log(dogs);

  dogs.unshift("alvie");
  console.log("array after unshift");
  console.log(dogs);

}

function draw() {
  background(200);
}