/* 

  sketch_circle.js

  example showing how to use circle() from simple.js

  Tariq Rashid, 29-03-2018

*/

function setup() {
  createCanvas(800, 600);

  simple();
}

function draw() {

  repeat(5, my_circle);


}


// function to be repeated
function my_circle() {
  ellipse(random(100, 700), random(100, 500), 10);
}