// let num1 = 1;
// let num2 = 2;

// if ((num1 + num2) === 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num1 = '1';
// let num2 = '2';

// if (Number(num1) + Number(num2) === 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 123;

// if (Number(String(num)[0]) === 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }


// let num = 123;
// let first = String(num)[0];

// if (first == 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 12;
// let str = String(num);

// if (str.length === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 12;

// if (Number(String(num).length) === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

let num = '123033'; // берем в кавычки, чтобы обращаться к цифрам 

let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]); 
  
let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]); 

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}