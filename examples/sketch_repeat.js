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

	// first form repeat(n, my_function)
	repeat(5, my_circle);

	// second form repeat(start, end, step, function(counter))
	repeat(100, 400, 50, my_square)

}


// function to be repeated
function my_circle() {
  ellipse(random(100, 700), random(100, 500), 10);
}

// another function to be repeated which takes a parameter
function my_square(x) {
	square(x, height/2, 10);
}