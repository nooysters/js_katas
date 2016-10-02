const assert = require('chai').assert
const should = require('chai').should()
const balanced = require('../src/balanced_braces.js')

describe('Array', () => {
  describe('#balanced()', () => {
    it('returns false if no string is given', () => {
      assert.equal(false, balanced());
    })

    it('returns false if there is an odd number of brackets', ()=>{
      assert.equal(false, balanced(']') )
      assert.equal(false, balanced('4()3()90n{fdg[OOOHHH]^&') )
    })

    it('returns true if string is a closed pair', ()=> {
      assert.equal(true, balanced('{}') )
      assert.equal(true, balanced('()') )
      assert.equal(true, balanced('[]') )
    })

    it(`returns true if string is a closed pair with extra non
      bracket type characters`, () => {
        assert.equal(true, balanced('{d}') )
        assert.equal(true, balanced('we()e') )
        assert.equal(false, balanced('43_!fdgOOOHHH]^&') )
    })

    it(`returns true if there are multiple sets of brackets`, () => {
        assert.equal(true, balanced('{}()[]{}') )
        assert.equal(true, balanced('w()e[]{}') )
        assert.equal(true, balanced('4()3()90n{}{}fdg[OOOHHH]^&') )
    })

    it(`returns false if the brackets are not in the proper order`, () => {
        assert.equal(false, balanced('))))[](((('))
    })
  });
});
