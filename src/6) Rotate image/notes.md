Matriz.

usually problems of transforming or traversal.

# unguided attempt

## leetcoed enum:

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

so, rotating 90 degrees could be described as setting each row as reversed column

# tutor's guidance:

- there is no just one rule to rotate 90 deg. The main challenge is to find a pattern of how to do it.

- we can do it appling two rules in sequence:
  1 - reverse the rows
  2 - flip row and column coordinates

## time complexity:

aaron's solution:

in matrix problems, be careful how you define N. Total number of elements or length of one side
reverse -> n

arr of arr usually is n^2, but since we're only checking each item once, each iteration only takes half of the array, so it (n^2)/2, which does not matter since: n + (n^2)/2 => O(n^2)

my solution was:
transpose -> n^2
mutation -> n^2
so 2 n^2 => O(n^2)

## space complexity:

how many variables we're using?
my solution:
keeping the columns array is N => O(n)

aaron's solution:
not keeping any variables => O(1) aka K space.

reverse swap technique is an well known pattern. But the main takeaway which is define the start and end states and try to define the rules to get to each state;
