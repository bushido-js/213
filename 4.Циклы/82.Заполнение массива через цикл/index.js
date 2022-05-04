    // let arr = [];
// for (i = 1; i < 11; i++) {
//   arr.push(i);
// }
// document.write(arr)

// for (i = 0; i < 5; i++){
//   arr.push('x');
// }
// document.write(arr)

// for (i = 0; i < 5; i++){
//   arr[i] = 'x'
// }
// document.write(arr)

// for (i = 1; i < 101; i++){
//   // arr[i] = i + 1;
//   arr.push(i)
// }
// document.write(arr)


let arr = [];

for (let i = 2; i <= 100; i += 2) {
	arr.push(i)
}

console.log(arr); // благодаря push без пропусков
// но если по учебнику, то тогда

for (i = 2, j = 0; i <= 100; i += 2, j++) {
  arr[j] = i;
}
console.log(arr);


// С помощью цикла заполните массив нечетными числами в промежутке от 1 до 99.

// Моё решение
let array = [];
for (i = 1; i <= 99; i += 2){
  array.push(i);
}
console.log(array);

// Решение по учебнику

for (i = 1, j = 0; i <= 99; i += 2, j++){
  array[j] = i;
}
console.log(array);

//Не думаю, что есть преимущество у кого-то из них,, но как минимум push, мы используем меньше переменных и меньше работы проводим
