
  
//emotions during finals
let emotions = [{
  name: "Sad",
  why: "Getting bad grades!"
 
}, {
  name: "Confused",
  why: "having too many projects to do!"
 
}, {
  name: "Worried",
why: "Can I finish all of my projects before due dates!"

}, {
  name: "Angry",
  why: "Why all the dead lines are on the same date!"
 
}, {
  name: "Happy",
  why: "getting good grades!"
 
}]

var colorArray = [
  '#FFB8D0',
  '#FCF4CB',
  '#7B7267',
  '#A4EDD9'
]


let randomIndex;

animating = false;

let button;

let girl = [];

let imageCounter = 0;

function preload(){
  for (let i = 0; i <= 4; i++){
    girl[i] = loadImage(`assets/girl_${i}.jpg`);
}
}

//bottom
function setup() {

createCanvas(800,800);
background("#7B7267");
fill(255);
textAlign(CENTER);
textStyle(BOLD);
textSize(60);
text("Students Life", 400, 400);

button = createButton("Click Here");
button.mousePressed(buttonPressed)
button.style("padding", "20px");
button.style("background-color", "#ffb6c1");

}
//loading 
function draw() {
if (animating == true){
stroke(random(colorArray))
strokeWeight(10);
fill(random(colorArray));
frameRate(800);
//Fill(164, 237, 217);



square(random(width), random(height),random(20, 300));

}


}



function changeBackground(){
  background(random(10), random(10), random(10));


}

function buttonPressed(){
  animating = true;
  setTimeout(randomizer, 3000);

}
function randomizer(){
  animating = false;
  if (emotions[0]){
    //displays random name 
    background(random(random(colorArray)));
    randomIndex = int(random(emotions.length));

    fill("black");
    noStroke()
    //stroke(255);
    strokeWeight(2);
    textSize(40);
    image(girl[randomIndex], 130, 100);
    console.log(randomIndex);
    text(emotions[randomIndex].name, 400, 700);
    console.log(randomIndex);

    textSize(20);
    text(emotions[randomIndex].why, 400, 740);
    emotions.splice(randomIndex, 1);
    girl.splice(randomIndex, 1);
  } else{
    // background(255);
    // strokeWeight(20);
    // // stroke(250);
    // noStroke();
    // // fill(10, 0, 0);
    // textSize(50);
    // text("Emotions are just visitors, let them come and go")
    background("#A4EDD9");
    strokeWeight(3);
    // stroke(250);
    noStroke();
    fill(123,114,103);
    textSize(30);
    text("Emotions are just visitors, let them come and go!", 400, height/2);
    if (emotions.length == 0){
      animating = false;
    }
  }

  }