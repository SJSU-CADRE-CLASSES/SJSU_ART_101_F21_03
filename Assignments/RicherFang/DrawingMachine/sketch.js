let array=[];
let topics = [{name: "A Mountain"},{name: "A Happy Tree"},{name: "Mr.Sun"},{name: "Nice Little Lake"},{name: "Happy Clouds"},{name: "Mountain Range"},{name: "Tiny Cozy Cottage"},{name: "A Rainy Day"},{name: "Peppering Snow"}]

function setup() {
  createCanvas(500, 500);
  background(250);

  button = createButton ("Click For A Topic");
  button.position(1225, 300);
  button.mousePressed (buttonPressed);
  button.class("randomizerButton")

  stroke(20)
  strokeWeight(5);
  noFill();
}

function draw() {
  strokeWeight(5);
if (mouseIsPressed){
// line(mouseX, mouseY, pmouseX, pmouseY);
array.push( [mouseX, mouseY] );
  }
}

function keyTyped(){

  if (key === 's'){
    saveCanvas('fileName', 'png');
  } else if (key === 'd'){

    beginShape();
    for (let i = 0; i < array.length; i++) {

      curveVertex(array[i][0], array[i][1])
    }
    endShape();
    
    
  } 
   if (key === 'c') {
  clear();
  array = [];
  background(250);
   }

  return false;
}

function randomizer(){
  animating = false;
  strokeWeight(1);

  if (topics[0]) {
    randomIndex = int(random(topics.length)); 
    text(topics[randomIndex].name, 225, 20);
    topics.splice(randomIndex, 1);
  } else {
    background(250); 
  }

}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);
}