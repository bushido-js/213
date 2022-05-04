// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let counter = 0;
// let counter2 = 0;
// for (i = 0; i < arr.length; i++){
//   if (arr[i] === 3 ){
//     counter++;
//   } else if(arr[i] === 2) {
//     counter2++;
//   }
// } 
// document.write(counter + ', ' + counter2)



let str = 'hello world, my name is Oleg';
let count = {};

for(i = 0; i < str.length; i++){
  if (count[str[i]] === undefined){
    count[str[i]] = 1;
  } else {
    count[str[i]] ++;
  }
}

console.log(count);