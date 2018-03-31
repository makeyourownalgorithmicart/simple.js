function setup() {
  // put setup code here
  createCanvas(800, 600);
  background('grey');

  // use simple.js defaults
  simple();
}

function draw() {
  // put drawing code here

  circle(400, 300, randomNumber(50,100));
  text("circle should not be moving due to noLoop() default", 100, 100);

}
