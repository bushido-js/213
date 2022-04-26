/* В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень). */

      // let month = 6;
      // let value = {
      //   1: 'Январь',
      //   2: 'Февараль',
      //   3: 'Март',
      //   4: 'Апрель',
      //   5: 'Май',
      //   6: 'Июнь',
      //   7: 'Июль',
      //   8: 'Август',
      //   9: 'Сентябрь',
      //   10: 'Октябрь',
      //   11: 'Ноябрь',
      //   12: 'Декабрь'
      // }

      // if (month == Object.keys(value)) {
      //   console.log(value[Object.keys(value)]);
      // }
      // Нужно научиться сопоставлять значение переменной с значением ключа массива


let month = 12;

if (month == 12 || month >= 1 && month <= 2 ) {
  console.log('Зима')
} else if (month >= 3 && month <= 5) {
  console.log('Весна');
} else if (month > 5 && month < 9) {
  console.log('Лето');
} else if (month > 8 && month < 12) {
  console.log('Осень');
} else {
  console.log('Значение не соответсвует условию');
}


/* Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'. */

let str = 'cbcde';

if(str[0] === 'a') {
  console.log('да');
} else {
  console.log('нет');
}

/* Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'. */

let number = 12345;
let strNumber = String(number);
let firstNum = strNumber[0];

if (firstNum == 1 || firstNum == 2 || firstNum == 3) {
  console.log('да');
} else {
  console.log('нет');
}

/* Дано трехзначное число. Найдите сумму цифр этого числа. */

let num3 = 123;
let strNum3 = String(num3);

if (strNum3.length == 3) {
  let sum = Number(strNum3[0]) + Number(strNum3[1]) + Number(strNum3[2])
  console.log(sum);
} else {
  console.log('Это не трехзначное число');
}

/* Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'. */

let num6 = 123321;
let strNum6 = String(num6);
let sum1 = Number(strNum6[0]) + Number(strNum6[1]) + Number(strNum6[2]);
let sum2 = Number(strNum6[3]) + Number(strNum6[4]) + Number(strNum6[5]);
if (strNum6.length == 6) {
  if (sum1 == sum2) {
    console.log('да');
  } else {
    console.log('нет');
  }
} else {
  console.log('Число не является шестизначным');
}
