// В данном уроке мы с вами разберем специальный метод map, предназначенный для преобразования массивов. Этот метод работает следующим образом: принимает параметром функцию-коллбэк и применяет ее для каждого элемента массива, а затем возвращает измененный массив.

// Если в коллбэке указать первый параметр (имя параметра значения не имеет), то в него автоматически будут попадать значения элементов массива:

// Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.

  // let arr = [1, 2, 3, 4, 5, 6, 7]
  // let  result = arr.map(function(elem){
  //   return Math.sqrt(elem).toFixed(2);
  // })
  // console.log(result);

// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.

  // let arr = ['abc', 'abcabc', 'abccba', 'abcde'];
  // let result = arr.map(function(elem){
  //   return elem + '!';
  // })
  // console.log(result);

// Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.
  // let refresh = arr.map(function(elem){
  //   let arr = [];
  //   for(let i = elem.length - 1; i >= 0; i--){
  //     arr.push(elem[i]);
  //   }
  //   return arr.join('');
  // })
  // console.log(refresh);

// Используя метод map преобразуйте этот массив в следующий:

  // let arr = ['123', '456', '789'];

  // let result = arr.map(function(elem){
  //   elem = elem.split('');
  //   let array = [];
  //   for(let i = 0; i < elem.length; i++){
  //     elem[i] = Number(elem[i]);
  //     array.push(elem[i]);
  //   }
  //   return array;
  // })
  // console.log(result);


//Ключ элемента
  // Функция-коллбэк может также принимать второй параметр - в него JavaScript разместит ключ элемента массива.

// Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.

  // let arr = [1, 2, 3, 4, 5, 6, 7];
  // let result = arr.map(function(elem, index){
  //   return elem * index;
  // });
  // console.log(result);


//Перебор многомерных массивов
  //Возвращаем все в квадрате 
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  
let result = arr.map(function(elem){
  return elem.map(function (elem) {
    return elem**2;
  })
})  
console.log(result);
