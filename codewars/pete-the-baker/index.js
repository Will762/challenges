function cakes(recipe, available) {
	let results = [];
	for (const ingriedient in recipe) {
		results.push(parseInt(available[ingriedient] / recipe[ingriedient]));
	}
	return results.includes(NaN) ? 0 : Math.min(...results);
  }
