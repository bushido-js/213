// Математические методы

  //Метод Math.pow
  //Math.pow(число, степень);
  
  // console.log(Math.pow(2, 16))

  //Метод Math.sqrt(положительное число)
  // console.log(Math.sqrt(25));




  // console.log(Math.pow(2, 10));
  // console.log(Math.sqrt(245));

  // let arr = [4, 2, 5, 19, 13, 0, 10];
  // let sum = 0;
  // for (let elem of arr){
  //   sum += Math.pow(elem, 3);
  // }
  // console.log(sum);
  // console.log(Math.sqrt(sum));


// Работа с функциями округления

  //Метод Math.round(число) - округление до ближайшего целого числа, по математике
  //console.log(Math.round(6.499)) будет 6

  //Math.ceil(число) - производит округление дробного числа ВСЕГДА в БОЛЬШУЮ сторону
  //console.log(Math.ceil(3.00001)) будет 4

  //Math.floor(число) - производит округление числа всегда в меньшую сторону
  // console.log(Math.floor(2.9999)) будет 2

  //toFixed([количество знаков в дробной части]) - производит округление числа до указанного знака дробной.
  //let num = 1.11232
  //console.log(num.toFixed(3)) будет 1.112

  //Метод toPrecision - округляет число до задонного знака.
  //num.toPrecision(длина)
  // В данном примере число 678.19324 с помощью toPrecision приведется к 4 цифрам, причем, так как после 1 стоит цифра 9, то по правилам математики единица преобразуется к двойке:
  // let num = 678.19324;
  // console.log(num.toPrecision(4)); // будет 678.2

  // В данном примере число должно сократиться до двух знаков и будет отброшена не только дробная часть, но и целая. Поэтому число переведется в экспоненциальную форму:
  // let num = 678.19324;
  // console.log(num.toPrecision(2));
  // 6.8e+2 это 6.8 * 10^2


// let num = Math.sqrt(379);
// console.log(num.toFixed(1), num.toFixed(2));

// let num = Math.sqrt(587);
// let obj = {
//   floor: Math.floor(num),
//   ceil: Math.ceil(num),
// }
// console.log(obj);


// Нахождение максимального и минимального числа 

  //Метод Math.max
  /* Метод Math.max возвращает максимальное число из группы чисел, переданных в функцию.

  Если в функцию ничего не передано, то будет возращено -Infinity.

  По умолчанию функция не работает с массивами, однако с помощью хитрого приема можно найти максимальное значение массива: Math.max.apply(null, arr), где arr - произвольный массив. */

  // let arr = [1, 5, 10, 34, 100];
  // let max = Math.max.apply(null, arr);
  // console.log(max);

  // Math.max() будет -Infinity
  // Math.min() будет Indinity

  //Метод Math.min
  // let arr = [40, 20, 42, 100, 67];
  // let min = Math.min.apply(null, arr);

  // console.log(min);


// let arr = [4, -2, 5, 19, -130, 0, 10];
// console.log(Math.max.apply(null, arr));
// console.log(Math.min.apply(null, arr));


//Работа с Рандомом 

  //Метод Math.random - Метод Math.random возвращает случайное дробное число от 0 до 1.

  /* Чтобы получить случайное число в определенном промежутке (дробное или целое) следует пользоваться специальными приемами.

  Получение случайного дробного числа между min и max: */
    // function getRandomArbitary(min, max) {
    //   return Math.random() * (max - min) 
    //     + min; 
    // }
  //Получение случайного целого числа между min и max:
    // function getRandomInt(min, max) {
    //   return Math.floor(Math.random() * (max - min 
    //     + 1)) + min; 
    // }


// function getRandomInt(min, max){
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomInt(1, 100));

// let arr = [];

// for (i = 0; i < 10; i++){
//   arr.push(getRandomInt(1, 1000));
// }

// console.log(arr);


//Метод Math.abs - возвращает модуль числа, из отрицательного делает положительное
  // Math.abs(число)

  //Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.

  let a = 9;
  let b = 15;

  console.log(Math.abs(a - b));




