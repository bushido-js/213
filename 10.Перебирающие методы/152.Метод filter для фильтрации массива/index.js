// Давайте теперь изучим очень полезный метод filter, позволяющий отфильтровать элементы массива. Подобно уже изученным нами методам, этот метод в параметре получает функцию-коллбэк (с такими же параметрами, как и методы map и forEach), которая выполнится для каждого элемента массива.

// Своим результатом filter возвращает новый массив, в который войдут только те элементы, для которых коллбэк вернет true.

  // let arr = [1, -2, 2, -1, 3, -6, 4, 5, 7, -9];

// let result = arr.filter(function (elem) {
//   return elem > 0;
// })
// console.log(result);

// let result = arr.filter(function (elem) {
//     return elem < 0;
//   })
//   console.log(result);

  // let result = arr.filter(function (elem) {
  //   return elem > 0 && elem < 10;
  // })
  // console.log(result);

  // let arr = [
  //   'abc',
  //   'Hello fucking world!',
  //   'Good morning!',
  //   'Suck'
  // ];
  // let result = arr.filter(function (elem) {
  //   return elem.length > 5;
  // })
  // console.log(result);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = arr.filter(function (elem, index) {
//   return elem * index < 30;
// })
// console.log(result);


// Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.

  // let arr = [1, 2, [3, 4], 5, [6, 7]];
  // let result = arr.filter(function (elem) {
  //   return typeof elem != 'object';
  // })
  // console.log(result);

//Ещё применение
// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
let arr = [1, -2, 2, -1, 3, -6, 4, 5, 7, -9];
console.log(arr.filter(elem => elem < 0).length);