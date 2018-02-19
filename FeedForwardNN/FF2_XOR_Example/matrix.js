
class Matrix{

	constructor(rows,cols){
		this.rows = rows;
		this.cols = cols;
		this.data = [];

		for (var i=0; i<this.rows; i++){
			this.data[i] = [];
			for (var j=0; j<this.cols; j++){
				this.data[i][j] = 0;
			}
		}
	}

	static fromArray(arr){
		let m = new Matrix(arr.length,1);
		for (var i=0;i<arr.length;i++){
			m.data[i][0] = arr[i];
		}
		return m;
	}

	toArray(){
		let arr = [];
		for (var i=0; i<this.rows; i++){
			for (var j=0; j<this.cols; j++){
				arr.push(this.data[i][j]);
			}
		}
		return arr;
	}

	randomize(){
		for (var i=0; i<this.rows; i++){
			for (var j=0; j<this.cols; j++){
				this.data[i][j] = Math.floor(Math.random() * 10);
			}
		}
	}

	add(n){

		if (n instanceof Matrix) {
			for (var i=0;i<this.rows;i++){
					for (var j=0;j<this.cols;j++){
					this.data[i][j] += n.data[i][j];
				}
			}
		}else {
			for (var i=0;i<this.rows;i++){
				for (var j=0;j<this.cols;j++){
					this.data[i][j] += n;
				}
			}
		}	

	}

	static subtract(a,b){

		let result = new Matrix(a.rows,a.cols);
		for (var i=0; i<a.rows; i++){
			for (var j=0; j<a.cols; j++){
				result.data[i][j] = a.data[i][j] - b.data[i][j];
			}
		}

		return result;
	}

	static transpose(a){

		let result = new Matrix(a.cols,a.rows);
		for (var i=0;i<a.rows;i++){
			for (var j=0;j<a.cols;j++){
				result.data[j][i] = a.data[i][j];
			}
		}
		return result;

	}

	static multiply(a,b){
		if (a.cols !== b.rows) {
			console.log("Matrix undefined");
			return undefined;
		}
		
		var result = new Matrix(a.rows,b.cols);
		for (var c=0;c<result.rows;c++){
			for (var d=0; d<result.cols; d++){
				var sum = 0;
				for (var k=0; k<a.cols; k++){
					sum += a.data[c][k] * b.data[k][d];
				}
				result.data[c][d] = sum;
			}
		}
		return result;
	}

	multiply(n){

		if (n instanceof Matrix) {
			for (var i=0;i<this.rows;i++){
				for (var j=0;j<this.cols;j++){
					this.data[i][j] *= n.data[i][j];
				}
			}			
		}else{
			for (var i=0;i<this.rows;i++){
				for (var j=0;j<this.cols;j++){
					this.data[i][j] *= n;
				}
			}
		}

			
	}

	map(func){
		for (var i=0;i<this.rows;i++){
			for (var j=0;j<this.cols;j++){
				let val = this.data[i][j];
				this.data[i][j] = func(val);
			}
		}	
	}

	static map(matrix,func){
		let result = new Matrix(matrix.rows,matrix.cols);

		for (var i=0;i<result.rows;i++){
			for (var j=0;j<result.cols;j++){
				let val = matrix.data[i][j];
				result.data[i][j] = func(val);
			}
		}
		return result;

	}

	print(){
		console.table(this.data);
	}

}







