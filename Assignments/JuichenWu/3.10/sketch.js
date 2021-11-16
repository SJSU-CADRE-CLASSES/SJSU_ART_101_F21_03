let array =[];



function setup() {
  createCanvas(windowWidth, windowHeight);
   background(220, 50, 133);

  strokeWeight(5);
  noFill();


}


function draw() {
   background(220, 50, 133,5);

  // if (mouseIsPressed) {

    stroke(map(mouseX, 0, 600, 0, 255, true))
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

//     background(0)
//     array.push([mouseX, mouseY]);

//   }

// }

   function keyTyped(){

     if (key === 's'){
       // save this image
       saveCanvas('fileName', 'png');
     } else if (key === 'c'){
       // clear the image
       clear();


     }


  return false;


   }
