let array = [];

function setup() {
  createCanvas(600, 600);
  // background(240, 255, 245);
  background(255);

  strokeWeight(5);
  noFill();
  //makes line of the drawing tool thicker

}

function draw() {

  if (mouseIsPressed) {
    // line(mouseX, mouseY, pmouseX, pmouseY);
    background(0);
    array.push([mouseX, mouseY]);



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