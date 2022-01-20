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
    if (index < 0 || index >= this.length) return null;

    let cur = this.head;
    let curIndex = 0;

    while (curIndex !== index) {
      cur = cur?.next ?? null;
      curIndex += 1;
    }
    return cur;
  }

  get(index: number): number {
    const foundNode = this.getNode(index);
    return foundNode ? foundNode.val : -1;
  }

  addAtHead(val: number): void {
    const node = new MyListNode(val);
    if (!this.length) this.tail = node;
    node.next = this.head;
    this.head = node;
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
  // deleteAtIndex(index: number): void {
  //   let cur = this.head;
  //   let i = 0;
  //   while (i < index - 1) {
  //     i += 1;
  //     cur = cur?.next ?? null;
  //   }

  //   if (i === 0) {
  //     this.head = this.head?.next ?? null;
  //   }

  //   if (cur?.next) {
  //     cur.next = cur.next.next;
  //   }
  // }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.length) return;
    if (index === 0) this.head = this?.head?.next ?? null;
    else {
      const pre = this.getNode(index - 1);
      if (pre?.next) {
        pre.next = pre.next.next;
      } else {
        this.tail = pre;
      }
    }
    this.length--;
  }
}
