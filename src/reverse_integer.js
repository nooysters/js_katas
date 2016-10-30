function reverseInteger(int) {
  let ex = Math.floor(Math.log10(int))
  let reversed = 0

  while(int) {
    let b = int % 10
    reversed += b * Math.pow(10, ex)

    int = (int - b) / 10
    ex --
  }
  return reversed
}

module.exports = reverseInteger
