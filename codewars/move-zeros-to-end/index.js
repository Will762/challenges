function moveZeros(arr) {
	let newArr = arr.filter(e => e !== 0);
	for (let i = arr.length - newArr.length; i > 0; i--) newArr.push(0);
	return newArr;
}
