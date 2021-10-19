let flavour = [
  {tag:"durian",
   color: "light yellow with fumes"},
  {tag:"chocolate",
   color: "brown"},
  {tag:"strawberry",
   color: "pink"},
  {tag:"soap",
   color: "white"},
  {tag:"carrot",
   color: "orange"},
  {tag:"broccoli",
   color: "green"},
  {tag:"beets",
   color: "red"}
  ];
let topping = [
  {tag:"boba",
   color: "brown balls"},
  {tag: "beans",
   color: "bean"},
  {tag: "pearls",
   color: "iridescent"},
  {tag:"coins",
   color: "dark yellow"},
  {tag:"garlic",
   color: "white yellow with fume"}];

let randomflavour1Index;
let randomflavour2Index;
let randomflavour3Index;
let randomtopping1Index;
let randomtopping2Index;
let animating = false

function setup() {
  createCanvas(400, 400);
  background(42,169,196);


  textSize(20);
  text("click to make your drink",85,50);


}

function draw() {
  if(animating == true){
    ellipse(random(width), random(height), random(50,200));
  }
}

function randomizer() {
  animating = false;

  if (flavour[0]){
    clear();
    //flavour1
    background(42,169,196);
    textSize(16);
    randomflavour1Index = int(random(flavour.length));
    console.log(flavour[randomflavour1Index].tag);
    // textAlign(LEFT,TOP);
    // text(flavour[randomflavour1Index].tag,30,80);

    //flavour2
    flavour.splice( randomflavour1Index,1);
    randomflavour2Index = int(random(flavour.length));
    console.log(flavour[randomflavour2Index].tag);
    // textAlign(CENTER, TOP);
    // text(flavour[randomflavour2Index].tag,175,80);

    //flavour3
    flavour.splice( randomflavour2Index, 1);
    randomflavour3Index = int(random(flavour.length));
    console.log(flavour[randomflavour3Index].tag);
    textAlign(RIGHT, TOP);
    text(flavour[randomflavour3Index].tag,325,80);
    // textAlign(RIGHT,TOP);
    // text(`${flavour[randomflavour1Index].tag}
    // ${flavour[randomflavour2Index].tag}
    // ${flavour[randomflavour3Index].tag}`,200,80);

    //topping1
    randomtopping1Index = int(random(topping.length));
    console.log(topping[randomtopping1Index].tag);
    textAlign(LEFT,TOP);
    text(topping[randomtopping1Index].tag,80,110);

    //topping2
    topping.splice(randomtopping1Index, 1);
    randomtopping2Index = int(random(topping.length));
    console.log(topping[randomtopping2Index].tag);
    textAlign(RIGHT, TOP);
    text(topping[randomtopping2Index].tag,280,110);
  } else {
    background(42,169,196);
    textAlign(CENTER, TOP);
    textSize(26);
    text("We ran out TAT",200,50);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer,2000);

  
}