const numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
};
const numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion'
};

module.exports = function numToWords(n) {
  if(n <= 20) {
    return numbersToWords[n]
  }
  

    let tenths = 10
  	let arr = new String(n).split('')
  	let answer = []

  	if(arr.length === 2) {
  		let place = arr[0] * 10;
  		answer.push(numbersToWords[place]);
      answer.push('-');
  		answer.push(numbersToWords[arr[1]]);
  	}

    return answer.join('')
}
