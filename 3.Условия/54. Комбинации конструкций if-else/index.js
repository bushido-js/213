let day = 33;

if (day >= 1 && day <= 10) {
  console.log('1 - decada');
} else if (day >= 11 && day <= 20) {
  console.log('2 - decada');
} else if (day >= 21 && day <= 31) {
  console.log('3 - decada');
} else {
  console.log('Error');
}

let num = 49;

if ( !(num >= 10 && num <= 99)) {
  console.log('Число не попадает в диапазон от 10 до 99');
} else {
  let strNum = String(num);
  let sum = Number(strNum[0]) + Number(strNum[1])
  if (sum <= 9) {
    console.log('Сумма цифр однозначна');
  } else {
    console.log('Сумма цифр двузначна');
  }
}
 


 