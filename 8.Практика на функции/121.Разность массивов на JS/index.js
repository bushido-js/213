let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];

// Давайте функцию getDiff, которая будет находить разность двух массивов.

// Что такое и как работает concat
/* const array1 = ['a', 'b', 'c'];
  const array2 = ['d', 'e', 'f'];
  const array3 = array2.concat(array1); */

function getDiff (arr1, arr2) {
  let arr = [];
  
  arr = checkArray(arr2, arr1).concat(checkArray(arr1, arr2));
  // arr = arr.concat(checkArray(arr2, arr1));

  return arr;
}
console.log(getDiff(arr1, arr2));


function checkArray (arr1, arr2) {
  let arr = [];
  for ( i = 0; i < arr1.length; i++){
    if(arr2.indexOf(arr1[i]) === -1){
      arr.push(arr1[i]);
    }
  }
  return arr;
}


// Утром заного все сделаешь