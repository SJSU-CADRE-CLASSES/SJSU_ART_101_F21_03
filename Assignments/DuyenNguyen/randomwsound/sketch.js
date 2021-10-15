var song;
var slider;
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

 createCanvas(360,360);
 background(0);
 button = createButton("play");
 button.mousePressed(lenluon);
 slider = createSlider(0,1,0.5,0.1);
 
 song.setVolume(0.3);
 fft = new p5.FFT(0,64);
chieudai = width /64; 


}


function draw(){

 var spectrum = fft.analyze();
 stroke(255);

 for (var i = 0; i < spectrum.length; i++);{
  var amp = spectrum[i];
  var y = map(amp, 0, 256, height, 0);

  fill(i,255,255);
  line (i*chieudai, height , chieudai*i,  y);
 }
 //console.log(spectrum);
stroke(255);
 noFill();

 

}