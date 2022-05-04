let arr = [1, 2, 3, 4, 5];

// for (i = 0; i < arr.length - 1; i++){
//   console.log(arr[i + 1] + arr[i]);
// }

// for (i = 2; i < arr.length; i++){
//   console.log(arr[i - 2] + arr[i - 1] + arr[i]);
// }

for (i = 1; i < arr.length - 1; i++){
  console.log(arr[i-1] + arr[i] + arr[i+1]);
}