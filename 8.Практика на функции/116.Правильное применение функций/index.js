// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
	
// 	return true;
// }

// let arr = [];
// for(i = 1; i <= 100; i++){
//   if (isPrime(i) === true){
//     arr.push(i);
//   }
// }
// console.log(arr);


// function getDigitsSum(num) {
// 	let sum = 0;
// 	let digits = String(num).split('');
	
// 	for (let digit of digits) {
// 		sum += Number(digit);
// 	}
	
// 	return sum;
// }

// let arr = [];
// for (i = 1; i <= 2030; i++){
//   if (getDigitsSum(i) === 13) {
//     arr.push(i)
//   }
// }
// console.log(arr);


// let arr = [123, 456, 789, 321];
// let revArr = [];
// for(i = 0; i < arr.length; i++){
//   revArr.push(reverseNumber(arr[i]));
// }
// console.log(revArr);

// function reverseNumber(num){
//   return String(num).split('').reverse().join('');
// }


// let num1 = 234;
// let num2 = 531;

// function getDigitsSum(num){
//   let arrNum = String(num).split('');
//   let sum = 0;
//   for (i = 0; i < arrNum.length; i++){
//     sum += Number(arrNum[i]);
//   }
//   return sum;
// }

// // let digits1 = String(num1).split('');
// // let digitsSum1 = 0;
// // for (let digit1 of digits1) {
// // 	digitsSum1 += Number(digit1);
// // }

// // let digits2 = String(num1).split('');
// // let digitsSum2 = 0;
// // for (let digit2 of digits2) {
// // 	digitsSum2 += Number(digit2);
// // }

// if (getDigitsSum(num1) === getDigitsSum(num2)) {
// 	alert('суммы цифр совпадают');
// } else {
// 	alert('суммы цифр не совпадают');
// }


let nums = [12, 24, 35, 14];

for (let num of nums) {
	console.log(num + ': ' + getDivisors(num).join(', ')); 
}

function getDivisors(num) {
	let result = [];
	
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			result.push(i);
		}
	}
	
	return result;
}