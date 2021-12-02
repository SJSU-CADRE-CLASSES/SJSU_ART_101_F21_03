let technicalSoftware = ["Computer \nProgramming", "OOP", "data \nstructures", "algorithms", "OOD", "Assembly Language\n(Machine Code)", "web \ndevelopment", "mobile \napp \ndevelopment", "game \ndevelopment", "Excel \nSheets", "Database \nManagement \nSystems", "Software \nEngineering", "Management \nInformation \nSystems", "Informational \nTechnology"];
//let bothSoftware = [""];
let artisticSoftware = ["Creative \nCoding", "3D \nModeling", "web \naesthetics", "game \naesthetics", "digital \nanimation", "Photo \nediting", "video \nediting", "digital \npainting", "Computer \nGraphics", "Augmented \nReality", "Digital \nMedia \nArt", "Graphic \nDesign", "music \nproducer", "Adobe \nCreative \nCloud"];

let state = "main_menu";
let randomIndex;
let ghostPlayer;

let greenCell;
let blueCell;
let magentaCell;

let greenCell2;
let blueCell2;
let magentaCell2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ghostPlayer = new GhostPlayer(300, 300, 40);

  greenCell = new GreenSoftwareCell(random(width), random(height), 20);
  blueCell = new BlueSoftwareCell(random(width), random(height), 20);
  magentaCell = new MagentaSoftwareCell(random(width), random(height), 20);

  greenCell2 = new GreenSoftwareCell(random(width), random(height), 80);
  blueCell2 = new BlueSoftwareCell(random(width), random(height), 80);
  magentaCell2 = new MagentaSoftwareCell(random(width), random(height), 80);
}

function draw() {
  console.log(state);
  switch (state) {
    case "main_menu":
      mainMenu();
      break;
    case "pre_stage":
      preStage();
      break;
    case "lower_stages":
      lowerStages();
      break;
    case "upper_stages":
      upperStages();
      break;
    default:
      youWin();
  }
  // only make the player visible AND move with controls while playing the game
  if (state != "main_menu" && state != "you_win" && state != "you_lose") {
    ghostPlayer.display();
    ghostPlayer.move();

    greenCell.display();
    greenCell.move();
    blueCell.display();
    blueCell.move();
    magentaCell.display();
    magentaCell.move();

    greenCell2.display();
    greenCell2.move();
    blueCell2.display();
    blueCell2.move();
    magentaCell2.display();
    magentaCell2.move();

    if (dist(ghostPlayer.xpos, ghostPlayer.ypos, greenCell2.xpos, greenCell2.ypos) < greenCell2.size / 2) state = "you_lose";
    if (dist(ghostPlayer.xpos, ghostPlayer.ypos, blueCell2.xpos, blueCell2.ypos) < blueCell2.size / 2) state = "you_lose";
    if (dist(ghostPlayer.xpos, ghostPlayer.ypos, magentaCell2.xpos, magentaCell2.ypos) < magentaCell2.size / 2) state = "you_lose";

  }
  if (state == "you_lose")  youLose();

}

function mousePressed() {
  switch (state) {
    case "main_menu":
      state = "pre_stage";
      break;
    case "pre_stage":
      state = "lower_stages";
      break;
    case "lower_stages":
      state = "upper_stages";
      break;
    case "upper_stages":
      state = "you_win";
      randomIndex = int(random(3));
      break;
    default:
      state = "main_menu";
  }
}

function keyPressed() {

}

function mainMenu() {
  background(0);
  fill(255);
  textAlign(CENTER);
  textSize(width / 24);
  text("Software Cell Frenzy", width / 2, height / 6);
  textSize(width / 48);
  text("Click anywhere to start", width / 2, height / 3);
}

function preStage() {
  background(0, 0, 32);
  fill(0, 200, 255);
  textAlign(CENTER);
  textSize(width / 24);
  text("Click anywhere to go to the lower stages", width / 2, height / 6);
}

function lowerStages() {
  background(64, 0, 128);
  fill(120, 200, 255);
  textAlign(CENTER);
  textSize(width / 24);
  text("Click anywhere to go to the upperstages", width / 2, height / 6);
}

function upperStages() {
  background(128, 0, 64);
  fill(255, 200, 120);
  textAlign(CENTER);
  textSize(width / 24);
  text("Click anywhere to win the game", width / 2, height / 6);
}

function youLose() {
  background(64, 0, 32);
  fill(255, 0, 0);
  textAlign(CENTER);
  textSize(width / 24);
  text("Game Over!", width / 2, height / 6);
  textSize(width / 48);
  text("Click to go back to main menu", width / 2, height / 3);
}

function youWin() {
  switch (randomIndex) {
    case 0:
      background(230, 250, 230);
      fill(0, 250, 0);
      break;
    case 1:
      background(230, 230, 250);
      fill(60, 140, 250);
      break;
    case 2:
      background(250, 230, 230);
      fill(255, 0, 127);
  }

  textAlign(CENTER);
  textSize(width / 24);
  text("You Win!", width / 2, height / 6);
  textSize(width / 48);
  text("Click anywhere to go back to main menu", width / 2, height / 3);
}

// fill(60, 140, 250); blue ghost body
// fill(200, 230, 250); blue ghost face
// fill(0, 250, 0); green ghost body
// fill(0, 120, 0); green ghost face
// fill(255, 0, 127); magenta ghost body
// fill(127, 0, 255); magenta ghost face
