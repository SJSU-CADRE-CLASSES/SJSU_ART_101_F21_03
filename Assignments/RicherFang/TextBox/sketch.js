'use strict';

let bg;
let img, img1, img2, img3, img4, img5, img6, img7;
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
}

function draw(){

switch (state){
  case 'title':
     title();
     canvas.mouseClicked(titleMouseClicked);
     break;
   case 'level 1':
    //execute code
    level1();
    canvas.mouseClicked(level1MouseClicked);
    break;
  case 'level 2':
      //execute code
      level2();
      canvas.mouseClicked(level2MouseClicked);
      break;
  case 'level 3':
      //execute code
      level3();
      canvas.mouseClicked(level3MouseClicked);
      break;
  case 'level 4':
      //execute code
      level4();
      canvas.mouseClicked(level4MouseClicked);
      break;
  case 'level 5':
        //execute code
        level5();
        canvas.mouseClicked(level5MouseClicked);
        break;
  case 'level 6':
        //execute code
        level6();
        canvas.mouseClicked(level6MouseClicked);
        break;
  case 'level 7':
          //execute code
          level7();
          canvas.mouseClicked(level7MouseClicked);
          break;
  case 'you win':
youWin();
canvas.mouseClicked(youWinMouseClicked);
    break;
  default:
    break;
}



function title(){
  image(img, 0 , 0);
  // background(bg)
// textSize(80);
// text('Space Defenders', 95, 250);

// textSize(30)
// text('Click Anywhere To Start', 235,500);
}

function titleMouseClicked(){
    console.log('canvas is Clicked on title page');
    state = 'level 1'
  }

function level1(){
  background(20)
  image(img1, 0 , 0)
  }

   function level1MouseClicked(){
    state = 'level 2'
}

  function level2(){
    background(20)
    image(img2, 0 , 0)
    }

    function level2MouseClicked(){
      state = 'level 3'
  }

  function level3(){
    background(20)
    image(img3, 0 , 0)
    }

    function level3MouseClicked(){
      state = 'level 4'
  }

  function level4(){
    background(20)
    image(img4, 0 , 0)
    }

    function level4MouseClicked(){
      state = 'level 5'
  }

  function level5(){
    background(20)
    image(img5, 0 , 0)
    }

    function level5MouseClicked(){
      state = 'level 6'
  }

  function level6(){
    background(20)
    image(img6, 0 , 0)
    }

    function level6MouseClicked(){
      state = 'level 7'
  }

  function level7(){
    background(20)
    image(img7, 0 , 0)
    }

    function level7MouseClicked(){
      state = 'level 8'
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