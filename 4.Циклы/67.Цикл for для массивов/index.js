  // let arr = [1, 2, 3, 4, 5];

  // // for (i = 0; i <=4; i++) {
  // //   console.log(arr[i]);
  // // }

  // for (i = 0; i <= (arr.length - 1); i++) {
  //   console.log(arr[i]);
  // }

  // let array = ['a', 'b', 'c', 'd', 'e'];

  // for (let i = 0; i < array.length; i++) {
  //   const element = array[i];
  //   console.log(element);
  // }

  // let arr = [1, 2, 3, 4, 5];
      
  // for (let i = 0; i < arr.length; 
  //   i++) { 
  //   console.log(arr[i]);
  // }

// Передор массива и if

  // let array = [1, 2, 3, 4, 5];

  // for (let i = 0; i < array.length; i++) {
  //   const element = array[i];
  //   if (element % 2 !== 0) {
  //     console.log(element);
  //   }
  // }

// Нахождение суммы елементов
  // let array = [1, 2, 3, 4, 5]
  // let result = 0;
  // for (let i = 0; i < array.length; i++) {
  //   result += array[i];
  // }
  // console.log(result);

  // let array = [1, 2, 3, 4, 5]
  // let result = 1;
  // for (let i = 0; i < array.length; i++) {
  //   result *= array[i];
  // }
  // console.log(result);

  // let array = [1, 2, 3, 4, 5]
  // let result = 0;
  // for (let i = 0; i < array.length; i++) {
  //   result += (array[i])**2;
  // }
  // console.log(result);

// Дан массив с элементами 2, 5, 9, 15, 1, 4. С помощью цикла for и оператора if выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

  // let array = [2, 5, 9, 15, 1, 4];

  // for (let i = 0; i < array.length; i++) {
  //   if ( array[i] > 3 && array[i] < 10) {
  //     console.log(array[i]);
  //   }
    
  // }


// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

  // let array = [1, 2, 3, -1, -2, -3, 5, -5];
  // let sum = 0;
  // for (i = 0; i <array.length; i++) {
  //   if (array[i] >= 0) {
  //     sum += array[i]
  //   }
  // }
  // console.log(sum);

// Дан массив arr. Найдите среднее арифметическое его элементов (сумма делить на количество). Проверьте задачу на массиве с элементами 1, 2, 3, 4, 5.

  // let arr = [1, 2, 3, 4 , 5];
  // let sum = 0;

  // for (i = 0; i < arr.length; i++) {
  //   sum += arr[i];
  // }

  // const med = sum / arr.length
  // console.log(med);

  
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

  // let arr = [10, 20, 30, 50, 235, 3000];

  // for (i = 0; i < arr.length; i++) {
  //   const strNum = String(arr[i])

  //   if (strNum[0] == 1 || strNum[0] == 2 || strNum[0] == 5) {
  //     console.log(Number(strNum));
  //   }
  // }


// Дан массив с числами. Выведите элементы этого массива в обратном порядке.


  // let arr = [1, 2, 3, 4, 5, 6, 7]


  // for (let i = (arr.length - 1); i >= 0 ; i--) {
  //   console.log(arr[i]);
  // }  


// Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.

  // let arr = [1, 2, 2, 3, 5, 6, 8, 7, 9, 10, 10];

  // for (let i = 0; i < arr.length; i++) {
  //   if (i === arr[i]) {
  //     console.log(arr[i]);
  //   }
  // }
  

// Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Используйте для этого тег br.

  // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // for (let i = 0; i < arr.length; i++) {
  //   document.write(arr[i] + '<br>');  
  // }
  



  // let arr = [
  //   'Понедельник',
  //   'Вторник',
  //   'Среда',
  //   'Четверг',
  //   'Пятница',
  //   'Суббота',
  //   'Воскресенье'
  // ]

  // for (let i = 0; i < arr.length; i++) {

  //   if (arr[i] === 'Суббота' || arr[i] === 'Воскресенье') {
  //     document.write('<b>' + arr[i] + '</b> <br>')
  //   } else {
  //     document.write(arr[i] + '<br>')
  //   }
  // }

  let arr = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
  ]
  let day = 7;

  for (let i = 0; i < arr.length; i++) {
    if ( i === (day - 1)) {
      document.write('<i>' + arr[i] + '</i> <br>')
    } else {
      document.write(arr[i] + '<br>')
    }
  }

