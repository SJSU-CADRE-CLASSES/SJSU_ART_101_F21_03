let array = [];
let backgroundColor = 200;




function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backgroundColor);
  strokeWeight(5);
  noFill();
}




function draw() {

  if (mouseIsPressed){
    backgroundColor -= 3;
    background(backgroundColor);
//    stroke(map(mouseX, 0, 600, 0, 255, true))
//    line(mouseX, mouseY, pmouseX, pmouseY);
//    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    array.push([mouseX, mouseY]);

    beginShape();
    for (let i = 0; i < array.length - 1; i++){
//    line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();
  }
}




function keyTyped(){

  if (key === 's'){
    //save this image
    saveCanvas('sketch', 'png');
  }
  else if (key === 'd'){
    //display image
    background(255);

    beginShape();
    for(let i = 0; i < array.length - 1; i++){
  //    line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
  curveVertex(array[i][0], array[i][1])
    }
    endShape();
  }
  return false;
}




function mousePressed() {
  console.log("mouse pressed function");
  array = [];
  console.log(array)

}
