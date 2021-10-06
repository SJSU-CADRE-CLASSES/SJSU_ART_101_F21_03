let technicalSoftware = ["Computer \nProgramming", "OOP", "data structures", "algorithms", "OOD", "Assembly Language/Machine Code", "web development", "mobile app development", "game development", "Excel Sheets", "Database Management Systems", "Software Engineering", "Management Information Systems", "Informational Technology"];
//let bothSoftware = [""];
let artisticSoftware = ["Creative \nCoding", "3D Modeling", "web aesthetics", "game aesthetics", "digital animation", "Photo editing", "video editing", "digital painting", "Computer Graphics", "Augmented Reality", "Digital Media Art", "Graphic Design", "music producer", "Adobe Creative Cloud"];
let ghostsOfLife = ["Blue Ghost", "Boo", "You've been pranked", "Muni Munyi", "Ghost of Time", "Seoul Ghost", "basketcase", "determination", "passionate", "niceness", "quirky", "life lessons", "philosohpies", "knowledgeable"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // var ghostSize1 = 80; putting this here would cause error due to scope issues

  // seems like these variables are only predefined within the p5js functions?
  console.log(windowWidth); //1365
  console.log(windowHeight); //969
}

function draw() {
  background(250, 140, 60);
  noStroke();
  //console.log(width);
  //console.log(height);

  var ghostSize1 = 100;
  var ghostPosX1 = 400;
  var ghostPosY1 = 400;

  textSize(24);
  text(artisticSoftware[0], 550, 300);

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
  text(ghostsOfLife[0], 342, 300);

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
  text(technicalSoftware[0], 130, 300);

  fill(255, 0, 127);
  ellipse(ghostPosX3, ghostPosY3, ghostSize3); // (100, 100, 80)
  fill(127, 0, 255);
  ellipse(ghostPosX3 - (ghostSize3 / (20 / 3)), ghostPosY3 - (ghostSize3 / (20 / 3)), ghostSize3 / 8); // (88, 88, 10)
  ellipse(ghostPosX3 + (ghostSize3 / 4), ghostPosY3 - (ghostSize3 / (20 / 3)), ghostSize3 / 8); // (120, 88, 10)
  rect(ghostPosX3 - (ghostSize3 / 40), ghostPosY3, ghostSize3 / 4, ghostSize3 / (8 / 3)); // (98, 100, 20, 30)

  // testing the random display of array indexes(0 to 13)
  text(random(14), 100, 100);
}

//var w = windowWidth;
//var h = windowHeight;
// testing length of the 3 arrays (the lengths are all 14)
console.log(technicalSoftware.length);
console.log(artisticSoftware.length);
console.log(ghostsOfLife.length);
