
// Create a perceptron having n weights and a learning rate constant
function Perceptron(n,c){

	// Array of random weights for n inputs
	this.weights = new Array(n);
	for (var i = 0; i < this.weights.length; i++){
		this.weights[i] = random(-1,1);
		//console.log(this.weights[i]);
	}

	// store learning rate constant
	this.c = c;

}

// Function to train a perceptron
 Perceptron.prototype.train = function (inputs,actual){

	// guess the output
	var guess = this.feedforward(inputs);

	// compute the error in the output
	var error = guess - actual;

	// Adjust weights based on the error with the learning rate i.e weights += error * input * c
	for (var i = 0; i < this.weights.length; i++){
		this.weights[i] += error * inputs[i] * this.c;
		//console.log(this.weights[i]);
	}
}

Perceptron.prototype.feedforward = function(inputs){
	var sum = 0;
	// Sum all values
	for (var i = 0; i < this.weights.length; i++){
		sum += inputs[i] * this.weights[i];
	}

	return this.activate(sum);

}

Perceptron.prototype.activate = function(sum){
	if (sum > 0) {
		return 1;
	}
	else return -1;
}

Perceptron.prototype.getWeights = function(){
	return this.weights;
}








