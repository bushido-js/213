// "use strict";
// let test = '12345';
// console.log(test[0] + test[1]);
// console.log(Number(test[0]) + Number([test[1]]));

//Example

let string = '12345'
console.log(
  Number(string[0]) +
  Number(string[1]) +
  Number(string[2]) +
  Number(string[3]) +
  Number(string[4])
);

/* Пусть теперь в переменной у нас хранится не число в кавычках, а просто число. В этом случае попытка обратится к его отдельному символу выдаст undefined, так как такое обращение работает только для строк: */

let test = 12345;
console.log(test[0]); // выдаст undefined

// Найти сумму цифр числа
  let number = 12345;
  let toStringNumber = String(number);

  console.log(
    Number(toStringNumber[0]) +
    Number(toStringNumber[1]) +
    Number(toStringNumber[2]) +
    Number(toStringNumber[3]) +
    Number(toStringNumber[4]) 
  );

//Найти произведение цифр числа

let number2 = 12345;
let toStringNumber2 = String(number2)
console.log(
  toStringNumber2[0] *
  toStringNumber2[1] *
  toStringNumber2[2] *
  toStringNumber2[3] *
  toStringNumber2[4]
);

//Переставить цифры числа в обратном порядке

let number3 = 12345
let toStringNumber3 = String(number3)

console.log(Number(
  toStringNumber3[4] +
  toStringNumber3[3] +
  toStringNumber3[2] +
  toStringNumber3[1] +
  toStringNumber3[0]
));

let num = 1;
num = num + 2;
num = num + 3;

alert(num);
