function digital_root(n) {
	const arr = n.toString().split('');
	const sum = arr.reduce((prev, curr) => prev + parseInt(curr), 0);
	return sum > 9 ? digital_root(sum) : sum;
}
