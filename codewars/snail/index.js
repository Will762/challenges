function snail(array) {
	if (!array[0][0]) return [];
	const result = [];

	(function doTheSnail(startIndex, lengthToExtract, arrayLength) {
		let i = j = startIndex;

		if (arrayLength === 0) {
			return;
		}

		if (arrayLength === 1) {
			result.push(array[i][j]);
			return;
		}

		while (j <= lengthToExtract) {
			result.push(array[i][j]);
			if (j === lengthToExtract) {
				i++;
				break;
			}
			j++;
		}

		while (i <= lengthToExtract) {
			result.push(array[i][j]);
			if (i === lengthToExtract) {
				j--;
				break;
			}
			i++;
		}

		while (j >= startIndex) {
			result.push(array[i][j]);
			if (j === startIndex) {
				i--;
				break;
			}
			j--;
		}

		while (i > startIndex) {
			result.push(array[i][j]);
			i--;
		}

		doTheSnail(startIndex + 1, lengthToExtract - 1, arrayLength - 2);
	}(0, array.length - 1, array.length));

	return result;
};
