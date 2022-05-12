//Логика в функциях без if

// function func(a, b) {
// 	if (a == b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// function func(a, b) {
// 	return a == b;
// }
// function func(a, b) {
// 	return a != b;
// }
// console.log(func(1, 2));

// function func(a, b) {
// 	if (a + b >= 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

function func(a, b){
  return a + b >= 10;
}
function func(num) {
  return num >= 0;
}
console.log(func(5));