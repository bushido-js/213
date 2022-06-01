// Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.

  // function func1() {
  //   return function () {
  //     return 1;
  //   }
  // }
  // function func2() {
  //   return function () {
  //     return 2;
  //   }
  // }
  // console.log(func1()() + func2()());


//Уровни вложенности
// Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.

  // function func() {
  //   return function () {
  //     return function () {
  //       return function () {
  //         return function () {
  //           console.log('Привет!');
  //         }
  //       }
  //     }
  //   }
  // }
  // func()()()()();

//Параметры

// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.

  // function func(num1){
  //   return function (num2) {
  //     return function (num3) {
  //       return num1 + num2 + num3;
  //     }
  //   }
  // }
  // console.log(func(2)(3)(4))

//Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.

function func1(num1){
  let arr = [];
  arr.push(num1);
  return function (num2) {
    arr.push(num2);
    return function (num3) {
      arr.push(num3);
      return function (num4) {
        arr.push(num4);
        return function () {
          return arr;
        }
      }
    }
  }
}

console.log(func1(2)(3)(4)(5)());