export default function checkTriplet(arr, n) {
  const squareMapperResult = {}

  for (let i = 0; i < n; i++) {
    const squareValue = Math.pow(arr[i], 2)
    if (typeof squareMapperResult[squareValue] === 'undefined') {
      squareMapperResult[squareValue] = [i]
    } else {
      squareMapperResult.push(squareValue)
    }
  }

  for (let i = 0; i < n - 2; i++) {
    const squareValueOne = Math.pow(arr[i], 2)
    for (let j = i + 1; j < n; j++) {
      const squareValueTwo = Math.pow(arr[j], 2)
      const squareSum = squareValueOne + squareValueTwo

      if (typeof squareMapperResult[squareSum] !== 'undefined') {
        return true
      }
    }
  }

  return false
}
