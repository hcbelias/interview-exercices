/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * @param {number[]} nums1 - first number array
 * @param {number[]} nums2 - second number array
 * @return {number} returns the median between the arrays
 */
export default function findMedianSortedArrays(nums1, nums2) {
  const isEven = (num) => num % 2 === 0
  const calculateMedian = (array) => {
    if (array.length === 0) {
      return 0
    }
    const middleIndex = array.length / 2
    if (isEven(array.length)) {
      return (array[middleIndex] + array[middleIndex - 1]) / 2
    } else {
      return array[Math.floor(middleIndex)]
    }
  }

  if (nums1.length === 0) {
    return calculateMedian(nums2)
  }
  if (nums2.length === 0) {
    return calculateMedian(nums1)
  }

  return (calculateMedian(nums1) + calculateMedian(nums2)) / 2
}
