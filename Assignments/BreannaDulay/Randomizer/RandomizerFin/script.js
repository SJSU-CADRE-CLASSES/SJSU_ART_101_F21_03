var sayings = [
  `Each time we don't say what we wanna say, we're dying.`,
 `It's better to dance than to march through life.`, 
 `You only live once, but if you do it right, once is enough.`,
 `It is better to be hated for what you are than to be loved for what you are not.`,
 `We are all in the gutter, but some of us are looking at the stars.`,
 `Breathe in for 5 seconds. Exhale for 5 seconds. Repeat until you are steady.`,
 `Let go of what you can't control.`,
 `What you dwell on now will be an afterthought in the future.`,
 `Your heart and mind needs as much rest as your body.`,
 `You will catch up, the world will not stop spinning for you, but you will catch up.`,
  `You're going to be alright.`,
  `Love yourself at your best and at your worst.`,
  `If you don't stand for something you will fall for anything.`,
  `Love all, trust a few, do wrong to none.`,
  `If you only read the books that everyone else is reading, you can only think what everyone else is thinking.`
];


// sayings 
var length = sayings.length;

function loopsayings() {
  var rand = Math.round(Math.random() * (length - 1));

  
  var newQuote = sayings[rand];
  document.getElementById("demo").innerHTML = newQuote;
}

//color bg 
function changeColor() {
 
  setInterval(randomColor, (1500));  
}

function randomColor() {

var colorrgb0 = Math.floor(Math.random() * 255);
  var colorrgb1 = Math.floor(Math.random() * 255);
  var colorrgb2 = Math.floor(Math.random() * 255);

  document.getElementById("body-bg").style.transitionDuration = "8s";
  document.body.style.backgroundColor = "rgb(" + colorrgb0 + ", " + colorrgb1 + ", " + colorrgb2 + ")";

}

// audio
function play() {
  var audio = new Audio('music/spiritualstate.mp3'); 
  audio.play();
}

function setup() {
  textAlign(CENTER);
  textSize(20); 

  // var button = createButton('click me');
  // textSize (60)
  // button.position(715, 300);
  // button.mousePressed(sayings);
}

function draw() {
  textAlign (CENTER)
  textSize(20);
  textFont ('verveine')
  text(sayings, 750,400);
}


// user input box
document.addEventListener('input', search);

const words = [ `Each time we don't say what we wanna say, we're dying.`,
`It's better to dance than to march through life.`, 
`You only live once, but if you do it right, once is enough.`,
`It is better to be hated for what you are than to be loved for what you are not.`,
`We are all in the gutter, but some of us are looking at the stars.`,
`Breathe in for 5 seconds. Exhale for 5 seconds. Repeat until you are steady.`,
`Let go of what you can't control.`,
`What you dwell on now will be an afterthought in the future.`,
`Your heart and mind needs as much rest as your body.`,
`You will catch up, the world will not stop spinning for you, but you will catch up.`,
 `You're going to be alright.`,
 `Love yourself at your best and at your worst.`,
 `If you don't stand for something you will fall for anything.`,
 `Love all, trust a few, do wrong to none.`,
 `If you only read the books that everyone else is reading, you can only think what everyone else is thinking.`];

function search(e) {
  const input = e.target.value.toLowerCase().trim();
  const filteredArray = words.filter(x => {
    const c = x.toLowerCase();
    let m = 0;
    for (let l of input) {
      const i = c.substr(m).indexOf(l);
      if (i < m) return false;
      m = i;
    }
    return true;
 });
 console.log(filteredArray);
}