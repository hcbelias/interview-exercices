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

    iterator.next = nodeListArray[i + 1]
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
  let currentNode = nodeListResult
  let carry = 0
  const createNextListNode = (val) =>
    typeof val === 'undefined' ? null : new ListNode(val, null)
  while (l1 || l2) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry
    carry = Math.floor(sum / 10)
    currentNode.next = createNextListNode(sum % 10)
    currentNode = currentNode.next

    l1 = l1?.next
    l2 = l2?.next
  }

  if (carry > 0) {
    currentNode.next = createNextListNode(carry)
  }

  // as we are using dummy head, we return next
  return nodeListResult.next || createNextListNode(0)
}
