// You are climbing a stair case. It takes n steps to reach to the top.
// Your solution will need to be optimized to run in O(n) time complexity.
//
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you
// climb to the top?

function fact(n, total=1) {
  if( n === 0 )
    return total

  return fact(n-1, total*n)
}

function permute(args) {
  let d = args.reduce((acc, v) => {
    return acc *= fact(v)
  }, 1)
  let n = args.reduce((acc, v) => {
    return acc+=v
  }, 0)
  return fact(n) / d
}

function climbStairs(n) {
  if( n<=3 ) return n
  let ways = 0
  let ones = n
  let twos = 0

  while(ones >= 0) {
    ways += permute([ones, twos])
    ones -= 2
    twos ++
  }

  return ways
}

module.exports = climbStairs
