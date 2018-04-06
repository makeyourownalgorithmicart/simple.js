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

}

