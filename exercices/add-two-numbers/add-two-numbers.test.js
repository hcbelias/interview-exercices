import addTwoNumbers, { buildLinkNodeList } from './add-two-numbers'

// Wrapping into function to make easier to give maintenance in the future if the current implementation changes
const buildWrapperTestFunc = (array) => buildLinkNodeList(array)

// References
// https://jestjs.io/docs/expect#tostrictequalvalue
// Use .toStrictEqual to test that objects have the same types as well as structure.

// Differences from .toEqual:

// Keys with undefined properties are checked. e.g. {a: undefined, b: 2} does not match {b: 2} when using .toStrictEqual.
// Array sparseness is checked. e.g. [, 1] does not match [undefined, 1] when using .toStrictEqual.
// Object types are checked to be equal. e.g. A class instance with fields a and b will not equal a literal object with fields a and b.

describe('add-two-numbers', () => {
  it('Should_Return [7,0,8]_When_Passing [2,4,3] as l1 and [5,6,4] as l2', () => {
    const l1 = buildWrapperTestFunc([2, 4, 3])
    const l2 = buildWrapperTestFunc([5, 6, 4])
    const expected = buildWrapperTestFunc([7, 0, 8])
    const result = addTwoNumbers(l1, l2)

    expect(result).toStrictEqual(expected)
  })
  it('Should_Return [0]_When_Passing [0] as l1 and [0] as l2', () => {
    const l1 = buildWrapperTestFunc([0])
    const l2 = buildWrapperTestFunc([0])
    const expected = buildWrapperTestFunc([0])
    const result = addTwoNumbers(l1, l2)

    expect(result).toStrictEqual(expected)
  })
  it('Should_Return [8,9,9,9,0,0,0,1]_When_Passing [9,9,9,9,9,9,9] as l1 and [9,9,9,9] as l2', () => {
    const l1 = buildWrapperTestFunc([9, 9, 9, 9, 9, 9, 9])
    const l2 = buildWrapperTestFunc([9, 9, 9, 9])
    const expected = buildWrapperTestFunc([8, 9, 9, 9, 0, 0, 0, 1])
    const result = addTwoNumbers(l1, l2)

    expect(result).toStrictEqual(expected)
  })
})
