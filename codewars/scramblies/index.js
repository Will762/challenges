function scramble(str1, str2) {
	if (str1.length < str2.length) return false;
	const letters = new Map;
	for (const char of str1) {
		letters.set(char, letters.get(char) + 1 || 1);
	}
	for (const char of str2) {
		if (letters.get(char) === 0 || letters.get(char) === undefined) return false;
		letters.set(char, letters.get(char) - 1);
	}
	return true;
  }
  console.log(scramble('avjhh', 'java'));
