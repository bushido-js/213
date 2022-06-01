// let obj = {
//   a: 1,
//   b: {c: 2, d: 3, e: 4},
//   f: {g: 5,
//       j: 6,
//       k: {l: 7,
//           m: {n: 8, o: 9}
//           }
//       }
// }

// function func(obj){
//   for(let elem in obj){
//     if (typeof obj[elem] == 'object'){
//       func(obj[elem]);
//     } else {
//       console.log(obj[elem]);
//     }
//   }
// }
// func(obj);

// Дан многомерный массив произвольного уровня вложенности, например, такой:
  //  let array = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
  // function toSimpleArray (array){
  //   let simpleArray = [];

  //   function toEasyArray(array){
  //     for (let elem of array){
  //       if (typeof elem == 'object'){
  //         toEasyArray(elem);
  //       } else {
  //         simpleArray.push(elem);
  //       } 
  //     }
  //   }
  //   toEasyArray(array);
  //   return console.log(simpleArray);
  // }  
  // toSimpleArray(array);


  // console.log(array.flat(Infinity));


  //let array = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
  // function toEasyArray(array){
  //   let arr = [];
    
  //   for (let elem of array){
  //     if (typeof elem == 'object'){
  //       arr = arr.concat(toEasyArray(elem));
  //     } else {
  //       arr.push(elem);
  //     } 
  //   }
    
  //   return arr;
  // }
  // console.log(toEasyArray(array))


//Сумма элементов массива
  // let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

  // function sumElemOfObj(obj){
  //   let sum = 0;
  //   for (let elem in obj){
  //     if (typeof obj[elem] == 'object'){
  //       sum += sumElemOfObj(obj[elem]);
  //     } else {
  //       sum += obj[elem];
  //     }
  //   }
  //   return sum;
  // }
  // console.log(sumElemOfObj(obj));

//Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:

  // let arr = ['a', ['b', 'c', 'd'], ['e', 'f', 
  // ['g', ['j', 'k']]]];

  // function toString(arr){
  //   function toSimpleArray(arr){
  //     let array = [];
  //     for(let elem of arr){
  //       if(typeof elem == 'object'){
  //         array = array.concat(toSimpleArray(elem));
  //       } else {
  //         array.push(elem);
  //       }
  //     }
  //     return array;
  //   }
  //   return toSimpleArray(arr).join('');
  // }
  // console.log(toString(arr));

//Манипуляция элементами

let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

function toSquare(arr){
  for(let i = 0; i < arr.length; i++){
    if (typeof arr[i] == 'object'){
      toSquare(arr[i]);
    } else {
      arr[i] = arr[i]**2;
    }
  }
  return arr;
}

console.log(toSquare(arr));


