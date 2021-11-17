let array=[];
let topics = [{name: "A Happy Mountain Range"},{name: "A Family of Trees"},{name: "Mr.Sun"},{name: "A Nice Little Lake"},{name: "Happy Clouds"},{name: "Any Wild Animal"},{name: "A Tiny Cozy Cottage"},{name: "A Rainy Day"},{name: "A Snowy Day"},{name: "Mrs.Moon"},{name: "A Big City"},{name: "The Hopeless Wreck That Is My Life"}]

function setup() {
  createCanvas(500, 500);
  background(250);

  button = createButton ("Click For A Topic");
  button.position(1300, 450);
  button.mousePressed (buttonPressed);
  button.class("randomizerButton")

  stroke(20)
  // strokeWeight(5);
  noFill();
}

function draw() {
  strokeWeight(8);
if (mouseIsPressed){
line(mouseX, mouseY, pmouseX, pmouseY);
array.push( [mouseX, mouseY] );
  }
}

function keyTyped(){

  if (key === 's'){
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {
  clear();
  array = [];
  background(250);
   }
  if (key === '1'){
    // BLACK (DRAW CONT.)
    stroke(0,0,0);

  } else if (key === '2'){
    // GREY.
    stroke(196,196,196);

  } else if (key === '3'){
    // RED.
    stroke(224, 69, 58);

  } else if (key === '4'){
    // GREEN.
    stroke(35, 133, 0);

  } else if (key === '5'){
    // BLUE.
    stroke(26, 125, 255);

  } else if (key === '6'){
    // YELLOW.
    stroke(255, 250, 25);

  } else if (key === '7'){
    // BROWN.
    stroke(77, 52, 0);

  } else if (key === '8'){
    // VIOLET.
    stroke(155, 57, 208);

  } else if (key === '9'){
    // ORANGE.
    stroke(237, 144, 38);

  }
return false;
}


function randomizer(){
  animating = false;
  strokeWeight(1);

  if (topics[0]) {
    randomIndex = int(random(topics.length)); 
    text(topics[randomIndex].name, 50, 20);
    topics.splice(randomIndex, 1);
  } else {
    background(250); 
  }

}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);
}