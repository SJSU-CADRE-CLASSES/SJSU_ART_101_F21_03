let technicalSoftware = ["Computer \nProgramming", "OOP", "data \nstructures", "algorithms", "OOD", "Assembly Language\n(Machine Code)", "web \ndevelopment", "mobile \napp \ndevelopment", "game \ndevelopment", "Excel \nSheets", "Database \nManagement \nSystems", "Software \nEngineering", "Management \nInformation \nSystems", "Informational \nTechnology"];
//let bothSoftware = [""];
let artisticSoftware = ["Creative \nCoding", "3D \nModeling", "web \naesthetics", "game \naesthetics", "digital \nanimation", "Photo \nediting", "video \nediting", "digital \npainting", "Computer \nGraphics", "Augmented \nReality", "Digital \nMedia \nArt", "Graphic \nDesign", "music \nproducer", "Adobe \nCreative \nCloud"];

let state = "main_menu";
let randomIndex;
let ghostPlayer;
let startButton;
let howToPlayButton;

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

let softwareCellValues = [];
let mainMenuButton;
let softwareOccupationsButtonButton;
let softwareOccupationsDiv;
let backToWinButton;

let technicalGhost1;
let hybridGhost1;
let artisticGhost1;
let technicalGhost2;
let hybridGhost2;
let artisticGhost2;

var ddi = document.getElementsByClassName("dropdownInfo");

let beginningMusic1;
let beginningMusic2;
let middleMusic1;
let middleMusic2;
let endingMusic;
let loseSoundEffect;

let bm1 = true;
let bm2 = false;
let mm1 = false;
let mm2 = false;
let em = false;
let lose = false;

function preload() {
  soundFormats('mp3', 'ogg');
  beginningMusic1 = loadSound('Music/bensound-summer.mp3');
  beginningMusic2 = loadSound('Music/bensound-summer.mp3');
  middleMusic1 = loadSound('Music/bensound-creativeminds.mp3');
  middleMusic2 = loadSound('Music/Jim_Yosef-Link[NCS_Release].mp3');  // https://www.youtube.com/watch?v=9iHM6X6uUH8
  endingMusic = loadSound('Music/Fade_Away(Instrumental).mp3');  // https://www.youtube.com/watch?v=f6fPypQ6blA
  loseSoundEffect = loadSound('Music/roblox-death-sound.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ghostPlayer = new GhostPlayer(300, 300, 40);

  technicalGhost1 = new GhostPlayer(windowWidth / 3, windowHeight / 2, 200);
  hybridGhost1 = new GhostPlayer(windowWidth / 2, windowHeight / 2, 200);
  artisticGhost1 = new GhostPlayer(windowWidth / 1.5, windowHeight / 2, 200);


  technicalGhost2 = new GhostPlayer(windowWidth / 2, windowHeight / 2, 300);
  hybridGhost2 = new GhostPlayer(windowWidth / 2, windowHeight / 2, 300);
  artisticGhost2 = new GhostPlayer(windowWidth / 2, windowHeight / 2, 300);

  startButton = createButton("Start Game");
  startButton.mousePressed(clickToStartGame);
  startButton.position(windowWidth / 3, windowHeight / 1.25);
  startButton.size(windowWidth / 12, windowHeight / 12);
  startButton.style("font-size", (windowWidth / 48) + "px"); // https://p5js.org/reference/#/p5.Element/style
  startButton.style("transition", "0.4s");

  mainMenuButton = createButton("Main Menu");
  mainMenuButton.mousePressed(clickForTitlePage);
  mainMenuButton.position(windowWidth / 3, windowHeight / 1.25);
  mainMenuButton.size(windowWidth / 12, windowHeight / 12);
  mainMenuButton.style("font-size", (windowWidth / 48) + "px");
  mainMenuButton.style("transition", "0.4s");

  howToPlayButton = createButton("How to Play");
  howToPlayButton.mousePressed(clickForTutorial);
  howToPlayButton.position(windowWidth / 1.5, windowHeight / 1.25);
  howToPlayButton.size(windowWidth / 12, windowHeight / 12);
  howToPlayButton.style("font-size", (windowWidth / 48) + "px"); // https://p5js.org/reference/#/p5.Element/style
  howToPlayButton.style("transition", "0.4s");

  softwareOccupationsButton = createButton("Career paths you may encounter...");
  softwareOccupationsButton.mousePressed(clickForsoftwareOccupationsButton);
  softwareOccupationsButton.position(windowWidth / 1.5, windowHeight / 1.25);
  softwareOccupationsButton.size(windowWidth / 6, windowHeight / 6);
  softwareOccupationsButton.style("font-size", (windowWidth / 48) + "px");
  softwareOccupationsButton.style("transition", "0.4s");

  softwareOccupationsDiv = createDiv();
  softwareOccupationsDiv.class("dropdownInfo");

  backToWinButton = createButton("Go back");
  backToWinButton.mousePressed(clickToGoBackToWinPage);
  backToWinButton.position(windowWidth / 2, windowHeight / 1.25);
  backToWinButton.size(windowWidth / 12, windowHeight / 12);
  backToWinButton.style("font-size", (windowWidth / 48) + "px");
  backToWinButton.style("transition", "0.4s");

  // startButton = createButton("Start Game");
  // startButton.mousePressed(clickToStartGame);

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
  // console.log(state);
  //console.log(growthValue);
  switch (state) {
    case "main_menu":
      mainMenu();
      break;
    case "tutorial":
      howToPlay();
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
    case "software_occupations":
      softwareOccupations();
      break;
    default:
      youWin();
  }

  // only make the player visible AND move with controls while playing the game
  if (state != "main_menu" && state != "you_win" && state != "you_lose" && state != "software_occupations" && state != "tutorial") {
    // to make sure the ghost player is at the minimum size for every restart
    if (growthValue < 8) {
      ghostPlayer.size = 40;
      ghostPlayer.speed = 1;

      //console.log(`r1: ${ghostPlayer.r1}, g1: ${ghostPlayer.g1}, b1: ${ghostPlayer.b1}`);
      //console.log(`r2: ${ghostPlayer.r2}, g2: ${ghostPlayer.g2}, b2: ${ghostPlayer.b2}`);
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
      // need these test cases, otherwise the program would compare the player to something that no longer exists
      // ghost player eaten upon contact on bigger cell's center
      if (greenCells2.length > 0)
        if (dist(ghostPlayer.xpos, ghostPlayer.ypos, greenCells2[0].xpos, greenCells2[0].ypos) < greenCells2[0].size / 2) state = "you_lose";
      if (blueCells2.length > 0)
        if (dist(ghostPlayer.xpos, ghostPlayer.ypos, blueCells2[0].xpos, blueCells2[0].ypos) < blueCells2[0].size / 2) state = "you_lose";
      if (magentaCells2.length > 0)
        if (dist(ghostPlayer.xpos, ghostPlayer.ypos, magentaCells2[0].xpos, magentaCells2[0].ypos) < magentaCells2[0].size / 2) state = "you_lose";

    } else if (growthValue >= 8 && growthValue < 16) {

      ghostPlayer.size = 80;
      ghostPlayer.speed = 1.5;

      // ghost player eaten upon contact on bigger cell's center
      if (greenCells3.length > 0)
        if (dist(ghostPlayer.xpos, ghostPlayer.ypos, greenCells3[0].xpos, greenCells3[0].ypos) < greenCells3[0].size / 2) state = "you_lose";
      if (blueCells3.length > 0)
        if (dist(ghostPlayer.xpos, ghostPlayer.ypos, blueCells3[0].xpos, blueCells3[0].ypos) < blueCells3[0].size / 2) state = "you_lose";
      if (magentaCells3.length > 0)
        if (dist(ghostPlayer.xpos, ghostPlayer.ypos, magentaCells3[0].xpos, magentaCells3[0].ypos) < magentaCells3[0].size / 2) state = "you_lose";

    } else if (growthValue >= 16 && growthValue < 24) {

      ghostPlayer.size = 120;
      ghostPlayer.speed = 2;

      // ghost player eaten upon contact on bigger cell's center
      if (greenCells4.length > 0)
        if (dist(ghostPlayer.xpos, ghostPlayer.ypos, greenCells4[0].xpos, greenCells4[0].ypos) < greenCells4[0].size / 2)
          state = "you_lose";
      if (blueCells4.length > 0)
        if (dist(ghostPlayer.xpos, ghostPlayer.ypos, blueCells4[0].xpos, blueCells4[0].ypos) < blueCells4[0].size / 2)
          state = "you_lose";
      if (magentaCells4.length > 0)
        if (dist(ghostPlayer.xpos, ghostPlayer.ypos, magentaCells4[0].xpos, magentaCells4[0].ypos) < magentaCells4[0].size / 2)
          state = "you_lose";

    } else if (growthValue >= 24 && growthValue < 32) {

      ghostPlayer.size = 160;
      ghostPlayer.speed = 3;

      // ghost player eaten upon contact on bigger cell's center
      if (greenCells5.length > 0)
        if (dist(ghostPlayer.xpos, ghostPlayer.ypos, greenCells5[0].xpos, greenCells5[0].ypos) < greenCells5[0].size / 2) state = "you_lose";
      if (blueCells5.length > 0)
        if (dist(ghostPlayer.xpos, ghostPlayer.ypos, blueCells5[0].xpos, blueCells5[0].ypos) < blueCells5[0].size / 2) state = "you_lose";
      if (magentaCells5.length > 0)
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
  if (state == "pre_stage" && bm2 == true) {
    endingMusic.pause();
    middleMusic2.pause();
    middleMusic1.pause();
    loseSoundEffect.pause();
    beginningMusic1.pause();
    beginningMusic2.loop();
    // beginningMusic.resume();
    bm2 = false;
  } else {
    beginningMusic2.pause();
    bm2 = true;
  }
  if (state == "lower_stages" && mm1 == true) {
    endingMusic.pause();
    middleMusic2.pause();
    loseSoundEffect.pause();
    beginningMusic1.pause();
    beginningMusic2.pause();
    middleMusic1.loop();

    mm1 = false;
  } else {
    middleMusic1.pause();
    mm1 = true;
  }
  if (state == "upper_stages" && mm2 == true) {
    endingMusic.pause();
    middleMusic1.pause();
    loseSoundEffect.pause();
    beginningMusic1.pause();
    beginningMusic2.pause();
    middleMusic2.loop();

    mm2 = false;
  } else {
    middleMusic2.pause();
    mm2 = true;
  }
}

function keyPressed() {
  // for debugging purposes
  // if (key === 'd') {
  //   ghostPlayer.greenValue = 40;
  //   state = "software_occupations";
  // }
  if ((state == "main_menu" || state == "tutorial") && bm1 == true && key === 'i') {
    endingMusic.pause();
    middleMusic2.pause();
    middleMusic1.pause();
    loseSoundEffect.pause();
    beginningMusic2.pause();
    beginningMusic1.loop();
    // beginningMusic.resume();
    bm1 = false;
  } else {
    beginningMusic1.pause();
    bm1 = true;
  }
  if (state == "you_win" && em == true && key === 'w') {
    middleMusic1.pause();
    loseSoundEffect.pause();
    beginningMusic1.pause();
    beginningMusic2.pause();
    middleMusic2.pause();
    endingMusic.loop();

    em = false;
  } else {
    endingMusic.pause();
    em = true;
  }
  if (state == "you_lose" && lose == true && key === 'l') {
    middleMusic1.pause();
    endingMusic.pause();
    beginningMusic1.pause();
    beginningMusic2.pause();
    middleMusic2.pause();
    loseSoundEffect.play();

    lose = false;
  } else {
    loseSoundEffect.pause();
    lose = true;
  }
}

function mainMenu() {
  // resets the scores
  growthValue = 0;
  ghostPlayer.greenValue = 0;
  //ghostPlayer.blueValue = 0;
  ghostPlayer.magentaValue = 0;

  // reset the ghost player's color
  ghostPlayer.r1 = 60;
  ghostPlayer.r2 = 200;
  ghostPlayer.g1 = 140;
  ghostPlayer.g2 = 230;
  ghostPlayer.b1 = 250;
  ghostPlayer.b2 = 250;

  // sets technicalGhost1's color
  technicalGhost1.greenValue = 40;

  // sets artisticGhost1's color
  artisticGhost1.magentaValue = 40;

  // display back the start game button
  startButton.show();
  howToPlayButton.show();

  // hides the main menu button unless the game is paused or you win the game
  mainMenuButton.hide();
  softwareOccupationsButton.hide();
  backToWinButton.hide();

  background(0);
  fill(255);
  textAlign(CENTER);
  textSize(width / 24);
  text("Software Cell Frenzy", width / 2, height / 6);
  //textSize(width / 48);
  //text("Click anywhere to start", width / 2, height / 3);

  technicalGhost1.display();
  hybridGhost1.display();
  artisticGhost1.display();

  // console.log(`Green cells consumed: ${ghostPlayer.greenValue}`);
  // console.log(`Magenta cells consumed: ${ghostPlayer.magentaValue}`);
  // console.log(`r1: ${ghostPlayer.r1}, g1: ${ghostPlayer.g1}, b1: ${ghostPlayer.b1}`);
  // console.log(`r2: ${ghostPlayer.r2}, g2: ${ghostPlayer.g2}, b2: ${ghostPlayer.b2}`);
}

function clickToStartGame() {
  state = "pre_stage";
}

function clickForTitlePage() {
  state = "main_menu";
}

function clickForTutorial() {
  state = "tutorial";
}

function howToPlay() {
  background(0);
  fill(255);
  textAlign(CENTER);
  textSize(width / 24);
  text("How to Play", width / 2, height / 6);

  textSize(width / 60);
  text("You play as a ghost. You start off as a middle software brain as you're still figuring out which kind of software topic suits you.", width / 2, height / 3.5);
  text("As your journey in the software realm begins, your goal is to consume as many software cells as you can.", width / 2, height / 3);
  text("There are three types of software cells: green(technical), blue(hybrid), and magenta(artistic).", width / 2, height / 2.625);
  text("Consuming mostly green cells would grant you Left Software Brain. \nConsuming mostly magenta cells would grant you Right Software Brain.", width / 2, height / 2.375);
  text("Consuming a balance of both or mostly blue cells would grant you Middle Software Brain.", width / 2, height / 2);
  text("To move around, you press the LEFT, RIGHT, UP, and DOWN arrow keys.", width / 2, height / 1.8);
  text("You can only consume cells that are smaller than you. You lose if a bigger software cell consumes you.\nThe more software cells you consume, the more you'll grow.", width / 2, height / 1.625);

  startButton.hide();
  howToPlayButton.hide();
  mainMenuButton.show();
}

function preStage() {
  startButton.hide(); // hides the start button when playing the game
  howToPlayButton.hide(); // hides the how to play button when playing the game
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
    //randomIndex = int(random(3));
  }
}

function youLose() {
  background(64, 0, 32);
  fill(255, 0, 0);
  textAlign(CENTER);
  textSize(width / 24);
  text("Game Over!", width / 2, height / 6);
  //textSize(width / 48);
  //text("Click to go back to main menu", width / 2, height / 3);
  mainMenuButton.show();
}

function youWin() {
  textAlign(CENTER);
  textSize(width / 24);

  // sets technicalGhost1's color
  technicalGhost2.greenValue = 40;

  // sets artisticGhost1's color
  artisticGhost2.magentaValue = 40;

  if (ghostPlayer.greenValue >= 25 && ghostPlayer.magentaValue <= 15) {
    background(230, 250, 230);
    fill(0, 250, 0);
    text("You Win!\nYou are Left Software Brain", width / 2, height / 6);
    technicalGhost2.display();
  } else if (ghostPlayer.magentaValue >= 25 && ghostPlayer.greenValue <= 15) {
    background(250, 230, 230);
    fill(255, 0, 127);
    text("You Win!\nYou are Right Software Brain", width / 2, height / 6);
    artisticGhost2.display();
  } else {
    background(230, 230, 250);
    fill(60, 140, 250);
    text("You Win!\nYou are Middle Software Brain", width / 2, height / 6);
    hybridGhost2.display();
  }

  //textSize(width / 48);
  //text("Click anywhere to go back to main menu", width / 2, height / 3);

  mainMenuButton.show();
  softwareOccupationsButton.show();

  backToWinButton.hide();
  // ddi[0].style.display = "none";

  console.log(`Green cells consumed: ${ghostPlayer.greenValue}`);
  console.log(`Magenta cells consumed: ${ghostPlayer.magentaValue}`);
  // 1 blue value consists 0.5 green value and 0.5 magenta value
  // If the ratio percentage is around 50% or lower, then that's when a majority is decided
  // 13 G, 15 B, and 12 M logically results into middle software brain
  // 11 G, 12 B, and 17 M results into middle software brain b/c 17G (11G + 6G) + 23M (17M + 6M) has a ratio percentage of around 74%
  // 16 G, 11 B, and 13 M results into middle software brain b/c 21.5G (16G + 5.5G) + 18.5M (13M + 5.5M) has a ratio percentage of around 86%
}

function clickForsoftwareOccupationsButton() {
  state = "software_occupations";
}

function softwareOccupations() {
  softwareOccupationsButton.hide();
  mainMenuButton.hide();

  textAlign(CENTER);
  textSize(width / 36);
  if (ghostPlayer.greenValue >= 25 && ghostPlayer.magentaValue <= 15) {
    background(230, 250, 230);
    fill(0, 250, 0);
    text("Technical Software\nCareers", width / 3, height / 6);
    text("Hybrid Software\nCareers", width / 1.5, height / 6);

    textSize(width / 72);

    text("Computer Engineer / Robotics Software Engineer", width / 3, height / 3);
    text("Audio Engineer", width / 1.5, height / 3);

    text("Computer Programming Instructor", width / 3, height / 2.75);
    text("Game Developer", width / 1.5, height / 2.75);

    text("Computer Scientist", width / 3, height / 2.5375);
    text("Game Designer", width / 1.5, height / 2.5375);

    text("Cyber security Analyst", width / 3, height / 2.36);
    text("Mobile App Developer", width / 1.5, height / 2.36);

    text("Cyber security Engineer", width / 3, height / 2.1875);
    text("Mobile App Designer", width / 1.5, height / 2.1875);

    text("Data Analyst", width / 3, height / 2.046975);
    text("Web Developer", width / 1.5, height / 2.046975);

    text("Data Scientist", width / 3, height / 1.9375);
    text("Web Designer", width / 1.5, height / 1.9375);

    text("Management Information Systems (Business MIS)", width / 3, height / 1.84);
    text("UI/UX Designer", width / 1.5, height / 1.84);

    text("Information Systems Technician", width / 3, height / 1.75);
    text("UI/UX Developer", width / 1.5, height / 1.75);

    text("Software Developer", width / 3, height / 1.66);
    text("VR/AR Developer", width / 1.5, height / 1.66);

    text("Software Engineer", width / 3, height / 1.58);
    text("VR/AR Designer", width / 1.5, height / 1.58);
  } else if (ghostPlayer.magentaValue >= 25 && ghostPlayer.greenValue <= 15) {
    background(250, 230, 230);
    fill(255, 0, 127);
    text("Hybrid Software\nCareers", width / 3, height / 6);
    text("Artistic Software\nCareers", width / 1.5, height / 6);

    textSize(width / 72);

    text("Audio Engineer", width / 3, height / 3);
    text("3D Modeler", width / 1.5, height / 3);

    text("Game Developer", width / 3, height / 2.75);
    text("Animator / Illustrator", width / 1.5, height / 2.75);

    text("Game Designer", width / 3, height / 2.5375);
    text("Creative Coder", width / 1.5, height / 2.5375);

    text("Mobile App Developer", width / 3, height / 2.36);
    text("Digital Artist / Digital Media Artist", width / 1.5, height / 2.36);

    text("Mobile App Designer", width / 3, height / 2.1875);
    text("Glitch Artist", width / 1.5, height / 2.1875);

    text("Web Developer", width / 3, height / 2.046975);
    text("Graphic Designer", width / 1.5, height / 2.046975);

    text("Web Designer", width / 3, height / 1.9375);
    text("Music Producer", width / 1.5, height / 1.9375);

    text("UI/UX Designer", width / 3, height / 1.84);
    text("Photo Editor", width / 1.5, height / 1.84);

    text("UI/UX Developer", width / 3, height / 1.75);
    text("Special Effects Artist", width / 1.5, height / 1.75);

    text("VR/AR Developer", width / 3, height / 1.66);
    text("Video Editor", width / 1.5, height / 1.66);

    text("VR/AR Designer", width / 3, height / 1.58);
    text("Video Installation Artist", width / 1.5, height / 1.58);
  } else {
    background(230, 230, 250);
    fill(60, 140, 250)
    text("Technical Software\nCareers", width / 6, height / 6);
    text("Hybrid Software\nCareers", width / 2, height / 6);
    text("Artistic Software\nCareers", width / 1.25, height / 6);

    textSize(width / 72);

    text("Computer Engineer / Robotics Software Engineer", width / 6, height / 3);
    text("Audio Engineer", width / 2, height / 3);
    text("3D Modeler", width / 1.25, height / 3);

    text("Computer Programming Instructor", width / 6, height / 2.75);
    text("Game Developer", width / 2, height / 2.75);
    text("Animator / Illustrator", width / 1.25, height / 2.75);

    text("Computer Scientist", width / 6, height / 2.5375);
    text("Game Designer", width / 2, height / 2.5375);
    text("Creative Coder", width / 1.25, height / 2.5375);

    text("Cyber security Analyst", width / 6, height / 2.36);
    text("Mobile App Developer", width / 2, height / 2.36);
    text("Digital Artist / Digital Media Artist", width / 1.25, height / 2.36);

    text("Cyber security Engineer", width / 6, height / 2.1875);
    text("Mobile App Designer", width / 2, height / 2.1875);
    text("Glitch Artist", width / 1.25, height / 2.1875);

    text("Data Analyst", width / 6, height / 2.046975);
    text("Web Developer", width / 2, height / 2.046975);
    text("Graphic Designer", width / 1.25, height / 2.046975);

    text("Data Scientist", width / 6, height / 1.9375);
    text("Web Designer", width / 2, height / 1.9375);
    text("Music Producer", width / 1.25, height / 1.9375);

    text("Management Information Systems (Business MIS)", width / 6, height / 1.84);
    text("UI/UX Designer", width / 2, height / 1.84);
    text("Photo Editor", width / 1.25, height / 1.84);

    text("Information Systems Technician", width / 6, height / 1.75);
    text("UI/UX Developer", width / 2, height / 1.75);
    text("Special Effects Artist", width / 1.25, height / 1.75);

    text("Software Developer", width / 6, height / 1.66);
    text("VR/AR Developer", width / 2, height / 1.66);
    text("Video Editor", width / 1.25, height / 1.66);

    text("Software Engineer", width / 6, height / 1.58);
    text("VR/AR Designer", width / 2, height / 1.58);
    text("Video Installation Artist", width / 1.25, height / 1.58);
  }
  // ddi[0].style.display = "block";
  backToWinButton.show();
}

function clickToGoBackToWinPage() {
  state = "you_win";
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
      ghostPlayer.greenValue += 1;
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
      ghostPlayer.greenValue += 0.5;
      ghostPlayer.magentaValue += 0.5;
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
      ghostPlayer.magentaValue += 1;
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
        ghostPlayer.greenValue += 1;
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
        ghostPlayer.greenValue += 0.5;
        ghostPlayer.magentaValue += 0.5;
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
        ghostPlayer.magentaValue += 1;
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
          ghostPlayer.greenValue += 1;
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
          ghostPlayer.greenValue += 0.5;
          ghostPlayer.magentaValue += 0.5;
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
          ghostPlayer.magentaValue += 1;
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
          ghostPlayer.greenValue += 1;
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
          ghostPlayer.greenValue += 0.5;
          ghostPlayer.magentaValue += 0.5;
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
          ghostPlayer.magentaValue += 1;
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
          ghostPlayer.greenValue += 1;
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
          ghostPlayer.greenValue += 0.5;
          ghostPlayer.magentaValue += 0.5;
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
          ghostPlayer.magentaValue += 1;
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
