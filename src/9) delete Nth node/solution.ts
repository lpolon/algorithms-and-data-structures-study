// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
/*
edge cases:
n = 0
delete last node

n = length - 1;
delete first node;

assumptions:
always at least size one

our constraints:
only access to the head.
*/

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  /*
find the node to delete.
second pass: delete it
*/
  let foundNode: ListNode;
  let llLength = 1

  let currNode = head;

  while (currNode !== null) {
    llLength += 1;
  }
  /*
  1 -> 2 -> 3 -> 4 -> 5 -> 6
  currN = 6;
  n = 3

  6 = 3 ? // 6 - 3 = 3
  5 = 3 ? // 5 - 3 = 2
  4 = 3 ? // 4 - 3 = 1
  3 = 3 => ok

  currN - n = 0
  */

  let currN = llLength;
  let prev = head;
  while (head !== null) {

    if (currN === n) {
      if (prev?.next) {
        prev.next = prev.next.next
      }
    }
    prev = head;
    head = head.next;
    currN -= 1;
  }



  return head;
}
