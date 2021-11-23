/// money movement set up 
let count = 0

let count2 = 360

let venmo;


// pupil set up movement
let xRight1 = 331;

let xLeft2 = 160;
let xRight2 = 240;

let xLeft3 = 160;
let xRight3 = 240;

let y1 = 248;

let y2 = 248;

let y3 = 248;



function setup() {
  createCanvas(400, 400);
  
 venmo = loadImage('photos/venmo.png');

   
}

function mousePressed(){
  
  
}


function draw() {
  background(31, 24, 58);

///money sign for background 
    
   if (count<360){
  count++
  }else if (count== 360)(count= -60 )
  
   if (count2 >0){
  count2--
  }else if (count2== 0)(count2= 360 )
  
  
  //  if (count3 >0){
  // count2--
  // }else if (count3 == 0)(count2= 360 )
  

 
  
  
  
function moneysignbg(){
  
  
push(); 
  fill(0, 219, 7);
noStroke();
    textSize(40)
  text("$ $$$  $$$$ $$ $$ $ $$ $ ", count2, 20)
  pop();
  
 push(); 
  fill(0, 219, 7);
noStroke();
    textSize(55)
  text("$ $$$  $$$$ $$ $$ $ $$ $ ", count, 60)
  pop();  
  
 push(); 
  fill(61, 255, 148);
noStroke();
    textSize(69)
  text("$ $$$  $$$$ $$ $$ $ $$ $ ", count, 100)
  pop(); 
  
  
  push(); 
  fill(163, 255, 158);
noStroke();
    textSize(80)
  text("$ $$$  $$$$ $$ $$ $ $$ $ ", count2, 160)
  pop();
  
  push(); 
  fill(209, 255, 224);
noStroke();
    textSize(120)
  text("$ $$$ $ $$ $$ $ $$ $ ", count, 250)
  pop();  
  
  push(); 
  fill(209, 255, 224);
noStroke();
    textSize(120)
  text("$ $$$ $ $$ $$ $ $$ $ ", count, 250)
  pop();  
  

  push(); 
  fill(157, 255, 87);
noStroke();
    textSize(150)
  text("$ $$$ $ $$ $$ $ $$ $ ", count2, 360)
  pop();  
  
}  
 
function negativemoney(){
  
/// money signs appearing from blueavi
  if(mouseX > 50 && mouseX < 200)
  fill(250, 12, 0);
noStroke();
    textSize(50)
  text("$ $$$$$$$ $$ $$ $ $$$$$$$", 80, 100)
  
/// money signs appearing from redavi
  if(mouseX > 350 && mouseX < 400)
  fill(255, 105, 97);
noStroke();
    textSize(20)
  text("$ $ $ $ $ $$$$$$$ $$$$ $ $ ", 160, 180)
  
//// money signs appearing from the smalleravi
    if(mouseX > 400 && mouseX < 500)
  fill(255, 51, 58);
noStroke();
    textSize(30)
  text("$$ $ $ $ $$$$$$$ $$$$ ", 240, 270)  
  
}  
  
  
  moneysignbg();
  negativemoney();
  ground();
  
  blueVenmoBase();
  redDebitBase();
  
  blueVenmoArm();
  redDebitArm();
  
  dBlueDiscoverBase();
  orangeDiscoverBase();
  
  discoverEyes();  
  debitEyes();
  venmoEyes();
  
  venmoFeet();
  debitFoot();
  discoverFoot();
  moneysignforeground();
  venmolabel();


}

function venmolabel(){
  image(venmo, 40,250,100,100)
   
}

function drawPupils(){
  
  
  
  
  
}



//// ground setting
 function moneysignforeground(){
    push(); 
  fill(0, 163, 52);
noStroke();
    textSize(50)
  text("$ $$$  $$$$ $$ $$ $ $$ $ ", count, 390)
  pop();
   
 }

function ground(){
  
   c = color(41, 93, 97);
  fill(c);
noStroke();
  rect( -20, 340, 500, 280, 10)
  
}
///money sign foreground


///////////shape structure base///////////
  
  ///venmo card - blue figure /////////////
function blueVenmoBase(){
  


 c = color(79, 176, 245);
  fill(c);
noStroke();
  rect( 40, 40, 160, 280, 10)
  
  rect( 180, 140, 80, 40, 5)  
 
  
}

///debit card - red figure /////////////
  ///////////base
  
  function redDebitBase()
{
  
c = color(239, 67, 67);
  fill(c);
noStroke(); 

rect(200, 200, 120, 120, 8);  
rect(200, 160, 80, 100, 8);
  
  // beginShape();
  // vertex (width * .5, height * .4, )
  // vertex (width * .7, height * .4, )   
  // vertex (width * .7, height * .5, )
  // vertex (width * .8, height * .5, )
  // vertex (width * .8, height * .8, )
  // vertex (width * .5, height * .8, )
  

  endShape(CLOSE);
    
  
}  
  
  //note : there is also curvevertex()
  
  /// hand overlapping part for blue card - venmo ////////
  
  function blueVenmoArm(){
  c = color(79, 176, 245);
  fill(c);
noStroke();
    let x1 = map(mouseX,100, 380, 240, 210);
  rect( x1, 140, 25, 40, 5)  
  
}
 
  ////hand of debit card (red)hugging venmo (blue)/////////

  function redDebitArm(){
    
  c = color(239, 67, 67);
  fill(c);
noStroke();
    
  rect( 160, 260, 80, 20, 5)
         
  }

  /// discover card
  
function dBlueDiscoverBase(){
  
  c = color(47, 78, 99);
  fill(c);
noStroke();
  rect( 320, 240, 40, 120, 10)
    
}

  //other portion of discover card orange and dark blue ////////
  
function orangeDiscoverBase(){
  
  c = color(255, 174, 85);
  fill(c);

  arc( 340, 315, 40, 60, 360, HALF_PI, CHORD)
  
  c = color(255, 174, 85);
  fill(c);
noStroke();
  rect( 320, 300, 40, 60, 10)    
  
}
  
  ////eyes//////////////////////////////
  
  ////placed right,  discover card, dark blue and orange's eyes ////

  function discoverEyes(){
    
  c = color(400, 400, 400);
  fill(c);
strokeWeight(1);
  stroke(51);
  rect(325, 240, 17, 32, 90)
  
  //inner pupil eye//
  c = color(400, 400, 400);
  fill(c);
strokeWeight(2);
  stroke(51);
  rect(331, 248, 4, 16, 90);
       
  
  //eye lid//
    c = color(47, 78, 99);
  fill(c);
strokeWeight(1);
  stroke(51);
    let y1 = map(mouseY,60, 380, 235, 222);
  rect(325, y1, 17, 20, 140, PI + QUARTER_PI, TWO_PI)
    

      
    
  }
  
  /////middle placed , debit card, red/////
 
 function debitEyes(){
   
 ///left eye///   
  c = color(400, 400, 400);
  fill(c);
strokeWeight(1);
  stroke(51);
  rect(204, 200, 18, 35, 90)
  

 ////right eye///
  
    c = color(400, 400, 400);
  fill(c);
strokeWeight(1);
  stroke(51);
  rect(219, 201, 18, 35, 90)
  
  //inner pupil right eye//
  c = color(400, 400, 400);
  fill(c);
strokeWeight(2);
  stroke(51);
   y3 = map(mouseY,220, 20, 210, 205)
   x3 = map(mouseX, 230, 30, 220, 215)
  rect( x3, y3, 4, 13, 90) 
   
   
     //inner pupil left eye//
  c = color(400, 400, 400);
  fill(c);
strokeWeight(2);
  stroke(51);
   y4 = map(mouseY,220, 20, 210, 205)
   x4 = map(mouseX, 225, 20, 210, 205)
  rect( x4, y4, 4, 13, 90)
 }
  
  //////left placed , venmo card, blue ///////
  
  
function venmoEyes()  {
  
  ///left eye//////
    c = color(400, 400, 400);
  fill(c);
strokeWeight(1);
  stroke(51);
  rect(80, 80, 20, 35, 90)
  
  //inner pupil eye//
  c = color(400, 400, 400);
  fill(c);
strokeWeight(2);
  stroke(51);
     y8 = map(mouseY,410, 94, 95, 89)
   x8 = map(mouseX, 410, 94, 110, 89)
  rect( 90, y8, 4, 16, 90)

  
  ////right eye///
  
    c = color(400, 400, 400);
  fill(c);
strokeWeight(1);
  stroke(51);
  rect(97, 80, 20, 35, 90)
  
  //inner pupil eye//
  c = color(400, 400, 400);
  fill(c);
strokeWeight(2);
  stroke(51);
   y9 = map(mouseY,410, 94, 95, 89)
   x9 = map(mouseX, 410, 94, 95, 89)
  rect( 105, y9, 4, 16, 90)  
}
  
  
  
  //note: help key //////((x , y , width length , rounded)////
  
  
  //////feet//////
  
//venmo / blue /  feet////////
  
function venmoFeet(){
  
  //////////////////left foot////////////////////
  c = color('#FDF4E8');
  fill(c);
strokeWeight(1);
  stroke(51); 

  beginShape();
  vertex (width * .1, height * .9, )
  vertex (width * .28, height * .9, )   
  vertex (width * .28, height * .8, )
  vertex (width * .2, height * .8, )
  vertex (width * .2, height * .85, )
  vertex (width * .11, height * .88)


  endShape(CLOSE);
  
  
  ////////////////////right foot///////////
 c = color('#FDF4E8');
  fill(c);
strokeWeight(1);
  stroke(51); 

  beginShape();
  vertex (width * .32, height * .9)
  vertex (width * .5, height * .9 )   
  vertex (width * .5, height * .88 )
  vertex (width * .4, height * .85 )
  vertex (width * .4, height * .8 )
  vertex (width * .32, height * .8)


  endShape(CLOSE);  
  
  
}  
  
//debit / red/ foot////
  
function debitFoot(){
  
  c = color('#FDF4E8');
  fill(c);
strokeWeight(1);
  stroke(51); 

  beginShape();
  vertex (width * .55, height * .9 )
  vertex (width * 0.7, height * 0.9 )   
  vertex (width * .7, height * .8 )
  vertex (width * .65, height * .8 )
  vertex (width * .65, height * .85 )
  vertex (width * .58, height * .88)
  
  
  endShape(CLOSE);
  
    
}
  
 
/////////discover dark blue and orange , foot/////////////////
  
function discoverFoot(){
  
    c = color('#FDF4E8');
  fill(c);
strokeWeight(1);
  stroke(51); 

  beginShape();
  vertex (width * .9, height * .9 )
  vertex (width * .97, height * .9 )   
  vertex (width * .97, height * .8 )
  vertex (width * .95, height * .8 )
  vertex (width * .94, height * .85 )
  vertex (width * .94, height * .88 )
  vertex (width * .9, height * .88 )
  
  
  endShape(CLOSE); 
  
  
    
  
}
  

