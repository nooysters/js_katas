var _ = require('lodash/core');
const chars = [
  '[]',
  '{}',
  '()'
]

module.exports = (str) => {
  if (!str) return false
  var balanced = false

  str = str.split('')
  str = _.filter(str, (i)=>{
    return ~chars.join('').indexOf(i)
  })

  if(str.length % 2 != 0) return false

  chars.forEach( (c) => {
    if(c === str.join('')) balanced = true
  })

  // regex, recursion ??
  return balanced
}
