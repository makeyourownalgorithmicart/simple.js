/* 

  sketch_square.js

  example showing how to use rectangle() from simple.js

  Tariq Rashid, 29-03-2018

*/

function setup() {
  createCanvas(800, 600);
  background('grey');
  noLoop();
}

function draw() {
  
  // built in rect() command
  rect(150, 200, 100, 200, 20);

  // full rectangle()
  // top left corner (450, 200)
  rectangle(450, 200, 100, 200, 20);

}
