const fs = require('fs')

const fileDescriptor = fs.openSync('./textExamples.txt', 'w')

const charSet = ['a', 'b', 'c', 'd', 'e']

const numOfTrials = 500
const patternSize = 150
const testPatterns = []

const textSize = 500000
const testTexts = []

for (let i = 0; i < numOfTrials; i++) {
	let newPattern = new Array(patternSize)
	for (let i = 0; i < patternSize; i++) {
		newPattern[i] = charSet[Math.floor(Math.random() * charSet.length)]
	}
	let newText = new Array(textSize)
	for (let i = 0; i < textSize; i++) {
		newText[i] = charSet[Math.floor(Math.random() * charSet.length)]
	}

	fs.writeSync(fileDescriptor, newText.join(""))
	fs.writeSync(fileDescriptor, ",")
	fs.writeSync(fileDescriptor, newPattern.join(""))
	fs.writeSync(fileDescriptor, "\n")
}