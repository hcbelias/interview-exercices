/**
 * Find the length of the longest substring without repeating characters.
 * @param {string} s - string consists of English letters, digits, symbols and spaces.
 */
export default function lengthOfLongestSubstring(s) {
  const hashMap = {}
  const charArray = s.split('')
  let maxLength = 0

  charArray.forEach((char, index) => {
    if (typeof hashMap[char] !== 'undefined') {
      const length = index - hashMap[char]
      if (length > maxLength) {
        maxLength = length
      }
    }
    hashMap[char] = index
  })

  return maxLength
}
