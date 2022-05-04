// let str = '';

// for(i = 0; i < 5; i++){
//   str += 'xx';
//   document.write(str + '<br>')
// }

// for (i = 1; i < 10; i++){
//   for(j = 0; j < 3; j++){
//     document.write(i) 
//   }
//   document.write('<br>')
// }

// for (i = 1; i < 10; i++){
//   for(j = 1; j <= i; j++){
//     document.write(i)
//   }
//   document.write('<br>')
// }

// for (i = 1; i < 10; i += 2){
//   // if (i % 2 !== 0){
//     for(j = 1; j <= i; j++){
//       document.write(i);
//     }
//   // }
//   document.write('<br>')
// }


// let str = '';

// for (i = 5; i > 0; i--){
//   str = '';
//   for(j = 1; j <= i; j++){
//     str += 'x'
//   }
//   document.write(str + '<br>')
// }

// for (i = 5; i > 0; i--){
//   str = '';
//   for(j = 0; j < i; j++){
//     str += 'xx'
//   }
//   document.write(str + '<br>')
// }


for (i = 9; i > 0; i--){
  for(j = 0; j < i; j++){
    document.write(i)
  }
  document.write('<br>')
}