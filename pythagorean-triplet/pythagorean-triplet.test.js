import checkTriplet from './pythagorean-triplet'
import TestCaseOne from './test-cases/test-case-1'

describe('pythagorean-triplet', () => {
  it('Should_Return true_When_Passing [3,2,4,6,5]', () => {
    expect(checkTriplet([3, 2, 4, 6, 5], 5)).toBe(true)
  })
  it('Should_Return false_When_Passing [3,8,5]', () => {
    expect(checkTriplet([3, 8, 5], 3)).toBe(false)
  })
  it('Should_Return true_When_Passing TestCaseOne', () => {
    const { arr, n } = TestCaseOne
    expect(checkTriplet(arr, n)).toBe(true)
  })
})
