//// NOTE: Url: http://127.0.0.1:8080/Assignments/ChristianAcosta/2.2/

let randomIndex;
let press = 0;
let power = 0;
let powerSum = 0;
let s;
let button;

let randomPowerWeak;
let randomPowerAvg;
let randomPowerStrong;
let randomPowerGod;
let symbols = [];

//Players array===============================
let players = [{
  name: "Sal the Silly",    //warriors
  speciality: "Warrior",
  power: 1,
  symbol: 1
}, {
  name: "Alexio the Legend",
  speciality: "Warrior",
  power: 5,
  symbol: 1
}, {
  name: "Mary the Mad",
  speciality: "Warrior",
  power: 3,
  symbol: 1
}, {
  name: "Noel the Novice",  //mages
  speciality: "Mage",
  power: 1,
  symbol: 3
}, {
  name: "Helen the Hella Powerful Mage",
  speciality: "Mage",
  power: 5,
  symbol: 3
}, {
  name: "Big Hat Beatrix",
  speciality: "Mage",
  power: 3,
  symbol: 3
}, {
  name: "Joe the Average",  //hunter
  speciality: "Hunter",
  power: 3,
  symbol: 2
}, {
  name: "Ivy the Invisible",
  speciality: "Hunter",
  power: 4,
  symbol: 2
}, {
  name: "Chris with a Cape",
  speciality: "Hunter",
  power: 2,
  symbol: 2
}, {
  name: "Hector the Healer",  //healers
  speciality: "Healer",
  power: 3,
  symbol: 4
}, {
  name: "Adam the Amputator",
  speciality: "Healer",
  power: 1,
  symbol: 4
}, {
  name: "Ellise the Energetic",
  speciality: "Healer",
  power: 3,
  symbol: 4
}, {
  name: "Donut the Doggo",    //special chars
  speciality: "Dog",
  power: 5,
  symbol: 5
}, {
  name: "Gravy the G.O.A.T.",    //special chars
  speciality: "G.O.A.T.",
  power: 5,
  symbol: 5
}, {
  name: "Trixi the Tricky",    //special chars
  speciality: "Tricky",
  power: 5,
  symbol: 5
}, {
  name: "City Guard",    //special chars
  speciality: "Protagonist",
  power: 10,
  symbol: 5
}];
//monsters===============================
let monsters = [{
  name: "slimes",
  type: "slime",
  power: 5,
  symbol: 6
}, {
  name: "Nigel the Necromancer",
  type: "Necromancer",
  power: 5,
  symbol: 7
}, {
  name: "Fire-Tooth",
  type: "Dragon",
  power: 5,
  symbol: 8
}, {
  name: "Lady Lauren",
  type: "Evil Magister",
  power: 5,
  symbol: 9
}, {
  name: "Thanatos The God of Death",
  type: "God",
  power: 5,
  symbol: 10
}];
//end of classes===============================
function preload(){
  for(let a = 1; a<=10; a++){
    symbols[a] = loadImage(`assets/symbols-${a}.png`)
  }
}


function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(12);
  textFont('fantasy');

  randomPowerWeak = int(random(5, 10));
  randomPowerAvg = int(random(10, 15));
  randomPowerStrong = int(random(15, 20));
  randomPowerGod = int(random(20, 30));

  monsters[0].power = randomPowerWeak;
  monsters[1].power = randomPowerAvg;
  monsters[2].power = randomPowerAvg;
  monsters[3].power = randomPowerStrong;
  monsters[4].power = randomPowerGod;

  randomIndex = int(random(players.length));

  button = createButton("click to randomize");
  button.mousePressed(buttonPressed)

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
  console.log(monsters[0]);
}

function buttonPressed(){
  //background(random(200, 255));

  if (press == 0){
  console.log(players[randomIndex].name);
  //Display Avatar
  text(`Name: ${players[randomIndex].name}`, 50, 50);
  //text(players[randomIndex].name, 120, 50);
  text(`Speciality: ${players[randomIndex].speciality}`, 50, 70);
  //text(players[randomIndex].speciality, 120, 70);
  power = players[randomIndex].power;
  text(`Power: ${power}`, 50, 90);
  powerSum = powerSum + power;
  s = players[randomIndex].symbol;
  image(symbols[s], 10, 50);
  //text(power1, 120, 90);
  players.splice(randomIndex, 1);
  console.log(players); //gets array
  press++;
} else if(press == 1){
  randomIndex = int(random(players.length));
  text(`Name: ${players[randomIndex].name}`, 50, 120);
  text(`Speciality: ${players[randomIndex].speciality}`, 50, 140);
  power = players[randomIndex].power;
  text(`Power: ${power}`, 50, 160);
  powerSum = powerSum + power;
  s = players[randomIndex].symbol;
  image(symbols[s], 10, 120);
  players.splice(randomIndex, 1);
  console.log(players); //gets array
  press++;
} else if(press == 2){
  randomIndex = int(random(players.length));
  text(`Name: ${players[randomIndex].name}`, 50, 190);
  text(`Speciality: ${players[randomIndex].speciality}`, 50, 210);
  power = players[randomIndex].power;
  text(`Power: ${power}`, 50, 230);
  powerSum = powerSum + power;
  s = players[randomIndex].symbol;
  image(symbols[s], 10, 190);
  players.splice(randomIndex, 1);
  console.log(players); //gets array
  press++;
} else if(press == 3){
  randomIndex = int(random(players.length));
  text(`Name: ${players[randomIndex].name}`, 50, 260);
  text(`Speciality: ${players[randomIndex].speciality}`, 50, 280);
  power = players[randomIndex].power;
  text(`Power: ${power}`, 50, 300);
  powerSum = powerSum + power;
  s = players[randomIndex].symbol;
  image(symbols[s], 10, 260);
  players.splice(randomIndex, 1);
  console.log(players); //gets array
  press++;
} else if(press == 4){
  line(50, 315, 200, 315);
  text(`Party's Power: ${powerSum}`, 50, 330)
  press++;
} else if(press == 5){
  randomIndex = int(random(monsters.length));
  text(`Name: ${monsters[randomIndex].name}`, 400, 100);
  text(`Type: ${monsters[randomIndex].type}`, 400, 120);
  text(`Power: ${monsters[randomIndex].power}`, 400, 140);
  s = monsters[randomIndex].symbol;
  image(symbols[s], 360, 100);
  press++;
} else if(press == 6){
  textSize(36);
  textStyle(BOLD);
  if(powerSum <= monsters[randomIndex].power){
    text(`You Lost`, width/2, 400);
  } else {
    text(`You Won`, width/2, 400);
  }
}
  //
  // randomIndex = int(random(players.length));
  // text(players[randomIndex].name, 50, 130);
  // text(players[randomIndex].power, 50, 150);
  // players.splice(randomIndex, 1);
  //
  // randomIndex = int(random(players.length));
  // text(players[randomIndex].name, 50, 170);
  // text(players[randomIndex].power, 50, 190);
  // players.splice(randomIndex, 1);
}
