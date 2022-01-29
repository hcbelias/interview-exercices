/**
 * Find the length of the longest substring without repeating characters.
 * @param {string} s - string consists of English letters, digits, symbols and spaces.
 */
export default function lengthOfLongestSubstring(s) {
  const hashMap = {}
  let foundConflict = false
  let maxLength = 0
  let currentLength = 0
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i)

    if (typeof hashMap[char] !== 'undefined') {
      foundConflict = true
      if (currentLength > maxLength) {
        maxLength = currentLength
      }

      currentLength = i - hashMap[char]
    } else {
      currentLength++
    }
    hashMap[char] = i
  }

  if (currentLength > maxLength) {
    maxLength = currentLength
  }
  return foundConflict ? maxLength : s.length
}
