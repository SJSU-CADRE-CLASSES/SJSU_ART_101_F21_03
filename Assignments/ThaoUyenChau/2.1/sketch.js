//average steps
let steps = [{
  step: "1032",
  day: "Wednesday"
}, {
  step: "1710",
  day: "Thursday"
}, {
  step: "768",
  day: "Friday"
}, {
  step: "1953",
  day: "Saturday"
}, {
  step: "753",
  day: "Sunday"
}, {
  step: "51",
  day: "Monday"
}, {
  step: "325",
  day: "Tuesday"
}];

let randomIndex;
let animating = false;

function setup() {

  createCanvas(600, 600);
  background (200);
  textSize(32);

  text("click to randomize", 50,50);

// console.log(random(5));

}


function draw() {

 if (animating == true){
   ellipse(random(width), random(height), random(50, 200));
 }
}
function randomizer(){
  animating = false;

  if (steps[0]){
    background(random(200, 255));
    randomIndex = int(random(steps.length));
    // console.log(steps[randomIndex].day);
    text(`${steps[randomIndex].day} I walked ${steps[randomIndex].step} steps`, 50, 50);
    steps.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left", 50, 50);
  }
}
function mousePressed() {
animating = true
setTimeout(randomizer, 2000);

}
