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
    let animating = false;
    let trolls = []
    let imageCounter = 0;
    let button;
    let cnv;

    function preload() {

      for (let i = 0; i <= 15; i++) {
        trolls[i] = loadImage(`assets/troll_${i}.jpg`)

      }

    }


    function setup() {
      cnv = createCanvas(600, 600);
      cnv.parent("#canvasDiv");
      background(255, 205, 210);
      textSize(30);
      textFont(`Courier new`)
      // textAlign(CENTER)
      textStyle(BOLD)
      fill(255)
      imageMode(CENTER);
      frameRate(8);


      // text("click to randomize", 50, 50);
      // button = createButton("click to randomize");
      button = select(`#randButton`)
      button.mousePressed(buttonPressed);
      button.class("randomizerButton");

    }

    function draw() {

      if (animating == true) {
        clear();
        image(trolls[imageCounter], width/2, height/2);
        if (imageCounter < trolls.length - 1) {
        imageCounter++;
        console.log(imageCounter);
        } else { imageCounter = 0;

        }

      }
    }


    function randomizer() {
      animating = false;
      if (dogs[0]) {
        //this displays random name and splices it out of array
        // background(random(200, 255));
        clear();
        randomIndex = int(random(dogs.length));
        text(dogs[randomIndex].name, width/20, height -5);
        image(random(trolls), width/2, height/2);
        dogs.splice(randomIndex, 1);
      } else {
        background(random(200, 255));
        text("nothing left!", 50, 50)
      }
    }

    function buttonPressed() {
      animating = true;
      setTimeout(randomizer, 2000);

    }
