// console.log(isPrime(54)); // должен вывести true 

// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i !== 0) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// }

let res = isFriendly(17236, 18416);
console.log(res); // должен вывести true

function isFriendly(num1, num2) {
	let sum1 = getSum(getOwnDivisors(num1));
	let sum2 = getSum(getOwnDivisors(num2));
	
	if (sum1 == num2 && sum2 == num1) {
		return true;
	} else {
		return false;
	}
}

function getOwnDivisors(num) {
	let res = [];
	
	for (let i = 0; i < num; i++) {
		if (num % i === 0) {
			res.push(i);
		}
	}
  return res;
}
console.log(getOwnDivisors(220));

function getSum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum;
}
console.log(getSum(getOwnDivisors(220)));