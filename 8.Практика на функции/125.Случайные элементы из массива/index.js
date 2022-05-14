function random (arr) {
  return getRandomInt(0, arr.length - 1);
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function randoms(arr, length) {
	let result = [];
	
	for (let i = 0; i < length; i++) {
    result.push(arr.splice((random(arr)), 1)[0]);
	}
	
	return result;
}

console.log( randoms([1, 2, 3, 4, 5, 7, 8, 9], 5) );

//Считаю, что решил этот код, рациональнее чем в учебнике, не используя лишнюю функцию shaffle, вместо неё я просто добавить метод splice, вырезая, тем самым не позволяя повторяться элементам.


