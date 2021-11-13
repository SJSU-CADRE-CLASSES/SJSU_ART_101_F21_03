let circleMode = false;
let squareMode = false;
let lineMode = true; // default draw tool
let freeDraw = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 220, 0);
}

function draw() {
  //noStroke(); // drawing lines would require to not use noStroke function
  strokeWeight(2);
  stroke("#FF8000");

  if (mouseIsPressed) {
    if (lineMode) line(pmouseX, pmouseY, mouseX, mouseY); // same thing as line(mouseX, mouseY, pmouseX, pmouseY);
    if (circleMode) {
      fill(0,0,110);
      ellipse(mouseX,mouseY,40); // draw circles
    }
    if (squareMode) {
      fill(0,0,110);
      rect(mouseX,mouseY,40); // draw rectangles
    }
  }

  if (freeDraw) {
    if (lineMode) line(pmouseX, pmouseY, mouseX, mouseY); // same thing as line(mouseX, mouseY, pmouseX, pmouseY);
    if (circleMode) {
      fill(0,0,110);
      ellipse(mouseX,mouseY,40); // draw circles
    }
    if (squareMode) {
      fill(0,0,110);
      rect(mouseX,mouseY,40); // draw rectangles
    }
  }
  /*
  if (mouseIsPressed) {
    fill(0,0,110);
    ellipse(mouseX,mouseY,40); // draw circles
    // ellipse(width - mouseX,mouseY,40); // draw vertical symmetric circles
    // ellipse(mouseX,height - mouseY,40); // draw horizontal symmetric circles
    // ellipse(width - mouseX,height - mouseY,40); // draw inverted circles

    fill(0,0,110);
    rect(mouseX, mouseY, 40); // draw squares
    // rect(width - mouseX,mouseY,40); // draw vertical symmetric rectangles
    // rect(mouseX,height - mouseY,40); // draw horizontal symmetric rectangles
    // rect(width - mouseX,height - mouseY,40); // draw inverted rectangles

    // draw ellipses with respect to mouse position
    // ellipse(mouseX,mouseY,mouseX,mouseY);
    // ellipse(pmouseX,pmouseY,mouseX,mouseY);
    // ellipse(width - pmouseX, height - pmouseY, width - mouseX, height - mouseY); // inverted version
    // ellipse(width - pmouseX, pmouseY, width - mouseX, mouseY); // draw vertical symmetric circles with respect to mouse position
    // ellipse(pmouseX, height - pmouseY, mouseX, height - mouseY); // draw horrizontal symmetric circles with respect to mouse position

    // draw rectangles with respect to mouse position
    // rect(mouseX, mouseY, mouseX, mouseY);
    // rect(pmouseX,pmouseY,mouseX,mouseY);
    // rect(width - pmouseX, height - pmouseY, width - mouseX, height - mouseY); // inverted version
    // rect(width - pmouseX, pmouseY, width - mouseX, mouseY); // draw vertical symmetric rectangles with respect to mouse position
    // rect(pmouseX, height - pmouseY, mouseX, height - mouseY); // draw horrizontal symmetric rectangles with respect to mouse position

    // line(mouseX, mouseY, mouseX, mouseY); // dotted lines
    //stroke(map(mouseX, 0, width, 0, 255));

    // line(width - pmouseX, height - pmouseY, width - mouseX, height - mouseY); // draw inverted lines
    // line(width - pmouseX, pmouseY, width - mouseX, mouseY); // draw vertical symmetric lines
    // line(pmouseX, height - pmouseY, mouseX, height - mouseY); // draw horrizontal symmetric lines

    // prints the previous x-coordinate and the x-coordinate onto the console (ex. 772 827; where pmouseX is 772 and mouseX is 827)
    print(pmouseX + " " + mouseX);
    // line(200, 250, 100, 125); // same as line(100, 125, 200, 250);
  }
  */

  // console.log(squareMode); //only works with switch stetement?!
  // console.log(circleMode); //works well
}

function keyTyped() {
  // erase all circles (clear all data)
  if (key === ' ')  background(0, 220, 0);

  // key shortcut to activate line mode
  if (key === 'l') {
    // toggle line mode
    switch (lineMode) {
      case false:
        lineMode = true;
        break;
      case true:
        lineMode = false;
        break;
    }
  }

  // key shortcut to activate circle mode
  if (key === '0')  {
    // toggle circle mode
    if (circleMode) {
      circleMode = false;
    } else {
      circleMode = true;
    }
  }

  // key shortcut to activate free draw
  if (key === 'f')  {
    // toggle circle mode
    if (freeDraw) {
      freeDraw = false;
    } else {
      freeDraw = true;
    }
  }

  // key shortcut to activate square mode
  if (key === '4') {
    // toggle square mode

    // why if/else doesn't work?
    switch (squareMode) {
      case false:
        squareMode = true;
        break;
      case true:
        squareMode = false;
        break;
    }

    //squareMode = true;
  }

  // key shortcut to save canvas
  if (key === 's') {
    saveCanvas("drawMachine", "png");
  }
}
