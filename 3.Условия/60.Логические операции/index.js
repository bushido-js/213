/* Здесь пришло время открыть вам некоторую неочевидную вещь: на самом деле конструкция if не является обязательной для сравнения - сами операторы вида ==, ===, !=, <, > и т.д. возвращают своим результатом либо true, либо false. */

console.log(1 == 1); // выведет true
console.log(1 == 2); // выведет false 


// let a = 2 * (3 - 1);
// let b = 6 - 2;

// console.log(a == b);

// let a = 5 * (7 - 4);
// let b = 1 + 2 + 7;

// console.log(a > b);

let a = 2 ** 4;
let b = 4 ** 2;

console.log(a != b);

// if (!(age > 13 && age <= 90)) {}
// if (age < 14 || age > 90) {}




/* Напишите код, который будет спрашивать логин с помощью prompt. */

let log  = prompt('Какой у вас логин?');

if (log === 'Админ') {

  let = pass = prompt('Введите пароль:');

  if(pass == 'Я Главный') {
    alert('Здравствуйте!');
  } else {
    if (pass === '' || pass === null){
      alert('Отменено')
    } else {
      alert('Неверный пароль')
    }
  }

} else if (log === '' || log === null) {
  alert('Отменено');
} else {
  alert('Я вас не знаю');
}
  

/* https://learn.javascript.ru/logical-operators */


