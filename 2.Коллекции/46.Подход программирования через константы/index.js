const a = 1;
const b = 2;
const c = a + b;

console.log(c);

const greeting = {
  words: "Hello",
  number: "five"
} // error:  Assignment to constant variable.

console.log(greeting);
console.log(greeting);

greeting.message = 'say Hello man';
console.log(greeting);

let xtance = 'edit'
xtance = 'edit2'
console.log(xtance);

/* Важная инфа об отличии let, const и var */
/* Так что на случай, если вы упустили суть отличий, то вот они вкратце:
1. Переменные, объявленные через var, могут быть глобальными или иметь область видимости в рамках функции; let и const имеют блочную область видимости.
2. var-переменные могут быть как обновлены, так и переопределены внутри области видимости; let-переменные можно обновлять, но не переопределять; const-переменные нельзя ни обновлять, ни переопределять.
3. Со всеми ними осуществляется поднятие наверх области видимости. Но если var-переменные при этом инициализируются как undefined, let и const не инициализируются.
4. В то время как var и let можно объявить, но не инициализировать, const необходимо инициализировать во время объявления. */

const arr = [1, 2, 3, 4, 5];
const res = arr[1] + arr[2];

console.log(res);