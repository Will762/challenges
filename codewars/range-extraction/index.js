function solution(list){
	const result = [];
	let rangeStart = rangeStop = 0;

	function push() {
		if (rangeStop - rangeStart > 1) {
			result.push(`${list[rangeStart]}-${list[rangeStop]}`)
		} else if (rangeStart === rangeStop) {
			result.push(`${list[rangeStart]}`);
		} else {
			result.push(`${list[rangeStart]},${list[rangeStop]}`);
		}
	}

	for (i = 1; i < list.length; i++) {
		if (Math.abs(list[i] - list[rangeStop]) > 1) {
			push();
			rangeStart = i;
		}
		rangeStop = i;
	}

	push();
	return result.join(',');
}
