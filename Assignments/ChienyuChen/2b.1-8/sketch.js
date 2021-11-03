let cats = [{
  name: "Chartreux",
  color: "blue"
}, {
  name: "Bombay",
  color: "Black"
}, {
  name: "Siamese",
  color: "cream and chocolate"
}
];


let randomIndex;
let animating = false;


function setup() {
  //createCanvas(windowWidth, windowHeight);
createCanvas(600,600);
background(200);
textSize(40);
text("click to randomize", 50, 50);

}


function draw() {

  if( animating == true){
    ellipse(random(width), random(height), random(50))
  }

}


function randomizer(){
  animating = false
  if (cats[0]){
    background(random(200, 255));
    randomIndex = int(random(cats.length));
    text(cats[randomIndex].name, 50,50);
    cats.splice(randomIndex, 1);
  }
  else {
    background(random(200, 255));
    text("click to randomize again!", 50, 50);
  }
}


function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);
}


function changeBackground(){
  if (counter <= 2) {
    counter++;
    console.log(counter)
    background(random(255), random(255), random(255));
    setTimeout(changeBackground, 1000);
  }
  else {
  }

}
