import ListNode from './list-node'

/**
 * Auxiliary function that convert JS array structure into ListNode structure
 * @param {array} array numbers in array format
 * @return {ListNode} Head node
 */
export function buildLinkNodeList(array) {
  const nodeListArray = []

  for (let i = 0; i < array.length; i++) {
    const listNode = new ListNode(array[i], null)

    nodeListArray.push(listNode)
  }

  for (let i = 0; i < nodeListArray.length - 1; i++) {
    const iterator = nodeListArray[i]

    iterator.setNext(nodeListArray[i + 1])
  }

  return nodeListArray.length ? nodeListArray[0] : null
}

/**
 *
 * @param {ListNode} l1 First number to be added in ListNode structure
 * @param {ListNode} l2 Second number to be added in ListNode structure
 * @return {ListNode} Result from the sum between two number in ListNode structure
 */
export default function addTwoNumbers(l1, l2) {
  let nodeListResult = null
  let carryIterator = 0
  let nextSumIterator = 0

  const createNextListNode = sum => nextSumIterator ? new ListNode(nextSumIterator, null) : null
  while (l1.next || l2.next) {
    const valuesSum = l1.val + l2.val
    carryIterator = valuesSum % 10
    nextSumIterator = valuesSum / 10

    if(nodeListResult){
      if(nodeListResult.next){

      }else{
        nodeListResult.next 
      }

    }else{
      nodeListResult = new ListNode(carryIterator, createNextListNode(nextSumIterator))
    }


    l1 = l1.next
    l2 = l2.next
  }

  return nodeListResult
}
