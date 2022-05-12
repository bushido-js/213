// Флаги

// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.

  // function even(arr){
  //   for(i = 0; i < arr.length; i++){
  //     if (arr[i] % 2 !== 0) {
  //       return false;  
  //     } 
  //     return true;
  //   }
  // }
  // let arr = [2, 2, 2, 4, 8, 6, 10]
  // console.log(even(arr));

// Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.
  // function odd(num){
  //   let str = String(num);
  //   for(i = 0; i < str.length; i++){
  //     if (Number(str[i]) % 2 === 0){
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  // console.log(odd(111));

// Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.
function sameElem(arr){
  for (i = 0; i < arr.length; i++){
    if (arr[i] === arr[i + 1]) {
      return true
    }
  }
  return false;
}
let arr = [1, 2, 1, 2, 5, 5];
console.log(sameElem(arr));