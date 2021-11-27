'use strict';

let osc;


function setup() {
  createCanvas(windowWidth, windowHeight);

  osc = new p5.Oscillator();

  osc. freq(440);

  osc.amp(0.2);

  osc.start();

}

function draw() {
  background(220);
}
