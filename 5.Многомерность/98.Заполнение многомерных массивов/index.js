//[[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]] 

  // let arr = [];
  // for (i = 0; i < 3; i++){
  //   arr[i] = [];
  //   for(j = 1; j <= 5; j++){
  //     arr[i].push(j)
  //   }
  // }
  // console.log(arr);

//[['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x']] 

  // let arr = [];
  // for (i = 0; i < 3; i++){
  //   arr[i] = [];
  //   for(j = 0; j < 4; j ++){
  //     arr[i][j] = 'x';
  //   }
  // }
  // console.log(arr);

// [
//   [
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//   ],
//   [
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//   ],
//   [
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//   ],
// ]

// let arr = [];
// for(i = 0; i < 3; i++){
//   arr[i] = [];
//   for(j = 0; j < 2; j++){
//     arr[i][j] = [];
//     for(k = 0; k < 5; k++){
//       arr[i][j][k] = k + 1;
//     }
//   }
// }
// console.log(arr);


// Потенциальная проблема

// let arr = [];

// for (let i = 0; i < 3; i++) {
//   arr[i] = [];
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j <= 5; j++) {
// 		arr[i][j] = j + 1;
// 	}
// }

// console.log(arr);

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j <= 5; j++) {
// 		arr[i][j] = j;
// 	}
// }

// console.log(arr);

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j <= 5; j++) {
// 		arr[i][j] = j;
// 	}
// }

// console.log(arr);

// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j <= 5; j++) {
// 		arr[i][j] = j;
// 	}
// }

// console.log(arr);



// Заполнение числами попорядку

// let arr = [];

// for (let i = 0, k = 1; i < 3; 
// 	i++) { 
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k++;
// 	}
// }

// console.log(arr);

//[[1, 2], [3, 4], [5, 6], [7, 8]]

  // let arr = [];
  // for(i = 0, k = 1; i < 4; i++){
  //   arr[i]= [];

  //   for(j = 0; j < 2; j++){
  //     arr[i][j] = k++
  //   }
  // }
  // console.log(arr);

// [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]] 

  // let arr = [];
  // for (i = 0, k = 2; i < 4; i++){
  //   arr[i] = [];

  //   for(j = 0; j < 3; j++, k += 2){
  //     arr[i][j] = k;
  //   }
  // }
  // console.log(arr);

// [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
  // let arr = [];

  // for(i = 0, n= 1; i < 2; i++){
  //   arr[i] = [];
  //   for(j= 0; j < 2; j++){
  //     arr[i][j] = [];
  //     for(k = 0; k < 2; k++, n++){
  //       arr[i][j][k] = n;
  //     }
  //   }
  // }
  // console.log(arr);


// Поиск ошибки
  // let arr = [];

  // for (let i = 0, k = 1; i < 3; i++) {
  // 	arr[i] = [];
    
  // 	for (let j = 0; j < 3; j++) {
  // 		arr[i][j] = k;
  // 		k++;
  // 	}
  // }

  // console.log(arr);

// let arr = [];
// let k = 1;

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++, k++) {
// 		arr[i][j] = k;
// 	}
// }

// console.log(arr);


// let arr = [];
// let k = 1;

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }

// console.log(arr);

// let arr = [];
// let k = 1;

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }

// console.log(arr);


// let arr = [];

// for (let i = 0, k = 1; i < 3; 
// 	i++) { 
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++, k++) {
// 		arr[i][j] = k;
// 	}
// }

// console.log(arr);


// let arr = [];

// for (let i = 0, k = 1; i < 3; 
// 	i++) { 
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++, k++) {
// 		arr[i][j] = k;
// 	}
// }

// console.log(arr);

// let arr = [];

// for (let i = 0, k = 1; i < 3; 
// 	i++) { 
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++, k++) {
// 		arr[i][j] = k;
// 	}
// 

// console.log(arr);

// let arr = [];

// for (let i = 0, k = 1; i < 3; 
// 	i++) { 
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k++;
// 	}
// }

// console.log(arr);

// let arr = [];
// let k = 1;

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }

// console.log(arr);

let arr = [];

for (let i = 0, k = 1; i < 3; 
	i++) { 
	arr[i] = [];
	
	for (let j = 0; j < 3; j++, k++) {
		arr[i][j] = k;
	}
}

console.log(arr);