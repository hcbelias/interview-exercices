
export default function checkTriplet(arr, n) {
  if (n < 3) {
    return false
  }
  // creating a sorted array with squared values
  const squareResults = arr.map(item => Math.pow(item, 2)).sort((a, b) => a - b)

  // Considering a > b > c
  let a = squareResults.length - 1 // a from pythagorean triplet formula, starting from last array element
  const hypotenuseSquareValue = Math.pow(arr[a], 2)
  /***************
        [1, 4, 9, 16, 25, 36, 49, 64, 81]
        ^              ^               ^
    leftIndex      rightIndex          a
  ***************/

  let leftIndex = 0 // c candidate from pythagorean triplet formula
  let rightIndex = a - 1 // b candidade from pythagorean triplet formula

  // we need to check while a is in third position in array
  while (a > 1) {
    const leftSideValue = Math.pow(arr[leftIndex], 2)
    const rightSideValue = Math.pow(arr[rightIndex], 2)
    const sideSquareSumValue = leftSideValue + rightSideValue
    if (sideSquareSumValue < hypotenuseSquareValue) {
      leftIndex++
    } else if (sideSquareSumValue > hypotenuseSquareValue) {
      rightIndex--
    } else {
      // matched conditions
      return true
    }

    // Indexes matches without finding candidate, we should look for another hypotenuse value
    if (leftIndex === rightIndex) {
      a--
      leftIndex = 0
      rightIndex = a - 1
    }
  }

  return false
}
