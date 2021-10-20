/// what is my meals for today?

let meals = [{
  name: "cereal",
  color: "pink"
}, {
  name: "cheap steak",
  color: "brown"
}, {
  name: "chicken wings",
  color: "brngreen"
}, {
  name: "cupcake",
  color: "redv"
}, {
  name: "dim sum",
  color: "lightbrn"
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
  color: "currybrn"
}, {
  name: "Mc Donalds",
  color: "redyellow"
}, {
  name: "pancakes",
  color: "berrybrn"
}, {
  name: "ramen",
  color: "lightyell"
}, {
  name: "salad",
  color: "green"
}, {
  name: "sandwich",
  color: "tangrn"
}, {
  name: "poke",
  color: "lightorng"
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
  
  // text(meals[randomIndex].name + " looks a little " + meals[randomIndex].color, 50,100);
  
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
