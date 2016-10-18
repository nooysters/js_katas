const assert = require('chai').assert
const expect = require('chai').expect
const climbStairs = require('../src/climbing_stairs.js')


describe('climbStairs()', () => {

  it('has no steps', () => {
    assert.equal(0, climbStairs(0))
  })

  it('has only one step', () => {
    assert.equal(1, climbStairs(1))
  })

  it('has 2 steps', () => {
    assert.equal(2, climbStairs(2))
  })

  it('has 3 steps', () => {
    assert.equal(3, climbStairs(3))
  })

  it('has 5 steps', () => {
    assert.equal(8, climbStairs(5))
  })

  it('has 10 steps', () => {
    assert.equal(89, climbStairs(10))
  })
})
