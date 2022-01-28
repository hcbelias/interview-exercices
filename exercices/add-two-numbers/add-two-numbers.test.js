import addTwoNumbers, { buildLinkNodeList } from './add-two-numbers'

describe('add-two-numbers', () => {
  describe('add-two-numbers function', () => {
    it.only('Should_Return [7,0,8]_When_Passing [2,4,3] as l1 and [5,6,4] as l2', () => {
      // TODO: convert array in LinkedNode structure
      const l1 = buildLinkNodeList([2, 4, 3])
      const l2 = buildLinkNodeList([5, 6, 4])
      const expected = buildLinkNodeList([7, 0, 8])
      // need to review due to ref comparison
      expect(addTwoNumbers(l1, l2)).toBe(expected)
    })
    it('Should_Return [0]_When_Passing [0] as l1 and [0] as l2', () => {
      // TODO: convert array in LinkedNode structure
      const l1 = buildLinkNodeList([0])
      const l2 = buildLinkNodeList([0])
      const expected = buildLinkNodeList([0])
      // need to review due to ref comparison
      expect(addTwoNumbers(l1, l2)).toBe(expected)
    })
    it('Should_Return [8,9,9,9,0,0,0,1]_When_Passing [9,9,9,9,9,9,9] as l1 and [9,9,9,9] as l2', () => {
      // TODO: convert array in LinkedNode structure
      const l1 = buildLinkNodeList([9, 9, 9, 9, 9, 9, 9])
      const l2 = buildLinkNodeList([9, 9, 9, 9])
      const expected = buildLinkNodeList([8, 9, 9, 9, 0, 0, 0, 1])
      // need to review due to ref comparison
      expect(addTwoNumbers(l1, l2)).toBe(expected)
    })
  })
})
