/**
 * Merge two arrays without using extra space
 * @param {number[]} arr1 - sorted array number 1
 * @param {number[]} arr2 - sorted array number 2
 * @param {number} n - array number 1 lenght
 * @param {number} m - array number 2 length
 */
export default function merge(arr1, arr2, n, m) {
  for (let i = 0; i < n && i < m; i++) {
    if (i < n && i < m) {
      const iteratorArray1 = arr1[i]
      const iteratorArray2 = arr2[i]

      if(iteratorArray2 < iteratorArray1){
          
      }
    }
  }
}
