import merge from './merge-without-extra-space'

describe('merge-without-extra-space', () => {
  it.only('Should_Return arr1 as [0,1,2,3] and arr2 as [5,6,7,8,9]_When_Passing [1,3,5,7] as arr1 and [0,2,6,8,9] as arr2', () => {
    const n = 4
    const arr1 = [1, 3, 5, 7]
    const m = 5
    const arr2 = [0, 2, 6, 8, 9]

    merge(arr1, arr2, n, m)

    const expectedArr1 = [0, 1, 2, 3]
    const expectedArr2 = [5, 6, 7, 8, 9]

    expect(arr1).toStrictEqual(expectedArr1)
    expect(arr2).toStrictEqual(expectedArr2)
  })
  it('Should_Return arr1 as [5, 10] and arr2 as [12, 18, 20]_When_Passing [10, 12] as arr1 and [5, 18, 20] as arr2', () => {
    const n = 2
    const arr1 = [10, 12]
    const m = 3
    const arr2 = [5, 18, 20]

    merge(arr1, arr2, n, m)

    const expectedArr1 = [5, 10]
    const expectedArr2 = [12, 18, 20]

    expect(arr1).toStrictEqual(expectedArr1)
    expect(arr2).toStrictEqual(expectedArr2)
  })
})
