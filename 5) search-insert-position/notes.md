# unguided attempt

## leetcode enum:
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

## pseudocode:
- if current value is equal the target, return current element index
- if current value is bigger than target, return current element index
Done!

# Aaron's explanation:
- most important algorithm you can know when going to the a programing interview.
- we will use binary search: search through a sorted array in O(log n) time.

assumptions: no empty inputs.
no duplicates in input array

i did the naive solution: o(n)

## binary search algorithm pseudo-code:
- two pointers scan left to right (low) and right to left (high).
- "cut array in half" --> a mid pointer is used to determine in which half the value we're looking for would be in.
```js
target = 5
const arr = [1, 3, 5, 7]
let low = 0
let high = 4
let mid = Math.floor((high + low) / 2) // 3
// is mid > target ?
// No. False
// move to the right:
mid + 1
// move to the left:
mid - 1
// repeat mid, check if equals to target, repeat

// what if element is not in the array? typical binary search would return -1
target = 2
```
## big O
the biggest intuition about O (log n) is that time increases slower as the input size increases.