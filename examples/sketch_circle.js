/* 

  sketch_circle.js

  example showing how to use circle() from simple.js

  Tariq Rashid, 29-03-2018

*/

function setup() {
  createCanvas(800, 600);
  background('grey');
  noLoop();
}

function draw() {
  
  // built in ellipse command
  ellipse(300, 300, 200);

  // simpler circle
  // centred at (500, 300) with diameter 100
  circle(500, 300, 200);

}
