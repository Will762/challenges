function pigIt(str) {
	if (!str.length) return str;
	const words = str.split(' ');
	return words.map(word => {
		if (!word.match(/\w/)) return word;
		const chars = word.split('');
		for (i = 0; i < chars.length; i++) {
			if (chars[i].match(/\w/)) {
				chars.push(chars[i] + 'ay');
				chars.splice(i, 1);
				break;
			}
		}
		return chars.join('');
	}).join(' ');
}
