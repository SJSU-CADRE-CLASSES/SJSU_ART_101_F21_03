// daily instructions - yoko ono
let instructions = [{
  words: `Scream. 
  1. against the wind 
  2. against the wall 
  3. against the sky`, 
  title: "Voice Piece for Soprano"
}, {
  words: `Walk all over the city with an empty baby carriage.`, 
  title: "City Piece"
}, {
  words: `Imagine one thousand suns in the sky at the same time.
  Let them shine for one hour. 
  Then, let them gradually melt into the sky. 
  Make one tunafish sandwich and eat.`, 
  title: "Tunafish Sandwich Piece"
}, {
  words: `Find a stone that is your size or weight. 
  Crack it until it becomes fine powder. 
  Dispose of it in the river. (a) 
  Send small amounts to your friends. (b) 
  Do not tell anybody what you did. 
  Do not explain about the powder to the friends whom you send`, 
  title: "Stone Piece"
}, {
  words: `When a person hurts you badly, 
  line up 100 panes of glass in the field 
  and shoot a bullet through it. 
  Take a copy of a map made by the cracks on each glass 
  and send a map a day for 100 days 
  to the person who has hurt you.`, 
  title: "Shoot 100 Panes of Glass"
}, {
  words: `Walk in the footsteps of the person in front. 
  1. on ground 
  2. in mud 
  3. in snow 
  4. on ice 
  5. in water 
  Try not to make sounds.`, 
  title: "Walking Piece"
}, 

];

let randomIndex; 
let counter = 0;
let animating = false;
let button; 

// image preload
let imgs = []; 

function preload(){
  for (let i = 0; i <= 6; i++){
    imgs[i] = loadImage(`images/visual_${i}.jpg`)
  }
}

function setup() {
  createCanvas(1000, 1000);
  background(200);
  textSize(32);

  console.log(imgs);

  text("Yoko Ono - ExcerptsGrapefruit", 300, 300);

  // setInterval(changeBackground, 1000);
  setTimeout(changeBackground, 1000);

  button = createButton("Click here for your daily instruction.");
  button.mousePressed(buttonPressed); 
  button.class("randomizerButton");
}

function draw() {

  if(animating == true){
    image(imgs[0], 0, 0);
  }
}

function changeBackground(){
  if (counter <= 5){
    counter++;
    console.log(counter)
  background(random(255), random(255), random(255));
  setTimeout(changeBackground, 5000);
} else {

}
}


function randomizer() { 
  animating = false;

  if (instructions[0]) {
    background(random(255));
    randomIndex = int(random(instructions.length));
    text(`${instructions[randomIndex].title}
    ${instructions[randomIndex].words}`, 500, 500);

    // background(random(255));
    // randomIndex = int(random(instructions.length));
    // text(instructions[randomIndex].words + "'s favorite title is " + 
    // instructions[randomIndex].title, 50, 50);

    // console.log("testing testing");
    // instructions.splice(randomIndex, 1);
    // } else {
    //   text("nothing left!", 50, 50);
    //   // text([instructions], 0);
    // }
}
//this displays random words and splices it out 
function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);

 
  
}