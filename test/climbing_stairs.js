const assert = require('chai').assert
const expect = require('chai').expect
const climbStairs = require('../src/climbing_stairs.js')


describe('#balanced()', () => {
  it('has no steps', () => {
    assert.equal(0, climbStairs(0))
  })

  it('has only one step', () => {
    assert.equal(1, climbStairs(1))
  })

})
