// Все внешние, доступные функции переменные, называются ее лексическим окружением (англ. LexicalEnvironment).

  // function test() {
  // 	let num1 = 1;
  // 	let num2 = 2;
    
  // 	return function() {
  // 		return num1 + num2;
  // 	}
  // }

  // let func = test();
  // alert(func());

  // function test() {
  //   let num1 = 1;
  //   let num2 = 2;
    
  //   return function() {
  //     return num1 + num2;
  //   }
  // }
  
  // alert(test()());

  // function test() {
  //   let num1 = 1;
    
  //   return function() {
  //     return num1 + num2;
  //   }
  // }
  
  // let num2 = 2;
  // let func = test();
  // alert(func());

function test() {
  let num = 1;
  
  return function() {
    return num;
  }
}

let func = test();
let num = 2;
alert(func());