/* 

  sketch_circle.js

  example showing British spelling colour()

  Tariq Rashid, 29-03-2018

*/

function setup() {
  createCanvas(800, 600);
  
  // simple.js defaults
  simple();
}

function draw() {
  
  // use built-in color
  var c1 = color(255,0,0);
  fill(c1);
  circle(300, 300, 200);

  // use British colour
  var c2 = colour(255,255,0);
  fill(c2);
  circle(500, 300, 200);

  // use British colour, different argument form
  var c3 = colour(128, 100);
  fill(c3);
  circle(400, 300, 200);

  // HSB mode
  colourMode(HSB);
  var c4 = colour(230, 100, 100, 0.7);
  fill(c4);
  circle(400, 300, 100);

}

