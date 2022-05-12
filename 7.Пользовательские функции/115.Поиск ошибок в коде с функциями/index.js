// function func1() {
// 	return 3
// }
// function func2() {
// 	return 5
// }

// console.log( func1() + func2() );


// function sum(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
// 	}
//   return res;
// }

// alert(sum([1, 2, 3, 4, 5]));

// let arr = [1, 2, 3, 4, 5];

// function func(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
// 	}
	
// 	alert(res);
// }
// func(arr);

// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }

// console.log( func1() + func2() );

// let sum = sum1([1, 2, 3, 4, 5]);
// alert(sum);

// function sum1(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
	
// 	return sum;
// }

// let res = sum([1, 2, 3, 4, 5]);
// alert(res);

// function sum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
  
//   return sum;
// }

// function add(num) {
// 	if (num <= 9 && num >= 1) {
// 		return Number(num + '0');
// 	}
// }
// console.log(add(11));

// let arr = [1, 2, 3, 4, 5];
// let sum1 = sum(arr);
// console.log(sum1);

// function sum(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
// 	}
	
// 	return res;
// }

let num = 12345;
let res = getDigitsSum(num);
console.log(res);

function getDigitsSum(num) {
	let arr = String(num).split('');
	let sum = 0;
	
	for (let elem of arr) {
		sum += Number(elem);
	}
	
	return sum;
}