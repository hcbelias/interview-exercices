const numberOfInputs = '44'
const testArray =
  '68 35 1 70 25 79 59 63 65 6 46 82 28 62 92 96 43 28 37 92 5 3 54 93 83 22 17 19 96 48 27 72 39 70 13 68 100 36 95 4 12 23 34 74'

export default {
  n: parseInt(numberOfInputs),
  arr: testArray.split(' ').map((item) => parseInt(item))
}
