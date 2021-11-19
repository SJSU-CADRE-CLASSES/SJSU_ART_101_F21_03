// let circleMode = false;
// let squareMode = false;
// let lineMode = true; // default draw tool
// let dottedLineMode = false; // dotted line tool
// let curvedLineMode = false; // smoother line tool
// let freeDraw = false;
// let gradientMode = false;
// let rainbowMode = false;
// let invertedMode = false;
// let symmetricXAxisMode = false;
// let symmetricYAxisMode = false;
// let mousePosSize = false; // "hidden" mode that allows the shape's size to be dependent on mouse cursor
// let sunBrushMode = false;
//
// let fadedMode = false;

// line mode (toggleDrawModes[0]), dotted line mode, circle mode, square mode, inverted mode, x mode, y mode,
// rainbow mode, gradient mode, perlin mode, auto draw mode, sun rays mode, faded mode, mouse position to size mode (toggleDrawModes[13])
let toggleDrawModes = [true, false, false, false, false, false, false, false, false, false, false, false, false, false];

let fadedValue = 0;

let strokeWidth = 3;
let shapeWidth = 40;
let shapeHeight = 40;
let noiseOffSet = 0.0;
// let perlinMode = false;

//let gridMode = true;
let bArrayLines = true;

// orange is rgb(255, 128, 0) or "#FF8000"
// purple is rgb(127, 0, 255) or "#7F00FF"
var r = 0;
var g = 220;
var b = 0;

let arr = [];
let arrP = [];

// enum in JavaScript
/*
const fadeArray = {
  NOFADE: 0,
  FADEDTRAIL: 1,
  NOTRAIL: 2
};

for (var e in fadeArray) {
  console.log(e);
}
*/
let gradientArray = [0, 1, 2, 3];
let gradientIndex = 0;
// To learn how to use map function in creative coding
// https://thecodingtrain.com/beginners/p5js/2.5-map.html

// let fadeArray = [0, 1, 2]; //0 being no fade, 1 being faded trail, and 2 being no trail

// used to toggle tabs
var classObj = document.getElementsByClassName("infosDiv");
//classObj[2].style.display = "none";
//console.log(classObj[2].style.display === undefined);
var idObj = document.getElementById("clickableTab");
//if (idObj[2].style.display == "null") classObj[2].style.display = "none";

// a boolean version of do-while loops
var doKeyAction = true;
// used so that the user doesn't accidentally save the canvas while typing in a command that uses the 's' letter

let specialBrushMode = false;
let randomGenerativeShapes = false;

// bluez, boo diddley, Billybob, Julie, Riley, Bailey, Daniel, Danielle, Steve, Kim Hyun-ji (10 ghosts); extra two are Sona and Luna
let ghostBrushModes = [false, false, false, false, false, false, false, false, false, false, false, false];
let ghostBrushes = ["bluez", "boo", "Billybob", "Julie", "Riley", "Bailey", "Daniel", "Danielle", "Steve", "Kim_Hyun-ji"];

// more special brush booleans
let yureiSonaImage;
let yureiLunaImage;
let blantonBrush = false;
let ghostlySize = 120;
let blantonFadeValue = 2;
let soundEffect;

// for the blanton brush
let ghostBrushes2 = ["bluez", "boo", "Billybob", "Julie", "Riley", "Bailey", "Daniel", "Danielle", "Steve", "Kim_Hyun-ji"];

// does this setup function only runs once?
function setup() {
  // windowWidth / (52 / 50) to make the border fit with the window width
  createCanvas(windowWidth, windowHeight);
  //creates the background when faded mode is not activated;
  if (!toggleDrawModes[12]) {
    background(r, g, b);
  }

  // why does this not work?
  //while (gridMode &&) {
  //drawGrid(20);
  //}
}

function draw() {
  //noStroke(); // drawing lines would require to not use noStroke function
  //console.log(random(gradientArray));
  // console.log(fadedValue); to test if fade value decreases and if it resets to the initial value
  //console.log(gridMode);
  // push();
  //stroke(0);
  //drawGrid(20);
  // pop();
  // console.log(idObj.style.display == "null");
  // console.log(idObj.style.display);
  //console.log(idObj.style.display === undefined);
  //console.log(allDrawModesOff(toggleDrawModes));
  //console.log(toggleDrawModes[0]);

  if (toggleDrawModes[12]) {
    if (fadedValue < 256) {
      fadedValue += 0.0256;
    } else {
      fadedValue = 0;
    }
    // updating the variable param from here works?! (maybe cause it's before the background function?)
    background(r, g, b, fadedValue);
  }
  // console.log(perlinMode); // works well
  if (toggleDrawModes[9] && random(1) >= 0.5) {
    // about 50% chance to have with stroke

    // with noiseOffSet, size would go from min to max(max is dynamic/changing)
    // without noiseOffSet, size would go from min to max(max is fixed)
    noiseOffSet += 0.05;
    shapeSize = noise(noiseOffSet) * 100;
  } else if (toggleDrawModes[9] && random(1) < 0.5) {
    // about 50% chance to have "without stroke"
    // this could be because both the strokeWidth and the shapeSize have the same measurements (or strokeWeight is greater than shapeSize)
    // the larger the strokeWidth, the more it'll cover the shape's color to seeminly replace the shape's color with the line's color w/o stroke
    noiseOffSet += 0.05;
    strokeWidth = noise(noiseOffSet) * 100;
    shapeWidth = noise(noiseOffSet) * 100;
    shapeHeight = noise(noiseOffSet) * 100;
  } else {
    // when perlin mode is off
    strokeWidth = 3;
    shapeWidth = 40;
    shapeHeight = 40;
  }

  strokeWeight(strokeWidth);
  stroke("#FF8000");
  fill(0, 0, 110);

  if (mouseIsPressed) {
    // must be before shapes and lines in order to have effect
    if (toggleDrawModes[7]) {
      stroke(random(255), random(255), random(255));
      fill(random(255), random(255), random(255));
    }

    // image(yureiLunaImage, mouseX, mouseY); // to test image brush

    if (toggleDrawModes[0]) {
      if (toggleDrawModes[8]) {
        switch (gradientIndex) {
          case 0:
            stroke(map(mouseX, 0, width, 0, 255));
            break;
          case 1:
            stroke(map(mouseY, 0, height, 0, 255));
            break;
          case 2:
            // red to yellow
            r = map(mouseX, 0, width, 255, 255);
            g = map(mouseX, 0, width, 0, 255);
            b = map(mouseX, 0, width, 0, 0);
            stroke(r, g, b);
            break;
          default:
            // purple to orange
            r = map(mouseX, 0, width, 127, 255); // 127, 255
            g = map(mouseX, 0, width, 0, 128); // 0, 128
            b = map(mouseX, 0, width, 255, 0); // 255, 0
            stroke(r, g, b);
        }
      }
      if (toggleDrawModes[4]) line(width - pmouseX, height - pmouseY, width - mouseX, height - mouseY); // draw inverted lines
      if (toggleDrawModes[5]) line(width - pmouseX, pmouseY, width - mouseX, mouseY); // draw vertical symmetric lines
      if (toggleDrawModes[6]) line(pmouseX, height - pmouseY, mouseX, height - mouseY); // draw horrizontal symmetric lines
      line(pmouseX, pmouseY, mouseX, mouseY); // same thing as line(mouseX, mouseY, pmouseX, pmouseY);
    } else {
      if (allDrawModesOff(toggleDrawModes) && !specialBrushMode) {
        // collects all the x and y coordinates as you press the mouse button (DOES NOT collect coordinates when mouse IS NOT pressed)
        arr.push([mouseX, mouseY]);
        if (bArrayLines) {
          // transition to purple canvas as the user draw array lines
          if (r < 128) r += 2;
          if (g > 0) g -= 2;
          if (b < 256) b += 2;
          // why do you have to create new background when you can just update the parameters uby changing the variables' values? Does background not let you change the parameters afterwards?
          background(r, g, b);
        }
        // prints the previous x-coordinate and the x-coordinate onto the console (ex. 772 827; where pmouseX is 772 and mouseX is 827)
        //print(pmouseX + " " + mouseX);
      }
    }
    if (toggleDrawModes[1]) {
      if (toggleDrawModes[4]) line(width - mouseX, height - mouseY, width - mouseX, height - mouseY); // draw inverted dotted lines
      if (toggleDrawModes[5]) line(width - mouseX, mouseY, width - mouseX, mouseY); // draw vertical symmetric dotted lines
      if (toggleDrawModes[6]) line(mouseX, height - mouseY, mouseX, height - mouseY); // draw horrizontal symmetric dotted lines
      line(mouseX, mouseY, mouseX, mouseY); // only draws point A for every line drawn (basically draws points)
    }
    if (toggleDrawModes[11]) {
      if (toggleDrawModes[4]) line(width - arrP[0][0], height - arrP[0][1], width - mouseX, height - mouseY); // draw inverted "sun" lines
      if (toggleDrawModes[5]) line(width - arrP[0][0], arrP[0][1], width - mouseX, mouseY); // draw vertical symmetric "sun" lines
      if (toggleDrawModes[6]) line(arrP[0][0], height - arrP[0][1], mouseX, height - mouseY); // draw horrizontal symmetric "sun"" lines
      line(arrP[0][0], arrP[0][1], mouseX, mouseY);
    }
    if (toggleDrawModes[2]) {
      if (toggleDrawModes[13]) {
        shapeWidth = pmouseX;
        shapeHeight = pmouseY;
      }
      if (toggleDrawModes[4]) ellipse(width - mouseX, height - mouseY, shapeWidth, shapeHeight); // draw inverted circles
      if (toggleDrawModes[5]) ellipse(width - mouseX, mouseY, shapeWidth, shapeHeight); // draw vertical symmetric circles
      if (toggleDrawModes[6]) ellipse(mouseX, height - mouseY, shapeWidth, shapeHeight); // draw horizontal symmetric circles
      ellipse(mouseX, mouseY, shapeWidth, shapeHeight); // draw circles
    }
    if (toggleDrawModes[3]) {
      if (toggleDrawModes[13]) {
        shapeWidth = pmouseX;
        shapeHeight = pmouseY;
      }
      if (toggleDrawModes[4]) rect(width - mouseX, height - mouseY, shapeWidth, shapeHeight); // draw inverted squares
      if (toggleDrawModes[5]) rect(width - mouseX, mouseY, shapeWidth, shapeHeight); // draw vertical symmetric squares
      if (toggleDrawModes[6]) rect(mouseX, height - mouseY, shapeWidth, shapeHeight); // draw horizontal symmetric squares
      rect(mouseX, mouseY, shapeWidth, shapeHeight); // draw rectangles
    }
  } else {
    // removes previous point A when sun rays mode is on but mouse is not pressed
    arrP.pop();
  }

  if (toggleDrawModes[10]) {
    if (toggleDrawModes[7]) {
      stroke(random(255), random(255), random(255));
      fill(random(255), random(255), random(255));
    }
    if (toggleDrawModes[0]) {
      if (toggleDrawModes[8]) {
        switch (gradientIndex) {
          case 0:
            stroke(map(mouseX, 0, width, 0, 255));
            break;
          case 1:
            stroke(map(mouseY, 0, height, 0, 255));
            break;
          case 2:
            // red to yellow
            r = map(mouseX, 0, width, 255, 255);
            g = map(mouseX, 0, width, 0, 255);
            b = map(mouseX, 0, width, 0, 0);
            stroke(r, g, b);
            break;
          default:
            // purple to orange
            r = map(mouseX, 0, width, 127, 255); // 127, 255
            g = map(mouseX, 0, width, 0, 128); // 0, 128
            b = map(mouseX, 0, width, 255, 0); // 255, 0
            stroke(r, g, b);
        }
      }
      if (toggleDrawModes[4]) line(width - pmouseX, height - pmouseY, width - mouseX, height - mouseY); // draw inverted lines
      if (toggleDrawModes[5]) line(width - pmouseX, pmouseY, width - mouseX, mouseY); // draw vertical symmetric lines
      if (toggleDrawModes[6]) line(pmouseX, height - pmouseY, mouseX, height - mouseY); // draw horrizontal symmetric lines
      line(pmouseX, pmouseY, mouseX, mouseY); // same thing as line(mouseX, mouseY, pmouseX, pmouseY);
    } // end if lineMode

    if (toggleDrawModes[1]) {
      if (toggleDrawModes[4]) line(width - mouseX, height - mouseY, width - mouseX, height - mouseY); // draw inverted dotted lines
      if (toggleDrawModes[5]) line(width - mouseX, mouseY, width - mouseX, mouseY); // draw vertical symmetric dotted lines
      if (toggleDrawModes[6]) line(mouseX, height - mouseY, mouseX, height - mouseY); // draw horrizontal symmetric dotted lines
      line(mouseX, mouseY, mouseX, mouseY);
    }
    if (toggleDrawModes[2]) {
      if (toggleDrawModes[13]) {
        shapeWidth = pmouseX;
        shapeHeight = pmouseY;
      }
      if (toggleDrawModes[4]) ellipse(width - mouseX, height - mouseY, shapeWidth, shapeHeight); // draw inverted circles
      if (toggleDrawModes[5]) ellipse(width - mouseX, mouseY, shapeWidth, shapeHeight); // draw vertical symmetric circles
      if (toggleDrawModes[6]) ellipse(mouseX, height - mouseY, shapeWidth, shapeHeight); // draw horizontal symmetric circles
      ellipse(mouseX, mouseY, shapeWidth, shapeHeight); // draw circles
    }
    if (toggleDrawModes[3]) {
      if (toggleDrawModes[13]) {
        shapeWidth = pmouseX;
        shapeHeight = pmouseY;
      }
      if (toggleDrawModes[4]) rect(width - mouseX, height - mouseY, shapeWidth, shapeHeight); // draw inverted squares
      if (toggleDrawModes[5]) rect(width - mouseX, mouseY, shapeWidth, shapeHeight); // draw vertical symmetric squares
      if (toggleDrawModes[6]) rect(mouseX, height - mouseY, shapeWidth, shapeHeight); // draw horizontal symmetric squares
      rect(mouseX, mouseY, shapeWidth, shapeHeight); // draw rectangles
    }

  } // end of freeDraw

  if (randomGenerativeShapes) {
    fill(random(255), random(255), random(255));
    stroke(random(255), random(255), random(255));
    ellipse(random(width), random(height), random(25, 255), random(25, 255));
    rect(random(width), random(height), random(25, 255), random(25, 255));
  }

  //console.log(blantonBrush);

  if (allDrawModesOff(toggleDrawModes) && specialBrushMode) {

    if (blantonBrush) {
      background(r, g, b, blantonFadeValue);
      ghostlySize += 2;
      blantonFadeValue += 0.1;

      if (mouseIsPressed) {
        //soundEffect.play();
        blantonFadeValue = 2;
        if (ghostBrushModes[0]) {
          ghostBrushes2[0] = new Ghost(mouseX, mouseY, ghostlySize, "blue");
          ghostBrushes2[0].display();
        }
        if (ghostBrushModes[1]) {
          ghostBrushes2[1] = new Ghost(mouseX, mouseY, ghostlySize, "boo");
          ghostBrushes2[1].display();
        }
        if (ghostBrushModes[2]) {
          ghostBrushes2[2] = new Ghost(mouseX, mouseY, ghostlySize, "Billybob");
          ghostBrushes2[2].display();
        }
        if (ghostBrushModes[3]) {
          ghostBrushes2[3] = new Ghost(mouseX, mouseY, ghostlySize, "Julie");
          ghostBrushes2[3].display();
        }
        if (ghostBrushModes[4]) {
          ghostBrushes2[4] = new Ghost(mouseX, mouseY, ghostlySize, "Riley");
          ghostBrushes2[4].display();
        }
        if (ghostBrushModes[5]) {
          ghostBrushes2[5] = new Ghost(mouseX, mouseY, ghostlySize, "Bailey");
          ghostBrushes2[5].display();
        }
        if (ghostBrushModes[6]) {
          push();
            stroke(128);
            ghostBrushes2[6] = new Ghost(mouseX, mouseY, ghostlySize, "Daniel");
            ghostBrushes2[6].display();
          pop();
        }
        if (ghostBrushModes[7]) {
          push();
            stroke(250);
            ghostBrushes2[7] = new Ghost(mouseX, mouseY, ghostlySize, "Danielle");
            ghostBrushes2[7].display();
          pop();
        }
        if (ghostBrushModes[8]) {
          push();
            stroke(0, 255, 255);
            ghostBrushes2[8] = new Ghost(mouseX, mouseY, ghostlySize, "Steve");
            ghostBrushes2[8].display();
          pop();
        }
        if (ghostBrushModes[9]) {
          push();
            stroke(0, 64, 128);
            ghostBrushes2[9] = new Ghost(mouseX, mouseY, ghostlySize, "Kim_Hyun-ji");
            ghostBrushes2[9].display();
          pop();
        }
        if (ghostBrushModes[10]) {
          image(yureiSonaImage, mouseX - 120, mouseY - 120);
        }
        if (ghostBrushModes[11]) {
          image(yureiLunaImage, mouseX - 240, mouseY - 240);
        }
        //ghostlySize = 120;
      } else {
        ghostlySize = 120;
      }
    }

    if (mouseIsPressed) {
      if (ghostBrushModes[0]) {
        ghostBrushes[0] = new Ghost(mouseX, mouseY, 120, "blue");
        ghostBrushes[0].display();
      }
      if (ghostBrushModes[1]) {
        ghostBrushes[1] = new Ghost(mouseX, mouseY, 120, "boo");
        ghostBrushes[1].display();
      }
      if (ghostBrushModes[2]) {
        ghostBrushes[2] = new Ghost(mouseX, mouseY, 120, "Billybob");
        ghostBrushes[2].display();
      }
      if (ghostBrushModes[3]) {
        ghostBrushes[3] = new Ghost(mouseX, mouseY, 120, "Julie");
        ghostBrushes[3].display();
      }
      if (ghostBrushModes[4]) {
        ghostBrushes[4] = new Ghost(mouseX, mouseY, 120, "Riley");
        ghostBrushes[4].display();
      }
      if (ghostBrushModes[5]) {
        ghostBrushes[5] = new Ghost(mouseX, mouseY, 120, "Bailey");
        ghostBrushes[5].display();
      }
      if (ghostBrushModes[6]) {
        push();
          stroke(128);
          ghostBrushes[6] = new Ghost(mouseX, mouseY, 120, "Daniel");
          ghostBrushes[6].display();
        pop();
      }
      if (ghostBrushModes[7]) {
        push();
          stroke(250);
          ghostBrushes[7] = new Ghost(mouseX, mouseY, 120, "Danielle");
          ghostBrushes[7].display();
        pop();
      }
      if (ghostBrushModes[8]) {
        push();
          stroke(0, 255, 255);
          ghostBrushes[8] = new Ghost(mouseX, mouseY, 120, "Steve");
          ghostBrushes[8].display();

        pop();
      }
      if (ghostBrushModes[9]) {
        push();
          stroke(0, 64, 128);
          ghostBrushes[9] = new Ghost(mouseX, mouseY, 120, "Kim_Hyun-ji");
          ghostBrushes[9].display();
        pop();
      }
      if (ghostBrushModes[10]) {
        image(yureiSonaImage, mouseX - 120, mouseY - 120);
      }
      if (ghostBrushModes[11]) {
        image(yureiLunaImage, mouseX - 240, mouseY - 240);
      }

    }

  }

  // console.log(squareMode); //only works with switch stetement?!
  // console.log(circleMode); //works well
  // console.log(rainbowMode); //works well
  // console.log(specialBrushMode); //used to test if specialBrushMode works well!

} // end of draw function

function allDrawModesOff(boolArray) {
  for (let b = 0; b < boolArray.length; b++) {
    if (boolArray[b] == true)  return false;
  }
  return true;
}

function useSpecifiedSpecialBrush(sbmArray, selectedModeIndex) {
  for (let sbm = 0; sbm < sbmArray.length; sbm++) {
    if (sbm == selectedModeIndex) {
      sbmArray[sbm] = true;
    } else {
      sbmArray[sbm] = false;
    }
  }
}

function keyTyped() {
  // similar to how do-while loops work, the doKeyAction boolean allows you to save drawing when the classname display value is undefined
  // var doKeyAction = true;
  if (classObj[2].style.display == "none" || classObj[2].style.display == "block") doKeyAction = false;

  // erase all circles (clear all data)
  if (key === 'e' && (classObj[2].style.display == "none" || doKeyAction)) {
    r = 0;
    g = 220;
    b = 0;
    background(r, g, b);
  }

  // key shortcut to activate line mode
  if (key === 'l' && (classObj[2].style.display == "none" || doKeyAction)) {
    // toggle line mode
    switch (toggleDrawModes[0]) {
      case false:
        toggleDrawModes[0] = true;
        break;
      case true:
        toggleDrawModes[0] = false;
        break;
    }
  }

  // key shortcut to activate dotted line mode
  if (key === '-' && (classObj[2].style.display == "none" || doKeyAction)) {
    // toggle dotted line mode
    switch (toggleDrawModes[1]) {
      case false:
        toggleDrawModes[1] = true;
        // toggle off line mode in order to see dotted lines
        toggleDrawModes[0] = false;
        break;
      case true:
        toggleDrawModes[1] = false;
        toggleDrawModes[0] = true;
        break;
    }
  }

  // key shortcut to activate curved line mode
  if (key === 'C' && (classObj[2].style.display == "none" || doKeyAction)) {
    // toggle line mode
    switch (curvedLineMode) {
      case false:
        curvedLineMode = true;
        break;
      case true:
        curvedLineMode = false;
        break;
    }
  }

  if (key === 'B' && (classObj[2].style.display == "none" || doKeyAction)) {
    // toggle no background change for array line mode
    switch (bArrayLines) {
      case false:
        bArrayLines = true;
        break;
      case true:
        bArrayLines = false;
        break;
    }
  }

  // key shortcut to activate circle mode
  if (key === '0' && (classObj[2].style.display == "none" || doKeyAction)) {
    // toggle circle mode
    if (toggleDrawModes[2]) {
      toggleDrawModes[2] = false;
    } else {
      toggleDrawModes[2] = true;
    }
  }

  // key shortcut to activate perlin brush mode
  if (key === 'p' && (classObj[2].style.display == "none" || doKeyAction)) {
    // toggle perlin brush mode
    switch (toggleDrawModes[9]) {
      case false:
        toggleDrawModes[9] = true;
        break;
      case true:
        toggleDrawModes[9] = false;
        break;
    }
  }

  // key shortcut to activate free draw
  if (key === 'a' && (classObj[2].style.display == "none" || doKeyAction)) {
    // toggle free(auto) draw
    if (toggleDrawModes[10]) {
      toggleDrawModes[10] = false;
    } else {
      toggleDrawModes[10] = true;
    }
  }

  // key shortcut to activate faded draw
  if (key === 'f' && (classObj[2].style.display == "none" || doKeyAction)) {
    // toggle faded draw
    if (toggleDrawModes[12]) {
      toggleDrawModes[12] = false;
      fadedValue = 0;
    } else {
      toggleDrawModes[12] = true;
    }
  }

  // key shortcut to activate square mode
  if (key === '4' && (classObj[2].style.display == "none" || doKeyAction)) {
    // toggle square mode

    // why if/else doesn't work?
    switch (toggleDrawModes[3]) {
      case false:
        toggleDrawModes[3] = true;
        break;
      case true:
        toggleDrawModes[3] = false;
        break;
    }

    //squareMode = true;
  }

  // key shortcut to activate gradient mode
  if (key === 'g' && (classObj[2].style.display == "none" || doKeyAction)) {
    // toggle gradient mode
    switch (toggleDrawModes[8]) {
      case false:
        toggleDrawModes[8] = true;
        gradientIndex = random(gradientArray);
        break;
      case true:
        toggleDrawModes[8] = false;
        break;
    }

  }

  // key shortcut to activate rainbow mode
  if (key === 'r' && (classObj[2].style.display == "none" || doKeyAction)) {
    // toggle rainbow mode
    switch (toggleDrawModes[7]) {
      case false:
        toggleDrawModes[7] = true;
        break;
      case true:
        toggleDrawModes[7] = false;
        break;
    }

  }

  // key shortcut to activate inverted mode
  if (key === 'i' && (classObj[2].style.display == "none" || doKeyAction)) {
    // toggle rainbow mode
    switch (toggleDrawModes[4]) {
      case false:
        toggleDrawModes[4] = true;
        break;
      case true:
        toggleDrawModes[4] = false;
        break;
    }

  }

  // key shortcut to activate symmetric X-axis mode
  if (key === 'x' && (classObj[2].style.display == "none" || doKeyAction)) {
    // toggle symmetric X-axis mode
    switch (toggleDrawModes[5]) {
      case false:
        toggleDrawModes[5] = true;
        break;
      case true:
        toggleDrawModes[5] = false;
        break;
    }

  }

  // key shortcut to activate symmetric Y-axis mode
  if (key === 'y' && (classObj[2].style.display == "none" || doKeyAction)) {
    // toggle symmetric Y-axis mode
    switch (toggleDrawModes[6]) {
      case false:
        toggleDrawModes[6] = true;
        break;
      case true:
        toggleDrawModes[6] = false;
        break;
    }

  }

  // key shortcut to activate sun brush mode
  if (key === 'R' && (classObj[2].style.display == "none" || doKeyAction)) {
    // toggle sun brush mode
    switch (toggleDrawModes[11]) {
      case false:
        toggleDrawModes[11] = true;
        break;
      case true:
        toggleDrawModes[11] = false;
        break;
    }

  }

  // to create connecting("continuous") lines
  if (key === 'd' && allDrawModesOff(toggleDrawModes) && !specialBrushMode && (classObj[2].style.display == "none" || doKeyAction)) {
    if (bArrayLines) {
      // revert back to green canvas (also doesn't save previous drawings that are not within the array)
      r = 0;
      g = 220;
      b = 0;
      background(r, g, b);
    }
    for (let i = 0; i < arr.length - 1; i++) {
      // x1 and y1 gets the x and y coordinate for point A
      // x2 and y2 gets the x and y coordinate for point B
      line(arr[i][0], arr[i][1], arr[i + 1][0], arr[i + 1][1]);
      // having 0s at the second dimension would cause a singular diagonal line
      // having i+=2 would create dotted lines
      // having 0s at the second dimension (and i+=2) would cause a singular diagonal dotted line
      // why connect the lines when the user is trying to draw them separately?
    }

  }
  // to create connecting("continuous") curved lines
  if (key === 'c' && allDrawModesOff(toggleDrawModes) && !specialBrushMode && (classObj[2].style.display == "none" || doKeyAction)) {
    noFill();
    if (bArrayLines) {
      // revert back to green canvas (also doesn't save previous drawings that are not within the array)
      r = 0;
      g = 220;
      b = 0;
      background(r, g, b);
    }
    beginShape();
    for (let i = 0; i < arr.length; i++) {
      // arr[i][0] represents the x coordinate of the curved point(a point that forms a curve)
      // arr[i][1] represents the y coordinate of the curved point(a point that forms a curve)

      // doesn't work when you call beginShape and endShape inside of the for loop(why is that?)
      //beginShape();
      curveVertex(arr[i][0], arr[i][1]);
      //endShape();
    }
    endShape();

  }

  // to create separate array lines (non-smooth transition)
  if (key === 'b' && allDrawModesOff(toggleDrawModes) && !specialBrushMode && (classObj[2].style.display == "none" || doKeyAction)) {
    //let arrTemp = arr; // copy by reference

    // if put before, all coordinates will be deleted and there would be nothing to draw afterwards (unless you copy by value)
    /*
    let arrTemp = [];  // copy by value
    //if (arr.length != 0) {
      // to not allow the drawn lines to connect
      for (let j = 0; j < arr.length - 1; j++) {
        arrTemp.push(arr[j]);
      }
      // to not allow the drawn lines to connect
      for (let j = arr.length; j > -1; j--) {
        arr.pop();
      }
    //}
    */
    if (bArrayLines) {
      // revert back to green canvas (also doesn't save previous drawings that are not within the array)
      r = 0;
      g = 220;
      b = 0;
      background(r, g, b);
    }
    for (let i = 0; i < arr.length - 1; i++) {
      // x1 and y1 gets the x and y coordinate for point A
      // x2 and y2 gets the x and y coordinate for point B
      line(arr[i][0], arr[i][1], arr[i + 1][0], arr[i + 1][1]);
      // having 0s at the second dimension would cause a singular diagonal line
      // having i+=2 would create dotted lines
      // having 0s at the second dimension (and i+=2) would cause a singular diagonal dotted line
      // why connect the lines when the user is trying to draw them separately?
    }
    // if put afterwards, then you'll have line points that attempt to connect each other before all of the coordinates get erased

    // to not allow the drawn lines to connect
    for (let j = arr.length; j > -1; j--) {
      arr.pop();
    }

  }
  // to create separate curved array lines (non-smooth transition)
  if (key === 'k' && allDrawModesOff(toggleDrawModes) && !specialBrushMode && (classObj[2].style.display == "none" || doKeyAction)) {

    noFill();
    if (bArrayLines) {
      // revert back to green canvas (also doesn't save previous drawings that are not within the array)
      r = 0;
      g = 220;
      b = 0;
      background(r, g, b);
    }
    beginShape();
    for (let i = 0; i < arr.length; i++) {
      // arr[i][0] represents the x coordinate of the curved point(a point that forms a curve)
      // arr[i][1] represents the y coordinate of the curved point(a point that forms a curve)
      curveVertex(arr[i][0], arr[i][1]);
    }
    endShape();

    // to not allow the drawn lines to connect
    for (let j = arr.length; j > -1; j--) {
      arr.pop();
    }

  }
  // to not have the next line connect to the previous line
  if (key === 'D' && (classObj[2].style.display == "none" || doKeyAction)) {
    // since our design invovled adding coordinates while we press on the mouse button,
    // a better way to make separate array lines is to pop all the coordinates with a specified key that is pressed
    for (let j = arr.length; j > -1; j--) {
      arr.pop();
    }
  }

  // key shortcut to activate mouse position to shape size
  if (key === 'm' && (classObj[2].style.display == "none" || doKeyAction)) {
    // toggle mouse position to shape size
    switch (toggleDrawModes[13]) {
      case false:
        toggleDrawModes[13] = true;
        break;
      case true:
        toggleDrawModes[13] = false;
        break;
    }
  }

  // key shortcut to save canvas
  if (key === 's' && (classObj[2].style.display == "none" || doKeyAction)) {
    // deletes previous image with the same name (doesn't delete previous image with different name)?
    // also refreshes the local server?
    saveCanvas("drawMachine", "png");
    //  && classObj[2].style.display == "none"
  }

} // end of keyTyped function

function drawGrid(numCells) {
  for (let i = 0; i <= width; i += width / numCells) {
    for (let j = 0; j <= height; j += height / numCells) {
      noFill();
      rect(i, j, width / numCells, height / numCells); // j = 50
    }
  }
}

// to create the "sun rays"
function mousePressed() {
  arrP.push([pmouseX, pmouseY]);
}

/*
// toggles the list of controls
function seeControls() {
  // gets the div's id (controlsDiv)
  var ctrl = document.getElementById("controlsDiv");
  // checks if the div's display mode is none (hiding)
  if (ctrl.style.display === "none") {
    // sets the div's display mode to block (shows the div)
    ctrl.style.display = "block";
  } else {
    // sets the div's display mode to none (hides the div)
    ctrl.style.display = "none";
  }
}
*/
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show

function preload() {
  yureiSonaImage = loadImage("imageBrush/Sona_Ghost.png");
  yureiLunaImage = loadImage("imageBrush/Luna_Ghost.png");

  soundFormats("mp3", "ogg");
  soundEffect = loadSound("sounds/wow.mp3");
}

function seeControls() {
  // classObj[1].style.display = "block";
  classObj[1].style.display = "block";
}

function hideControls() {
  // classObj[1].style.display = "none";
  classObj[1].style.display = "none";
}

function seeInstructions() {
  // classObj[0].style.display = "block";
  classObj[0].style.display = "block";
}

function hideInstructions() {
  // classObj[0].style.display = "none";
  classObj[0].style.display = "none";
}

function toggleCommandBar() {
  // idObj = document.getElementById("clickableTab");
  // if (classObj[2].style.display === undefined)  {
  //   classObj[2].style.display = "block";
  //   return;
  // }
  if (classObj[2].style.display == "none") {
    classObj[2].style.display = "block";
  } else if (classObj[2].style.display == "block") {
    classObj[2].style.display = "none";
  } else {
    // deals with the display that has undefined value
    // this case runs first as initially, the class/id display value is undefined despite having the display value defined in the CSS file?
    classObj[2].style.display = "block";
  }
}

function promptCommand() {
  let commandBar = document.getElementById("commandPlease");
  var specialBrushCommands = ["/toggle specialBrushMode randomGenerativeShapes", "/toggle specialBrushMode blue_ghost",
                              "/toggle specialBrushMode ghost", "/toggle specialBrushMode Quirky_Ghost",
                              "/toggle specialBrushMode Passionate_Ghost", "/toggle specialBrushMode Ghost_of_Darkness",
                              "/toggle specialBrushMode Ghost_of_Kindness", "/toggle specialBrushMode Philosophical_Ghost",
                              "/toggle specialBrushMode Imaginative_Ghost", "/toggle specialBrushMode Ghost_of_Determination",
                              "/toggle specialBrushMode Seoul_Ghost", "/toggle specialBrushMode Yurei_Sona",
                              "/toggle specialBrushMode Yurei_Luna", "/toggle specialBrushMode Blanton"];

  if (commandBar.value.length > 0) {
    if (commandBar.value === specialBrushCommands[0]) {
      // toggle random generative shapes
      switch (randomGenerativeShapes) {
        case false:
          randomGenerativeShapes = true;
          specialBrushMode = true;
          break;
        case true:
          randomGenerativeShapes = false;
          break;
      }
    } else if (commandBar.value === specialBrushCommands[1]) {
      // toggle blue ghost brush
      switch (ghostBrushModes[0]) {
        case false:
          // ghostBrushModes[0] = true;
          specialBrushMode = true;
          useSpecifiedSpecialBrush(ghostBrushModes, 0);
          break;
        case true:
          ghostBrushModes[0] = false;
          break;
      }
    } else if (commandBar.value === specialBrushCommands[2]) {
      // toggle ghost brush
      switch (ghostBrushModes[1]) {
        case false:
          // ghostBrushModes[1] = true;
          specialBrushMode = true;
          useSpecifiedSpecialBrush(ghostBrushModes, 1);
          break;
        case true:
          ghostBrushModes[1] = false;
          break;
      }
    } else if (commandBar.value === specialBrushCommands[3]) {
      // toggle quirky ghost brush
      switch (ghostBrushModes[2]) {
        case false:
          // ghostBrushModes[2] = true;
          specialBrushMode = true;
          useSpecifiedSpecialBrush(ghostBrushModes, 2);
          break;
        case true:
          ghostBrushModes[2] = false;
          break;
      }
    } else if (commandBar.value === specialBrushCommands[4]) {
      // toggle passionate ghost brush
      switch (ghostBrushModes[3]) {
        case false:
          // ghostBrushModes[3] = true;
          specialBrushMode = true;
          useSpecifiedSpecialBrush(ghostBrushModes, 3);
          break;
        case true:
          ghostBrushModes[3] = false;
          break;
      }
    } else if (commandBar.value === specialBrushCommands[5]) {
      // toggle dark ghost brush
      switch (ghostBrushModes[4]) {
        case false:
          // ghostBrushModes[4] = true;
          specialBrushMode = true;
          useSpecifiedSpecialBrush(ghostBrushModes, 4);
          break;
        case true:
          ghostBrushModes[4] = false;
          break;
      }
    } else if (commandBar.value === specialBrushCommands[6]) {
      // toggle nice ghost brush
      switch (ghostBrushModes[5]) {
        case false:
          // ghostBrushModes[5] = true;
          specialBrushMode = true;
          useSpecifiedSpecialBrush(ghostBrushModes, 5);
          break;
        case true:
          ghostBrushModes[5] = false;
          break;
      }
    } else if (commandBar.value === specialBrushCommands[7]) {
      // toggle philosophical ghost brush
      switch (ghostBrushModes[6]) {
        case false:
          // ghostBrushModes[6] = true;
          specialBrushMode = true;
          useSpecifiedSpecialBrush(ghostBrushModes, 6);
          break;
        case true:
          ghostBrushModes[6] = false;
          break;
      }
    } else if (commandBar.value === specialBrushCommands[8]) {
      // toggle imaginative ghost brush
      switch (ghostBrushModes[7]) {
        case false:
          // ghostBrushModes[7] = true;
          specialBrushMode = true;
          useSpecifiedSpecialBrush(ghostBrushModes, 7);
          break;
        case true:
          ghostBrushModes[7] = false;
          break;
      }
    } else if (commandBar.value === specialBrushCommands[9]) {
      // toggle "never give up" ghost brush
      switch (ghostBrushModes[8]) {
        case false:
          // ghostBrushModes[8] = true;
          specialBrushMode = true;
          useSpecifiedSpecialBrush(ghostBrushModes, 8);
          break;
        case true:
          ghostBrushModes[8] = false;
          break;
      }
    } else if (commandBar.value === specialBrushCommands[10]) {
      // toggle Seoul ghost brush
      switch (ghostBrushModes[9]) {
        case false:
          // ghostBrushModes[9] = true;
          specialBrushMode = true;
          useSpecifiedSpecialBrush(ghostBrushModes, 9);
          break;
        case true:
          ghostBrushModes[9] = false;
          break;
      }
    } else if (commandBar.value === specialBrushCommands[11]) {
      // toggle yurei Sona brush
      switch (ghostBrushModes[10]) {
        case false:
          // ghostBrushModes[9] = true;
          specialBrushMode = true;
          useSpecifiedSpecialBrush(ghostBrushModes, 10);
          break;
        case true:
          ghostBrushModes[10] = false;
          break;
      }
    } else if (commandBar.value === specialBrushCommands[12]) {
      // toggle yurei Luna brush
      switch (ghostBrushModes[11]) {
        case false:
          // ghostBrushModes[9] = true;
          specialBrushMode = true;
          useSpecifiedSpecialBrush(ghostBrushModes, 11);
          break;
        case true:
          ghostBrushModes[11] = false;
          break;
      }
    } else if (commandBar.value === specialBrushCommands[13]) {
      // toggle yurei Luna brush
      switch (blantonBrush) {
        case false:
          blantonBrush = true;
          specialBrushMode = true;
          //useSpecifiedSpecialBrush(ghostBrushModes, 11);
          break;
        case true:
          blantonBrush = false;
          break;
      }
    } else {
      alert("Command is either invalid or does not exist, please try again.");
    }
    // turns off special brush mode once ALL special brushes are turned off
    if (allDrawModesOff(ghostBrushModes) && !randomGenerativeShapes && !blantonBrush) specialBrushMode = false;
  } else {
    alert("Command line is empty, please enter a command.");
  }

}
