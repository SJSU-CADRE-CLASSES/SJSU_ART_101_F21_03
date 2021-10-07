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

  text("click to randomize", 75, 300);

// console.log(random(5));

}


function draw() {

 if (animating == true){
   fill(random(255), random(255), random(255));
   ellipse(random(width), random(height), random(random(100)));
 }
}
function randomizer(){
  animating = false;

  if (steps[0]){
    background(random(200, 255));
    randomIndex = int(random(steps.length));
    // console.log(steps[randomIndex].day);
    fill(50);
    text(`${steps[randomIndex].day} I walked ${steps[randomIndex].step} steps`, 75, 300 );
    steps.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    fill(50);
    text("nothing left", 75, 300 );
  }
}
function mousePressed() {
animating = true
setTimeout(randomizer, 1000);

}
