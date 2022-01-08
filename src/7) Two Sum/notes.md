# unguided attempt:

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

naive approach: for each number, iterate the array and check if it matches target. O(n^2). Not the point of this exercise;

could a hashtable help me?
first pass: create a Map<diff_to_target: index>
second pass: is current number equals diff to target? therefore the answer is [current number, index of diff_to_target]

complexity analysis:
time complexity:
two iterations => 2n => O(n)

space complexity:
Map size increases with array length => n => O(n)
