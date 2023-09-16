function solution(input, markers) {
	return input.replace(new RegExp('\\s*(\\' + markers.join('|\\') + ').*', 'g'), '');
};
