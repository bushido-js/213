// Практика на использования изученных методов

// let str = 'london';

// let result = str.slice(0, 1).toUpperCase() + str.slice(1);
// let result = str.slice(0, (str.length - 1)) + str.slice(-1).toUpperCase()
// let result = str.slice(0, 2).toUpperCase() + str.slice(2)


// let str = 'London';

// let result = str.slice(0, 1).toLowerCase() + str.slice(1);
// console.log(result);

  // Слова в строке

  // let str = 'fuck hello martinos';
  // let words = str.split(' ');
  // console.log(words);
  // for(i = 0; i < words.length; i++){
  //   words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
  // }
  // str = words.join(' ');
  // console.log(str);


// let str = 'vards_testf_ftext';


  // let arr = str.split('_');
  // for(i = 0; i < arr.length; i++){
  //   arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
  // }
  // str = arr.join('');
  // console.log(str);

// Здание не особо понял, либо оно простейшее либо не понял, сделал просто наоборот, все кроме первого элемента к верхнему регистру
  // let arr = str.split('_');
  // for(i = 0; i < arr.length; i++){
  //   arr[i] = arr[i].slice(0, 1) + arr[i].slice(1, arr[i].length - 1).toUpperCase();
  // }
  // str = arr.join('');
  // console.log(str);




//Переворот строки 

let str = 'Привет меня зовут Олег!';
let arr = str.split(' ').reverse().join(' ');
console.log(arr);

