// Реализуйте функцию getGreatestCommonDivisor, которая параметрами будет принимать два числа и возвращать НОД этих двух чисел. При решении задачи старайтесь использовать вспомогательные функции, в том числе полученные нами ранее в теоретической части.

  // function getGreatestCommonDivisor (num1, num2){
  //   return Math.max.apply(null, getCommonDivisors(num1, num2));
  // }
  // console.log(getGreatestCommonDivisor(25, 250));

  // function getDivisors (num){
  //   let arr = [];
  //   for  (i = 1; i <= num; i++){
  //     if ( num % i === 0) {
  //       arr.push(i);
  //     }
  //   }
  //   return arr;
  // }

  // function getCommonDivisors(num1, num2){
  //   let arr = [];
  //   for (let elem of getDivisors(num1)){
  //     if ( num2  % elem === 0){
  //       arr.push(elem);
  //     }
  //   }
  //   return arr;
  // }


// Положительные целые числа, не имеющие общих делителей, кроме тривиальной единицы, называются взаимно простыми. Говоря другими словами, два числа можно назвать взаимно простыми, если их НОД равен единице.

// Напишите функцию, которая параметрами будет принимать два числа и проверять - взаимно простые они или нет.

function getDivisors (num) {
  let arr = [];
  for (let i = 2; i <= num; i++){
    if (num % i === 0){
      arr.push(i);
    }
  }
  return arr;
}

function isSimpleNumbers(num1, num2){
  for (let elem of getDivisors(num1)){
    if( num2 % (elem) !== 0){
      return true;
    } else {
      return false;
    }
  }
}
console.log(isSimpleNumbers(8, 33));
