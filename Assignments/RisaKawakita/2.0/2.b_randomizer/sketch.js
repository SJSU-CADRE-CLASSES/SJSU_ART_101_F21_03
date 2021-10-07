// random place I have / havenever been to 

let planes = [{
  country: "Japan", 
  capital: "Tokyo"
}, {
  country: "HongKong", 
  capital: "Central and Western District"
}, {
  country: "Thailand", 
  captal: "Bangkok"
},{
  country: "Sweden",
  capital: "StockHolm"
},{
  country: "Norway",
  capital: "Olso"
},{
  country: "Maldives",
  capital: "Male"
},{
  country: "Newzealand",
  capital: "Wellington"
}];

let randomIndex;
let animating = false;


function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);
  
  text("click to randomize", 50, 50);

}

function draw() {

    if (animating == true){
     
  ellipse(random(width), random(height), random(50, 200));
}
}


function randomizer(){

   animating = false;

   if (planes[0]){

    background(random(255, 200));
    randomIndex = int(random(planes.length));

    text(`${planes[randomIndex].country} 's capital is 
    ${planes[randomIndex].capital}`, 50, 50);

    // text(planes[randomIndex].country + "'s capital is " + 
    // planes[randomIndex].capital, 50, 50);
    planes.splice(randomIndex, 1);
    } else {
      background(random(255, 200));
      text("nothing left!", 50, 50);
    }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);


}