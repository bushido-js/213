/* Давайте теперь изучим преобразование других типов данных к логическому. Такое преобразование осуществляется с помощью функции Boolean. Вот значения, которые при приведению к логическому типу дают false: */

console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(+0));

console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(''));

/* Все остальные значения в JavaScript (в других языках бывает не так) дают true. Вот значения, приводящиеся к true, но могущие вызвать у вас сомнения: */

console.log(Boolean(-1));
console.log(Boolean(1));

console.log(Boolean(Infinity));   
console.log(Boolean(-Infinity));

console.log(Boolean('0'));         // true
console.log(Boolean('false'));     // true
console.log(Boolean('NaN'));       // true
console.log(Boolean('null'));      // true
console.log(Boolean('undefined')); // true

console.log(1 / 0);