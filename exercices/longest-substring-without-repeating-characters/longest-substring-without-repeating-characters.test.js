import lengthOfLongestSubstring from './longest-substring-without-repeating-characters'

describe('longest-substring-without-repeating-characteres', () => {
  it('Should_Return 3_When_Passing "abcabcbb" as s', () => {
    const s = 'abcabcbb'
    const result = lengthOfLongestSubstring(s)
    const expected = 3

    expect(result).toBe(expected)
  })
  it('Should_Return 1_When_Passing "bbbbb" as s', () => {
    const s = 'bbbbb'
    const result = lengthOfLongestSubstring(s)
    const expected = 1

    expect(result).toBe(expected)
  })
  it('Should_Return 3_When_Passing "pwwkew" as s', () => {
    const s = 'pwwkew'
    const result = lengthOfLongestSubstring(s)
    const expected = 3

    expect(result).toBe(expected)
  })
  it('Should_Return 1_When_Passing " " as s', () => {
    const s = ' '
    const result = lengthOfLongestSubstring(s)
    const expected = 1

    expect(result).toBe(expected)
  })
  it('Should_Return 2_When_Passing "au" as s', () => {
    const s = 'au'
    const result = lengthOfLongestSubstring(s)
    const expected = 2

    expect(result).toBe(expected)
  })
  it('Should_Return 2_When_Passing "aab" as s', () => {
    const s = 'aab'
    const result = lengthOfLongestSubstring(s)
    const expected = 2

    expect(result).toBe(expected)
  })
  it('Should_Return 3_When_Passing "dvdf" as s', () => {
    const s = 'dvdf'
    const result = lengthOfLongestSubstring(s)
    const expected = 3

    expect(result).toBe(expected)
  })
  it('Should_Return 2_When_Passing "abba" as s', () => {
    const s = 'abba'
    const result = lengthOfLongestSubstring(s)
    const expected = 2

    expect(result).toBe(expected)
  })
  it('Should_Return 6_When_Passing "wobgrovw" as s', () => {
    const s = 'wobgrovw'
    const result = lengthOfLongestSubstring(s)
    const expected = 6

    expect(result).toBe(expected)
  })
})
