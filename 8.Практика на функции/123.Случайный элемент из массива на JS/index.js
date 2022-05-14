//Случайный элемент из массива

//Эту функцию я воспринимаю как данность, как приёем, но не понимаю на 100% почему она так написанная, но понимаю результат
function getRandomInt (min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function random (arr){
  return arr[getRandomInt(0, arr.length - 1)]
}
let arr = [1, 2, 3, 4, 5, 6];

// Нахождение суммы трёх рандомных чисел из массива
let sum = 0;
for (i = 0; i < 3; i++){
  sum += random(arr);
}
console.log(sum);