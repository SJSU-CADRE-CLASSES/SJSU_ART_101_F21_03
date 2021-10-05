//flowers I know of

let flowers = [{name: "rose", color : "red"},{name: "lily", color: "white"},{name: "orchid", color: "purple"},{name: "carnation", color: "blue"},{name: "camelia", color : "pink"},{name: "poppy", color: "orange"},{name: "freesia", color: "yellow"}]

let randomeIndex;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200,50,130);

  randomeIndex = int(random(flowers.length));
  console.log(flowers[randomIndex].name);


}

function draw() {

  fill(50);
  ellipse(100,100,70);


}
