// types of stardew characters
let swdw = [{
  name: "shane", 
  color: "blue"
}, {
  name: "abigail", 
  color: "purple"
}, {
  name: "sebastian", 
  color: "black"
}, {
  name: "harvey", 
  color: "green"
}, {
  name: "hailey", 
  color: "yellow"
}, {
  name: "krobus", 
  color: "chartreuse"
}, 

];

let randomIndex; 

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

  text("click to randomize", 50, 50);
}

function draw() {

}


//this displays random names and splices it out 
function mousePressed() {
if (swdw[0]) {
  background(random(255));
  randomIndex = int(random(swdw.length));
  text(swdw[randomIndex].name, 50, 50);
  swdw.splice(randomIndex, 1);
  } else {
    text("nothing left!", 50, 50);
  }
  
}