"use strict";
let str = 'abcde';
console.log(str[0]);
console.log(str[2]);
console.log(str[4]);

let str1 = 'abcde';
console.log(str[4] + str[3] + str[2] + str[1] + str[0]);

let str2 = 'abcde';
let num = 3;
console.log(str2[num]);

let str3 = 'abcde';
str3[0] = '!'; // выдаёт ошибку, т.к. нельзя изменить символ строки (в строгом режиме ("use strict"))