import lengthOfLongestSubstring from './longest-substring-without-repeating-characters'

describe('longest-substring-without-repeating-characteres', () => {
  it('Should_Return 3_When_Passing "abcabcbb" as s', () => {
    const s = 'abcabcbb'
    const result = lengthOfLongestSubstring(s)
    const expected = 3

    expect(result).toStrictEqual(expected)
  })
  it('Should_Return 1_When_Passing "bbbbb" as s', () => {
    const s = 'bbbbb'
    const result = lengthOfLongestSubstring(s)
    const expected = 1

    expect(result).toStrictEqual(expected)
  })
  it('Should_Return 3_When_Passing "pwwkew" as s', () => {
    const s = 'pwwkew'
    const result = lengthOfLongestSubstring(s)
    const expected = 3

    expect(result).toStrictEqual(expected)
  })
})
