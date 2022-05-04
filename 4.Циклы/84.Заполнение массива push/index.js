// Объявите пустой массив, а затем заполните его числами от 1 до 10. Используйте для этого метод push.

// let array = [];

  // for (i = 1; i <= 10; i++){
  //   array.push(i);
  // }
  // document.write(array)

// Используя цикл и метод push заполните массив 10-ю буквами 'x'.


// for (i = 0; i < 10; i++){
//   array.push('x');
// }
// document.write(array)



//Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.

  // let arr = [1, -1, 2, -2, 4, -5, 6, 7, -9];
  // let arrPlus = [];

  // for (i = 0; i < arr.length; i++){
  //   if (arr[i] > 0){
  //     arrPlus.push(arr[i]);
  //   }
  // }
  // console.log(arrPlus);

//Рассмотрим переворот Массива
  //Оказывается есть метод reverse(), я его проклюкал, но мы его пока не используем

  //   let arr = ['a', 'b', 'c', 'd', 'e'];
  // // let arr = ['e', 'd', 'c', 'b', 'a']

  //   let arrRev = [];
  //   // arrRev.push(arr.reverse())
  //   // console.log(arrRev); // это я побаловался

  //   for (i = arr.length - 1; i >= 0 ; i--){
  //     arrRev.push(arr[i]);
  //   }
  //   console.log(arrRev);





//Необъявлянный массив (ошибки)
  // let arr = [];
  // arr.push('a');
  // arr.push('b');
  // arr.push('c');
  // document.write(arr)

  // let arr = [];

  // for (let i = 1; i <= 5; i++) {
  //   arr.push(i);
  // }
  
  // console.log(arr);


  let arr = [1, 2, 3, 4, 5, 6, 7, 
    8, 9]; 
  let result = [];
  
  for (let elem of arr) {
    if (elem % 2 != 0) {
      result.push(elem);
    }
  }
  
  console.log(result);




