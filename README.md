# Algorithms & Data structures with JS study

annotations and exercises from [code drip's interviewespresso.com](https://interviewespresso.com/).

## overview

contextualized leetcode problems.

what's in the course?

learn patterns: tools to learn how to apply: hash table, recursion, pointer traversal.

problem-solving process:

- problem definition
  - from leetcode
- input/output
  - IOEA: inputs, outputs, edge cases & assumptions of each problem.
- Pseudo-code
  - at this point, try as much as possible!
- gabarito
- big O efficiency

## big O

### what and why?

goal: to be able to estimate big O and your thought process to do it for each algorithm.
breaking out the algo and explaining step by step what you think your big O might be is more important than nailing it by knowing by heart or without explanation.
Space is related to memory: extra variables and data structures required for the algo.

it is important so we can compare and benchmark different algorithms.

time complexity of an algorithm: **How time to execute scales with input size**.

### how?

some examples:
.length() takes 1s to read a input if 3, 2s to read 6 and 3s to read a input of 9.

- O(n) -> linear time -> linear sclaing of time and input size.
- O(1) -> k
- (you can calculate it for space or time)
- O(n log n) linear \* log
- O(n \* n) quadratic
- O(2^n) exponential
- O(n!) factorial (worst possible. A random sort.)

each step has a time and space complexity (only the biggest value really matters)
The main question is: "how does the input size affect this specific line?"

```javascript
const length = function (arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i += 1) {
    counter++;
  }
  return counter;
};
```

line 2 (50):
time
if there is no relationship to input: O(1)
space:
assign an integer in memory. tl;dr: constant amount of space to save an integer. O(1)

loop:
line 52 runs once for each input. Linear O(n)

so: O(1) + O(n). Once again, only keep the terms of highest magnitude.

this length function is a nice clear example, because it is always exactly n. However, in many cases you have a range of outcomes, like best case (less effort) and worst case (most effort) scenario.

for instance: .indexOf('a') if 'a' is the first one: O(1) if 'a' is not in the string: O(n). Always take the worst case.

takeaways:

- every line of code has a time complexity
- every variable has a space complexity
- simplify: only keep the highest order of magnitude of the function and assume worst case.

## Linked Lists Overview

There is no built-in linked list for js.

Let's build a class to represent the linked list data structure.

### What is a linked list?

A chain of nodes.

### A note

It holds a peace of data. Usually in a `.value` property. A pointer `.next` links to the next node in the list.

The first node is the head and the last node is the tail. The tail has the null pointer (what does it means? `next = null`?).

`.next` is not giving us the value of the next node value, but the reference (a pointer pointing to a place in memory) to the next node.

so, just to be clear:

```js
const secondNodeList = new NodeList(2);
const second = head.next; // 2
second.value; // 2;
head.next.value; // 2
```

So we are saying that a linked list `.next` sets a pointer by reference. What is the alternative to reference? It would be a copy. So, like the assignment operator works for objects in js (by reference) vs. for primitive values (by copy on assignment). Therefore, since it is the default behaviour with objects, we don't have to worry about it.
