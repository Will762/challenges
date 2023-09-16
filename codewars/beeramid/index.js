var beeramid = function(bonus, price) {
	let spareCans = (Math.floor(bonus / price) - 1);
	let levelsBuilt = 1;
	let cansRequired;

	if (spareCans < 0) return 0;

	while (spareCans > 0) {
		levelsBuilt++;
		cansRequired = (levelsBuilt ** 2);
		if (spareCans - cansRequired < 0) {
			levelsBuilt--;
			break;
		}
		spareCans = spareCans - cansRequired;
	}

	return levelsBuilt;
}
