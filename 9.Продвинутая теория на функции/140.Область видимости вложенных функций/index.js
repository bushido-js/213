// function test() {
// 	let num = 1;
	
// 	function func() {
// 		alert(num);
// 	}
	
//   return func();
// }

// test();

// function test() {
// 	let num;
	
// 	function func() {
// 		alert(num);
// 	}
	
// 	num = 1
// 	func();
	
// 	num = 2
// 	func();
// }

// test();

// function test(num1, num2) {
// 	function func() {
// 		alert(num1 + num2);
// 	}
	
// 	num1 = 2;
// 	func();
// }

// test(1, 2);

// function test(num) {
// 	function func(localNum) {
// 		return localNum == 2; // меняем переменную num
// 	}
	
// 	return func(num); // передаем параметр
// }

// console.log(test(1)); // передаем параметром число 


// function test(num) {
// 	function func(localNum) {
// 		num = 2;
// 	}
	
// 	func(num);
// 	alert(num);
// }

// test(1);


//Одноименные параметры

function test(num) {
	function func(num) {
		alert(num);
	}
	
	func(num);
	num = 2;
  return num;
}

test(1);
console.log(test(1))