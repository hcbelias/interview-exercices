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
  const nodeListResult = new ListNode(0, null)
  let carryIterator = 0
  let nextSumIterator = 0
  let currentListNode = nodeListResult
  let previousListNode = null
  const createNextListNode = (val) =>
    typeof val === 'undefined' ? null : new ListNode(val, null)
  while (l1.next || l2.next) {
    const valuesSum = l1.val + l2.val + (currentListNode?.val || 0)
    carryIterator = valuesSum % 10
    nextSumIterator = Math.floor(valuesSum / 10)

    if (currentListNode) {
      currentListNode.setVal(carryIterator)
    } else {
      currentListNode = createNextListNode(carryIterator)
    }

    if (previousListNode) {
      previousListNode.setNext(currentListNode)
    }
    if (nextSumIterator) {
      currentListNode.setNext(createNextListNode(nextSumIterator))
    }

    previousListNode = currentListNode
    currentListNode = currentListNode.next
    l1 = l1?.next
    l2 = l2?.next
  }


  return nodeListResult
}
