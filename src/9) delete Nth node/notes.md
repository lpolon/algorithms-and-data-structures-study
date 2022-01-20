there are multiple ways of removing nodes from a linked list.


1)
1 -> 2 -> 3
head.next = null;
drops everything but the head.

most the the time, we will need to "point around" a single node:
2)
1 -> 2 -> 3
"next chaining"
head.next = head.next.next
1 -> 3;

what about a specific node?
3)
1 -> 2 -> 3;
head is the node with value 1;

"nth from end" we want to count from right to left.
n = 0 => delete the tail

edg
