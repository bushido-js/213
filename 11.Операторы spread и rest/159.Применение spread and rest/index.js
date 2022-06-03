// Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое (сумма делить на количество).

  // function medAnswer(...numbers){
  //   let sum = 0;
  //   for(let elem of numbers){
  //     sum += elem;
  //   }
  //   return sum / numbers.length
  // }

  // console.log(medAnswer(1, 2, 3, 4, 5))


// Функция, сливающая массивы в двухмерный
  // function unite(...arrs) {
  // 	return arrs;
  // }

let result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]); 

function merge(arrs) {
  return [].concat(...arrs);
}
console.log(result);