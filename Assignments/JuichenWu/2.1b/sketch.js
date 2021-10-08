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
    let trolls = [];
    let imageCounter = 0;

    function preload() {


      for (let i = 0; i <= 15; i++) {
        trolls[i] = loadImage(`assets/troll_${i}.jpg`)
      }

    }


    function setup() {
      createCanvas(600, 600);
      background(200);
      textSize(24);
      imageMode(CENTER);


      text("click to randomize", 50, 50);
      console.log(trolls);
    }

    function draw() {

      if (animating == true) {
        // Clear();
        image(trolls[imageCounter], width / 2, height / 2);
      }
    }

        if (imageCounter < trolls.length)
          imageCounter++;
        console.log(imageConter);
      } else {
        imageCounter = 0;


      }
    }


    function randomizer() {
      animating = false;
      if (dogs[0]) {
        //this displays random name and splices it out of array
        background(random(200, 255));
        randomIndex = int(random(dogs.length));
        text(`${dogs[randomIndex].name} 's favorite color
  ${dogs[randomIndex].color}`, 50, 50);
        // text(dogs[randomIndex].name +"'s faviorits color is " +
        // dogs[randomIndex].color, 50, 50);
        dogs.splice(randomIndex, 1);
      } else {
        background(random(200, 255));
        text("nothing left!", 50, 50)
      }
    }

    function mousePressed() {
      animating = true;
      setTimeout(randomizer, 2000);

    }
