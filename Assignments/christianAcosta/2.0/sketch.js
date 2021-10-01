//video game chars
let players = ["Mario", "Link", "Kirby", "Zelda", "Pikachu"];



function setup(){
  createCanvas(600, 600);
  background(200);

  console.log(players[0]);
}

function draw(){
  background(120);
  nostroke();
  fill(150);
  ellipse(100,100,40);
}
