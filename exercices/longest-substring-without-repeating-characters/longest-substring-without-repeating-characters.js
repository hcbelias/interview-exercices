/**
 * Find the length of the longest substring without repeating characters.
 * @param {string} s - string consists of English letters, digits, symbols and spaces.
 * @return {number} length of the longest substring
 */
export default function lengthOfLongestSubstring(s) {
  let hashMap = {}
  let maxLength = 0
  let currentLength = 0
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i)

    if (typeof hashMap[char] !== 'undefined') {
      currentLength = i - hashMap[char]
      // if conflict is the previous letter, we need to reset the whole counter
      if (hashMap[char] === i - 1) {
        hashMap = {}
      }
    } else {
      currentLength++
    }
    if (currentLength > maxLength) {
      maxLength = currentLength
    }
    hashMap[char] = i
  }

  return maxLength
}
