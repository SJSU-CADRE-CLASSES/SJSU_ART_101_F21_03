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
let counter = 0;
let animating = false;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

  text("click to randomize", 50, 50);

  // setInterval(changeBackground, 1000);
  setTimeout(changeBackground, 1000);
}

function draw() {

  if(animating == true){
    ellipse(random(width), random(height), random(50, 200));
  }
}

function changeBackground(){
  if (counter <= 5){
    counter++;
    console.log(counter)
  background(random(255), random(255), random(255));
  setTimeout(changeBackground, 1000);
} else {

}
}


function randomizer() { 
  animating = false;

  if (swdw[0]) {
    background(random(255));
    randomIndex = int(random(swdw.length));
    text(`${swdw[randomIndex].name}'s favorite color is
    ${swdw[randomIndex].color}`, 50, 50);

    // background(random(255));
    // randomIndex = int(random(swdw.length));
    // text(swdw[randomIndex].name + "'s favorite color is " + 
    // swdw[randomIndex].color, 50, 50);

    console.log("testing testing");
    swdw.splice(randomIndex, 1);
    } else {
      text("nothing left!", 50, 50);
      text([swdw], 0);
    }
}
//this displays random names and splices it out 
function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);

 
  
}