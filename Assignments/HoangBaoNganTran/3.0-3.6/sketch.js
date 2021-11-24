let array = [];


function setup() {
  createCanvas(600, 600);
  background(255);

  strokeWeight(3);
}

function draw() {

  if (mouseIsPressed){
    // stroke(map(mouseX, 0, 600, 0, 255, true));
    // line(width - mouseX, mouseY,width - pmouseX,pmouseY);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    background(0);
    array.push([mouseX,mouseY]);

  } else{}


}

function keyTyped(){

  console.log('key ${key} is being typed');

  if (key === 's'){
    //save this image
    saveCanvas('fileName','png');
  } else if (key ==='d'){
    //display image
    background(255);

    beginShape();
    for(let i= 0; i< array.length - 1; i++){
      // line(array[i][0],array[i][1],array[i + 1][0],array[i + 1][1]);
      curveVertex(array[i][0],array[i][1]);
    }
    endShape();
  }



  return false;

}