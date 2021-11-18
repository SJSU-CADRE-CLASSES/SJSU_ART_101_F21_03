let backgroundColor = 255;
let array = [];
//refraction
let symmetry = 12;
let angle = 360 / symmetry;
let slider;

function setup() {
  createCanvas(1200, 1200);
  background(backgroundColor);
  //change range to degree
  angleMode(DEGREES);

  brushSizeSlider = createButton('Brush Size Slider');
  sizeSlider = createSlider(1, 32, 4, 0.1);
}

function draw() {

  if (mouseIsPressed) {
    //center movement
    translate(width / 2, height / 2);
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      let mx = mouseX - width / 2;
      let my = mouseY - height / 2;
      let pmx = pmouseX - width / 2;
      let pmy = pmouseY - height / 2;

      var w = random(1, 50);

      let a = random(0, 255);
      let b = random(0, 255);
      let c = random(0, 255);

      fill(a, b, c);
      circle(mx, my, random(1, 5));
      strokeWeight(w);
      stroke(0, 100);
      //line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
      //stroke(map(mouseX, 0, 600, 0, 255, true));
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        let sw = sizeSlider.value();
        strokeWeight(sw);


        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
        beginShape();

        for (let i = 0; i < array.length - 1; i++) {
          curveVertex(array[i][0], array[i][1]);
          line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
        }
        endShape();
      }
      return false;
    }
  }
}

function keyTyped() {
  if (key === 's') {
    //save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    array.push([mouseX, mouseY]);
    clear();
    background(random(0, 255), random(0, 255), random(0, 255));
  }

}
