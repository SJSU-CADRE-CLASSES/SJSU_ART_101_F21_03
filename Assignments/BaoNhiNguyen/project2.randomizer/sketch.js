/// what is my meals for today?

let meals = [{
  name: "cereal",
  color: "pink"
}, {
  name: "cheapsteak",
  color: "brown"
}, {
  name: "chickenwings",
  color: "brngreen"
}, {
  name: "cupcake",
  color: "redv"
}, {
  name: "dimsum",
  color: "lightbrn"
}, {
  name: "fancysteak",
  color: "redbrn"
}, {
  name: "icecream",
  color: "tan"
}, {
  name: "instantnoodles",
  color: "orange"
}, {
  name: "katsu",
  color: "currybrn"
}, {
  name: "mcdonalds",
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

function setup() {
  createCanvas(3300, 3300);
  background(220);

  randomIndex = int(random(meals.length));
  
  console.log(meals[randomIndex].name);
  textSize(100)
  text(meals[randomIndex].name, 100,100);
  
}

function draw() {

}