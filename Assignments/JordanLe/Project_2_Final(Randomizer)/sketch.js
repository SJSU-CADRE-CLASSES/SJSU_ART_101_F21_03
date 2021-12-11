//let technicalSoftware = ["Computer \nProgramming", "OOP", "data \nstructures", "algorithms", "OOD", "Assembly Language\n(Machine Code)", "web \ndevelopment", "mobile \napp \ndevelopment", "game \ndevelopment", "Excel \nSheets", "Database \nManagement \nSystems", "Software \nEngineering", "Management \nInformation \nSystems", "Informational \nTechnology"];
//let artisticSoftware = ["Creative \nCoding", "3D \nModeling", "web \naesthetics", "game \naesthetics", "digital \nanimation", "Photo \nediting", "video \nediting", "digital \npainting", "Computer \nGraphics", "Augmented \nReality", "Digital \nMedia \nArt", "Graphic \nDesign", "music \nproducer", "Adobe \nCreative \nCloud"];
// Hyun-ji a.k.a. Kim

let ghostFont;
let sonaGhost;
let lunaGhost;

let ghostsOfLife = [{
  splash: "Blue\nGhost",
  name: "Bluez",
  lore: ""
}, {
  splash: "Boo",
  name: "Boo Diddley",
  lore: ""
}, {
  splash: "",
  name: "Sona",
  lore: ""
}, {
  splash: "",
  name: "Luna",
  lore: ""
}, {
  splash: "Ghost\nof\nTime",
  name: "Papa Ergo Lanatos",
  lore: ""
}, {
  splash: "Seoul\nGhost",
  name: "Kim",
  lore: ""
}, {
  splash: "basketcase",
  name: "Riley",
  lore: ""
}, {
  splash: "determination",
  name: "Steve",
  lore: ""
}, {
  splash: "passionate",
  name: "Julie",
  lore: ""
}, {
  splash: "niceness",
  name: "Bailey",
  lore: ""
}, {
  splash: "quirky",
  name: "Billybob",
  lore: ""
}, {
  splash: "imaginative",
  name: "Danielle",
  lore: ""
}, {
  splash: "philosohpies",
  name: "Daniel",
  lore: ""
}, {
  splash: "knowledgeable",
  name: "Brian",
  lore: ""
}];
let randomIndex = 0;
let bgc;
let ghostColor;
let ghostFaceColor;

let ghostCover = false;

function setup() {
  // the canvas div
  let cnv = createCanvas(windowWidth / 1.125, windowHeight / 1.125); //(windowWidth / 1.025, windowHeight / 1.025)
  cnv.parent("canvasDiv");

  // var ghostSize1 = 80; putting this here would cause error due to scope issues
  //background(250, 140, 60);

  // light-green, dark-purple, blue, orange, blackish-blue,indigoish, purple, pure-blue,
  // lavendar, pinkish, yellow-green, magenta(doing rainbow causes crimson cause it's not in the draw function?), dark-green, pure green
  bgc = [color(200, 250, 140),
         color(102, 0, 102),
         color(60, 140, 250),
         color(250, 140, 60),
         color(0, 0, 100),
         color(140, 140, 250),
         color("#7F00FF"),
         color(0, 0, 255),
         color("#E5CCFF"),
         color(255, 155, 255),
         color(220, 250, 0),
         color("#FF007F"),
         color(0, 125, 0),
         color(0, 255, 0)];

  // seems like these variables are only predefined within the p5js functions?
  console.log(windowWidth); //1365
  console.log(windowHeight); //969

  // testing random numbers without looping from the draw function
  console.log(random(14));
  console.log(int(random(14)));

  // the button
  button = createButton("click to randomize ghosts");
  button.position((windowWidth / 1.125) / 2.125, (windowHeight / 1.125) / 1);
  button.mousePressed(randomizeGhost);

  // the font
  textFont(ghostFont);
}

var ghostSize1 = window.innerHeight / 5; // used to be 200
var ghostPosX1 = (window.innerWidth / 1.125) / 2; // used to be 400
var ghostPosY1 = (window.innerHeight / 1.125) / 2; // used to be 400

function draw() {
  ghostColor = [color(60, 140, 250),
                color(255),
                color(60, 140, 250),
                color("#999900"),
                color(255, 0, 0),
                color(255, 255, 155),
                color(0),
                color(255, 0, 0),
                color(128),
                color(155, 225, 255),
                color("#006633"),
                color("#802AC0"),
                color("#003366"),
                color(150, 110, 75)];

  ghostFaceColor = [color(200, 230, 250),
                    color(0),
                    color(200, 230, 250),
                    color(255),
                    color("#FFFF00"),
                    color(255, 155, 255),
                    color(100, 0, 50),
                    color(255),
                    color("#802AC0"),
                    color(255, 255, 155),
                    color(80, 80, 0),
                    color(random(255), random(255), random(255)),
                    color("#FF6666"),
                    color(110, 0, 0)];
  push();

  background(bgc[randomIndex]);

  noStroke();
  //console.log(width);
  //console.log(height);

  // fill(127, 0, 255);
  // textSize(24);
  // textAlign(CENTER);
  // text(artisticSoftware[randomIndex3], 600, 250);

  // fill(ghostColor[randomIndex]);
  // ellipse(ghostPosX1, ghostPosY1, ghostSize1); // (100, 100, 80)
  // fill(ghostFaceColor[randomIndex]);
  // ellipse(ghostPosX1 - (ghostSize1 / 5), ghostPosY1 - (ghostSize1 / (20 / 3)), ghostSize1 / 8); // (84, 88, 10)
  // ellipse(ghostPosX1 + (ghostSize1 / 5), ghostPosY1 - (ghostSize1 / (20 / 3)), ghostSize1 / 8); // (116, 88, 10)
  // rect(ghostPosX1 - (ghostSize1 / 8), ghostPosY1, ghostSize1 / 4, ghostSize1 / (8 / 3)); // (90, 100, 20, 30)

  if (randomIndex == 2) {
    image(sonaGhost, ghostPosX1 - 250, ghostPosY1 - 250);
  } else if (randomIndex == 3) {
    image(lunaGhost, ghostPosX1 - 250, ghostPosY1 - 250);
  } else {
    fill(ghostColor[randomIndex]);
    ellipse(ghostPosX1, ghostPosY1, ghostSize1); // (100, 100, 80)
    fill(ghostFaceColor[randomIndex]);
    ellipse(ghostPosX1 - (ghostSize1 / 5), ghostPosY1 - (ghostSize1 / (20 / 3)), ghostSize1 / 8); // (84, 88, 10)
    ellipse(ghostPosX1 + (ghostSize1 / 5), ghostPosY1 - (ghostSize1 / (20 / 3)), ghostSize1 / 8); // (116, 88, 10)
    rect(ghostPosX1 - (ghostSize1 / 8), ghostPosY1, ghostSize1 / 4, ghostSize1 / (8 / 3)); // (90, 100, 20, 30)
  }

  // fill(0, 250, 0);
  // ellipse(ghostPosX2, ghostPosY2, ghostSize2); // (100, 100, 80)
  // fill(0, 120, 0);
  // ellipse(ghostPosX2 - (ghostSize2 / (4)), ghostPosY2 - (ghostSize2 / (20 / 3)), ghostSize2 / 8); // (80, 88, 10)
  // ellipse(ghostPosX2 + (ghostSize2 / (20 / 3)), ghostPosY2 - (ghostSize2 / (20 / 3)), ghostSize2 / 8); // (112, 88, 10)
  // rect(ghostPosX2 - (ghostSize2 / (40 / 9)), ghostPosY2, ghostSize2 / 4, ghostSize2 / (8 / 3)); // (82, 100, 20, 30)
  //
  // textSize(24);
  // text(technicalSoftware[randomIndex2], 200, 250);
  //
  // fill(255, 0, 127);
  // ellipse(ghostPosX3, ghostPosY3, ghostSize3); // (100, 100, 80)
  // fill(127, 0, 255);
  // ellipse(ghostPosX3 - (ghostSize3 / (20 / 3)), ghostPosY3 - (ghostSize3 / (20 / 3)), ghostSize3 / 8); // (88, 88, 10)
  // ellipse(ghostPosX3 + (ghostSize3 / 4), ghostPosY3 - (ghostSize3 / (20 / 3)), ghostSize3 / 8); // (120, 88, 10)
  // rect(ghostPosX3 - (ghostSize3 / 40), ghostPosY3, ghostSize3 / 4, ghostSize3 / (8 / 3)); // (98, 100, 20, 30)

  /*
    if (mouseIsPressed && insideCircle(ghostPosX1, ghostPosY1, ghostSize1)) {
        randomIndex = int(random(ghostsOfLife.length));
    }

    if (mouseIsPressed && insideCircle(ghostPosX2, ghostPosY2, ghostSize2)) {
        randomIndex2 = int(random(technicalSoftware.length));
    }

    if (mouseIsPressed && insideCircle(ghostPosX3, ghostPosY3, ghostSize3)) {
        randomIndex3 = int(random(artisticSoftware.length));
    }
  */

  // testing the random display of array indexes(0 to 13)

  //text(random(14), 800, 100);
  //text(int(random(14)), 800, 150);


  pop();

  push();
  fill(200, 230, 250);
  textSize(36);
  stroke(0);
  strokeWeight(4);
  textAlign(CENTER);
  text(ghostsOfLife[randomIndex].splash, ghostPosX1, ghostPosY1 - 200); // former coordinates: (400, 200)
  text(`Name:\n${ghostsOfLife[randomIndex].name}`, ghostPosX1, ghostPosY1 + 200); // former coordinates: (400, 540)

  // fill("#FFFF00");
  // text("Please click on a ghost to see its splash text", ghostPosX1, ghostPosY1 + 360); // former coordinates: (400, 660)
  pop();

  blueGhostArmies();

  //if (ghostCover) ghostCover = false;

}

function mousePressed() {

  if (insideCircle(ghostPosX1, ghostPosY1, ghostSize1)) {
    //setTimeout(blueGhostArmies(), 10000);
    ghostCover = true;
    randomIndex = int(random(ghostsOfLife.length));
    setTimeout(blueGhostFinish, 2000);
  }

  //if (insideCircle(ghostPosX2, ghostPosY2, ghostSize2)) randomIndex2 = int(random(technicalSoftware.length));
  //if (insideCircle(ghostPosX3, ghostPosY3, ghostSize3)) randomIndex3 = int(random(artisticSoftware.length));

  //ghostCover = false;
}

function insideCircle(x, y, size) {
  return sqrt(sq(mouseX - x) + sq(mouseY - y)) < size / 2 ? true : false;
}

function blueGhostArmy(x, y, size) {
  fill(60, 140, 250);
  ellipse(x, y, size); // (100, 100, 80)
  fill(200, 230, 250);
  ellipse(x - (size / 5), y - (size / (20 / 3)), size / 8); // (84, 88, 10)
  ellipse(x + (size / 5), y - (size / (20 / 3)), size / 8); // (116, 88, 10)
  rect(x - (size / 8), y, size / 4, size / (8 / 3)); // (90, 100, 20, 30)
}

function blueGhostArmies() {

  if (ghostCover == true) {

    for (let i = 0; i < width + 800; i += 100) {
      for (let j = 0; j < height + 800; j += 100) {

        blueGhostArmy(random(i), random(j), 400);
        //delayTime(1.0);
        blueGhostArmy(random(i) + 50, random(j) + 50, 400);
        //delayTime(1.0);
        //blueGhostArmy(width + i + 50, height + j + 50, 100);

      }
    }

  }

}

function randomizeGhost() {
    //setTimeout(blueGhostArmies(), 10000);
    ghostCover = true;
    randomIndex = int(random(ghostsOfLife.length));
    setTimeout(blueGhostFinish, 2000);
}

function blueGhostFinish() {
  ghostCover = false;
}

function preload() {
  ghostFont = loadFont("fonts/GHOSTBUS.TTF");
  sonaGhost = loadImage("images/Sona_Ghost.png");
  lunaGhost = loadImage("images/Luna_Ghost.png");
}

//var w = windowWidth;
//var h = windowHeight;
// testing length of the 3 arrays (the lengths are all 14)
//console.log(technicalSoftware.length);
//console.log(artisticSoftware.length);
console.log(ghostsOfLife.length);
console.log(ghostCover);
