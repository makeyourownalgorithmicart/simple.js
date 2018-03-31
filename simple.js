/* 

  simple.js

  making p5.js simpler and easier for beginners

  Tariq Rashid, 29-03-2018

*/


// simple defaults
// ideally these should be invoked automatically
// currently needs simpl() in setup()
function simple() {
	// stop repeating draw()
	noLoop();

	// thicker default lines
	strokeWeight(2);

	// red fill
	fill('yellow');
}

// circle
// friendlier than ellipse
// uses radius not diameter
function circle(x, y, radius) {
	ellipse(x, y, 2*radius);
}

// square
// friendlier than rectangle
function square(x, y, w) {
	rect(x, y, w, w);
}


// randomNumber
// intuitive random integers

// random up to n (but not including)
// random between a and b, not including b
function randomNumber() {

	if (arguments.length == 1) {
		return int( random(arguments[0] + 1) );
	}
	else if (arguments.length == 2) {
		return int( random(arguments[0], arguments[1] + 1) );
	}
}