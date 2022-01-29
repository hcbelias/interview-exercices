/**
 * Find the length of the longest substring without repeating characters.
 * @param {string} s - string consists of English letters, digits, symbols and spaces.
 */
export default function lengthOfLongestSubstring(s) {
  const hashMap = {}
  let foundConflict = false
  let maxLength = 0

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i)

    if (typeof hashMap[char] !== 'undefined') {
      const length = i - hashMap[char]
      foundConflict = true
      if (length > maxLength) {
        maxLength = length
      }
    } else {
      maxLength++
    }
    hashMap[char] = i
  }
  return foundConflict ? maxLength : s.length
}
