let games = ["Destiny", "Apex", "Hearthstone", "Warhammer", "Splitgate", "Phasmo"]

function setup() {
  createCanvas(400, 400);
  background (200);


  games[1] = "Apex Legends";

  console.log ("initial array is");
  console.log(games);


games.splice(2,1); //games.splice(index(Starting number),number(how many to take out))
console.log("Array after splice")
console.log(games);  
}

function draw() {
  background(220);


}