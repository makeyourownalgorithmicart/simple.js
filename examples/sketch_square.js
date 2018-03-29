/* 

  sketch_square.js

  example showing how to use square() from simple.js

  Tariq Rashid, 29-03-2018

*/

function setup() {
  createCanvas(800, 600);
  background('grey');
  noLoop();
}

function draw() {
  
  // built in rectangle command
  rect(150, 200, 200, 200);

  // simpler square
  // top left corner (500, 300) with all sides length 200
  square(450, 200, 200);

}
