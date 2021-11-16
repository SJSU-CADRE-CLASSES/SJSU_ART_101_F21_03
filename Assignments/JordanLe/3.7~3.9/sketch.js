let circleMode = false;
let squareMode = false;
let lineMode = true; // default draw tool
let dottedLineMode = false; // dotted line tool
let curvedLineMode = false; // smoother line tool
let freeDraw = false;
let gradientMode = false;
let rainbowMode = false;

// orange is rgb(255, 128, 0) or "#FF8000"
// purple is rgb(127, 0, 255) or "#7F00FF"
var r = 0;
var g = 220;
var b = 0;

let arr = [];

// enum in JavaScript
/*
const gradientArray = {
  DEFAULTX: 0,
  DEFAULTY: 1,
  SPLIT: 2
};
*/
let gradientArray = [0, 1, 2, 3];
let gradientIndex = 0;
// To learn how to use map function in creative coding
// https://thecodingtrain.com/beginners/p5js/2.5-map.html
//let strokeArray = [color];

function setup() {
  // windowWidth / (52 / 50) to make the border fit with the window width
  createCanvas(windowWidth, windowHeight);
  background(r, g, b);
}

function draw() {
  //noStroke(); // drawing lines would require to not use noStroke function
  //console.log(random(gradientArray));

  strokeWeight(3);
  stroke("#FF8000");
  fill(0,0,110);

  if (mouseIsPressed) {
    // must be before shapes and lines in order to have effect
    if (rainbowMode) {
      stroke(random(255), random(255), random(255));
      fill(random(255), random(255), random(255));
    }
    if (lineMode) {
      if (gradientMode) {
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
      line(pmouseX, pmouseY, mouseX, mouseY); // same thing as line(mouseX, mouseY, pmouseX, pmouseY);
    } else {
      if (!lineMode && !freeDraw && !circleMode && !squareMode) {
        // collects all the x and y coordinates as you press the mouse button (DOES NOT collect coordinates when mouse IS NOT pressed)
        arr.push([mouseX, mouseY]);
        // transition to purple canvas as the user draw array lines
        if (r < 128)  r++;
        if (g > 0)  g--;
        if (b < 256) b++;
        // why do you have to create new background when you can just update the parameters uby changing the variables' values? Does background not let you change the parameters afterwards?
        background(r, g, b);
        // prints the previous x-coordinate and the x-coordinate onto the console (ex. 772 827; where pmouseX is 772 and mouseX is 827)
        print(pmouseX + " " + mouseX);
      }
    }
    if (dottedLineMode) {
      line(mouseX, mouseY, mouseX, mouseY); // only draws point A for every line drawn (basically draws points)
    }
    if (curvedLineMode) {
      // does not work at the moment
      beginShape();
      curveVertex(mouseX, mouseY);
      endShape();
    }
    if (circleMode) {
      ellipse(mouseX,mouseY,40); // draw circles
    }
    if (squareMode) {
      rect(mouseX,mouseY,40); // draw rectangles
    }
  }

  if (freeDraw) {
    if (rainbowMode) {
      stroke(random(255), random(255), random(255));
      fill(random(255), random(255), random(255));
    }
    if (lineMode) {
      if (gradientMode) {
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

      line(pmouseX, pmouseY, mouseX, mouseY); // same thing as line(mouseX, mouseY, pmouseX, pmouseY);
    } // end if lineMode

    if (dottedLineMode) line(mouseX, mouseY, mouseX, mouseY);
    if (circleMode) {
      ellipse(mouseX,mouseY,40); // draw circles
    }
    if (squareMode) {
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
  // console.log(rainbowMode); //works well

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

  // key shortcut to activate curved line mode
  if (key === 'C') {
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

  // key shortcut to activate gradient mode
  if (key === 'g') {
    // toggle gradient mode
    switch (gradientMode) {
      case false:
        gradientMode = true;
        gradientIndex = random(gradientArray);
        break;
      case true:
        gradientMode = false;
        break;
    }

  }

  // key shortcut to activate rainbow mode
  if (key === 'r') {
    // toggle rainbow mode
    switch (rainbowMode) {
      case false:
        rainbowMode = true;
        break;
      case true:
        rainbowMode = false;
        break;
    }

  }

  // to create connecting("continuous") lines
  if (key === 'd' && !lineMode && !freeDraw && !circleMode && !squareMode) {
      // revert back to green canvas (also doesn't save previous drawings that are not within the array)
      r = 0;
      g = 220;
      b = 0;
      background(0, 220, 0);
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
    // revert back to green canvas
    r = 0;
    g = 220;
    b = 0;
    background(0, 220, 0);
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
      // revert back to green canvas
      r = 0;
      g = 220;
      b = 0;
      background(0, 220, 0);
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
    // revert back to green canvas
    r = 0;
    g = 220;
    b = 0;
    background(0, 220, 0);
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
