export default class ListNode {
  /**
   * Represents a ListNode.
   * @constructor
   * @param {number} val - Value in node
   * @param {ListNode} next - Next node reference
   */
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }

  setNext(next) {
    this.next = next
  }

  setVal(val) {
    this.val = val
  }
}
