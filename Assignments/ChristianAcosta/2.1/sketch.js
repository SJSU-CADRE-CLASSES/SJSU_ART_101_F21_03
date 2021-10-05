//video game chars
let players = [{
  name: "Mario",
  series: "Mario Bros"
}, {
  name: "Link",
  series: "legend of zelda"
}, {
  name: "Ike",
  series: "Fire Emblem"
}, {
  name: "Samus",
  series: "Metroid"
}, {
  name: "Kirby",
  series: "Kirby"
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(200);

  randomIndex = int(random(players.length));

  //console.log(players[randomIndex].series);
  //text(players[randomIndex].series, 50, 50);
  //players.splice(randomIndex, 1);

  //console.log(players[int(random(players.length))]); //int gets whole number
  //console.log(players.length); //gets length of array

  //console.log(players[0].series); //use to get specific value
  //console.log(players[2]); //to see this ->live-server ->inspect -> console
  //players.pop(); //removes last value of array
  //players.push("Sora") //adds to last part of array
  //player.shift(); //removes 1st value of array
  //player.unshift("Fox"); //adds to 1st value of array
  //player.splice(2, 1); // splice removes based on 2 parameters (starting index, # of removes)


}

function draw() {
  // background(120);
  // nostroke();
  // fill(150);
  // ellipse(100, 100, 40);
}

function mousePressed(){
  background(random(200, 255));
  console.log(players[randomIndex].series);
  text(players[randomIndex].series, 50, 50);
  players.splice(randomIndex, 1);
  console.log(players); //gets array
}
