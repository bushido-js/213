// function cube(num){
//   return num**3;
// }

// let result = cube(3);
// alert(result);




//Использование функций в выражении

//Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их на экран.

  // function squareRoot(num){
  //   return Math.sqrt(num);
  // }
  // let sum = squareRoot(3) + squareRoot(4);
  // alert(sum);

//Функции в функциях

  //Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:

      // function sqrt(num) {
      //   return Math.sqrt(num);
      // }

      // function round(num) {
      //   return num.toFixed(3);
      // }
  
  //С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.

    // alert(round(sqrt(2)));

    // function sqrt(num) {
    //   return Math.sqrt(num);
    // }
    
    // function sum(num1, num2, num3) {
    //   return num1 + num2 + num3;
    // }

    // let result = ((sum(sqrt(2), sqrt(3), sqrt(4))));
    // alert(result.toFixed(2));

//Тонкое место return ?

// function func(num) {
// 	return num;
	
// 	let result = num * num;
// 	return result;
// }

// alert( func(3) );

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	} else {
// 		return num * num;
// 	}
// }

// alert( func(10) );
// alert( func(-5) );

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	}
	
// 	return num * num;
// }

// alert( func(10) );
// alert( func(-5) );

//Цикл и return

  // function func(num) {
  //   let sum = 0;
    
  //   for (let i = 1; i <= num; i++) {
  //     sum += i;
  //   }
  //   return sum;
  // }

  // alert( func(5) );

//Применение return в цикле

//Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.

  // function func(num){
  //   let i = 0;
  //   while(true){
  //     num = num / 2;
  //     i++;
  //     if (num < 10){
  //       return i
  //     }
  //   }
  // }
  // console.log(func(20));

  //Перепсать в сокращенной форме 
  
  function func(num1, num2) {    
    if (num1 > 0 && num2 > 0) {
      return  num1 * num2;
    } else {
      return  num1 - num2;
    }
  }
  
  alert(func(3, 4));


