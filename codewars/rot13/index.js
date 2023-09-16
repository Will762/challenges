function rot13(message){
	const chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	const messageArr = message.split('');
	return messageArr.map(char => {
		if (!char.match(/[A-Za-z]/)) return char;
		const isUpper = char.match(/[A-Z]/) ? true : false;
		char = isUpper ? char.toLowerCase() : char;
		const charIndex = chars.indexOf(char);
		return charIndex < 13
			? isUpper ? chars[charIndex + 13].toUpperCase() : chars[charIndex + 13]
			: isUpper ? chars[charIndex - 13].toUpperCase() : chars[charIndex - 13];
	}).join('');
  }
