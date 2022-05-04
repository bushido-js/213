// Увеличьте зарплату каждого работника на 10%.
  // let obj = {
  //   employee1: 100,
  //   employee2: 200,
  //   employee3: 300,
  //   employee4: 400,
  //   employee5: 500,
  //   employee6: 600,
  //   employee7: 700,
  // };

  // for (let key in obj){
  //   obj[key] = obj[key] + obj[key]/10;
  // }
  // console.log(obj);

// Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.

  // for (let key in obj){
  //   if (obj[key] <= 400){
  //     obj[key] = obj[key] + obj[key]/10;
  //   }
  // }
  // console.log(obj);

// С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.

  // let arr1 = [1, 2, 3, 4, 5];
  // let arr2 = [6, 7, 8, 9, 10];
  // let obj = {};

  // for (i = 0; i < arr1.length; i++){
  //   obj[arr1[i]] = arr2[i];
  // }
  // console.log(obj);


// Найдите сумму ключей этого объекта и поделите ее на сумму значений.
  //   let obj = {1: 6, 2: 7, 3: 8, 4: 
  //     9, 5: 10};

  // let sumKey = 0;
  // let sumValue = 0;
  // let value;
  // for (let key in obj) {
  //   sumKey += Number(key);
  //   sumValue += obj[key];
  //   value = sumKey / sumValue;
  // }
  // // Ключ в объекте это всегда строка, я не знал, важно!
  // console.log(sumValue);

// Запишите ключи этого объекта в один массив, а значения - в другой.

  // let obj = {'a': 1, 'b': 2, 'c': 3, 
  //   'd': 4, 'e': 5};
  // let arr1 = [];
  // let arr2 = [];

  // for (let key in obj){
  //   arr1.push(key);
  //   arr2.push(obj[key]);
  // }
  // console.log(arr1, arr2);

  
  
  
//Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. То есть у вас в результате получится вот такой массив:

  // let obj = {
  //   1: 125,
  //   2: 225,
  //   3: 128,
  //   4: 356,
  //   5: 145,
  //   6: 281,
  //   7: 452,
  // };
  // let arr = [];

  // for (let key in obj){
  //   let str = String(obj[key]);
  //   if (str[0] == 1 || str[0] == 2){
  //     arr.push(Number(str));
  //   }
  // }
  // console.log(arr);


// Создайте из этого массива следующий объект: 
//let arr = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}; 
  
  // let arr = ['a', 'b', 'c', 'd', 'e'];
  // let obj = {};

  // for (i = 0; i < arr.length; i++){
  //   obj[i + 1] = arr[i];
  // }
  // console.log(obj);

//  Создайте из этого массива следующий объект:
// let arr = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; 
  
  // let arr = ['a', 'b', 'c', 'd', 'e'];
  // let obj = {};

  // for (i = 0; i < arr.length; i++){
  //   obj[arr[i]] = i + 1;
  // }
  // console.log(obj);
