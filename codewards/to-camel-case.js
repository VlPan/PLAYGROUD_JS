function toCamelCase(str){
	const separators = ['-', '_'];
	const firstSeparatorLength = str.split(separators[0]).length;
	const secondSeparatorLength = str.split(separators[1]).length;


	const selectedSeparator = firstSeparatorLength >= secondSeparatorLength ? separators[0] : separators[1];

	const words = str.split(selectedSeparator);

	let result = `${words[0]}`;
	for(let i = 1; i < words.length; i++) {
		let word = words[i];

		result += `${capitalize(word)}`;
	}

	function capitalize(str) {
		const lower = str.toLowerCase();
		return lower.charAt(0).toUpperCase() + lower.slice(1);
	}

	return result;
}
