'use strict';
// let Star;
let stars = [];
let i;
let counter = 0;
let d;
let count = 0;
let count2 = 0;
let bg;
let img, img1, img2, img3, img4, img5, img6, img7, img8, img9;
let state = 'title';
let canvas;
let points = 0;


function setup(){
// bg = loadImage('assests/SpaceTitle.png');
canvas = createCanvas (800, 800);
background(20)
stroke(195,34,80)
strokeWeight(3)
fill(49, 2, 61)
}

function preload(){
  img = loadImage("assests/SpaceTitle.png")
  img1 = loadImage("assests/Textbox1.png")
  img2 = loadImage("assests/Textbox2.png")
  img3 = loadImage("assests/Textbox3.png")
  img4 = loadImage("assests/Textbox4.png")
  img5 = loadImage("assests/Textbox5.png")
  img6 = loadImage("assests/Textbox6.png")
  img7 = loadImage("assests/Textbox7.png")
  img8 = loadImage("assests/Textbox8.png")
  img9 = loadImage('assests/Ship.png')
}

function draw(){


switch (state){
  case 'title':
     title();
     canvas.mouseClicked(titleMouseClicked);
     break;
   case 'Text 1':
    //execute code
    Text1();
    canvas.mouseClicked(Text1MouseClicked);
    break;
  case 'Text 2':
      //execute code
      Text2();
      canvas.mouseClicked(Text2MouseClicked);
      break;
  case 'Text 3':
      //execute code
      Text3();
      canvas.mouseClicked(Text3MouseClicked);
      break;
  case 'Text 4':
      //execute code
      Text4();
      canvas.mouseClicked(Text4MouseClicked);
      break;
  case 'Text 5':
        //execute code
        Text5();
        canvas.mouseClicked(Text5MouseClicked);
        break;
  case 'Text 6':
        //execute code
        Text6();
        canvas.mouseClicked(Text6MouseClicked);
        break;
  case 'Text 7':
          //execute code
          Text7();
          canvas.mouseClicked(Text7MouseClicked);
          break;
  case 'Text 8':
            //execute code
            Text8();
            canvas.mouseClicked(Text8MouseClicked);
            break;
  case 'level 1':
            //execute code
            level1();
            canvas.mouseClicked(level1MouseClicked);
            break;
  case 'you win':
youWin();
canvas.mouseClicked(youWinMouseClicked);
    break;
  default:
    break;
}


function title(){
  background (20)
  image(img, 0 , 0);
  // background(bg)
// textSize(80);
// text('Space Defenders', 95, 250);

// textSize(30)
// text('Click Anywhere To Start', 235,500);
}

function titleMouseClicked(){
    console.log('canvas is Clicked on title page');
    state = 'Text 1'
  }

function Text1(){
  background(20)
  image(img1, 0 , 0)
  }

   function Text1MouseClicked(){
    state = 'Text 2'
}

  function Text2(){
    background(20)
    image(img2, 0 , 0)
    }

    function Text2MouseClicked(){
      state = 'Text 3'
  }

  function Text3(){
    background(20)
    image(img3, 0 , 0)
    }

    function Text3MouseClicked(){
      state = 'Text 4'
  }

  function Text4(){
    background(20)
    image(img4, 0 , 0)
    }

    function Text4MouseClicked(){
      state = 'Text 5'
  }

  function Text5(){
    background(20)
    image(img5, 0 , 0)
    }

    function Text5MouseClicked(){
      state = 'Text 6'
  }

  function Text6(){
    background(20)
    image(img6, 0 , 0)
    }

    function Text6MouseClicked(){
      state = 'Text 7'
  }

  function Text7(){
    background(20)
    image(img7, 0 , 0)
    }

    function Text7MouseClicked(){
      state = 'Text 8'
  }

  function Text8(){
    background(20)
    image(img8, 0 , 0)
    }

    function Text8MouseClicked(){
      state = 'level 1'
  }

  function level1(){
    background(20,35,50)
    noCursor()
    image(img9, mouseX, mouseY, 200, 200)
 
 
  let s = new Star(random (0,width), random (0,height/2), random (2,4), random (2,7), 5, 250, 250, 200);
  for (i = 0; i < random(3); i+=1) {
  stars.push(s);}
  for (let star of stars) {
  star.moveStar();
  star.createStar();}
  
  
    }

    function level1MouseClicked(){
      state = 'level 2'
  }

  // function level1(){
  //   background(10); 
  //   textSize(30)
  //   text('Destroy The Meteors', 275,200);
  //   textSize(40)
  //   text('Protect The Earth', 250,400);
  //   }

//   function level1MouseClicked(){
//     points++;
//     console.log('points = ' + points);

//     if (points >= 10){
//       state = 'you win'
//     }
//   }
// }

function youWin(){
  background(10); 
  textSize(80);
  text('You Win!', 135, 100);
  
  textSize(30)
  text('Click Anywhere To Restart', 125,300);
}

function youWinMouseClicked(){
state = 'level 1';
points = 0;
}
  }

  class Star {
    constructor(_x,_y,_r1,_r2,_npoints,_colr,_colg,_colb) {
      this.x = _x;
      this.y = _y;
      this.r1 = _r1;
      this.r2 = _r2;
      this.npoints = _npoints;
      this.colr = _colr;
      this.colg = _colg;
      this.colb = _colb;
      
      this.sx = 0;
      this.sy = 0;
      this.angle = TWO_PI / _npoints;
      this.halfAngle = TWO_PI / _npoints / 2;
      
    }
  
    createStar() {
      noStroke();
      fill(250);
      beginShape();
      
      for (let j = 0; j < TWO_PI; j += this.angle) {
        this.sx = this.x + cos(j) * this.r2;
        this.sy = this.y + sin(j) * this.r2;
        vertex(this.sx, this.sy);
        this.sx = this.x + cos(j+this.halfAngle) * this.r1;
        this.sy = this.y + sin(j+this.halfAngle) * this.r1;
        vertex(this.sx, this.sy);
        }
      endShape(CLOSE);
    }
    
    moveStar() {
      this.y += pow(this.r1, 0.9);
      
      if (this.y > height) {
        let index = stars.indexOf(this);
        stars.splice(index, 1);
      }
    } 
  
  
  
  }




