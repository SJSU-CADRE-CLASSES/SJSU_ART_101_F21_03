let array = [];
let backgroundColor = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(240, 255, 245);
  background(backgroundColor);

  strokeWeight(5);
  noFill();
  //makes line of the drawing tool thicker

}

function draw() {

  if (mouseIsPressed) {
    // line(mouseX, mouseY, pmouseX, pmouseY);
    backgroundColor -= 2;
    background(backgroundColor);
    //  line(mouseX, mouseY, pmouseX, pmouseY);

    array.push([mouseX, mouseY]);

    beginShape();
    for (let i = 0; i < array.length - 1; i++) {
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();


  }


}
//saving the image
function keyTyped() {

  if (key === 's') {
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {

    //display the image
    background(240, 255, 245);

    beginShape();
    for (let i = 0; i < array.length - 1; i++) {
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();

  }


  return false;
}

function mousePressed() {
  array = [];
  backgroundColor = 255;
}