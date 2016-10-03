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

  for (var i=0; i<str.length; i++) {
    if (~open.indexOf(str[i])) {
      searchFor.push(str[i])
      break
    }

    if (searchFor[searchFor.length - 1] === open[closed.indexOf(str[i])]) {
      searchFor.pop()
    }
    else { return false }
  }

  return true
}
