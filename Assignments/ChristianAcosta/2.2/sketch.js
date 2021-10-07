//Players
let players = [{
  name: "Sal the Silly",    //warriors
  speciality: "Warrior",
  power: 1
}, {
  name: "Alexio the Legend",
  speciality: "Warrior",
  power: 5
}, {
  name: "Mary the Mad",
  speciality: "Warrior",
  power: 3
}, {
  name: "Noel the Novice",  //mages
  speciality: "Mage",
  power: 1
}, {
  name: "Helen the Hella Powerful Mage",
  speciality: "Mage",
  power: 5
}, {
  name: "Big Hat Beatrix",
  speciality: "Mage",
  power: 3
}, {
  name: "Joe the Average",  //hunter
  speciality: "Hunter",
  power: 3
}, {
  name: "Ivy the Invisible",
  speciality: "Hunter",
  power: 4
}, {
  name: "Chris with a Cape",
  speciality: "Hunter",
  power: 2
}, {
  name: "Hector the Healer",  //healers
  speciality: "Healer",
  power: 3
}, {
  name: "Adam the Amputator",
  speciality: "Healer",
  power: 1
}, {
  name: "Ellise the Energetic",
  speciality: "Healer",
  power: 3
}, {
  name: "Donut the Doggo",    //special chars
  speciality: "Dog",
  power: 5
}, {
  name: "Gravy the G.O.A.T.",    //special chars
  speciality: "G.O.A.T.",
  power: 5
}, {
  name: "Trixi the Tricky",    //special chars
  speciality: "Tricky",
  power: 5
}, {
  name: "City Guard",    //special chars
  speciality: "Protagonist",
  power: 100
}];

let randomIndex;
let press = 0;

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
  //background(random(200, 255));

  if (press == 0){
  console.log(players[randomIndex].name);
  //Display Avatar
  text(`"Name: ${players[randomIndex].name}"`, 50, 50);
  text(players[randomIndex].name, 120, 50);
  text("Speciality: ", 50, 70);
  text(players[randomIndex].speciality, 120, 70);
  text("Power: ", 50, 90);
  let power1 = players[randomIndex].power;
  text(power1, 120, 90);
  players.splice(randomIndex, 1);
  console.log(players); //gets array
  press++;
} else if(press == 1){
  randomIndex = int(random(players.length));
  text("Name: ", 50, 120);
  text(players[randomIndex].name, 120, 120);
  text("Speciality: ", 50, 140);
  text(players[randomIndex].speciality, 120, 140);
  text("Power: ", 50, 160);
  let power2 = players[randomIndex].power;
  text(power2, 120, 160);
  players.splice(randomIndex, 1);
  console.log(players); //gets array
  press++;
} else if(press == 2){
  randomIndex = int(random(players.length));
  text("Name: ", 50, 190);
  text(players[randomIndex].name, 120, 190);
  text("Speciality: ", 50, 210);
  text(players[randomIndex].speciality, 120, 210);
  text("Power: ", 50, 230);
  let power2 = players[randomIndex].power;
  text(power2, 120, 230);
  players.splice(randomIndex, 1);
  console.log(players); //gets array
  press++;
} else if(press == 3){
  randomIndex = int(random(players.length));
  text("Name: ", 50, 260);
  text(players[randomIndex].name, 120, 260);
  text("Speciality: ", 50, 280);
  text(players[randomIndex].speciality, 120, 280);
  text("Power: ", 50, 300);
  let power2 = players[randomIndex].power;
  text(power2, 120, 300);
  players.splice(randomIndex, 1);
  console.log(players); //gets array
  press++;
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
