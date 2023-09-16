function formatDuration (seconds) {
	if (seconds === 0) return 'now';

	const units = {
		year	:	31536000,
		day		:	86400,
		hour	:	3600,
		minute	:	60,
		second	:	1,
	}

	const result = [];

	for (const unit in units) {
		let tempResult;
		tempResult = Math.floor(seconds / units[unit]);

		if (tempResult) {
			seconds -= tempResult * units[unit];
			tempResult += tempResult > 1 ? ` ${unit}s` : ` ${unit}`;
			result.push(tempResult);
		}
	}

	if (result.length > 1) {
		const last = result.pop();
		const secondLast = result.pop();
		result.push(`${secondLast} and ${last}`);
	}

	return result.join(', ');
}

console.log(formatDuration(1));
