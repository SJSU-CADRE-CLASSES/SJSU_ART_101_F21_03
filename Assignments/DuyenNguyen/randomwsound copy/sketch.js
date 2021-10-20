// // var song;
// // //var slider;
// // var button;
// // var fft;
// // var chieudai;

// // function preload(){
// //   song = loadSound("uptownfunk.mp3");
  
// // }
// // function lenluon(){
// //   if(!song.isPlaying()){
// //     song.play();
// //     song.setVolume(0.3);
// //     button.html("pause");
// //   } else {
// //     song.pause();
// //     button.html("play");
// //   }
// // }
// // function setup(){

// //  createCanvas(256,256);
 
// //  button = createButton("play");
// //  button.mousePressed(lenluon);
// //  //slider = createSlider(0,1,0.5,0.1);
 
// //  song.setVolume(0.3);
// //  fft = new p5.FFT(0,64);
// // console.log("width is ", width)
// // chieudai = width/64; 
// // console.log("chieud is ,", chieudai)

// // }


// // function draw(){
// //   background(0);
// //  var spectrum = fft.analyze();
// //  console.log(spectrum)
// //  //stroke(255);

// //  for (var i = 0; i < spectrum.length; i++);{
// //   stroke(255);
// //   //var amp = spectrum[i];
// //   var amp = Math.random(256)
// //   console.log("Height is ", height)
// //   console.log("Width is ", width)
// //   console.log("Chieudai is ", chieudai)
// //   console.log("Amp is ", amp)
// //   console.log("Spectrum is", spectrum)
// //   var y = map(amp, 0, 1, height, 0);

// //   fill(i,255,255);
// //   line (i, height , i,  y);
// //  }
// //  //console.log(spectrum);
// // stroke(255);
// //  noFill();

 

// // }

// var song;
// var fft;
// var button;
// var w;

// // function toggleSong() {
// //   if (song.isPlaying()) {
// //     song.pause();
// //   } else {
// //     song.play();
// //   }
// // }
// function toggleSong(){
//   if(!song.isPlaying()){
//     song.play();
//     song.setVolume(0.3);
//     button.html("pause");
//   } else {
//     song.pause();
//     button.html("play");
//   }
// }
// function preload() {
//   song = loadSound('uptownfunk.mp3');
// }

// function setup() {
//   createCanvas(512,512);
//   //colorMode(HSB);
//   angleMode(DEGREES);
  
//   button = createButton('play');
//   button.mousePressed(toggleSong);
//   song.play();
//   fft = new p5.FFT(0, 128);
//   dance = width/128 ;
// }

// function draw() {
//   background(0);
//   // textSize(15);
  
//   // text('click twice for the button to play', 100, 30);
//   // color("pink");
//   // text (50);
//   //text ("click twice for the button to play");
//   colorMode(HSB, 255);
  
  
//   var spectrum = fft.analyze();
  
//   stroke(255);
//   stroke(3);

  
//   for (var i = 0; i < spectrum.length; i++) {
    
//     var amp = spectrum[i];
    
//     var y = map(amp, 0, 256, height, 0);
//     rect(i * dance, y, i * dance, y);
//   }
//   stroke(255);
//   clicktwice();


// }

// function clicktwice(){
//   strokeWeight(2);
//   textSize(15);
//   text('click twice for the button to play', 100, 30);
// }
var fft;
var song1 = ["title","7 rings", "artist", "Ariana Grande", "album", "thank u, next"]
var song2 = ["title", "Ghost", "artist", "Ariana Grande", "album", "thank u, next"]
var song3 = ["title", "Sexy Back", "artist", "Justin Timberlake", "album", "FutureSex/LoveSounds"]
var song4 = ["title", "What Goes Around Comes Around", "artist", "Justin Timberlake", "album", "FutureSex/LoveSounds"]
//var song5 = ["title": "Anomaly", "artist": "Lecrae", "album": "Anomaly"]
// var song6 = ["title": "Timepiece", "artist": "Lecrae", "album": "Anomaly"]
// var song7 = ["title": "Dirty Water", "artist": "Lecrae", "album": "Anomaly"]
// var song8 = ["title": "Wish", "artist": "Lecrae", "album": "Anomaly"]
// var song9 = ["title": "Runners", "artist": "Lecrae", "album": "Anomaly"]
// var song10 = ["title": "All I Need Is You", "artist": "Lecrae", "album": "Anomaly"]

let title = [{
  name: "7 rings",
 artist: "Ariana Grande"
}, {
  name: "Ghost",
  artist: "Ariana Grande"
}, {
  name: "Sexy Back",
  artist: "Justin Timberlake"
}, {
  name: "What Goes Around Comes Around",
  artist: "Justin Timberlake"
}, {
  name: "Out Of The Wood",
  artist: "Taylor Swift"
}, {
  name: "Shake It Off",
  artist: "Taylor Swift"
}, {
  name: "Up Town Funk ",
  artist: "abc"
}]
let songs = [song1, song2, song3, song4];
//let songs = [];


function preload() {
     song1 = loadSound('ArianaGrande7rings.mp3');
     song2 = loadSound('ArianaGrandeghostin.mp3');
     song3 = loadSound('JustinTimberlakeSexy Back.mp3');
     song4 = loadSound('JustinTimberlakeWhatGoesAroundComesAround.mp3');
     
     for (let i = 0; i <= 4; i++) {
              songs  = songs [random[i]]
// function toggleSong() {
//   if (song.isPlaying()) {
//     song.pause();
//   } else {
//     song.play();
//   }
// }
function toggleSong(){
  if(!songs.isPlaying()){
    songs.play();
    songs.setVolume(0.3);
    button.html("pause");
  } else {
    songs.pause();
    button.html("play");
  }
}
// function preload() {
//       for (let i = 0; i <= 11; i++) {
//         songs[i] = loadSound(`assets2/songs_${i}.mp3`)
//       }
//     }
    function setup() {
      createCanvas(512,512);
      //colorMode(HSB);
      angleMode(DEGREES);
      
      button = createButton('play');
      button.mousePressed(toggleSong);
      songs.play();
      fft = new p5.FFT(0, 128);
      dance = width/128 ;
    }
    
    function draw() {
      background(0);
      // textSize(15);
      
      // text('click twice for the button to play', 100, 30);
      // color("pink");
      // text (50);
      //text ("click twice for the button to play");
      colorMode(HSB, 255);
      
      
      var spectrum = fft.analyze();
      
      stroke(255);
      stroke(3);
    
      
      for (var i = 0; i < spectrum.length; i++) {
        
        var amp = spectrum[i];
        
        var y = map(amp, 0, 256, height, 0);
        rect(i * dance, y, i * dance, y);
      }
      stroke(255);
      clicktwice();
    
    
    }
    
    function clicktwice(){
      strokeWeight(2);
      textSize(15);
      text('click twice for the button to play', 100, 30);
    }


     }
    }
