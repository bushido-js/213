let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];

// Давайте функцию getDiff, которая будет находить разности двух массивов.

// Что такое и как работает concat
/* const array1 = ['a', 'b', 'c'];
  const array2 = ['d', 'e', 'f'];
  const array3 = array2.concat(array1); */

function getDiff (arr1, arr2){
  let arr = [];
  arr = diffDigits(arr1, arr2).concat(diffDigits(arr2, arr1));
  return arr;
}

function diffDigits (arr1, arr2){
  let arr = [];
  for (let elem of arr1){
    if (arr2.indexOf(elem) === -1) {
      arr.push(elem);
    }
  }
  return arr;
}

console.log(getDiff(arr1, arr2));