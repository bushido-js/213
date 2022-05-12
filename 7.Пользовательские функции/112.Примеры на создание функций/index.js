//Примеры создание функций


// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];

// function sumSquare(arr){
//   let sum = 0;
//   for(i = 0; i < arr.length; i++){
//     sum += arr[i]**2
//   }
//   return sum;
// }
// console.log(sumSquare(arr1), sumSquare(arr2));

// Сделайте функцию getDigitsSum, которая параметром будет принимать целое число и возвращать сумму его цифр.

  // function getDigitsSum(num){
  //   let sum = 0;
  //   for (i = 0; i <= num; i++){
  //     sum += i
  //   }
  //   return sum;
  // }
  // console.log(getDigitsSum(25));

// Реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, то есть чисел, на которое делится наше число. К примеру, если мы передадим число 24 - мы должны получить следующий массив:
//[1, 2, 3, 4, 6, 8, 12, 24]

  // function getDivisors(num){
  //   let arr = [];
  //   for(i = 1; i <= num; i++){
  //     if (num % i === 0){
  //       arr.push(i)
  //     }
  //   }
  //   return arr;
  // }
  // console.log(getDivisors(24));

// Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке. Решите задачу без цикла, используя комбинацию стандартных функций JavaScript.

  // function reverseStr(str){
  //   return str.split('').reverse().join('')
  // }
  // console.log(reverseStr('Hello guys, my Name is Oleg'));

// Сделайте функцию delElem, которая параметрами будет принимать значение и массив и удалять из массива все элементы с таким значением.

  // function delElem(value, arr){
  //   while(arr.indexOf(value) !== -1){
  //     if (true){
  //       arr.splice(arr.indexOf(value), 1);
  //     }
  //   }
  //   return arr;
  // }  

  // let arr = ['Oleg', 'Anasha', 'Oleg', 'Natasha'];
  // console.log(delElem('Oleg', arr));

// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного. Пример работы такой функции:

  // function pushNumbers(num){
  //   let arr = [];
  //   for(i = 1; i <= num; i++){
  //     arr.push(i);
  //   }
  //   return arr;
  // }
  // console.log(pushNumbers(7));

// Сделайте функцию, заполняющую массив целыми числами от начального до конечного заданных чисел. Пример работы такой функции:

function pushAllNumbers(num1, num2){
  let arr = [];
  for (i = num1; i <= num2; i++){
    arr.push(i);
  }
  return arr;
}

console.log(pushAllNumbers(3, 7));