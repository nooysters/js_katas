var _ = require('lodash/core');

const open = '[{('
const closed = ']})'

module.exports = (str) => {
  if (!str) return false
  str = str.split('')

  let chars = open+closed

  str = _.filter(str, (i)=> { return ~chars.indexOf(i) })

  if(str.length % 2 != 0) return false

  let current_search = [];
  let balanced = true

  str.forEach((s) => {
    if (~open.indexOf(s)) current_search.push(s)

    if(~closed.indexOf(s)) {
      if(current_search[current_search.length - 1] === open[closed.indexOf(s)]) {
        current_search.pop()
      }
      else {
        balanced = false
      }
    }
  })

  return balanced
}
