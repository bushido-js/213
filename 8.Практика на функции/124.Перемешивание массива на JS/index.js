
// Реализуем функцию shuffle, параметром принимающую массив и перемешивающую его элементы в случайном порядке.

  // let arr = ['a', 'b', 'c', 'd', 'e', 1, 3, 4, 5];

  // function shuffle (arr) {
  //   let randomArray = [];
  //   for (let i = 0; arr.length > 0; i++){ // arr.length > 0, потому что, если ставить i < arr.length, i растёт а массив уменьшается, и цикл не выполняется как задуманно, поэтому, так как мы вырезаем цикл уменьшается, вырезаем до того пока цикл не будет > 0, т.е пока в нем есть хотя бы один элемент 
  //     let random = getRandomInt(0, arr.length - 1);
  //     let elem = arr.splice(random, 1)[0];
  //     randomArray.push(elem); 
  //   }
  //   return randomArray;
  // }
  // console.log(shuffle(arr))

  // function getRandomInt(min, max){
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }


// Сделайте функцию range принимающую параметрами 2 целых числа - начало и конец диапазона, и возвращающую массив, заполненный целыми числами из этого диапазона.

  // function range (num1, num2) {
  //   let arr = [];
  //   for (let i = num1; i <= num2; i++){
  //     arr.push(i);
  //   }
  //   return arr;
  // }
  // console.log(range(5, 10));



// Сделайте функцию rangeRand, возвращающую массив, заполненный случайными целыми числами из заданного диапазона. При этом числа не должны повторяться. Для решения задачи используйте комбинацию функций range и shuffle.

function rangeRand (num1, num2) {
  return shaffle(range(num1, num2)); 
}

console.log(rangeRand(1, 10));

function range (num1, num2) {
  let arr = [];
  for (let i = num1; i <= num2; i++){
    arr.push(i);
  }
  return arr;
}

function shaffle (arr) {
  let randArr = [];
  for (let i = 0; arr.length > 0; i++){
    let random = getRandomInt(0, arr.length - 1);
    let elem = arr.splice(random, 1)[0];
    randArr.push(elem);
  }
  return randArr;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


