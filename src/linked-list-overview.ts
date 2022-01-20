interface ListNode {
  value: number;
  next: ListNode | null;
}

class ListNode implements ListNode {
  constructor(value: number, next = null) {
    this.value = value;
    this.next = next;
  }
}

const node = new ListNode(1);
// a new, independent node connect by the head only by the pointer referencing it.
node.next = new ListNode(2);

console.log(node);
console.log(node.next);
