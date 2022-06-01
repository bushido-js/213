// Функции можно передавать параметрами в другие функции. Такие функции-параметры называются коллбэками (англ. callback). Давайте посмотрим работу с ними на примере.

let arr = [1, 2, 3, 4, 5, 6, 7];

function each(arr, callback) {
  let result = [];
  for (let elem of arr){
    result.push(callback(elem));
  }
  return result;
}

function square(elem) {
  return elem**2;
}
console.log(each(arr, square));

let arrStr = ['abc', 'bcd', 'cde', 'de'];

function shuffleString(str) {
  let string = [];
  for(let i = str.length - 1; i >=0; i--){
    string.push(str[i]);
  }
  return string.join('');
}

function toUpperCaseElem(str) {
  let arr = [];
  for(let i = 0; i < str.length; i++){
    if(i == 0){
      arr.push(str[i].toUpperCase());
    } else {
      arr.push(str[i]);
    }
  }
  return arr.join('');
}

console.log(each(arrStr, shuffleString));
console.log(each(each(arrStr, shuffleString), toUpperCaseElem));

function cube(num) {
	return num ** 3;
}

console.log(each(arr, cube));