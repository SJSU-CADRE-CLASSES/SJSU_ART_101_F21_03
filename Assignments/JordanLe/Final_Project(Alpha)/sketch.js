let technicalSoftware = ["Computer \nProgramming", "OOP", "data \nstructures", "algorithms", "OOD", "Assembly Language\n(Machine Code)", "web \ndevelopment", "mobile \napp \ndevelopment", "game \ndevelopment", "Excel \nSheets", "Database \nManagement \nSystems", "Software \nEngineering", "Management \nInformation \nSystems", "Informational \nTechnology"];
//let bothSoftware = [""];
let artisticSoftware = ["Creative \nCoding", "3D \nModeling", "web \naesthetics", "game \naesthetics", "digital \nanimation", "Photo \nediting", "video \nediting", "digital \npainting", "Computer \nGraphics", "Augmented \nReality", "Digital \nMedia \nArt", "Graphic \nDesign", "music \nproducer", "Adobe \nCreative \nCloud"];

let state = "main_menu";
let randomIndex;
let ghostPlayer;

let greenCells = [];
let blueCells = [];
let magentaCells = [];

let greenCells2 = [];
let blueCells2 = [];
let magentaCells2 = [];

let greenCells3 = [];
let blueCells3 = [];
let magentaCells3 = [];

let greenCells4 = [];
let blueCells4 = [];
let magentaCells4 = [];

let greenCells5 = [];
let blueCells5 = [];
let magentaCells5 = [];

let growthValue = 0;
let respawnTime = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ghostPlayer = new GhostPlayer(300, 300, 40);

  for (let i = 0; i < 8; i++) {
    greenCells.push(new GreenSoftwareCell(random(width), random(height), 20));
  }

  for (let i = 0; i < 8; i++) {
    blueCells.push(new BlueSoftwareCell(random(width), random(height), 20));
  }

  for (let i = 0; i < 8; i++) {
    magentaCells.push(new MagentaSoftwareCell(random(width), random(height), 20));
  }

  greenCells2[0] = new GreenSoftwareCell(random(width), random(height), 60);
  blueCells2[0] = new BlueSoftwareCell(random(width), random(height), 60);
  magentaCells2[0] = new MagentaSoftwareCell(random(width), random(height), 60);

  // may not work if this function only runs once
  // if (growthValue >= 8 && growthValue < 16) {
  //   // summon the next set of cells
  //   for (let i = 1; i < 8; i++) {
  //     greenCells2.push(new GreenSoftwareCell(random(width), random(height), 60));
  //   }
  //
  //   for (let i = 1; i < 8; i++) {
  //     blueCells2.push(new BlueSoftwareCell(random(width), random(height), 60));
  //   }
  //
  //   for (let i = 1; i < 8; i++) {
  //     magentaCells2.push(new MagentaSoftwareCell(random(width), random(height), 60));
  //   }
  //
  //   for (let i = 1; i < greenCells2.length; i++) {
  //     greenCells2[i].display();
  //     greenCells2[i].move();
  //   }
  //
  //   for (let i = 1; i < blueCells2.length; i++) {
  //     blueCells2[i].display();
  //     blueCells2[i].move();
  //   }
  //
  //   for (let i = 1; i < magentaCells2.length; i++) {
  //     magentaCells2[i].display();
  //     magentaCells2[i].move();
  //   }
  // }

  // prep next set of cells
  for (let i = 1; i < 8; i++) {
    greenCells2.push(new GreenSoftwareCell(random(width), random(height), 60));
  }

  for (let i = 1; i < 8; i++) {
    blueCells2.push(new BlueSoftwareCell(random(width), random(height), 60));
  }

  for (let i = 1; i < 8; i++) {
    magentaCells2.push(new MagentaSoftwareCell(random(width), random(height), 60));
  }

  greenCells3[0] = new GreenSoftwareCell(random(width), random(height), 100);
  blueCells3[0] = new BlueSoftwareCell(random(width), random(height), 100);
  magentaCells3[0] = new MagentaSoftwareCell(random(width), random(height), 100);

  // prep next set of cells
  for (let i = 1; i < 8; i++) {
    greenCells3.push(new GreenSoftwareCell(random(width), random(height), 100));
  }

  for (let i = 1; i < 8; i++) {
    blueCells3.push(new BlueSoftwareCell(random(width), random(height), 100));
  }

  for (let i = 1; i < 8; i++) {
    magentaCells3.push(new MagentaSoftwareCell(random(width), random(height), 100));
  }

  greenCells4[0] = new GreenSoftwareCell(random(width), random(height), 140);
  blueCells4[0] = new BlueSoftwareCell(random(width), random(height), 140);
  magentaCells4[0] = new MagentaSoftwareCell(random(width), random(height), 140);

  // prep next set of cells
  for (let i = 1; i < 8; i++) {
    greenCells4.push(new GreenSoftwareCell(random(width), random(height), 140));
  }

  for (let i = 1; i < 8; i++) {
    blueCells4.push(new BlueSoftwareCell(random(width), random(height), 140));
  }

  for (let i = 1; i < 8; i++) {
    magentaCells4.push(new MagentaSoftwareCell(random(width), random(height), 140));
  }

  greenCells5[0] = new GreenSoftwareCell(random(width), random(height), 180);
  blueCells5[0] = new BlueSoftwareCell(random(width), random(height), 180);
  magentaCells5[0] = new MagentaSoftwareCell(random(width), random(height), 180);

  // prep next set of cells
  for (let i = 1; i < 4; i++) {
    greenCells5.push(new GreenSoftwareCell(random(width), random(height), 180));
  }

  for (let i = 1; i < 4; i++) {
    blueCells5.push(new BlueSoftwareCell(random(width), random(height), 180));
  }

  for (let i = 1; i < 4; i++) {
    magentaCells5.push(new MagentaSoftwareCell(random(width), random(height), 180));
  }
}

function draw() {
  console.log(state);
  console.log(growthValue);
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
    case "you_lose":
      youLose();
      break;
    default:
      youWin();
  }

  // only make the player visible AND move with controls while playing the game
  if (state != "main_menu" && state != "you_win" && state != "you_lose") {
    // to make sure the ghost player is at the minimum size for every restart
    if (growthValue < 8) {
      ghostPlayer.size = 40;
      ghostPlayer.speed = 1;
    }

    ghostPlayer.display();
    ghostPlayer.move();

    // exists throughout the whole gameplay //

    firstSetOfSoftwareCells();

    // // throws error if object at the 0th index gets removed because the program cannot read something that's empty(NULL)
    // greenCells2[0].display();
    // greenCells2[0].move();
    // blueCells2[0].display();
    // blueCells2[0].move();
    // magentaCells2[0].display();
    // magentaCells2[0].move();

    secondSetOfSoftwareCells();

    // exists throughout the whole gameplay //

    thirdSetOfSoftwareCells();

    fourthSetOfSoftwareCells();

    fifthSetOfSoftwareCells();

    if (growthValue < 8) {

      // ghost player eaten upon contact on bigger cell's center
      if (dist(ghostPlayer.xpos, ghostPlayer.ypos, greenCells2[0].xpos, greenCells2[0].ypos) < greenCells2[0].size / 2) state = "you_lose";
      if (dist(ghostPlayer.xpos, ghostPlayer.ypos, blueCells2[0].xpos, blueCells2[0].ypos) < blueCells2[0].size / 2) state = "you_lose";
      if (dist(ghostPlayer.xpos, ghostPlayer.ypos, magentaCells2[0].xpos, magentaCells2[0].ypos) < magentaCells2[0].size / 2) state = "you_lose";

    } else if (growthValue >= 8 && growthValue < 16) {

      ghostPlayer.size = 80;
      ghostPlayer.speed = 1.5;

      if (dist(ghostPlayer.xpos, ghostPlayer.ypos, greenCells3[0].xpos, greenCells3[0].ypos) < greenCells3[0].size / 2) state = "you_lose";
      if (dist(ghostPlayer.xpos, ghostPlayer.ypos, blueCells3[0].xpos, blueCells3[0].ypos) < blueCells3[0].size / 2) state = "you_lose";
      if (dist(ghostPlayer.xpos, ghostPlayer.ypos, magentaCells3[0].xpos, magentaCells3[0].ypos) < magentaCells3[0].size / 2) state = "you_lose";

    } else if (growthValue >= 16 && growthValue < 24) {

      ghostPlayer.size = 120;
      ghostPlayer.speed = 2;

      if (dist(ghostPlayer.xpos, ghostPlayer.ypos, greenCells4[0].xpos, greenCells4[0].ypos) < greenCells4[0].size / 2) state = "you_lose";
      if (dist(ghostPlayer.xpos, ghostPlayer.ypos, blueCells4[0].xpos, blueCells4[0].ypos) < blueCells4[0].size / 2) state = "you_lose";
      if (dist(ghostPlayer.xpos, ghostPlayer.ypos, magentaCells4[0].xpos, magentaCells4[0].ypos) < magentaCells4[0].size / 2) state = "you_lose";

    } else if (growthValue >= 24 && growthValue < 32) {

      ghostPlayer.size = 160;
      ghostPlayer.speed = 3;

      if (dist(ghostPlayer.xpos, ghostPlayer.ypos, greenCells5[0].xpos, greenCells5[0].ypos) < greenCells5[0].size / 2) state = "you_lose";
      if (dist(ghostPlayer.xpos, ghostPlayer.ypos, blueCells5[0].xpos, blueCells5[0].ypos) < blueCells5[0].size / 2) state = "you_lose";
      if (dist(ghostPlayer.xpos, ghostPlayer.ypos, magentaCells5[0].xpos, magentaCells5[0].ypos) < magentaCells5[0].size / 2) state = "you_lose";

    } else if (growthValue >= 32 && growthValue < 40) {

      ghostPlayer.size = 200;
      ghostPlayer.speed = 4;

    }
  } // end of game-play scope

  //if (state == "you_lose")  youLose();
  // console.log(millis());
}

function mousePressed() {
  switch (state) {
    case "main_menu":
      state = "pre_stage";
      break;
    case "pre_stage":
      state = "main_menu";
      break;
    case "you_lose":
      state = "main_menu";
      break;
    case "you_win":
      state = "main_menu";
      break;
  }
}

function keyPressed() {

}

function mainMenu() {
  growthValue = 0; // resets score

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
  // fill(0, 200, 255);
  // textAlign(CENTER);
  // textSize(width / 24);
  // text("Click anywhere to go to the lower stages", width / 2, height / 6);

  // used conditional operators so that the player doesn't have to stay in the same background even when the player ate +2 cells at score 7
  if (growthValue >= 8 && growthValue < 16) state = "lower_stages";
}

function lowerStages() {
  background(64, 0, 128);
  // fill(120, 200, 255);
  // textAlign(CENTER);
  // textSize(width / 24);
  // text("Click anywhere to go to the upperstages", width / 2, height / 6);

  if (growthValue >= 24 && growthValue < 32) state = "upper_stages";
}

function upperStages() {
  background(128, 0, 64);
  // fill(255, 200, 120);
  // textAlign(CENTER);
  // textSize(width / 24);
  // text("Click anywhere to win the game", width / 2, height / 6);
  if (growthValue >= 40) {
    state = "you_win";
    randomIndex = int(random(3));
  }
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

function firstSetOfSoftwareCells() {
  // need to use .length in order for the program to not display an object that's index out of bounds
  for (let i = 0; i < greenCells.length; i++) {
    greenCells[i].display();
    greenCells[i].move();
  }

  for (let i = 0; i < blueCells.length; i++) {
    blueCells[i].display();
    blueCells[i].move();
  }

  for (let i = 0; i < magentaCells.length; i++) {
    magentaCells[i].display();
    magentaCells[i].move();
  }

  for (let i = greenCells.length - 1; i >= 0; i--) {
    // cells eaten upon edge contact
    if (dist(ghostPlayer.xpos, ghostPlayer.ypos, greenCells[i].xpos, greenCells[i].ypos) < (ghostPlayer.size + greenCells[i].size) / 2) {
      // remove one object starting at ith index
      greenCells.splice(i, 1);

      growthValue += 1;
      if (greenCells.length != 8) {
        if (round(millis() / 1000) % 4 == 0) {
          greenCells.push(new GreenSoftwareCell(random(width), random(height), 20));
        }
      }
    }

  }

  for (let i = blueCells.length - 1; i >= 0; i--) {
    if (dist(ghostPlayer.xpos, ghostPlayer.ypos, blueCells[i].xpos, blueCells[i].ypos) < (ghostPlayer.size + blueCells[i].size) / 2) {
      // remove one object starting at ith index
      blueCells.splice(i, 1);

      growthValue += 1;
      if (blueCells.length != 8) {
        if (round(millis() / 1000) % 4 == 0) {
          blueCells.push(new BlueSoftwareCell(random(width), random(height), 20));
        }
      }
    }

  }

  for (let i = magentaCells.length - 1; i >= 0; i--) {
    if (dist(ghostPlayer.xpos, ghostPlayer.ypos, magentaCells[i].xpos, magentaCells[i].ypos) < (ghostPlayer.size + magentaCells[i].size) / 2) {
      // remove one object starting at ith index
      magentaCells.splice(i, 1);

      growthValue += 1;
      if (magentaCells.length != 8) {
        if (round(millis() / 1000) % 4 == 0) {
          magentaCells.push(new MagentaSoftwareCell(random(width), random(height), 20));
        }
      }
    }

  }
}

function secondSetOfSoftwareCells() {
  if (greenCells2.length > 0) {
    greenCells2[0].display();
    greenCells2[0].move();
  }

  if (blueCells2.length > 0) {
    blueCells2[0].display();
    blueCells2[0].move();
  }

  if (magentaCells2.length > 0) {
    magentaCells2[0].display();
    magentaCells2[0].move();
  }

  if (growthValue >= 8) {
    // summon the next set of cells (+7 cells)
    for (let i = 1; i < greenCells2.length; i++) {
      greenCells2[i].display();
      greenCells2[i].move();
    }

    // test for collision; if collision is true then get rid of a software cell object in the software cell array
    for (let i = greenCells2.length - 1; i >= 0; i--) {
      if (dist(ghostPlayer.xpos, ghostPlayer.ypos, greenCells2[i].xpos, greenCells2[i].ypos) < (ghostPlayer.size + greenCells2[i].size) / 2) {
        // remove one object starting at ith index
        greenCells2.splice(i, 1);

        growthValue += 1;
        // console.log("consumed!");
        // console.log(greenCells2.length);
        if (greenCells2.length != 8) {
          if (round(millis() / 1000) % 8 == 0) {
            greenCells2.push(new GreenSoftwareCell(random(width), random(height), 60));
          }
        }
      }

    }

    // summon the next set of cells (+7 cells)
    for (let i = 1; i < blueCells2.length; i++) {
      blueCells2[i].display();
      blueCells2[i].move();
    }

    // test for collision; if collision is true then get rid of a software cell object in the software cell array
    for (let i = blueCells2.length - 1; i >= 0; i--) {
      if (dist(ghostPlayer.xpos, ghostPlayer.ypos, blueCells2[i].xpos, blueCells2[i].ypos) < (ghostPlayer.size + blueCells2[i].size) / 2) {
        // remove one object starting at ith index
        blueCells2.splice(i, 1);

        growthValue += 1;
        // console.log("consumed!");
        // console.log(blueCells2.length);
        if (blueCells2.length != 8) {
          if (round(millis() / 1000) % 8 == 0) {
            blueCells2.push(new BlueSoftwareCell(random(width), random(height), 60));
          }
        }
      }

    }

    // summon the next set of cells (+7 cells)
    for (let i = 1; i < magentaCells2.length; i++) {
      magentaCells2[i].display();
      magentaCells2[i].move();
    }

    // test for collision; if collision is true then get rid of a software cell object in the software cell array
    for (let i = magentaCells2.length - 1; i >= 0; i--) {
      if (dist(ghostPlayer.xpos, ghostPlayer.ypos, magentaCells2[i].xpos, magentaCells2[i].ypos) < (ghostPlayer.size + magentaCells2[i].size) / 2) {
        // remove one object starting at ith index
        magentaCells2.splice(i, 1);

        growthValue += 1;
        // console.log("consumed!");
        // console.log(magentaCells2.length);
        if (magentaCells2.length != 8) {
          if (round(millis() / 1000) % 8 == 0) {
            magentaCells2.push(new MagentaSoftwareCell(random(width), random(height), 60));
          }
        }
      }

    }

  }
}

function thirdSetOfSoftwareCells() {
  if (growthValue >= 8) {
    if (greenCells3.length > 0) {
      greenCells3[0].display();
      greenCells3[0].move();
    }

    if (blueCells3.length > 0) {
      blueCells3[0].display();
      blueCells3[0].move();
    }

    if (magentaCells3.length > 0) {
      magentaCells3[0].display();
      magentaCells3[0].move();
    }

    if (growthValue >= 16) {
      // summon the next set of cells (+7 cells)
      for (let i = 1; i < greenCells3.length; i++) {
        greenCells3[i].display();
        greenCells3[i].move();
      }

      // test for collision; if collision is true then get rid of a software cell object in the software cell array
      for (let i = greenCells3.length - 1; i >= 0; i--) {
        if (dist(ghostPlayer.xpos, ghostPlayer.ypos, greenCells3[i].xpos, greenCells3[i].ypos) < (ghostPlayer.size + greenCells3[i].size) / 2) {
          // remove one object starting at ith index
          greenCells3.splice(i, 1);

          growthValue += 1;
          // console.log("consumed!");
          // console.log(greenCells2.length);
          if (greenCells3.length != 8) {
            if (round(millis() / 1000) % 8 == 0) {
              greenCells3.push(new GreenSoftwareCell(random(width), random(height), 60));
            }
          }
        }

      }

      // summon the next set of cells (+7 cells)
      for (let i = 1; i < blueCells3.length; i++) {
        blueCells3[i].display();
        blueCells3[i].move();
      }

      // test for collision; if collision is true then get rid of a software cell object in the software cell array
      for (let i = blueCells3.length - 1; i >= 0; i--) {
        if (dist(ghostPlayer.xpos, ghostPlayer.ypos, blueCells3[i].xpos, blueCells3[i].ypos) < (ghostPlayer.size + blueCells3[i].size) / 2) {
          // remove one object starting at ith index
          blueCells3.splice(i, 1);

          growthValue += 1;
          // console.log("consumed!");
          // console.log(blueCells2.length);
          if (blueCells3.length != 8) {
            if (round(millis() / 1000) % 8 == 0) {
              blueCells3.push(new BlueSoftwareCell(random(width), random(height), 60));
            }
          }
        }

      }

      // summon the next set of cells (+7 cells)
      for (let i = 1; i < magentaCells3.length; i++) {
        magentaCells3[i].display();
        magentaCells3[i].move();
      }

      // test for collision; if collision is true then get rid of a software cell object in the software cell array
      for (let i = magentaCells3.length - 1; i >= 0; i--) {
        if (dist(ghostPlayer.xpos, ghostPlayer.ypos, magentaCells3[i].xpos, magentaCells3[i].ypos) < (ghostPlayer.size + magentaCells3[i].size) / 2) {
          // remove one object starting at ith index
          magentaCells3.splice(i, 1);

          growthValue += 1;
          // console.log("consumed!");
          // console.log(magentaCells2.length);
          if (magentaCells3.length != 8) {
            if (round(millis() / 1000) % 8 == 0) {
              magentaCells3.push(new MagentaSoftwareCell(random(width), random(height), 60));
            }
          }
        }

      }

    }
  }
}

function fourthSetOfSoftwareCells() {
  if (growthValue >= 16) {
    if (greenCells4.length > 0) {
      greenCells4[0].display();
      greenCells4[0].move();
    }

    if (blueCells4.length > 0) {
      blueCells4[0].display();
      blueCells4[0].move();
    }

    if (magentaCells4.length > 0) {
      magentaCells4[0].display();
      magentaCells4[0].move();
    }

    if (growthValue >= 24) {
      // summon the next set of cells (+7 cells)
      for (let i = 1; i < greenCells4.length; i++) {
        greenCells4[i].display();
        greenCells4[i].move();
      }

      // test for collision; if collision is true then get rid of a software cell object in the software cell array
      for (let i = greenCells4.length - 1; i >= 0; i--) {
        if (dist(ghostPlayer.xpos, ghostPlayer.ypos, greenCells4[i].xpos, greenCells4[i].ypos) < (ghostPlayer.size + greenCells4[i].size) / 2) {
          // remove one object starting at ith index
          greenCells4.splice(i, 1);

          growthValue += 1;
          // console.log("consumed!");
          // console.log(greenCells2.length);
          if (greenCells4.length != 8) {
            if (round(millis() / 1000) % 8 == 0) {
              greenCells4.push(new GreenSoftwareCell(random(width), random(height), 60));
            }
          }
        }

      }

      // summon the next set of cells (+7 cells)
      for (let i = 1; i < blueCells4.length; i++) {
        blueCells4[i].display();
        blueCells4[i].move();
      }

      // test for collision; if collision is true then get rid of a software cell object in the software cell array
      for (let i = blueCells4.length - 1; i >= 0; i--) {
        if (dist(ghostPlayer.xpos, ghostPlayer.ypos, blueCells4[i].xpos, blueCells4[i].ypos) < (ghostPlayer.size + blueCells4[i].size) / 2) {
          // remove one object starting at ith index
          blueCells4.splice(i, 1);

          growthValue += 1;
          // console.log("consumed!");
          // console.log(blueCells2.length);
          if (blueCells4.length != 8) {
            if (round(millis() / 1000) % 8 == 0) {
              blueCells4.push(new BlueSoftwareCell(random(width), random(height), 60));
            }
          }
        }

      }

      // summon the next set of cells (+7 cells)
      for (let i = 1; i < magentaCells4.length; i++) {
        magentaCells4[i].display();
        magentaCells4[i].move();
      }

      // test for collision; if collision is true then get rid of a software cell object in the software cell array
      for (let i = magentaCells4.length - 1; i >= 0; i--) {
        if (dist(ghostPlayer.xpos, ghostPlayer.ypos, magentaCells4[i].xpos, magentaCells4[i].ypos) < (ghostPlayer.size + magentaCells4[i].size) / 2) {
          // remove one object starting at ith index
          magentaCells4.splice(i, 1);

          growthValue += 1;
          // console.log("consumed!");
          // console.log(magentaCells2.length);
          if (magentaCells4.length != 8) {
            if (round(millis() / 1000) % 8 == 0) {
              magentaCells4.push(new MagentaSoftwareCell(random(width), random(height), 60));
            }
          }
        }

      }

    }
  }
}

function fifthSetOfSoftwareCells() {
  // software cell's first appearance
  if (growthValue >= 24) {
    if (greenCells5.length > 0) {
      greenCells5[0].display();
      greenCells5[0].move();
    }

    if (blueCells5.length > 0) {
      blueCells5[0].display();
      blueCells5[0].move();
    }

    if (magentaCells5.length > 0) {
      magentaCells5[0].display();
      magentaCells5[0].move();
    }

    // when software cell becomes your prey
    if (growthValue >= 32) {
      // summon the next set of cells
      for (let i = 1; i < greenCells5.length; i++) {
        greenCells5[i].display();
        greenCells5[i].move();
      }

      for (let i = 1; i < blueCells5.length; i++) {
        blueCells5[i].display();
        blueCells5[i].move();
      }

      for (let i = 1; i < magentaCells5.length; i++) {
        magentaCells5[i].display();
        magentaCells5[i].move();
      }

      // test for collision; if collision is true then get rid of a software cell object in the software cell array
      for (let i = greenCells5.length - 1; i >= 0; i--) {
        if (dist(ghostPlayer.xpos, ghostPlayer.ypos, greenCells5[i].xpos, greenCells5[i].ypos) < (ghostPlayer.size + greenCells5[i].size) / 2) {
          // remove one object starting at ith index
          greenCells5.splice(i, 1);

          growthValue += 1;
          if (greenCells5.length != 4) {
            if (round(millis() / 1000) % 64 == 0) {
              greenCells5.push(new GreenSoftwareCell(random(width), random(height), 180));
            }
          }
        }

      }

      for (let i = blueCells5.length - 1; i >= 0; i--) {
        if (dist(ghostPlayer.xpos, ghostPlayer.ypos, blueCells5[i].xpos, blueCells5[i].ypos) < (ghostPlayer.size + blueCells5[i].size) / 2) {
          // remove one object starting at ith index
          blueCells5.splice(i, 1);

          growthValue += 1;
          if (blueCells5.length != 4) {
            if (round(millis() / 1000) % 64 == 0) {
              blueCells5.push(new BlueSoftwareCell(random(width), random(height), 180));
            }
          }
        }

      }

      for (let i = magentaCells5.length - 1; i >= 0; i--) {
        if (dist(ghostPlayer.xpos, ghostPlayer.ypos, magentaCells5[i].xpos, magentaCells5[i].ypos) < (ghostPlayer.size + magentaCells5[i].size) / 2) {
          // remove one object starting at ith index
          magentaCells5.splice(i, 1);

          growthValue += 1;
          if (magentaCells5.length != 4) {
            if (round(millis() / 1000) % 64 == 0) {
              magentaCells5.push(new MagentaSoftwareCell(random(width), random(height), 180));
            }
          }
        }

      }
    }
  }
}

// fill(60, 140, 250); blue ghost body
// fill(200, 230, 250); blue ghost face
// fill(0, 250, 0); green ghost body
// fill(0, 120, 0); green ghost face
// fill(255, 0, 127); magenta ghost body
// fill(127, 0, 255); magenta ghost face

// to calculate the distance/collision: https://p5js.org/reference/#/p5/dist
