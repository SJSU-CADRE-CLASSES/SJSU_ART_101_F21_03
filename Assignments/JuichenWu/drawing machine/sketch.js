let array =[];
let backgroundColor =400;



function setup() {

  createCanvas(900,900);


  drawGrid();
  strokeWeight(5);

  noFill();


}


function draw() {

  if (mouseIsPressed) {

    stroke(map(mouseX, 0, 600, 0, 255, true))
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
//     background(0)
//     array.push([mouseX, mouseY]);

//   }

// }

   function keyTyped(){


     if (key === 's'){
       saveCanvas('fileName', 'png');
     } else if (key === 'd'){


       background(255)

       beginShape();

      for(let i =0; i < array.length; i++){
      // line(array[i][0], array[i][1], array[i+1][0], array[i+1][1]);
       curveVertex(array[i][0], array[i][1])
     }
     endShape();

     }


  return false;


   }

function mousePressed(){
  array =[];
  backgroundColor =280;
}

function drawGrid(){
  numCells = 6;
  fillColor = 265;
   // noStroke();
   strokeWeight(0);

  for (let i = 0; i<= width; i += width / numCells){
    for (let j = 0; j <= height; j += height / numCells){
      if (fillColor === 255){
      fillColor = 200;
    } else {
      fillColor =255;

    }
      fill(fillColor);
      rect(i, j, width / numCells, height / numCells);
    }

     }

     strokeWeight(10);
  }
