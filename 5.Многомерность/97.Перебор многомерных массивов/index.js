// let arr = [[1, 2, 3, 4, 5], [6, 
// 	7, 8], [9, 10]]; 

// for (let subArr of arr) {
// 	for (let elem of subArr) {
// 		console.log(elem);
// 	}
// }

  // let arr = [[1, 2, 3], [4, 5], [6]];
  // let sum = 0;
  // for(let subArr of arr){
  //   for(let elem of subArr){
  //     sum += elem
  //   }
  // }
  // console.log(sum);


// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]; 

// let sum = 0;

// for(let subArr1 of arr){
//   for(let subArr2 of subArr1){
//     for(let elem of subArr2){
//       sum += elem;
//     }
//   }
// }
// console.log(sum);

// Перебор через обычный for
  // let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]]; 

  // let sum = 0;
  // for(i = 0; i < arr.length; i++){
  //   for(j = 0; j < arr[i].length; j++){
  //     sum += arr[i][j]
  //   }
  // }
  // console.log(sum);

  // let arr = [[1, 2, 3], [4, 5], [6]];

  // let sum = 0;
  // for(i = 0; i < arr.length; i++){
  //   for(j = 0; j < arr[i].length; j++){
  //     sum += arr[i][j];
  //   }
  // }
  // console.log(sum);

  let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
  let sum = 0;
  for(i = 0; i < arr.length; i++){
    for(j = 0; j < arr[i].length; j++){
      for(k = 0; k < arr[j].length; k++){
        sum += arr[i][j][k];
      }
    }
  }
  console.log(sum);