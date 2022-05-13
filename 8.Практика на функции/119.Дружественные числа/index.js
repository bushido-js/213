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
  for (let elem of arr){
    sum += elem;
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
      if (isFrendly(j, k) == true && j !== k ){
       arrFriendly.push([j, k]);
      }
    }
  }
  return arrFriendly;
}

console.log(getFrendly());