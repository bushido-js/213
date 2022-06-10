// В ES6 появился специальный оператор ..., называющийся spread

// Когда оператор spread стоит перед массивом, он разделяет этот массив на отдельные значения, превращая массив в набор параметров, необходимых для вызова функции

  // let arr = [1, 2, 3, 4, 5];

  // function func(num1, num2, num3, 
  // 	num4, num5) { 
  // 	return num1 + num2 + num3 + num4 
  // 		+ num5; 
  // }
  // console.log(func(...arr));


  // function func(n1, n2, n3, n4, n5, 
  //   n6, n7, n8) { 
  //   return (n1 + n2 + n3 + n4) * (n5 
  //     + n6 + n7 + n8); 
  // }
  
  // console.log( func(1, ...[2, 3, 
  //   4], 5, ...[6], ...[7, 8]) ); 
   

let arr = [1, 2, 3, 4, 5]
let max = Math.max(...arr);
console.log(Math.min(...arr));