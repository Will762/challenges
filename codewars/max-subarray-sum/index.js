var maxSequence = function(arr) {
	if (!arr.length) return 0;
	let largest = 0;
	arr.reduce(((acc, el) => {
		let sum = acc + el;
		if (acc > largest) {
			largest = acc;
		}
		if (sum > largest) {
			largest = sum;
		}
		return sum > 0 ? sum : 0;
	}), 0);
	return largest;
}
