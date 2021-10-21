/// what is my meals for today?

let meals = [{
  name: "cereal",
  color: "pink"
}, {
  name: "cheap steak",
  color: "brown"
}, {
  name: "chicken wings",
  color: "browngreen"
}, {
  name: "cupcake",
  color: "red"
}, {
  name: "dim sum",
  color: "lightbrown"
}, {
  name: "fancy steak",
  color: "redbrn"
}, {
  name: "ice cream",
  color: "tan"
}, {
  name: "instant noodles",
  color: "orange"
}, {
  name: "katsu",
  color: "currybrown"
}, {
  name: "Mc Donalds",
  color: "redyellow"
}, {
  name: "pancakes",
  color: "berrybrown"
}, {
  name: "ramen",
  color: "lightyelow"
}, {
  name: "salad",
  color: "green"
}, {
  name: "sandwich",
  color: "tangreen"
}, {
  name: "poke",
  color: "lightorange"
}, {
  name: "sushi",
  color: "orange"
},];

var hye = Math.floor(Math.random() * 360);
var pastel = 'hsl(' + hye + ', 100%, 88%)';

let randomIndex;
let animating = false;
let food = [];
let imageCounter = 0;

/// thinking man image
let hmm;
/// full from meals man image
let full;
let button;


function preload(){
  
  for (let i = 0; i<= 15; i ++){
    food[i] =     loadImage(`foodassets/food_${i}.jpg`);
    hmm = loadImage('person/hmm.png');
    full = loadImage('person/full.png');
  }
}



function setup() {
  createCanvas(1000, 1000);
  textSize(32);
  
  imageMode(CENTER);
  frameRate(4);

  background(pastel);  
  image(hmm,580,550,1000,1000);
  text("Click for today's meals!", 50,50)
  
  button = createButton("What is the meal for today?");
  button.mousePressed(buttonPressed);
  button.style("padding");
  button.style("background/color");
  button.position(480,900); 
  button.size(150,70);

}

function draw() {
  
  
  if(animating == true) {
    clear();
    image(food[imageCounter],width/2, height/2);  
    if (imageCounter < food.length -1 ){
    imageCounter++;
  } else {
      imageCounter = 0;
  }  
}
} 


function randomizer(){
  animating = false; 
  
if (meals[0]) {
    
  clear()
;
  randomIndex = int(random(meals.length));
  image(random(food),width/2, height/2);  
  
  textSize(33)
  text(`${meals[randomIndex].name} looks a little ${meals[randomIndex].color}`, 50,100);
  
  text(`${meals[randomIndex].name} for todays meal?`, 50,150); 
  
  meals.splice(randomIndex, 1);
} else {
  background(pastel);
  image(full,630,650,1000,1000);
  text("Tummy's full!", 100,100);
      
  
}

}
function buttonPressed() {
  
  animating = true;
  setTimeout(randomizer, 2000);
  
  
  

}  