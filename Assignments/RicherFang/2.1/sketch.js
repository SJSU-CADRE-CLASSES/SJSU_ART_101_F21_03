// bouncy balls  bouncing
let balls = ["red" "blue" "green" "yellow"]
function setup() {
  createCanvas(500, 500);
  background(200);

  console.log("initial array is ")
  console.log(balls);

  dogs.shift();
  console.log("array after shift")
  console.log(balls);

  dogs.unshift("black");
  console.log("array after unshift")
  console.log(balls);
}

function draw() {

}
