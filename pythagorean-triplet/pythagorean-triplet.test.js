import checkTriplet from './pythagorean-triplet'

describe('pythagorean-triplet', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(checkTriplet(1, 2)).toBe(3)
  })
})
