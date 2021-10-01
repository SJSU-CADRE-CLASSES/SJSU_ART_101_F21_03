//video game chars
let players = ["Mario", "Link", "Kirby", "Zelda", "Pikachu"];



function setup(){
  createCanvas(600, 600);
  background(200);

  console.log(players[2]);//to see this ->live-server ->inspect -> console
}

function draw(){
  background(120);
  nostroke();
  fill(150);
  ellipse(100,100,40);
}
