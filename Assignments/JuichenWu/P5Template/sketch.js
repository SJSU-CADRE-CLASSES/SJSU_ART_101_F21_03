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

    }

    function draw() {

    }

    function mousePressed(){
    background(random(200, 255));
    randomIndex = int(random(dog.length));
    text(dogs[randomIndex].name, 50, 50);
    dog.splice(randomIndex, 1);
  }
