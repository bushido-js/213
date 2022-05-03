// Работа с флагами

let arr = ['a', 'b', 'c', 'd', 'e'];

// Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите 'да', а если нет - выведите 'нет'.

// let flag;

// for ( i = 0; i < arr.length; i++) {
//   if (arr[i] === 'c') {
//     flag = true;
//     break;
//   } else {
//     flag = false;
//   }
// }
// if (flag === true) {
//   console.log('yes');
// } else if (flag === false) {
//   console.log('no');
// }

let flag = false;

for ( i = 0; i < arr.length; i++) {
  if (arr[i] === 'c') {
    flag = true;
    break;
  }
}
if (flag === true) {
  console.log('yes');
} else {
  console.log('no');
}