  // function test (func1, func2, func3){
  //   return func1() + func2() + func3()  
  // }
// function func1() {return 1;}
// function func2() {return 2;}
// function func3() {return 3;}

  // let func1 = function() {return 1;}
  // let func2 = function() {return 2;}
  // let func3 = function() {return 3;}

  // console.log(test(func1, func2, func3));

// console.log(test(
//   function func1() {return 1;},
//   function func2() {return 2;},
//   function func3() {return 3;}  
// ));

  // function test(func) {
  //   alert(func(3, 5));
  // }

  // let func = function(num1, num2){
  //   return num1 + num2;
  // }
  // test(func);


//Передадим и число параметром

  // function test(num, func1, func2) {
  //   return func1(num) + func2(num);
  // }
  // function func1(num){
  //   return num**2;
  // }
  // function func2(num){
  //   return num**3;
  // }
  // alert(test(3, func1, func2));


//Применение
  function test(arr, func){
    for(let i = 0; i < arr.length; i++){
      arr[i] = func(arr[i]);
    }
    return arr;
  }

  let result = test([1, 3, 5], function(elem){
    return elem**3;
  });

  console.log(result);

