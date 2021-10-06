    // dog I have loved be
    let dogs = [{
      name: "dillon",
      color: "dog treat color"
    }, {
      name: "Ziggy",
      color: "chartrese"
    }, {
      name: "mercedes",
      color: "poop"
    }, {
      name: "petunia",
      color: "rose gold"
    }, {
      name: "kloot",
      color: "coffee grind brown"
    }, {
      name: "nala",
      color: "stardust"
    }];

    let randomIndex;

    function setup() {
      createCanvas(600, 600);
      background(200);
      textSize(32);
      text("click to randomize", 50, 50);

    }

    function draw() {

    }

    function mousePressed() {

    if (dogs[0]){
      //this displays random name and splices it out of array
    background(random(200, 255));
    randomIndex = int(random(dogs.length));
    text(dogs[randomIndex].name, 50, 50);
    dogs.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left!", 50, 50)
  }
  }
