function setup() {
  createCanvas(400, 400);
    background('#11371E');
   mic = new p5.AudioIn();
  mic.start();
}
function draw() {
  //background
  if (mouseIsPressed)
  {
    fill(random(225), random (225), random(225));
  }
  else{
    fill('black')
  }
  ellipse(mouseX,mouseY, 80,80)
  //head
  push();
  translate(width/2, height/2);
    c = color('#2E304C');
fill(c);
  rotate(frameCount / 180);
  polygon(0, 0, 150, 6);
  pop();
  //LeftHorn
    fill('#99DEFF')
  triangle(10, 70, 30, 10, 50, 70);
  fill('#6CAFCF')
  rect(10,75,40,40);
  fill('#42819F')
  rect(16,120,40,40);
  //RightHorn
  fill('#99DEFF')
  triangle(350, 70, 360, 30, 390, 70);
  fill('#6CAFCF')
  rect(350,75,40,40);
  fill('#42819F')
  rect(345,120,40,40);
  //mouth
  fill('#1E2155');
arc(200,280,150,mic.getLevel()*300,PI,0, CHORD);
  
  console.log(mic.getLevel());
  //left eye
    fill('#8500FF');
    arc(140, 150, 70, 60, 0, PI + QUARTER_PI, OPEN);
//right eye
  fill('#550000')
 arc(270, 150, 80, 80, 0, PI - QUARTER_PI , OPEN);
    //pupil L
     fill('black');
  ellipse(map(mouseX,30,500,150,130),152,10,35);
      //pupil R
     fill('white');
  ellipse(map(mouseX,30,700,290,260),170,10,10);

  
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
  
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
    
  }
  
  endShape(CLOSE)
  ;


}


