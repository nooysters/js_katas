const assert = require('chai').assert
const numToWords = require('../src/numbersToWords.js')

// describe('numToWords()', () => {
//
//   var up_to_twenty = {
//     0: 'zero',
//     1: 'one',
//     2: 'two',
//     3: 'three',
//     4: 'four',
//     5: 'five',
//     6: 'six',
//     7: 'seven',
//     8: 'eight',
//     9: 'nine',
//     10: 'ten',
//     11: 'eleven',
//     12: 'twelve',
//     13: 'thirteen',
//     14: 'fourteen',
//     15: 'fifteen',
//     16: 'sixteen',
//     17: 'seventeen',
//     18: 'eighteen',
//     19: 'nineteen',
//     20: 'twenty'
//   }
//
//   for(let i=0; i<=20; i++) {
//     it(`is given ${i}`, () => {
//       assert.equal(up_to_twenty[i], numToWords(i))
//     })
//   }
//
//   it(`is given 21`, () => {
//     assert.equal("twenty-one", numToWords(21))
//   })
//
//   it(`is given 100`,()=>{
//     assert.equal("one hundred", numToWords(100));
//   })
// })
