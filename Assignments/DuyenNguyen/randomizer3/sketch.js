//flowers I know of

let flowers = [{
  name: "rose",
  color: "You are a gentle person"
}, {
  name: "lily",
  color: "What a generous person you are"
}, {
  name: "orchid",
  color: "You are a kind person"
}, {
  name: "carnation",
  color: "You have a wonderful heart"
}, {
  name: "camelia",
  color: "You are great with people"
}, {
  name: "poppy",
  color: "You are born to shine"
}, {
  name: "freesia",
  color: "You are a very caring person"
},{
  name: "sunflower",
color: "You have a great shoulder for your friends"}]
let button;
let randomFlower;
let centerSize = 20;
let petalSize = 20;
let petalNumber = 8;
let animating = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('yellow');
  angleMode(DEGREES);
  textSize(40);
  fill('pink');
  button = createButton("Click to know your best flower");
  button.mousePressed(buttonPressed);
  button.class("randomizerButton")
  // randomFlower = int(random(flowers.length));
  // text(flowers[randomIndex].name, 50, 50);
  // flowers.splice(randomIndex,1 );
  // console.log(flowers);
}


function draw() {
  //translate (width/2, height/2 + 200);
  //branch(100);
  flowerss('white', 'pink', random(255, 200, 255), width / 2, height / 2, 0.5);
  flowerss('green', 'white', random(255, 200, 255), width / 2, height / 2 + 60, 0.4);
 
  for (let i = 0; i < 30; i++) {
    flowerss('white', 'pink', 'purple', 50 * i, 90, 0.3);
    flowerss('white', 'pink', 'purple', 50 * i, 200, 0.3);
    //flowerss('white', 'pink', 'purple', 50*i, 300, 0.3);
    flowerss('white', 'pink', 'purple', 50 * i, 500, 0.3);
    flowerss('white', 'pink', 'purple', 50 * i, 300, 0.3);
    flowerss('white', 'pink', 'purple', 50 * i, 600, 0.3);
  }

  if (animating == true) {
    noStroke();
    fill(random(255), random(255), random(255));
    ellipse(random(width), random(height), random(15, 200));
  }
}

function flowerss(color1, strokeColor, color2, xPos, yPos, scaleNumber) {
  push();
  translate(xPos, yPos);
  scale(scaleNumber);
  fill((random(755), random(100), random(245)));
  circle(0, 0, centerSize);
  //petal
  for (let i = 0; i < petalNumber; i++) {
    angle = 60;
    rotate(angle);
    stroke(strokeColor);
    fill(color2);
    circle(20, 0, petalSize);
  }
  pop();


}

function randomizer() {
  animating = false;

  if (flowers[0]) {
    //background(random(200, 20), random(10, 100), random(255));
    background(255);
    randomFlower = int(random(flowers.length));
    textSize(30);

    text(flowers[randomFlower].name, width / 6, 500);
    textSize(30);
    text(flowers[randomFlower].color, width / 36 * 20, 500);
    flowers.splice(randomFlower, 1);
  } else {
    background(255);
    text("Let us all celebrate how great of a person you are", width / 4, 150);

  }
}

function buttonPressed() {
  animating = true;
  background(255);
  setTimeout(randomizer, 3000);

}
// function branch(spread) {

//   push();
//   if(spread > 10) {

//     strokeWeight (map (spread, 10, 100, 1, 20));
//     stroke(70,40,20);
//     line(0,0,0,- spread);
//     translate(0,- spread);
//     rotate(random(-20, - 30));
//     branch(spread * random (0.5, 0.9));
//   }else{
//     var r = 70 + random(-20, 60);
//     var g = 100 + random(-40, 10 );
//     var b = 40 + random (-20, 20);
//     fill (r, g, b);
//     noStroke();

//   pop();

// }
// }
