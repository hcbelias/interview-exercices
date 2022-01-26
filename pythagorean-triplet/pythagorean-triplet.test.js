import checkTriplet from './pythagorean-triplet'

import TestCaseOne from './test-cases/test-case-1';

describe('pythagorean-triplet', () => {
  it('[3, 2, 4, 6, 5] has a pythagorean triplet', () => {
    expect(checkTriplet([3, 2, 4, 6, 5], 5)).toBe(true)
  })
  it('TestCaseOne has a pythagorean triplet', () => {
    expect(checkTriplet(TestCaseOne.arr, TestCaseOne.arr)).toBe(true)
  })
})
