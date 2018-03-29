/* 

  sketch_circle.js

  example showing how to use circle() from simple.js

  Tariq Rashid, 29-03-2018

*/

function setup() {
  createCanvas(800, 600);
  background(200);
  noLoop();
  fill(255, 0, 0, 100);
  stroke(0,0,0, 100);
}

function draw() {
  
  // built in random() command
  for (var i = 0; i < 100; i++) {
    var x = random(7) * 100;
    circle(x, 100+i, 10);
  }

  // simple randomNumber(n) for integers up to n
  // answer can include both 0 and n
  for (var i = 0; i < 100; i++) {
    var x = randomNumber(7) * 100;
    circle(x, 300+i, 10);
  }

  // simple randomNumber(a,b) for integers in range (a,b)
  // random number could be a or b
  for (var i = 0; i < 100; i++) {
    var x = randomNumber(3,5) * 100;
    circle(x, 450+i, 10);
  }

}
