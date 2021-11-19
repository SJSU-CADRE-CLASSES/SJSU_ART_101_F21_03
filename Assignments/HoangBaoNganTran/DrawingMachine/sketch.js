let array = [];
var prompt= ["bat","normal butterfly", "monrach butterfly", "pigeon", "dragon", "dragonfly", "penguin", "human limb" ];
var index;
let backgroundColor = 200;
let colorPicker;


function setup() {

  createCanvas(600, 600);
  background(255);

  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(70, 380);

  strokeWeight(3);

  index = int(random(prompt.length));
}

function draw() {

  if (mouseIsPressed){
    // stroke(map(mouseX, 0, 600, 0, 255, true));
    // line(width - mouseX, mouseY,width - pmouseX,pmouseY);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    backgroundColor-=3
    background(backgroundColor);
    mannequin();
    array.push([mouseX,mouseY]);

  } else{}


}

function keyTyped(){

  console.log('key ${key} is being typed');

  if (key === 's'){
    //save this image
    saveCanvas('fileName','png');
  }else if (key === 'p'){
    textSize(24)
    textAlign(CENTER);
    text("This magical customer wants " + prompt[index] + " wings", width/2, height*0.07);
  }else if (key ==='c'){
    clear();
  } else if (key ==='d'){
    //display image
    background(255);
    fill(colorPicker.color());


    mannequin();
    beginShape();
    for(let i= 0; i< array.length - 1; i++){
      // line(array[i][0],array[i][1],array[i + 1][0],array[i + 1][1]);

      curveVertex(array[i][0],array[i][1]);
    }
    endShape();

  }
  return false;

}

function mannequin(){
  push();
  noStroke();
  fill(255,205,153);
  ellipse(width/2, height/2, width*0.2, height*0.4);
  pop(); 
}