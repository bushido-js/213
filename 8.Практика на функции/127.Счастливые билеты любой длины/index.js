
// // Итоговая функция, которая находит счастливые билеты. Но стоит учитывать что количество цифр в билете всегда чётное, иначе счастлиый билет не возможен.
// function getLuckyTickets (digitsAmount) {
//   if (digitsAmount % 2 !== 0){
//     return console.error('В билетах не может быть нечетное количество цифр, используйте чётное число.');
//   }
   
//   let arr = [];
//   let first = getFirst(digitsAmount);
//   let last = getLast(digitsAmount);
  
//   for (let i = first; i <= last; i++){
    
//     let ticket = normalizeNum(i, digitsAmount);
    
//     if (isLucky(ticket)){
//       arr.push(ticket)
//     }
//   }
  
//   return arr; 
// }

// console.log(getLuckyTickets(2));



// // Проверка на удачный билет
// function isLucky(num) {
//   let str = String(num);
//   let sum1 = 0;
//   let sum2 = 0;
//   for (let i = 0; i < str.length / 2; i++){
//     sum1 += Number(str[i]);
//   }
//   for (let i = str.length / 2; i < str.length; i++){
//     sum2 += Number(str[i]);
//   }
//   return sum1 === sum2;  
// }

// // Нормализация чила при нехватке цифр
// function normalizeNum (num, digitsAmount) {
//   let str = String(num);
//   if (str.length < digitsAmount){
//     let diff = digitsAmount - str.length;
//     for (i = 0; i < diff; i++){
//       str = '0' + str;
//     }
//   }
//   return str;
// }


// // Первое число в итерации
// function getFirst (digitsAmount){
//   let str = '';
//   for (let i = 4; i <= digitsAmount; i = i + 2){
//     str += '0'
//   }
//   let firstNum = '1' + str + '1';
//   return Number(firstNum);
// }

// //Второе число в итерации
// function getLast (digitsAmount) {
//   let str = '';
//   for (let i = 0; i < digitsAmount; i++){
//     str += '9'
//   }
//   return Number(str);
// }


// Это просто задание из учебника, так как у нас разное решение
  // function formStr(data, length){
  //   let str = '';
  //   for (i = 0; i < length; i++){
  //     str += data;
  //   }
  //   return str;
  // }


  // Желательно сесть в воскресенье перед работой, или в начале след недели, написать все это заного, потому что под утро мозг плавится и кажется все тяжелым, нужно решить и убедиться, что тут по сути ничего сложного. !!Все сделал!!

  //Самостоятельно попытаюсь решит данную задачу, которая решена выше, не занимался 3 дня, немного подзабыл некоторые вещи

   // В предыдущем уроке мы с вами решили задачу на нахождение всех счастливых чисел. Давайте теперь обобщим наш код так, чтобы в билете было не 6 цифр, а любое заданное количество.


//В итоге я сделал вывод 
function findLuckyTickets (digitsAmount) {
  let arr = [];
  for (let i = minDigit(digitsAmount); i <= maxDigit(digitsAmount); i++ ) {
    if (getSumNumberTicket(i) === true){
      arr.push(i);
    }
  }
  return arr;
}

console.log(findLuckyTickets(6))

  // С чего начинаем? 
  // функция будет перебирать числа от и до, если digistAmount = 2 то минимальное число 11

  //Минимальное число
  function minDigit (digistAmount) {
    let zero = '';
      for (let i = 2; i < digistAmount ; i += 2){
        zero += '00';
      }   
    return Number('1' + zero + '1');
  }

  //Максимальное число
  function maxDigit(digistAmount) {
    let zero = '';
      for (let i = 2; i < digistAmount ; i += 2){
        zero += '99';
      }   
    return Number('9' + zero + '9');
  }

  //Сравниваем сумму половин номера билета
  function getSumNumberTicket (numberTickets){
    let sum1 = '';
    let sum2 = '';
    let str = String(numberTickets);
    for (let i = 0; i < str.length / 2; i++){
      sum1 += str[i];
    }
    
    for (let i = str.length / 2; i < str.length; i++){
      sum2 += str[i];
    }

    return sumNumber(sum1) === sumNumber(sum2)
  }

  // Просто сумма цифр числа
  function sumNumber (num) {
    let sum = 0;
    let str = String(num);
    for (let elem of str){
      sum += Number(elem)
    }
    return sum;
  }

  //Я справился


