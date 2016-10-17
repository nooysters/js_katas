// Paths to work You live at (0,0) coordinate on a map, and your work is located at
// e units east and s units south from where you live. Assuming that you can only
// travel east and south, return the number of possible unique paths to take to
// work.
//
// Try utilizing some kind of lookup table or memoization to optimize the time
// complexity.

function pathsToWork(x, y) {
  if(!x || !y) return 1
  var map = Array(x+1).fill().map( ()=>{ return Array(y+1).fill(0) } )
  var routes = 0
  map[x][y] = 1 // sets work

  let searchRoute = (s, e) => {
    if( !map[s] ) return
    if( map[s][e] === 1 || s === x || e === y ) {
      return routes ++
    }
    if( map[s][e] === 0 ) {
      searchRoute(s+1, e)
      searchRoute(s, e+1)
    }
  }
  searchRoute(0, 0)

  return routes
}

module.exports = pathsToWork
