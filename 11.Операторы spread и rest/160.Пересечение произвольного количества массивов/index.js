// let arr =  [1, 2, 3, 'a', 'b', 'c' ];

  // let result = getInt([1, 2, 3], [2, 3, 4], [4, 3, 2]);
  // console.log(result); // выведет [2, 3]

  // function getInt (arr1, arr2){
  //   let result = [];
  //   for (let elem of arr1){
  //     if(inArray(elem, arr2)){
  //       result.push(elem);
  //     }
  //   }
  //   return result;
  // }

  // function inArray(elem, arr){
  //   let result = [];
  //   for (let num of arr){
  //     if (elem === num){
  //       result.push(elem);
  //     }
  //   }
  //   return result;
  // }
// console.log(inArray(1, [2, 3, 6]));
// console.log(getInt([1, 2, 3], [2, 3, 6]))

//Нихуя не понял, надо решить самостоятельно


// Давайте напишем функцию getInt, которая будет находить пересечение любого количества массивов.
let result = getInt([1, 2, 3], [4, 3, 4, 1], [4, 3, 1]);
console.log(result);

function getInt(...arrs){ 
  let result = [];

  let arr0 = arrs.shift();

  for  (let elem of arr0){
    if (inArrays(elem, arrs)){
      result.push(elem)
    }
  }
  return result;
}

function inArrays(elem, arrs) {
  for (let arr of arrs){
    if (!inArray(elem, arr)){
      return false
    }
  }
  return true;
}

function inArray(elem, arr) {
  return arr.indexOf(elem) !== -1;
}

//Понял
