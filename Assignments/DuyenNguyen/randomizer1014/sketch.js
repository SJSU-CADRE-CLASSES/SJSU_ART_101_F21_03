//flowers I know of

let flowers = [{
  name: "rose",
  color: "red"
}, {
  name: "lily",
  color: "white"
}, {
  name: "orchid",
  color: "purple"
}, {
  name: "carnation",
  color: "blue"
}, {
  name: "camelia",
  color: "pink"
}, {
  name: "poppy",
  color: "orange"
}, {
  name: "freesia",
  color: "yellow"
}]

let randomFlower;
let centerSize = 20;
let petalSize = 20;
let petalNumber = 8;
let animating = false;
let manydogs = [];
let imageCounter = 0;


function preload() {
  for (let i = 0; i <= 11; i++) {
    manydogs[i] = loadImage(`assets2/manydogs_${i}.jpeg`)
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('yellow');
  angleMode(DEGREES);
  textSize(40);
  text("click to randomize", width / 3, 150);
  // randomFlower = int(random(flowers.length));
  // text(flowers[randomIndex].name, 50, 50);
  // flowers.splice(randomIndex,1 );
  // console.log(flowers);
  console.dog(manydogs);

}


function draw() {
  // translate (width/2, height/2 + 200);
  // //branch(100);
  // flowers n stuff
  // flowerss('white', 'pink', random(255, 200, 255), width/2, height/2, 0.5);
  // flowerss('green', 'white',random(255, 200, 255), width/2, height/2+60, 0.4);
  //
  // for (let i =0; i <30; i++){
  //   flowerss('white', 'pink', 'purple', 50*i, 90, 0.3);
  //   flowerss('white', 'pink', 'purple', 50*i, 200, 0.3);
  //   //flowerss('white', 'pink', 'purple', 50*i, 300, 0.3);
  //   flowerss('white', 'pink', 'purple', 50*i, 500, 0.3);
  //    flowerss('white', 'pink', 'purple', 50*i, 400, 0.3);
  // //}

  if (animating == true) {
    // noStroke();
    // fill(random(255),random(255),random(255));
    // ellipse(random(width), random(height),random(15,200));

    image(manydogs_[0], width/2, height/2);
  }
}


// function flowerss(color1, strokeColor, color2, xPos, yPos, scaleNumber ){
//   push();
//   translate(xPos,yPos);
//   scale(scaleNumber);
//   fill((random(755), random(100), random(245)));
//   circle(0,0,centerSize);
//   //petal
//   for( let i = 0; i < petalNumber; i++){
//     angle = 60;
//     rotate(angle);
//     stroke(strokeColor);
//     fill(color2);
//     circle(20,0, petalSize);
//   }
//   pop();


// }

function randomizer() {
  animating = false;

  //   if (flowers[0]) {
  //   //background(random(200, 20), random(10, 100), random(255));
  //   background(255);
  //   randomFlower = int(random(flowers.length));
  //   textSize(55);
  //
  //   text(flowers[randomFlower].name, width/5, 150);
  //   text(flowers[randomFlower].color, width/36*25, 150);
  //   flowers.splice(randomFlower,1);
  // } else {
  //   background(255);
  //   text("how many do you know?", width/4,150);
  //
  // }
}

function mousePressed() {
  animating = true;
  //setTimeout(randomizer, 3000);

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
