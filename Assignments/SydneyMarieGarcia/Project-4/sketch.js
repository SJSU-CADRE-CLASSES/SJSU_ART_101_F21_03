let sprite1; 
let sprite2;
let sprite_tree = [];
let sprite_stage;
let sprite_stage2;
let moveDirection;
let counter;
let isMoving;
let xvar;
let yvar;
let col;
var offset = 20;
let player;
let background_hometown;
let background_house;
let tree;
let squarenum = 10;
let stage;
let visible = 1;
let button;


function preload() {
  Dot=loadFont("Dot.ttf");
  background_hometown = loadImage('https://raw.githubusercontent.com/cidnets/i-cant-code.github.io/main/Project-4/Assets/Maps/HOMETOWN.png');
  background_house = loadImage('https://raw.githubusercontent.com/cidnets/i-cant-code.github.io/main/Project-4/Assets/Maps/PlayerHouse.png');
  player = loadImage('https://raw.githubusercontent.com/cidnets/i-cant-code.github.io/main/Project-4/Assets/PlayerSprites/Player-1.png');
  tree = loadImage('https://raw.githubusercontent.com/cidnets/i-cant-code.github.io/main/Project-4/Assets/Maps/Tree.png');
}


function setup(){
    createCanvas(600,600); 
    sprite1 = new Sprite(120,420,60,60 ,1); 
    sprite2 = new Sprite(480,60,60,60,1);
    sprite_stage = new Sprite(120,360,60,60,3);
    sprite_stage2 = new Sprite(360,480,60,60,3)
    //sprite3 = new Sprite(120,120, 60,60 ,2);
    //sprite4 = new Sprite(120,60,60,60 ,3);
    //sprite5 = new Sprite(120,180, 60,60 ,2);
    //sprite6 = new Sprite(180,120, 60,60 ,2);
    for(let i=0; i<=10; i++){
      sprite_tree[i] = new Sprite(0, 60*i, 60, 60, 3);
    }
    for(let i=10; i<=20; i++){
      sprite_tree[i] = new Sprite(540, 60*(i-10), 60, 60, 3);
    }
    for(let i=20; i<=24; i++){
      sprite_tree[i] = new Sprite(60*(i-20), 0, 60,60,3);
    }
    sprite_tree[25] = new Sprite(480,0,60,60,3);
    sprite_tree[26] = new Sprite(120,120,60,60,3);
    sprite_tree[27] = new Sprite(180,120,60,60,3);
    sprite_tree[28] = new Sprite(120,180,60,60,3);
    sprite_tree[29] = new Sprite(180,180,60,60,3);
    for(let i=30; i<=40; i++){
      sprite_tree[i] = new Sprite(60*(i-30),540,60,60,3);
    }
    sprite_tree[41] = new Sprite(360,180,60,60,3);
    //sprite_tree[42] = new Sprite(420,240,60,60,3);
    for(let i=42; i<=47; i++){
      sprite_tree[i] = new Sprite(60*(i-40),480,60,60,3);
    }
    stage = 0;
  button = createButton('START');
  button.position(250,500);
  button.size(90,60);
  
  button.mousePressed(changestage);
}

function changestage(){
  stage = 1;
}
function draw(){
    background(0); //black background
    button.hide();
    switch(stage){
      case 0:
        background('#69B00B');
        textSize(40);
        strokeWeight(5);
        fill('black');
        textFont(Dot);
        text('Hide n Seek', 600*3/10, 600*4/10);
        button.show()
        break;
      case 1:
        background(background_hometown);
        sprite1.show(1);
        sprite2.show(1);
        for (let i = 0; i<=47; i++){
          sprite_tree[i].show(1);
        }
        sprite_stage.show(1);
        break;
      case 2:
        background(background_house);
        sprite1.show(1);
        sprite2.show(0);
        for (let i = 0; i<=47; i++){
          sprite_tree[i].show(0);
        }
        sprite_stage.show(0);
        sprite_stage2.show(1);
        //sprite_stage.show(240, 0, 0);
        //sprite_stage.show(60,0);
        //sprite1.show(120,120);
        //sprite2.remove();
        //sprite
        //sprite_stage.show(120,120);
        break;
    }
    
    //checkboard();  //8x8 grid    
    //sprite1.show(0,0);  //shows sprite1 object on canvas
    //sprite2.show(0,0); 
    //sprite3.show();
    //sprite4.show();
    //sprite5.show();
    //sprite6.show();
    checkCollision();
    xvar = checkBoundary();
    if(counter<=0 || counter>60 || checkBoundary===false ||col===true ){
      counter = 0;
      isMoving=false;
    } 
  
    if(isMoving===true){
      update();
    }
  

}

function checkCollision(){
  col = false;
  if(stage===1){
    sprite1.testCollisions(sprite2);
    for(let i=0; i<=47; i++){
      sprite1.testCollisions(sprite_tree[i]);
      sprite1.testCollisions(sprite_stage);
    }
  }
  if(stage===2){
    sprite1.testCollisions(sprite_stage2);
  }
  
 

}

function checkBoundary(){
  
  if(sprite1.x>=0 && sprite1.x<=540 && sprite1.y>=0 && sprite1.y<=540){
    return true;
  }
  else {
    if (sprite1.x < 0){
        sprite1.x = 0;
      }
    if (sprite1.x > 540){
        sprite1.x = 540;
      }
    if (sprite1.y < 0){
        sprite1.y = 0;
      }
    if (sprite1.y > 540){
        sprite1.y = 540;
      }
    return false;
  }
}

function Sprite(var1,var2,var3, var4, type){
    this.x = var1; // x position of object
    this.y = var2; // y position of object
    this.w = var3; // width of object
    this.h = var4; // height of object

    this.show = function(visible){
      //depending on type, show different sprites
      //type = 1, player
      //type = 2, tree
      //type = 3, blank space for collisions
      if(visible===1){
        
  
        switch(type){
        case 1: 
          image(player,this.x , this.y , this.w, this.h);
          break;
        case 2: 
          image(tree, this.x , this.y , this.w, this.h);
          break;
        case 3:
          push();
          noStroke();
          noFill();
          rect(this.x , this.y , this.w, this.h);
          pop();
          break;
      }
      }
      
      
    }
  
    this.testCollisions = function(other){

      
        //if the images overlap, shift slightly and mark as collision
        if ((this.x) < (other.x+60) && (other.x) < (this.x)+60 &&
            (this.y) < (other.y)+60 && (other.y) < (this.y)+60) {
              print("collision");
              if(other===sprite2){
                print("sprite2");
              }
              if(other===sprite_stage){
                print("sprite_stage");
                if(stage===1){
                  stage=2;
                  this.x +=240;
                }
              }
              if(other===sprite_stage2){
                print("sprite_stage2");
                if(stage===2){
                  stage=1;
                  this.x-=240;
                }
              }
              for(let i=0; i<=20; i++){
                if(other===sprite_tree[i]){
                  print("sprite_tree ", i)
                }
              }
              
                if(other===sprite_stage && stage===1){
                   stage=2;
                } 
                //if(other===sprite_stage && stage==2){
                //   stage=1;
                // }
                        
                if (other.x < (this.x)){
                      print("obj <-- impact");
                      this.x = this.x+1;
                    }
                    if (other.y > (this.y)){
                      print("impact");
                      print("|");
                      print("v");
                      print("obj");
                      this.y = this.y-1;
                    }
                    if (other.x > (this.x)){
                      print("impact --> obj");
                      this.x = this.x-1;
                     }
                    if (other.y< (this.y)){
                      print("obj");
                      print("^");
                      print("|");
                      print("impact");
                      this.y = this.y+1;
                    }
                 
              col = true;
          }
      
    }
    
}

//for making the 10x10 grid
function checkboard(){
    for (var x = 0; x < width; x += width / squarenum) {
        for (var y = 0; y < height; y += height / squarenum) {
            stroke(255); //grid lines is white
            strokeWeight(1); // lines drawn are 1 units thick
            line(x, 0, x, height); // vertical lines
            line(0, y, width, y); // horizontal lines
        }
    }
}



function update(){
    //runs at the end of the draw function
  
    //change move direction based on left up right down
    switch(moveDirection){
      case 1:
        sprite1.x = sprite1.x + 1;
        counter+=1;
        break;
      case 2:
        sprite1.x = sprite1.x-1;
        counter+=1;
        break;
      case 3:
        sprite1.y = sprite1.y + 1;
        counter+=1;
        break;
      case 4:
        sprite1.y = sprite1.y-1;
        counter+=1;
        break;
    }
    if(keyIsDown(LEFT_ARROW)|| keyIsDown(RIGHT_ARROW)|| keyIsDown(DOWN_ARROW)|| keyIsDown(UP_ARROW)){
      xvar = checkBoundary();
      if(xvar===true && col===false){
        isMoving=true;
        counter = 1;
      } else {
        col = true;
        isMoving = false;
        counter = 0;
      }
    }
} 

  

function keyPressed() {
  switch(keyCode){
      
    case RIGHT_ARROW: 
      if (sprite1.x>=0 && sprite1.x<540){
        isMoving = true;
        counter = 1;
        moveDirection = 1;
        
      }
      //
      break;
      
    case LEFT_ARROW:
      if (sprite1.x>0 && sprite1.x<=540){
        isMoving = true;
        counter = 1;
        moveDirection = 2;
      }
      //
      break; 
    
    case DOWN_ARROW:
      if (sprite1.y>=0 && sprite1.y<540){
        isMoving =true;
        counter = 1;
        moveDirection = 3;
      }
      //
      break;
    
    case UP_ARROW:
      if (sprite1.y>0 && sprite1.y<=540){
        isMoving = true;
        counter = 1;
        moveDirection = 4;
      }
      //
      break;
      

    default:
      console.log("clicked");
      //
      break;
  }
}

