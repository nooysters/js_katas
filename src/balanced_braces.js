//  Given a string, determine if the bracket characters are balanced.
//
//  ex:
//  '{}' => true
//  'hi{this is (your) <birthday>}' => true
//  ')[super]' => false
//  ')))((([]' => false
//
var _ = require('lodash/core');

const open = '[{(<'
const closed = ']})>'

module.exports = (str) => {
  if (str === undefined) throw 'Must pass a string.'
  let chars = open+closed
  // remove non brackt type characters
  str = _.filter(str, (i)=> { return ~chars.indexOf(i) })
  // fail if bracketing characters filtered string is odd
  if(str.length % 2 === 1) return false

  let searchFor = [];
  let balanced = true

  str.forEach((s) => {
    if (~open.indexOf(s)) {
      searchFor.push(s)
      return
    }

    if (searchFor[searchFor.length - 1] === open[closed.indexOf(s)]) {
      searchFor.pop()
    }
    else { balanced = false }
  })

  return balanced
}
