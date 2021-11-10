function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 220, 0);
}

function draw() {
  //noStroke(); // drawing lines would require to not use noStroke function
  strokeWeight(2);
  stroke("#FF8000");

  // draw circles
  if (mouseIsPressed) {
    fill(0,0,110);
    ellipse(mouseX,mouseY,40);
    // ellipse(width - mouseX,mouseY,40); // draw vertical symmetric circles
    // ellipse(mouseX,height - mouseY,40); // draw horizontal symmetric circles
    // ellipse(width - mouseX,height - mouseY,40); // draw inverted circles

    rect(mouseX, mouseY, 40);
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
    line(pmouseX, pmouseY, mouseX, mouseY); // same thing as line(mouseX, mouseY, pmouseX, pmouseY);
    // line(width - pmouseX, height - pmouseY, width - mouseX, height - mouseY); // draw inverted lines
    // line(width - pmouseX, pmouseY, width - mouseX, mouseY); // draw vertical symmetric lines
    // line(pmouseX, height - pmouseY, mouseX, height - mouseY); // draw horrizontal symmetric lines


    // prints the previous x-coordinate and the x-coordinate onto the console (ex. 772 827; where pmouseX is 772 and mouseX is 827)
    print(pmouseX + " " + mouseX);
    // line(200, 250, 100, 125); // same as line(100, 125, 200, 250);
  }

  // erase all circles (clear all data)
  if (keyIsPressed) {
    background(0, 220, 0);
  }
}
