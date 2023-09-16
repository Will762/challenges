function generateHashtag (str) {
	if (!str || !str.match(/[A-Za-z]/)) return false;
	let hashtag = str.replace(/^[A-Za-z]|\s+[A-Za-z]/g, match => match.toUpperCase().trim()).trim();
	hashtag = hashtag[0] === "#" ? hashtag : "#" + hashtag;
	return hashtag.length <= 140 ? hashtag : false;
  }
