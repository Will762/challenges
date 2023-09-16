function rgb(r, g, b) {
	function convert(dec) {
		const map = {
			10: 'A',
			11: 'B',
			12: 'C',
			13: 'D',
			14: 'E',
			15: 'F'
		}
		dec = dec > 255 ? 255 : dec;
		dec = dec < 0 ? 0 : dec;
		const octs = parseInt(dec / 16);
		const units = dec % 16;
		return `${map[octs] || octs}${map[units] || units}`
	}
	return `${convert(r)}${convert(g)}${convert(b)}`;
  }
