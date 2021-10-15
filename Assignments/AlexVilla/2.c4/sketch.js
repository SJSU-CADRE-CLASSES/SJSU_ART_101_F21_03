// dogs I have loved before
let dogs = [{
  name:"dillon", 
  color: "dog treat color"
}, {
  name: "Ziggy", 
  color:"chartrese"
}, {
  name:"mercedes", 
  color: "poop"
}, {
  name:"petunia",
  color:"rose gold"
}, {
  name:"kloot",
  color:"coffe grind brown"
}, {
name:"nala",
color:"stardust"
}];

let randomIndex;
let animating = false;
let starwars = [];

function repload(){

  for (let i = 0; i <= 13; i++){
    starwars[i] = loadImage(`assets/starwars_${i}.jpg`)
  }

}

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(24);

  text("click to randmonize", 50, 50);
  console.log(starwars);

}

function draw() {

  if(animating == true){
    ellipse(random(width), random(height), random(50, 200));

  }
  
}

function randomizer(){
  animating = false;

  if (dogs[0]){
    // this displays random name and splices it out of array
    background(random(200, 255));
    randomIndex = int(random(dogs.length));
    text(`${dogs[randomIndex].name} 's favorite color is
    ${dogs[randomIndex].color}`, 50, 50);
    // text(dogs[randomIndex].name + "'s favorite color is " + 
    // dogs[randomIndex].color, 50, 50);
    dogs.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left!", 50, 50);
}
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);
  
}