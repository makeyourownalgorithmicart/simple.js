/* 

  simple.js

  making p5.js simpler and easier for beginners

  Tariq Rashid, 29-03-2018

*/

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
function randomNumber(n) {
	return int(random(n));
}

function randomNumber(a,b) {
	return int(random(a,b));
}