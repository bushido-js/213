// let arr = [];
// let str = '';

// for (i = 0; i < 5; i++){
//   str += 'xx';
//   arr.push(str);
// }
// console.log(arr);


let arr = [];

for (i = 1; i <= 5; i++){
  let str = '';
  for(j = 0; j < 5; j++){
    str += i;
  }
  arr.push(str);
}
console.log(arr);