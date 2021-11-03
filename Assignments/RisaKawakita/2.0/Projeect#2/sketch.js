// random place I have / havenever been to 

let events = [{
  name: "Fishing",
  genre: "outside activity"
},{
  name: "Hereditary",
  genre: "Horror Movie"
},{
  name: "Hiking",
  genre: "Sport"
},{
  name: "The Legend of Zelda",
  genre: "Adventure RPG"
},{
  name: "NARUTO",
  genre: "Ninja Anime"
},{
  name: "Pokemon DP",
  genre: "Role Playing Game"
},{
  name: "Professor Layton",
  genre: "Mystery Solving Game"
},{
  name: "Undertale",
  genre: "Role Playing Game"
},{
  name: "Evangelion",
  genre: "SF Anime"
  
}
];

var colorArray = [
  '#4471BD',
  '#788CB0',
  '#193261',
  '#62B2AC',
]

let mic;
let randomIndex;
let animating = false;
let interests = []; 
let imageCounter = 0;
let button;




function preload(){
    for (let i = 0; i <= 8; i++){
      interests[i] = loadImage(`assets/interest_${i}.JPG`);
    }
}

function setup() {

  createCanvas(600, 600);
  background(68, 113, 141);
  textSize(30);
  textFont(`Courier new`);
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255);
  imageMode(CENTER);
  frameRate(8);
  
  text("[List of my Favorite things]", width / 2, height / 2);


  strokeWeight(2);
  stroke(50, 50);
  fill(255);
  ellipse(200,230,80);
  ellipse(400,230,80);

  noStroke();
  fill(56,116,255);
  ellipse(209,230,60);
  ellipse(409,230,60);

  fill(0);
  ellipse(409,230,37);
  ellipse(209,230,37);

  fill(180);
  ellipse(300,420,120,100);

  fill(255);
  ellipse(245,395,120, 100);
  ellipse(355,395,120, 100);

 

  fill(236, 151, 142);
 // arc(300,380,100,100,50,PI + QUARTER_PI, OPEN);
triangle(250, 335, 350, 335, 300, 385);

  
  button = createButton("Randomize your list!");
  button.mousePressed(buttonPressed);
  button.style("padding", "20px");
  button.style("background-color", "#89BABE")

}



function draw() {

  
    // if(animating == true){
    //   clear();
    //   image(interests[imageCounter], width/2, height/2);

    //   if (imageCounter < interests.length -1){
    //   imageCounter++;
    //   console.log(imageCounter);
    //   } else{
    //     imageCounter = 0;
    //   }

    if(animating == true){
    
      noStroke();
      frameRate(20);
      fill(random(colorArray));
      ellipse(random(width), random(height),random(50, 250));
    }
}






function randomizer(){

   animating = false;
   if (events[0]){

    // background(random(255, 200));
    clear();

    randomIndex = int(random(events.length));

    fill(68, 113, 141);
    textSize(20);
    image(interests[randomIndex], width/2, height/2);
    console.log(randomIndex);

    text(`${events[randomIndex].name} (${events[randomIndex].genre})`, width / 2, height - 95);
    text(events[randomIndex].none, width/2, height/2);

    events.splice(randomIndex, 1);
    interests.splice(randomIndex, 1);

    } else {
      ellipse
      textSize(30);
      text("You Have Completed All!", width / 2, height / 2);
    }
    events.splice(randomIndex, none);
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer,3000);
}