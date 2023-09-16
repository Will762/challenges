function firstNonRepeatingLetter(s) {
	const results = new Map;
	for (i = 0; i < s.length; i++) {
		let c = s.toLowerCase();
		results.get(c[i]) ? results.get(c[i])['count'] = results.get(c[i])['count'] + 1 : results.set(c[i], {'i': i, 'count' : 1});
	}
	for (const [key, value] of results) {
		if (value['count'] === 1) return s[value['i']];
	}
	return '';
  }
