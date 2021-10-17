var song;
//var slider;
var button;
var fft;
var chieudai;

function preload(){
  song = loadSound("uptownfunk.mp3");
  
}
function lenluon(){
  if(!song.isPlaying()){
    song.play();
    song.setVolume(0.3);
    button.html("pause");
  } else {
    song.pause();
    button.html("play");
  }
}
function setup(){

 createCanvas(256,256);
 
 button = createButton("play");
 button.mousePressed(lenluon);
 //slider = createSlider(0,1,0.5,0.1);
 
 song.setVolume(0.3);
 fft = new p5.FFT(0,64);
console.log("width is ", width)
chieudai = width/64; 
console.log("chieud is ,", chieudai)

}


function draw(){
  background(0);
 var spectrum = fft.analyze();
 console.log(spectrum)
 //stroke(255);

 for (var i = 0; i < spectrum.length; i++);{
  stroke(255);
  //var amp = spectrum[i];
  var amp = Math.random(256)
  console.log("Height is ", height)
  console.log("Width is ", width)
  console.log("Chieudai is ", chieudai)
  console.log("Amp is ", amp)
  console.log("Spectrum is", spectrum)
  var y = map(amp, 0, 1, height, 0);

  fill(i,255,255);
  line (i, height , i,  y);
 }
 //console.log(spectrum);
stroke(255);
 noFill();

 

}

// var song;
// var fft;
// var button;
// var w;

// function toggleSong() {
//   if (song.isPlaying()) {
//     song.pause();
//   } else {
//     song.play();
//   }
// }

// function preload() {
//   song = loadSound('uptownfunk.mp3');
// }

// function setup() {
//   createCanvas(256, 256);
//   colorMode(HSB);
//   angleMode(DEGREES);
//   button = createButton('toggle');
//   button.mousePressed(toggleSong);
//   song.play();
//   fft = new p5.FFT(0, 128);
//   w = width/128 ;
// }

// function draw() {
//   background(0);
//   var spectrum = fft.analyze();
//   //console.log(spectrum);
//   stroke(255);
//   //noStroke();
//   //translate(width / 2, height / 2);
//   //beginShape();
//   for (var i = 0; i < spectrum.length; i++) {
//     //var angle = map(i, 0, spectrum.length, 0, 360);
//     var amp = spectrum[i];
//     //var r = map(amp, 0, 256, 20, 100);
//     //fill(i, 255, 255);
//     //var x = r * cos(angle);
//     //var y = r * sin(angle);
//     //stroke(i, 255, 255);
//     //line(0, 0, x, y);
//     //vertex(x, y);
//     var y = map(amp, 0, 256, height, 0);
//     rect(i * w, y, i * w, y);
//   }
//   stroke(255);
//   //endShape();


// }