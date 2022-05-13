// Если у нас есть два числа и сумма одного числа равна делителям другого и наоборот, то такая пара чисел называется дружественными.

// Решим задачу на определение дружественных чисел. Числа являются дружественными, если сумма собственных делителей (с числом 1, но без самого числа) первого числа равна второму числу и, наоборот, сумма делителей второго числа равна первому.


function isFrendly (num1, num2){
  return getSumDivisors(num1) === num2 && getSumDivisors(num2) === num1;
}

//Функция на поиск делителей числа, без самого числа
function getDivisors(num){
  let divisorsNum = [];
  for (i = 1; i < num; i++ ){
    if (num % i === 0){
      divisorsNum.push(i);
    }
  }
  return divisorsNum;
}
//Нахождение суммы
function getSum(arr){
  let sum = 0;
  for (i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

//Нахождение суммы делителей
function getSumDivisors (num) {
  return getSum(getDivisors(num));
}

// Сделайте функцию getFreindly, которая будет находить пары дружественных чисел в заданном промежутке и возвращать их в виде двухмерного массива

function getFrendly() {
  let arrFriendly = [];
  for (j = 1; j <= 3000; j++){
    for (k = j + 1; k <= 3000; k++){
      if (isFrendly(j, k) == true){
      arrFriendly.push([j, k]);
      }
    }
  }
  return arrFriendly;
}

console.log(getFrendly());



// Совершенное число - целое число, равное сумме всех своих собственных делителей (то есть всех положительных делителей, отличных от самого числа). Сделайте функцию getPerfect, которая будет находить совершенные числа в заданном диапазоне. Проверьте работу функции в промежутке от 1 до 1000.

function getPerfect () {
  let arr = [];
  for (j = 1; j <= 1000; j++){
    if (getSumDivisors(j) === j){
      arr.push(j)
    }
  }
  return arr;
}
console.log(getPerfect());