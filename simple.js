/* 

  simple.js

  making p5.js simpler and easier for beginners

  Tariq Rashid, 29-03-2018

*/


//// simple defaults ////

// ideally these should be invoked automatically
// currently needs simple() in setup()
function simple() {
	// default canvas size
	createCanvas(800,600);


	// stop repeating draw()
	noLoop();

	// thicker default lines
	strokeWeight(2);

	// background so it is visible
	background('lightgrey');

	// red fill
	fill('yellow');

	// angles counted in degrees, not radians
	angleMode(DEGREES);
}



//// simple shapes ////

// circle() removed from simple.js as it was introduced by p5js 0.7.3
// square() removed from simple.js as it was introduced by p5js 0.7.3

// circle() temporarily added back while p5js upstream changes radius to diameter
// circle
// friendlier than ellipse
p5.prototype.circle = function (x, y, diameter) {
	ellipse(x, y, diameter);
}


//// simple convenience functions ////

// randomNumber
// intuitive random integers

// random up to n (but not including)
// random between a and b, not including b
function randomNumber() {

	if (arguments.length == 1) {
		return floor( random(arguments[0] + 1) );
	}
	else if (arguments.length == 2) {
		return floor( random(arguments[0], arguments[1] + 1) );
	}
}


//// easier repeat function, inspired  by logo's repeat 5 [] ////

// repeat takes a function and repeats it a given number of times
// credit https://stackoverflow.com/questions/49041124/creating-a-custom-loop-for-children-to-use-eg-repeat5-code-to-be-executed
// updated to allow outer-inner loops
function repeat() {

	if (arguments.length == 2) {
		// repeat(n, fn)
		for (var i = 0; i < arguments[0]; i += 1) {
			// call supplied function
			arguments[1]();
		}

	}
	else if (arguments.length == 4) {

		// repeat(start, end, step, fn(i) )
		for (var i = arguments[0]; i <= arguments[1]; i += arguments[2]) {
			// call supplied function with loop counter
			arguments[3](i);
		}

	} else if (arguments.length == 7) {
		// loop within a loop, also known as a nested loop
		// repeat(outerloop_start, outerloop_end, outerloop_step, innerloop_start, innerloop_end, innerloop_step, fn(i,j) )

		// outer loop
		for (var i = arguments[0]; i <= arguments[1]; i += arguments[2]) {

			// inner loop
			for (var j = arguments[3]; j <= arguments[4]; j += arguments[5]) {
				// call supplied function with both loop counters
				arguments[6](i, j);
			}

		}

	}


}


//// British spelling of colour ////

// function colour() is effectively an alias for color()
// here we simply pass on the arguments to color()
function colour(...args) {
	return color(...args);
}

// alias for colorMode()
function colourMode(...args){
	colorMode(...args);
}


//// rectangle() not just rect() ////

// function rectangle() is effectively an alias for rect()
// here we simply pass on the arguments to rect()
function rectangle(...args) {
	return rect(...args);
}
