let obj = {
  func1: function() {return 1},
  func2: function() {return 2},
  func3: function() {return 3},
};

// console.log(obj.func1() + obj.func2() + obj.func3());


let math = {
	square: function(num) {return num**2}, 
	cube: function(num) {return num**3}, 
};



let arr = [1, 2, 3];

let object = {
  funcSum: function(arr){
    let sum = 0;
    for(let elem of arr){
      sum += elem
    }
    return sum;
  },
  funcSumSquare: function(arr){
    let sum = 0;
    for(let elem of arr){
      sum += elem**2
    }
    return sum;
  },
  funcSumCube: function(arr){
    let sum = 0;
    for(let elem of arr){
      sum += elem**3
    }
    return sum;
  }
};

console.log(object.funcSum(arr));
console.log(object.funcSumSquare(arr));
console.log(object.funcSumCube(arr));
