function RabinKarpSearch(pattern, text) {
	const q = 568823 //supposedly needs to be larger than m for best results
	const n = text.length
	const m = pattern.length
	const r = Math.pow(2, m - 1) % q
	let skippedWindows = 0

	const fingerprints = new Array(n - m)
	fingerprints[0] = 0
	let patternFingerprint = 0


	for (let positionInPattern = 0; positionInPattern < m; positionInPattern++) {
		fingerprints[0] = 2 * fingerprints[0] + text[positionInPattern].charCodeAt(0) % q
		patternFingerprint = 2 * patternFingerprint + pattern[positionInPattern].charCodeAt(0) % q
	}

	let positionInText = 0
	while (positionInText + m <= n) {
		if (fingerprints[positionInText] === patternFingerprint) {
			let match = true
			for (let positionInPattern = 0; positionInPattern < m; positionInPattern++) {
				match = match && text[positionInText + positionInPattern] === pattern[positionInPattern]
			}
			if (match) {
				return positionInText
			}
		} else {
			skippedWindows += 1
		}
		//feels like this can be built into the loop somehow but I can't figure it out
		if (positionInText + m < n) {
			fingerprints[positionInText + 1] = 2 * (fingerprints[positionInText] - r * text[positionInText].charCodeAt(0)) + text[positionInText + m].charCodeAt(0) % q
		}
		positionInText += 1
	}
	return -1
}

exports.RabinKarpSearch = RabinKarpSearch