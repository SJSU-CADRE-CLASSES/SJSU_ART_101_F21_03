let technicalSoftware = ["Computer \nProgramming", "OOP", "data \nstructures", "algorithms", "OOD", "Assembly Language\n(Machine Code)", "web \ndevelopment", "mobile \napp \ndevelopment", "game \ndevelopment", "Excel \nSheets", "Database \nManagement \nSystems", "Software \nEngineering", "Management \nInformation \nSystems", "Informational \nTechnology"];
//let bothSoftware = [""];
let artisticSoftware = ["Creative \nCoding", "3D \nModeling", "web \naesthetics", "game \naesthetics", "digital \nanimation", "Photo \nediting", "video \nediting", "digital \npainting", "Computer \nGraphics", "Augmented \nReality", "Digital \nMedia \nArt", "Graphic \nDesign", "music \nproducer", "Adobe \nCreative \nCloud"];
let ghostsOfLife = ["Blue \nGhost", "Boo", "You've \nbeen \npranked", "Munyi \nMunyi", "Ghost \nof \nTime", "Seoul \nGhost", "basketcase", "determination", "passionate", "niceness", "quirky", "imaginative", "philosohpies", "knowledgeable"];
let randomIndex1 = 0;
let randomIndex2 = 0;
let randomIndex3 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // var ghostSize1 = 80; putting this here would cause error due to scope issues

  // seems like these variables are only predefined within the p5js functions?
  console.log(windowWidth); //1365
  console.log(windowHeight); //969

  // testing random numbers without looping from the draw function
  console.log(random(14));
  console.log(int(random(14)));

}

function draw() {
  background(250, 140, 60);
  noStroke();
  //console.log(width);
  //console.log(height);

  var ghostSize1 = 100;
  var ghostPosX1 = 400;
  var ghostPosY1 = 400;

  fill(127, 0, 255);
  textSize(24);
  text(artisticSoftware[randomIndex3], 600, 250);

  fill(60, 140, 250);
  ellipse(ghostPosX1, ghostPosY1, ghostSize1); // (100, 100, 80)
  fill(200, 230, 250);
  ellipse(ghostPosX1 - (ghostSize1 / 5), ghostPosY1 - (ghostSize1 / (20 / 3)), ghostSize1 / 8); // (84, 88, 10)
  ellipse(ghostPosX1 + (ghostSize1 / 5), ghostPosY1 - (ghostSize1 / (20 / 3)), ghostSize1 / 8); // (116, 88, 10)
  rect(ghostPosX1 - (ghostSize1 / 8), ghostPosY1, ghostSize1 / 4, ghostSize1 / (8 / 3)); // (90, 100, 20, 30)

  var ghostSize2 = 100;
  var ghostPosX2 = 200;
  var ghostPosY2 = 400;

  textSize(24);
  textAlign(CENTER);
  text(ghostsOfLife[randomIndex1], 400, 250);

  fill(0, 250, 0);
  ellipse(ghostPosX2, ghostPosY2, ghostSize2); // (100, 100, 80)
  fill(0, 120, 0);
  ellipse(ghostPosX2 - (ghostSize2 / (4)), ghostPosY2 - (ghostSize2 / (20 / 3)), ghostSize2 / 8); // (80, 88, 10)
  ellipse(ghostPosX2 + (ghostSize2 / (20 / 3)), ghostPosY2 - (ghostSize2 / (20 / 3)), ghostSize2 / 8); // (112, 88, 10)
  rect(ghostPosX2 - (ghostSize2 / (40 / 9)), ghostPosY2, ghostSize2 / 4, ghostSize2 / (8 / 3)); // (82, 100, 20, 30)

  var ghostSize3 = 100;
  var ghostPosX3 = 600;
  var ghostPosY3 = 400;

  textSize(24);
  text(technicalSoftware[randomIndex2], 200, 250);

  fill(255, 0, 127);
  ellipse(ghostPosX3, ghostPosY3, ghostSize3); // (100, 100, 80)
  fill(127, 0, 255);
  ellipse(ghostPosX3 - (ghostSize3 / (20 / 3)), ghostPosY3 - (ghostSize3 / (20 / 3)), ghostSize3 / 8); // (88, 88, 10)
  ellipse(ghostPosX3 + (ghostSize3 / 4), ghostPosY3 - (ghostSize3 / (20 / 3)), ghostSize3 / 8); // (120, 88, 10)
  rect(ghostPosX3 - (ghostSize3 / 40), ghostPosY3, ghostSize3 / 4, ghostSize3 / (8 / 3)); // (98, 100, 20, 30)

  if (mouseIsPressed && insideCircle(ghostPosX1, ghostPosY1, ghostSize1)) {
      randomIndex1 = int(random(14));
  }

  if (mouseIsPressed && insideCircle(ghostPosX2, ghostPosY2, ghostSize2)) {
      randomIndex2 = int(random(14));
  }

  if (mouseIsPressed && insideCircle(ghostPosX3, ghostPosY3, ghostSize3)) {
      randomIndex3 = int(random(14));
  }

  // testing the random display of array indexes(0 to 13)
  text(random(14), 800, 100);
  text(int(random(14)), 800, 150);

  fill("#FFFF00");
  text("Please click on a ghost to see its splash text", 400, 550);
}

function insideCircle(x, y, size) {
  return sqrt(sq(mouseX-x) + sq(mouseY-y)) < size / 2 ? true : false;
}

//var w = windowWidth;
//var h = windowHeight;
// testing length of the 3 arrays (the lengths are all 14)
console.log(technicalSoftware.length);
console.log(artisticSoftware.length);
console.log(ghostsOfLife.length);
//console.log(random(14));
