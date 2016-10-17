const assert = require('chai').assert
const pathsToWork = require('../src/paths_to_work.js')

describe('pathsToWork()', () => {

  it('has no address', () => {
    assert.equal(1, pathsToWork(-1,0))
  })

  it('is very close', () => {
    assert.equal(1, pathsToWork(1,0))
  })

  it('is 2 units away', ()=>{
    assert.equal(6, pathsToWork(2, 2))
  })

  it('is 4 units away', ()=>{
    assert.equal(70, pathsToWork(4, 4))
  })
})
