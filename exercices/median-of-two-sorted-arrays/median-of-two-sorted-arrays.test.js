import findMedianSortedArrays from './median-of-two-sorted-arrays'

describe('median-of-two-sorted-arrays', () => {
  it('Should_Return 2_When_Passing [1,3] as nums1 and [2] as nums2', () => {
    const nums1 = [1, 3]
    const nums2 = [2]
    const expected = 2
    const result = findMedianSortedArrays(nums1, nums2)

    expect(result).toStrictEqual(expected)
  })
  it('Should_Return 2.5_When_Passing [1,2] as nums1 and [3,4] as nums2', () => {
    const nums1 = [1, 2]
    const nums2 = [3, 4]
    const expected = 2.5
    const result = findMedianSortedArrays(nums1, nums2)

    expect(result).toStrictEqual(expected)
  })
  it('Should_Return 1_When_Passing [] as nums1 and [1] as nums2', () => {
    const nums1 = []
    const nums2 = [1]
    const expected = 1
    const result = findMedianSortedArrays(nums1, nums2)

    expect(result).toStrictEqual(expected)
  })
})
