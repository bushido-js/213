let arr = [
  function () {return 1},
  function () {return 2},
  function () {return 3},
];

let sum = arr[0]() + arr[1]() + arr[2]()
console.log(sum);

for (let func of arr){
  console.log(func());
}