// https://leetcode.com/problems/design-linked-list/

// https://leetcode.com/explore/learn/card/linked-list/209/singly-linked-list/1290/

export class MyListNode {
  val: number;
  next: MyListNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

export class MyLinkedList {
  head: MyListNode | null;
  tail: MyListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getNode(index: number): MyListNode | null {
    let cur = this.head;
    let i = 0;

    while (cur !== null) {
      if (i === index) {
        return cur;
      }
      cur = cur.next;
      i += 1;
    }
    return null;
  }
  get(index: number): number {
    const foundNode = this.getNode(index);
    return foundNode ? foundNode.val : -1;
  }

  addAtHead(val: number): void {
    const cur = new MyListNode(val);
    if (this.length === 0) this.tail = cur;
    cur.next = this.head;
    this.head = cur;
    this.length += 1;
  }

  addAtTail(val: number): void {
    const node = new MyListNode(val);
    let cur = this.head;
    if (cur === null) {
      this.head = node;
      this.tail = node;
      this.length += 1;
      return;
    }

    let prev: MyListNode | null = null;
    while (cur !== null) {
      prev = cur;
      cur = cur.next;
    }

    if (!prev) {
      return;
    }

    prev.next = node;
    this.tail = node;
    this.length += 1;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.length) return;
    this.length += 1;
    if (index === 0) {
      this.addAtHead(val);
      return;
    }
    if (index === this.length) {
      return this.addAtTail(val);
    }
    const prev = this.getNode(index - 1);
    const node = new MyListNode(val);

    if (!prev) {
      return;
    }
    node.next = prev.next;
    prev.next = node;
  }

  // broken somewhere
  deleteAtIndex(index: number): void {
    let cur = this.head;
    let i = 0;
    let prev: MyListNode | null = null;

    if (index === 0) this.head = this.head?.next ?? null;

    while (cur !== null) {
      prev = cur;
      cur = cur.next;
      if (i === index) {
        prev.next = prev.next?.next ?? null;
        this.length -= 1;
        return;
      }
      i += 1;
    }
  }
}
