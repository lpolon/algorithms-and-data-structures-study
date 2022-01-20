import { MyLinkedList, MyListNode } from './solution';

describe('my List Node', () => {
  it('should be instantiated with expected value and next value', () => {
    const expectedValue = 20;
    const node = new MyListNode(expectedValue);
    expect(node.val).toEqual(expectedValue);
    expect(node.next).toEqual(null);
  });
});

describe('My linked list', () => {
  describe('addAtHead method', () => {
    it('should properly add one element as head', () => {
      const linkedList = new MyLinkedList();
      linkedList.addAtHead(2);
      logArr(linkedList.head);
      console.log(linkedList.head);
      expect(linkedList.length).toEqual(1);
      expect(linkedList.tail).toStrictEqual(linkedList.head);
      expect(linkedList.head).toMatchInlineSnapshot(`
        MyListNode {
          "next": null,
          "val": 2,
        }
      `);
    });
    it('should properly add a third element from head', () => {
      const linkedList = new MyLinkedList();
      linkedList.addAtHead(10);
      linkedList.addAtHead(1);
      linkedList.addAtHead(123);
      expect(linkedList.length).toEqual(3);
      expect(linkedList.head?.val).toStrictEqual(123);
      expect(linkedList.head?.next?.val).toStrictEqual(1);
      expect(linkedList.head?.next?.next?.val).toStrictEqual(10);
      expect(linkedList.head?.next?.next?.next).toStrictEqual(null);
      expect(linkedList.tail).toStrictEqual(linkedList.head?.next?.next);
      expect(linkedList).toMatchInlineSnapshot(`
        MyLinkedList {
          "head": MyListNode {
            "next": MyListNode {
              "next": MyListNode {
                "next": null,
                "val": 10,
              },
              "val": 1,
            },
            "val": 123,
          },
          "length": 3,
          "tail": MyListNode {
            "next": null,
            "val": 10,
          },
        }
      `);
    });
  });
  describe('addAtTail method', () => {
    it('should properly add one element as tail', () => {
      const linkedList = new MyLinkedList();
      linkedList.addAtTail(10);
      expect(linkedList.length).toEqual(1);
      expect(linkedList.head).toStrictEqual(linkedList.tail);
      // expect(linkedList.head).toMatchInlineSnapshot();
    });
    it('should properly add a third element from tail', () => {
      const linkedList = new MyLinkedList();
      linkedList.addAtTail(1);
      linkedList.addAtTail(2);
      linkedList.addAtTail(3);

      expect(linkedList.length).toEqual(3);
      expect(linkedList.tail?.val).toStrictEqual(3);
      expect(linkedList.tail?.next).toEqual(null);
      expect(linkedList.tail).toStrictEqual(linkedList.head?.next?.next);

      expect(linkedList.head?.val).toStrictEqual(1);
      expect(linkedList.head?.next?.val).toStrictEqual(2);
      expect(linkedList.head?.next?.next?.val).toStrictEqual(3);

      expect(linkedList).toMatchInlineSnapshot(`
        MyLinkedList {
          "head": MyListNode {
            "next": MyListNode {
              "next": MyListNode {
                "next": null,
                "val": 3,
              },
              "val": 2,
            },
            "val": 1,
          },
          "length": 3,
          "tail": MyListNode {
            "next": null,
            "val": 3,
          },
        }
      `);
    });
  });
  describe('getNode method', () => {
    let linkedList: MyLinkedList;

    beforeEach(() => {
      linkedList = new MyLinkedList();
      linkedList.addAtTail(1);
      linkedList.addAtTail(2);
      linkedList.addAtTail(3);
    });

    it('should return expected head', () => {
      const head = linkedList.getNode(0);
      expect(head).toStrictEqual(linkedList.head);
    });
    it('should return expected tail', () => {
      const tail = linkedList.getNode(2);
      expect(tail).toStrictEqual(linkedList.tail);
    });
    it('should return expected nth valid node', () => {
      const node = linkedList.getNode(1);
      expect(linkedList.tail).toStrictEqual(node?.next);
      expect(linkedList.head?.next).toStrictEqual(node);
    });
    it('should return null for invalid index', () => {
      const node = linkedList.getNode(3);
      expect(node).toEqual(null);
    });
  });
  describe('get method', () => {
    let linkedList: MyLinkedList;

    beforeEach(() => {
      linkedList = new MyLinkedList();
      linkedList.addAtTail(1);
      linkedList.addAtTail(2);
      linkedList.addAtTail(3);
    });

    it('should return expected head', () => {
      const headVal = linkedList.get(0);
      expect(headVal).toEqual(linkedList.head?.val);
    });
    it('should return expected tail', () => {
      const tailVal = linkedList.get(2);
      expect(tailVal).toEqual(linkedList.tail?.val);
    });
    it('should return expected nth valid node', () => {
      const nodeVal = linkedList.get(1);
      expect(linkedList.head?.next?.val).toEqual(nodeVal);
    });
    it('should return null for invalid index', () => {
      const nodeVal = linkedList.get(3);
      expect(nodeVal).toEqual(-1);
    });
  });

  it.skip('leetcode example', () => {
    const ll = new MyLinkedList();
    ll.addAtHead(2);
    logArr(ll.head);
    ll.deleteAtIndex(1);
    logArr(ll.head);
    ll.addAtHead(2);
    logArr(ll.head);
    ll.addAtHead(7);
    logArr(ll.head);
    ll.addAtHead(3);
    logArr(ll.head);
    ll.addAtHead(2);
    logArr(ll.head);
    ll.addAtHead(5);
    logArr(ll.head);
    ll.addAtTail(5);
    logArr(ll.head);
    const output = ll.get(5);
    console.log('should be 2:', output);
  });
});

function logArr(head: any) {
  let cur = head;
  const arr = [];
  while (cur !== null) {
    arr.push(cur?.val);
    cur = cur.next;
  }
  console.log('oioi', arr);
}
