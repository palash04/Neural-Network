// An array of points to train the perceptron
var training = new Array(200000);

var pobj;

// train perceptron with one point at a time
var count = 0;

var xmin = -1;
var ymin = -1;
var xmax = 1;
var ymax = 1;

// Function to draw a line
function f(x){
	var y = 0.89 * x + 0.1;
	return y;
}

function setup(){
	createCanvas(800,800);

	pobj = new Perceptron(3,0.001);

	for (var i=0; i<training.length; i++){
		var x = random(-1,1);
		var y = random(-1,1);
		var ans = 1;
		if (y < f(x)) {
			ans = -1;
		}

		training[i] = {
			input: [x,y,1],
			output: ans
		};
	}

}

function draw(){
	background(0);

	// Draw the line
	var x1 = map(xmin,xmin,xmax,0,width);
	var y1 = map(f(xmin),ymin,ymax,height,0);
	var x2 = map(xmax,xmin,xmax,0,width);
	var y2 = map(f(xmax),ymin,ymax,height,0);

	strokeWeight(2);
	stroke(255);
	line(x1,y1,x2,y2);

	var weights = pobj.getWeights();

	// Draw line based on weights
	var x1 = xmin;
	var y1 = (-weights[2] - weights[0] * x1)/weights[1];
	var x2 = xmax;
	var y2 = (-weights[2] - weights[0] * x2)/weights[1];

	var x1 = map(x1,xmin,xmax,0,width);
	var y1 = map(y1,ymin,ymax,height,0);
	var x2 = map(x2,xmin,xmax,0,width);
	var y2 = map(y2,ymin,ymax,height,0);	
	
	strokeWeight(2);
	stroke(255);
	line(x1,y1,x2,y2);

	// Train the perceptron
	pobj.train(training[count].input,training[count].output);
	count = (count+1) % training.length;

	// Draw the points which perceptron guessed
	for (var i=0; i < count ; i++){
		stroke(255);
		strokeWeight(1);
		fill('red');

		var guess = pobj.feedforward(training[i].input);
		//console.log(guess);
		if (guess > 0) {
			fill('rgb(0,255,0)');
			
		}
		var x = map(training[i].input[0], xmin, xmax, 0, width);
    	var y = map(training[i].input[1], ymin, ymax, height, 0);
    	ellipse(x, y, 16, 16);
		

	}

}





















