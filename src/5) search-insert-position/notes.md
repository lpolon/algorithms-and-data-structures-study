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

## big O

the biggest intuition about O (log n) is that time increases slower as the input size increases.

## classical binary search pseudocode/ intuition

- declare your pointers
- while left pointer <= right pointer:
  - round down or up mid pointer
  - is mid pointer value equal to target value? return mid pointer (index)
  - is mid pointer smaller than target value? **It means that the target is right-ward, let's "cut" the array moving the left pointer to the right:** assing mid + 1 to the left pointer
  - else **move the right pointer to to the left**: assign mid - 1 to the right pointer
  - default: return -1
