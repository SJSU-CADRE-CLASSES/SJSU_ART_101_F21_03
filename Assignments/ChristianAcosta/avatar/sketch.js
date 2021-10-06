//Map Data
let xArray = [240, 260, 260, 200, 160, 170, 150, 170, 160, 100, 95, 115, 120, 110, 140, 150, 140, 165, 160, 110, 120, 105, 130, 150, 148, 175, 140, 150, 165, 170, 180, 190, 210, 205, 230, 240, 230, 220, 225, 250, 180, 190, 185, 200, 205, 215, 225, 210, 225, 230, 250, 245, 260, 260, 265];//length is 55
let yArray = [480, 470, 450, 430, 360, 350, 330, 320, 310, 311, 305, 295, 300, 290, 285, 275, 260, 275, 260, 280, 265, 250, 240, 250, 257, 255, 235, 220, 210, 225, 215, 210, 220, 210, 220, 220, 250, 250, 265, 265, 290, 320, 325, 323, 310, 320, 310, 290, 285, 280, 300, 320, 320, 300, 295];//length is 55
let xArray1 = [250, 245, 250, 265, 270, 340, 350, 325, 335, 315, 335, 350, 345, 350, 300, 295, 315, 350, 360, 365, 370];
let yArray1 = [265, 240, 235, 240, 250, 230, 240, 250, 270, 275, 275, 270, 280, 295, 290, 305, 320, 250, 240, 270, 230];//length 21

let xArray2 = [205, 205, 180, 175, 210, 225, 235, 225, 225, 235, 235, 250, 255, 250, 235, 235, 220, 200, 190, 180];
let yArray2 = [210, 150, 140, 150, 155, 145, 160, 145, 130, 125, 110, 110, 105, 100, 105, 100, 95, 110, 100, 110];//length 20
//End of Map Data================================================
//note: the system draws faster for how longer the array is
let x = xArray[0]; //use to get values
let y = yArray[0];
let x1 = xArray1[0];
let y1 = yArray1[0];
let x2 = xArray2[0];
let y2 = yArray2[0];
let i = 0;         //use to navigate array
let c = 1;
let i1 = 0;
let c1 = 1;
let i2 = 0;
let c2 = 1;
let xSlope;        //get slope value
let ySlope;
let xSlope1;
let ySlope1;
let xSlope2;
let ySlope2;
let radius = 3;    //set size of circle

var brushColor;
var brush;

let bugs = [];

function setup() {
  createCanvas(700, 500);
  r = random(0);    //set up for color changing circle
    r = random(190, 230);
    g = random(0, 30);
    b = random(10, 40);
    s = random(10, 100);
  noStroke();
  
    for(let i = 0; i < 97; i++){
    bugs.push(new jitter());
  }

}

function draw() {
 background(0, 0, 0, 1);    //bg and circle changes color
  fill(r, g, b);
  ellipse(600, 50, s, s);
  
  paintBrush();              //pintbrush function
  
  for(let i = 0; i < bugs.length; i++){
    bugs[i].move();
    bugs[i].display();
  } 
  
  //Array stuff******************
  fill(255);
  //Draw OG Array
  ellipse(x, y, radius, radius);    //draw 1 circle
  for (let p = 0; p < 55; p++){
    xSlope = xArray[c] - xArray[i];    //get slope of x2-x1
    ySlope = yArray[c] - yArray[i];
    x = x + xSlope/1000; //x = x + slope/time, this moves the ellipse
    y = y + ySlope/1000; //slope = x2 - x1
    slope();            //figures out how to handle how the ellipse moves. Note to self: IM SO SMART for finding this out
  }
  //Draw next Array
  ellipse(x1, y1, radius, radius);
  for (let p = 0; p < 21; p++){
    xSlope1 = xArray1[c1] - xArray1[i1];    //get slope of x2-x1
    ySlope1 = yArray1[c1] - yArray1[i1];
    x1 = x1 + xSlope1/1000; //x = x + slope/time, this moves the ellipse
    y1 = y1 + ySlope1/1000; //slope = x2 - x1
    slope1();
  }
    //Draw last Array
  ellipse(x2, y2, radius, radius);
  for (let p = 0; p < 21; p++){
    xSlope2 = xArray2[c2] - xArray2[i2];    //get slope of x2-x1
    ySlope2 = yArray2[c2] - yArray2[i2];
    x2 = x2 + xSlope2/1000; //x = x + slope/time, this moves the ellipse
    y2 = y2 + ySlope2/1000; //slope = x2 - x1
    slope2();
  }
}//end of array stuff*************
//end of draw function==========================================

function mousePressed() {
  let d = dist(mouseX, mouseY, 600, 50);
  if (d < s) {
    // Pick new random color values
    r = random(190, 230);
    g = random(0, 30);
    b = random(10, 40);
    s = random(10, 100);
  }
} //if you click circle, bg changes

function paintBrush() {    //paintbush
  noStroke();
  if (mouseX < 550 || mouseY > 100) { //dont draw over button
   if (mouseIsPressed == true) {
      fill(254, 1, 154, 100);
      ellipse(mouseX, mouseY, 25, 25);
    }
  }
}

function slope(){
    if(xSlope >= 0 && ySlope >= 0){    //use the slope to find how the circle moves
      if(x>=xArray[c] && y>=yArray[c]){ //the parameter of this if statement makes the circle stop moving, idk exactly how but :)
      i++;    //move to next part of array
      c++;
      x = xArray[i];    //set x,y to next values
      y = yArray[i];
      }
    }else if(xSlope <= 0 && ySlope <= 0){
      if(x<=xArray[c] && y<=yArray[c]){
      i++;
      c++;
      x = xArray[i];
      y = yArray[i];
      }
    }else if(xSlope <= 0 && ySlope >= 0){
      if(x<=xArray[c] && y>=yArray[c]){
      i++;
      c++;
      x = xArray[i];
      y = yArray[i];
      }
    }else if(xSlope >= 0 && ySlope <= 0){
      if(x>=xArray[c] && y<=yArray[c]){
      i++;
      c++;
      x = xArray[i];
      y = yArray[i];
      }
     }
}

function slope1(){
    if(xSlope1 >= 0 && ySlope1 >= 0){
      if(x1>=xArray1[c1] && y1>=yArray1[c1]){
      i1++;
      c1++;
      x1 = xArray1[i1];
      y1 = yArray1[i1];
      }
    }else if(xSlope1 <= 0 && ySlope1 <= 0){
      if(x1<=xArray1[c1] && y1<=yArray1[c1]){
      i1++;
      c1++;
      x1 = xArray1[i1];
      y1 = yArray1[i1];
      }
    }else if(xSlope1 <= 0 && ySlope1 >= 0){
      if(x1<=xArray1[c1] && y1>=yArray1[c1]){
      i1++;
      c1++;
      x1 = xArray1[i1];
      y1 = yArray1[i1];
      }
    }else if(xSlope1 >= 0 && ySlope1 <= 0){
      if(x1>=xArray1[c1] && y1<=yArray1[c1]){
      i1++;
      c1++;
      x1 = xArray1[i1];
      y1 = yArray1[i1];
      }
     }
}

function slope2(){
    if(xSlope2 >= 0 && ySlope2 >= 0){
      if(x2>=xArray2[c2] && y2>=yArray2[c2]){
      i2++;
      c2++;
      x2 = xArray2[i2];
      y2 = yArray2[i2];
      }
    }else if(xSlope2 <= 0 && ySlope2 <= 0){
      if(x2<=xArray2[c2] && y2<=yArray2[c2]){
      i2++;
      c2++;
      x2 = xArray2[i2];
      y2 = yArray2[i2];
      }
    }else if(xSlope2 <= 0 && ySlope2 >= 0){
      if(x2<=xArray2[c2] && y2>=yArray2[c2]){
      i2++;
      c2++;
      x2 = xArray2[i2];
      y2 = yArray2[i2];
      }
    }else if(xSlope2 >= 0 && ySlope2 <= 0){
      if(x2>=xArray2[c2] && y2<=yArray2[c2]){
      i2++;
      c2++;
      x2 = xArray2[i2];
      y2 = yArray2[i2];
      }
     }
}
