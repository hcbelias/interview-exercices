import checkTriplet from './pythagorean-triplet'

describe('pythagorean-triplet', () => {
  test('[3, 2, 4, 6, 5] has a pythagorean triplet', () => {
    expect(checkTriplet([3, 2, 4, 6, 5], 5)).toBe(true)
  })
})
