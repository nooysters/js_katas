const assert = require('chai').assert
const reverseInteger = require('../src/reverse_integer.js')

describe('reverseInteger()', () => {

  it('reverses  2345', () => {
    assert.equal(2345, reverseInteger(5432))
  })

  it('reverses  234837458147385', () => {
    assert.equal(234837458147385, reverseInteger(583741854738432))
  })

  it('reverses  1000000', () => {
    assert.equal(1, reverseInteger(1000000))
  })

  it('reverses  1001001', () => {
    assert.equal(1001001, reverseInteger(1001001))
  })

  it('works with negative numbers', () => {
    assert.equal(-432, reverseInteger(-234))
  })
})
