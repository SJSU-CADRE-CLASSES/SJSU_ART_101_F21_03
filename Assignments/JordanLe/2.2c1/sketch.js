//let technicalSoftware = ["Computer \nProgramming", "OOP", "data \nstructures", "algorithms", "OOD", "Assembly Language\n(Machine Code)", "web \ndevelopment", "mobile \napp \ndevelopment", "game \ndevelopment", "Excel \nSheets", "Database \nManagement \nSystems", "Software \nEngineering", "Management \nInformation \nSystems", "Informational \nTechnology"];
//let artisticSoftware = ["Creative \nCoding", "3D \nModeling", "web \naesthetics", "game \naesthetics", "digital \nanimation", "Photo \nediting", "video \nediting", "digital \npainting", "Computer \nGraphics", "Augmented \nReality", "Digital \nMedia \nArt", "Graphic \nDesign", "music \nproducer", "Adobe \nCreative \nCloud"];
// Hyun-ji a.k.a. Kim

let ghostsOfLife = [{
  splash: "Blue \nGhost",
  name: "Bluez",
  lore: ""
}, {
  splash: "Boo",
  name: "Boo Diddley",
  lore: ""
}, {
  splash: "You've \nbeen \npranked",
  name: "Sona",
  lore: ""
}, {
  splash: "Munyi\nMunyi",
  name: "Luna",
  lore: ""
}, {
  splash: "Ghost \nof \nTime",
  name: "Pappy Ergo Lanatos",
  lore: ""
}, {
  splash: "Seoul \nGhost",
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
let randomIndex1 = 0;
let bgc;

let ghostCover = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // var ghostSize1 = 80; putting this here would cause error due to scope issues
  //background(250, 140, 60);

  // light-green, dark-purple, blue, orange, blackish-blue,indigoish, purple, pure-blue,
  // lavendar, pinkish, yellow-green, magenta(doing rainbow causes crimson cause it's not in the draw function), dark-green, pure green
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


}

var ghostSize1 = 200;
var ghostPosX1 = 400;
var ghostPosY1 = 400;

function draw() {
  push();

  background(bgc[randomIndex1]);

  noStroke();
  //console.log(width);
  //console.log(height);

  // fill(127, 0, 255);
  // textSize(24);
  // textAlign(CENTER);
  // text(artisticSoftware[randomIndex3], 600, 250);

  fill(60, 140, 250);
  ellipse(ghostPosX1, ghostPosY1, ghostSize1); // (100, 100, 80)
  fill(200, 230, 250);
  ellipse(ghostPosX1 - (ghostSize1 / 5), ghostPosY1 - (ghostSize1 / (20 / 3)), ghostSize1 / 8); // (84, 88, 10)
  ellipse(ghostPosX1 + (ghostSize1 / 5), ghostPosY1 - (ghostSize1 / (20 / 3)), ghostSize1 / 8); // (116, 88, 10)
  rect(ghostPosX1 - (ghostSize1 / 8), ghostPosY1, ghostSize1 / 4, ghostSize1 / (8 / 3)); // (90, 100, 20, 30)

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
        randomIndex1 = int(random(ghostsOfLife.length));
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
  strokeWeight(6);
  textAlign(CENTER);
  text(ghostsOfLife[randomIndex1].splash, 400, 200);
  text(`Name:\n${ghostsOfLife[randomIndex1].name}`, 400, 540);

  fill("#FFFF00");
  text("Please click on a ghost to see its splash text", 400, 660);
  pop();

  blueGhostArmies();

  //if (ghostCover) ghostCover = false;

}

function mousePressed() {

  if (insideCircle(ghostPosX1, ghostPosY1, ghostSize1)) {
    //setTimeout(blueGhostArmies(), 10000);
    ghostCover = true;
    randomIndex1 = int(random(ghostsOfLife.length));
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

function blueGhostFinish() {
  ghostCover = false;
}


//var w = windowWidth;
//var h = windowHeight;
// testing length of the 3 arrays (the lengths are all 14)
//console.log(technicalSoftware.length);
//console.log(artisticSoftware.length);
console.log(ghostsOfLife.length);
console.log(ghostCover);
