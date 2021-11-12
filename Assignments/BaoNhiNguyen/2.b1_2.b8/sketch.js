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

let randomIndex;
let animating = false;


function setup() {
  createCanvas(700, 700);
  textSize(32);
  
  text("Click for today's meals!", 50,50)
  
}

function draw() {

  if(animating == true) {
    ellipse(random(width), random(height), random(50,200));
    
  }
  
}

function randomizer(){
  animating = false; 
  
if (meals[0]) {
    
  /// this displays random name and splices it out of the array
  
  background(random(200,255));
  randomIndex = int(random(meals.length));
  
  textSize(33)
  text(`${meals[randomIndex].name} looks a little ${meals[randomIndex].color}`, 50,100);
  
  text(`${meals[randomIndex].name} for todays meal?`, 50,150);  
  
  meals.splice(randomIndex, 1);
} else {
  background(random(200,255));
  text("Tummy's full!", 100,100);
        
}

}
function mousePressed() {
  
  animating = true;
  setTimeout(randomizer, 2000);
   

}  
