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
    let KAWSS= [];
    function preload(){

      for (let i = 0; i<= 15; i++){
        KAWS[i] = loadImage(`tiny/KAWS_${i}.JPG`)
      }

     }


    function setup() {
      createCanvas(600, 600);
      background(200);
      textSize(32);
      text("click to randomize", 50, 50);
      concole. log(KAWSS);



    }

    function draw() {

if (animating == true){
  ellipse (random(width), random(height), random (50 ,200));
}
}
function randomizer(){
  animating = false;

  if (dogs[0]){
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
