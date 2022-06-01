// Учтите, что в нашем случае нельзя функцию запустить без if - если это сделать, то получится бесконечный вызов функций.

let arr = [1, 2, 3, 4, 5];
// С помощью рекурсии выведите элементы этого массива на экран.

// function func(arr){
//   let result = [];
//   console.log(arr.shift());
//   if (arr.length != 0){
//     func(arr)
//   }
// }
// func(arr);

function getSumSquare(arr) {
  let sum = arr.shift();

  if (arr.length !== 0){
    sum += getSumSquare(arr);
  }

  return sum;
}
console.log(getSumSquare(arr));

