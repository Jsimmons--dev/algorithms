const { RabinKarpSearch } = require('./Rabin-Karp-Search')
const { SimpleSearch } = require('./Simple-Search')
const { KnuthMorrisPratt } = require('./Knuth-Morris-Pratt-Search')

const fs = require('fs');
const { once } = require('events');

var lineReader = require('readline').createInterface({
	input: fs.createReadStream('textExamples.txt')
});

let totalSimpleTime = 0n
const simpleAnswers = []

let totalRKTime = 0n
const RKAnswers = []

let totalKMPTime = 0n
const KMPAnswers = []

const numOfTrials = 500

lineReader.on('line', function (line) {
	const [testText, testPattern] = line.split(',')

	let simpleTimeElapsed = process.hrtime.bigint()
	simpleAnswers.push(SimpleSearch(testPattern, testText))
	simpleTimeElapsed = (process.hrtime.bigint() - simpleTimeElapsed)
	totalSimpleTime += simpleTimeElapsed

	let RKTimeElapsed = process.hrtime.bigint()
	RKAnswers.push(RabinKarpSearch(testPattern, testText))
	RKTimeElapsed = (process.hrtime.bigint() - RKTimeElapsed)
	totalRKTime += RKTimeElapsed

	let KMPTimeElapsed = process.hrtime.bigint()
	KMPAnswers.push(KnuthMorrisPratt(testPattern, testText))
	KMPTimeElapsed = (process.hrtime.bigint() - KMPTimeElapsed)
	totalKMPTime += KMPTimeElapsed

});

lineReader.on('close',
	() => {
		console.log('Total Simple Time:')
		console.log(totalSimpleTime / 1000000000n + ' seconds')
		console.log()

		console.log('Total RabinKarp Time:')
		console.log(totalRKTime / 1000000000n + ' seconds')
		console.log()

		console.log('Total KnuthMorrisPratt Time:')
		console.log(totalKMPTime / 1000000000n + ' seconds')
		console.log()

		// for (let i = 0; i < 100; i++) {
		// 	console.log(simpleAnswers[i], RKAnswers[i], KMPAnswers[i])
		// }

	})