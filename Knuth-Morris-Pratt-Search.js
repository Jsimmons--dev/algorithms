function KnuthMorrisPrattShift(pattern, shiftArray){
	const m = pattern.length
	shiftArray[0] = 1
	shiftArray[1] = 1
	let  i = 1
	let j = 0
	while(i + j < m){
		if(pattern[i+j] == pattern[j]){
			shiftArray[i + j + 1] = i
			j += 1
		} else {
			if(j == 0){
				shiftArray[i + 1] = i + 1
			}
			i = i + shiftArray[j - 1 + 1]
			j = Math.max(j - shiftArray[j - 1 + 1], 0)
		}
	}
}

function KnuthMorrisPratt(pattern, text){
	const m = pattern.length
	const n = text.length

	const shiftArray = new Array(m + 1)
	KnuthMorrisPrattShift(pattern, shiftArray)
	let i = 0
	let j = 0
	while(i + m <= n){
		while(text[i + j] == pattern[j]){
			j += 1
			if (j >= m){
				return i
			}
		}
		i = i + shiftArray[j]
		j = Math.max(j - shiftArray[j], 0)
	}
	return -1
}

exports.KnuthMorrisPratt = KnuthMorrisPratt