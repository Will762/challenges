function orderWeight(str) {
	if (!str) return str;
	const obj = str.split(/\s+/).map(e => {
		return {
			e: e,
			sum: e.split('').reduce((acc, cur) => acc + parseInt(cur), 0)
		}
	});
	obj.sort((a, b) => a['sum'] === b['sum'] ? a['e'] < b['e'] ? -1 : 1 : a['sum'] - b['sum']);
	return obj.map(e => e['e']).join(' ');
}
