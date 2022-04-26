// Решите аналогичную задачу, только определите в какую треть часа попадает указанное количество минут.

let min = 44;

if (min <= 19) {
  console.log('1 треть');
} else {
  if (min <= 39) {
    console.log('2 треть');
  } else if (min <= 60) {
    console.log('3 треть');
  } else {
    console.log('Невозможное значение');
  }
}

let arr  = [1, 2];

if (arr.length == 3) {
  let sum = arr[0] + arr[1] + arr[2];
  console.log(sum);
} else if (arr.length > 3) {
  console.log('В массиве больше 3 элементов');
} else {
  console.log('В массиве меньше 3 элементов');
}

/* Дано целое число. Напишите условие, которое проверит, равна ли последняя цифра этого числа нулю. */

let number = 0;
let strNumber = String(number);



if ((strNumber[strNumber.length - 1]) == 0) {
  console.log('Равна');
} else {
  console.log('Не равна');
}

/* Пусть в переменной num хранится число. Определите, четное число или нет. Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае. */

let num = 21;
let strNum = String(num);
let lastNum = strNum[strNum.length - 1];

if (lastNum == 0 || lastNum == 2 || lastNum == 4 || lastNum == 6 || lastNum == 8 ) {
  console.log('Число четное');
} else {
  console.log('Число нечетное');
}

/* Как известно, четные числа делятся на 2 без остатка, а нечетные - с остатком. Пусть у вас дано число. С помощью оператора % и конструкции if проверьте четное это число или нет. */

let num5 = 40;

if ((num5 % 2) == 0) {
  console.log('Число чётное');
} else {console.log('Число нечетное');}

/* Дано число. Проверьте, что оно делится на 3. */

let num6 = 0;

if ((num6 % 3) == 0) {
  console.log('Делится');
} else {
  console.log('Делится с остатком');
}
