// В предыдущем уроке мы с вами изучали цикл for-of для перебора массива. Существует похожий цикл for-in, предназначенный для перебора объектов.

// for (let переменнаяДляКлюча in объект) {
	
// }

  // let obj = {a: 1, b: 2, c: 3};

  // for (let key1 in obj) {
  //   console.log(key1);
  //   console.log(obj[key1]);
  // }

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let sum = 0;
for (let key in obj) {
  sum += obj[key]
}
console.log(sum);

