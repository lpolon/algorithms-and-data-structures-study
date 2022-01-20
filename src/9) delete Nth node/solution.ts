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
  let cur = head;
  let length = 1;
  while (cur !== null) {
    length += 1;
    cur = cur.next;
  }

  let leftIndex = length - n - 1;

  if (leftIndex === 0) {
    return head?.next ?? null;
  }
  cur = head;
  while (
    // cool but don't
    // leftIndex -- > 1
    leftIndex > 1
  ) {
    leftIndex -= 1;
    cur = cur?.next ?? null;
  }

  if (cur?.next) {
    cur.next = cur.next.next;
  }

  return head;
}

/*
time complexity:
two loops in sequence.
n * n = 2n => O(n)

space complexity:
three pointers.
3 => O(1)
*/
