function SimpleSearch(pattern, text) {
	let positionInText = 0
	const m = pattern.length
	const n = text.length
	while (positionInText + m <= n) {
		let match = true
		for (let positionInPattern = 0; positionInPattern < m; positionInPattern++) {
			match = match && text[positionInText + positionInPattern] === pattern[positionInPattern]
		}
		if (match) {
			return positionInText
		}
		positionInText = positionInText + 1
	}
	return -1
}

exports.SimpleSearch = SimpleSearch