//Стрелочные функции 
// let result = every([1, 2, 3, 4, 5],
//   elem => elem > 0);

// let result = every([1, 2, 3, 4, 5], 
//   (elem, index) => elem*index > 10);


let arr = [[1, 2, 3], [4, 5, 6], 
[7, 8, 9]]; 

function each(arr, callback) {
  let result = [];
  for (let elem of arr){
    result.push(callback(elem));
  }
  return result;
}

let result = each(arr, (elem, index) => elem * index > 10);
console.log(result);


//?*? При решении игры с ячейками, стрелочные функции мне испортили процесс создания, пришлось отказаться от них
// (cells[i].addEventListener('click', function() {
  // if (this.innerHTML == counter){)

// Не работал this