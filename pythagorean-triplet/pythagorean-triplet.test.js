import checkTriplet from './pythagorean-triplet'

import TestCaseOne from './test-cases/test-case-1'

describe('pythagorean-triplet', () => {
  it('Should [3, 2, 4, 6, 5] expect to return true', () => {
    expect(checkTriplet([3, 2, 4, 6, 5], 5)).toBe(true)
  })
  it('Should [3, 8, 5] expect to return false', () => {
    expect(checkTriplet([3, 8, 5], 3)).toBe(false)
  })
  it.only('TestCaseOne has a pythagorean triplet', () => {
    expect(checkTriplet(TestCaseOne.arr, TestCaseOne.n)).toBe(true)
  })
})
