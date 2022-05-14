
// Итоговая функция, которая находит счастливые билеты. Но стоит учитывать что количество цифр в билете всегда чётное, иначе счастлиый билет не возможен.
function getLuckyTickets (digitsAmount) {
  if (digitsAmount % 2 !== 0){
    return console.error('В билетах не может быть нечетное количество цифр, используйте чётное число.');
  }
   
  let arr = [];
  let first = getFirst(digitsAmount);
  let last = getLast(digitsAmount);
  
  for (let i = first; i <= last; i++){
    
    let ticket = normalizeNum(i, digitsAmount);
    
    if (isLucky(ticket)){
      arr.push(ticket)
    }
  }
  
  return arr; 
}

console.log(getLuckyTickets(2));



// Проверка на удачный билет
function isLucky(num) {
  let str = String(num);
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < str.length / 2; i++){
    sum1 += Number(str[i]);
  }
  for (let i = str.length / 2; i < str.length; i++){
    sum2 += Number(str[i]);
  }
  return sum1 === sum2;  
}

// Нормализация чила при нехватке цифр
function normalizeNum (num, digitsAmount) {
  let str = String(num);
  if (str.length < digitsAmount){
    let diff = digitsAmount - str.length;
    for (i = 0; i < diff; i++){
      str = '0' + str;
    }
  }
  return str;
}


// Первое число в итерации
function getFirst (digitsAmount){
  let str = '';
  for (let i = 4; i <= digitsAmount; i = i + 2){
    str += '0'
  }
  let firstNum = '1' + str + '1';
  return Number(firstNum);
}

//Второе число в итерации
function getLast (digitsAmount) {
  let str = '';
  for (let i = 0; i < digitsAmount; i++){
    str += '9'
  }
  return Number(str);
}


// Это просто задание из учебника, так как у нас разное решение
  // function formStr(data, length){
  //   let str = '';
  //   for (i = 0; i < length; i++){
  //     str += data;
  //   }
  //   return str;
  // }
