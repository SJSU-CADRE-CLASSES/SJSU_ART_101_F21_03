let array =[];
let backgroundColor =200;



function setup() {
  createCanvas(600, 600);
   background(backgroundColor);

  strokeWeight(5);
  noFill();


}


function draw() {

  if (mouseIsPressed) {
     backgroundColor-= 3;
// line(mouseX, mouseY,pmouseX, pmouseY);
    background(backgroundColor);

    array.push([mouseX, mouseY]);

      beginShape(0);
      for(let i =0; i < array.length; i++){
      // line(array[i][0], array[i][1], array[i+1][0], array[i+1][1]);
       curveVertex(array[i][0], array[i][1])
     }
     endShape();

     }


}

   function keyTyped(){


     if (key === 's'){
       // save this image
       saveCanvas('fileName', 'png');
     } else if (key === 'd'){

     // display image
       background(255)

       beginShape(0);
      for(let i =0; i < array.length; i++){
      // line(array[i][0], array[i][1], array[i+1][0], array[i+1][1]);
       curveVertex(array[i][0], array[i][1])
     }
     endShape();

     }


  return false;


   }

function mouse Pressed(){
  console.log("mouse pressed function");
  array = [];
  console.log(array)
}
