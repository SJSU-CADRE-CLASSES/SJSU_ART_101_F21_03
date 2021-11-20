//// NOTE: Url: http://127.0.0.1:8080/Assignments/ChristianAcosta/3.0/
let randomADJIndex;
let randomNIndex;
let art = [];
//10
let adjective = [
  "happy",
  "sad",
  "angry",
  "good",
  "evil",
  "big",
  "small",
  "holy",
  "cursed",
  "cute",
  "handsom",
  "normal"
];
let noun = [
  "guy",
  "girl",
  "cat",
  "dog",
  "duck",
  "snail",
  "apple",
  "pizza",
  "book",
  "clock",
  "car",
  "boat"
];


function setup(){
  createCanvas(windowWidth, windowHeight);
  strokeWeight(5);
}

function draw(){
  background(211, 211, 211, 1);

  //if mpuse is pressed, draw lines (norm and inversed)
  if (mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
    //draws inverse
    //line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);

    art.push([mouseX, mouseY]);
  }
 }

 function keyTyped(){

//s key saves canvas
   if (key == 's'){
     saveCanvas('fileName', 'png');
   } else if (key == 'r'){
       clear();
       randomADJIndex = int(random(adjective.length));
       randomNIndex = int(random(noun.length));
       textSize(18);
       text(`Draw a ${adjective[randomADJIndex]} ${noun[randomNIndex]}`, windowWidth/2 - 40, 400);
   }


   return false;
 }
