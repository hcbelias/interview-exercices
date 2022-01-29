/**
 * Find the length of the longest substring without repeating characters.
 * @param {string} s - string consists of English letters, digits, symbols and spaces.
 * @return {number} length of the longest substring
 */
export default function lengthOfLongestSubstring(s) {
  const hashMap = {}
  const substring = []
  let maxLength = 0
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i)

    substring.push(char)
    if (typeof hashMap[char] !== 'undefined') {
      const removedSubstring = substring.splice(0, substring.indexOf(char) + 1)
      for (let j = 0; j < removedSubstring.length; j++) {
        const iterator = removedSubstring[j]
        delete hashMap[iterator]
      }
    }
    if (substring.length > maxLength) {
      maxLength = substring.length
    }

    hashMap[char] = i
  }

  return maxLength
}
