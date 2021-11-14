let circleMode = false;
let squareMode = false;
let lineMode = true; // default draw tool
let dottedLineMode = false; // default draw tool
let freeDraw = false;

let arr = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 220, 0);
}

function draw() {
  //noStroke(); // drawing lines would require to not use noStroke function
  strokeWeight(3);
  stroke("#FF8000");

  if (mouseIsPressed) {
    if (lineMode) {
      line(pmouseX, pmouseY, mouseX, mouseY); // same thing as line(mouseX, mouseY, pmouseX, pmouseY);
    } else {
      if (!lineMode && !freeDraw && !circleMode && !squareMode) {
        // collects all the x and y coordinates as you press the mouse button (DOES NOT collect coordinates when mouse IS NOT pressed)
        arr.push([mouseX, mouseY]);
        // prints the previous x-coordinate and the x-coordinate onto the console (ex. 772 827; where pmouseX is 772 and mouseX is 827)
        print(pmouseX + " " + mouseX);
      }
    }
    if (dottedLineMode) {
      line(mouseX, mouseY, mouseX, mouseY); // same thing as line(mouseX, mouseY, pmouseX, pmouseY);
    }
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
    if (dottedLineMode) line(mouseX, mouseY, mouseX, mouseY);
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

  // key shortcut to activate dotted line mode
  if (key === '-') {
    // toggle dotted line mode
    switch (dottedLineMode) {
      case false:
        dottedLineMode = true;
        // toggle off line mode in order to see dotted lines
        lineMode = false;
        break;
      case true:
        dottedLineMode = false;
        lineMode = true;
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

  // to create connecting("continuous") lines
  if (key === 'd' && !lineMode && !freeDraw && !circleMode && !squareMode) {
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
  if (key === 'c' && !lineMode && !freeDraw && !circleMode && !squareMode) {
    noFill();
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
  if (key === 'b' && !lineMode && !freeDraw && !circleMode && !squareMode) {
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
  if (key === 'k' && !lineMode && !freeDraw && !circleMode && !squareMode) {

    noFill();
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
  if (key === 'D') {
    // since our design invovled adding coordinates while we press on the mouse button,
    // a better way to make separate array lines is to pop all the coordinates with a specified key that is pressed
    for (let j = arr.length; j > -1; j--) {
      arr.pop();
    }
  }

  // key shortcut to save canvas
  if (key === 's') {
    // deletes previous image with the same name (doesn't delete previous image with different name)?
    // also refreshes the local server?
    saveCanvas("drawMachine", "png");
  }
}
