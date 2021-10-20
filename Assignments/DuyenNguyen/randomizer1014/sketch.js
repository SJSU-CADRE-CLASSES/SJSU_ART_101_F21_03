//flowers I know of

let card = [{
  name: "Status: Tired",
  color: "You are stressed over nothing",
   
}, {
  name: "Status: Exciting",
  color: "There are 3 lucky things coming to you"
}, {
  name: "Status: Confused",
  color: "You should call him"
}, {
  name: "Status: Go with the flow",
  color: "You should watch less Instgram reels"
}, {
  name: "Status: Disappointed",
  color: "It's okay. Things are getting better"
}, {
  name: "Status: Worried",
  color: "Your grade for the previous assignment is out. Check your Canvas"
}, {
  name: "Status: Scared",
  color: "Dont worry. You are loved by a lot of people"
}]
  
let randomFlower;
// let centerSize = 20;
// let petalSize = 20;
// let petalNumber = 8;
let animating = false;
let cards = [];
let imageCounter = 0;
let button;

function preload() {
  // //card[0] = new Image();
  // card[0] = loadImage(`assets2/newcard/cardss_2.jpeg`)
  // //card[1] = new Image();
  // card[1] = loadImage(`assets2/newcard/cardss_0.jpeg`)
  // //card[2] = new Image();
  // card[2] = loadImage(`assets2/newcard/cardss_6.jpeg`)
  // //card[3] = new Image();
  // card[3] = loadImage(`assets2/newcard/cardss_5.jpeg`)
  // //card[4] = new Image();
  // card[4] = loadImage(`assets2/newcard/cardss_3.jpeg`)
  // //card[5] = new Image();
  // card[5] = loadImage(`assets2/newcard/cardss_1.jpeg`)
  // //card[6] = new Image();
  // card[6] = loadImage(`assets2/newcard/cardss_4.jpeg`)

  for (let i = 0; i <= 6; i++) {
    cards[i] = loadImage(`assets2/newcard/cardss_${i}.jpeg`)
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('yellow');
  angleMode(DEGREES);
  textSize(40);
  frameRate(12);
  button = createButton("Click to know your card for today");
  button.mousePressed(buttonPressed);
  button.class("randomizerButton")
  //text("Click to know your card for today", width / 4, 150);
  //loop
  // randomFlower = int(random(card.length));
  // text(card[randomIndex].name, 50, 50);
  // card.splice(randomIndex,1 );
  // console.log(flowers);
  // console.log(manydogs);

}


function draw() {
  // translate (width/2, height/2 + 200);
 
  // //flowers n stuff
  // flowerss('white', 'pink', random(255, 200, 255), width/2, height/2, 0.5);
  // flowerss('green', 'white',random(255, 200, 255), width/2, height/2+60, 0.4);
  
  // for (let i =0; i <30; i++){
  //   flowerss('white', 'pink', 'purple', 50*i, 90, 0.3);
  //   flowerss('white', 'pink', 'purple', 50*i, 200, 0.3);
  //   //flowerss('white', 'pink', 'purple', 50*i, 300, 0.3);
  //   flowerss('white', 'pink', 'purple', 50*i, 500, 0.3);
  //    flowerss('white', 'pink', 'purple', 50*i, 400, 0.3);
  // }

  if (animating == true) {
    clear();
    noStroke();
    fill(random(255),random(255),random(255));
    ellipse(random(width), random(height),random(15,200));

    image(cards[imageCounter], width/2, height/2);
    console.log("Printing the cards %v", cards)
    if (imageCounter < cards.length-1);
    imageCounter++;
    } else {
      imageCounter = 0;
    }


    // cards 
    //fill(0);
    rect(width/2, height/4, width/4, height/2)
    textSize(15);

    //rect(width/1.6, height/4, width/4, height/2)
    //text("")
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

    if (card[0]) {
    // //background(random(200, 20), random(10, 100), random(255));
    // background(255);
    clear();
    randomFlower = int(random(card.length));
    textSize(20);
  
    text(card[randomFlower].name, width/8, 150);
    textSize(25);
    text(card[randomFlower].color, width/36*25, 150);
    image(cards[randomFlower], width/3, height/2);
    card.splice(randomFlower);
  } else {
    background(255);
    text("You are doing great. These cards dont mean anything", width/4,height/2);
  
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);

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
