# notes on unguided attempt

based on two sum options, I guess we could have somewhat a hashtable with possible sums of each element and a second hashtable as in single pass solution... I understand it would be an exponential increase in space complexity.

The naive aproach would be a three pointer method with O(n^3) in space complexity

what I did in my unguided solution was a two pointer where I find the third value with binary search. In my understanding it would be O(n^(2 \* log n)). However, I was kinda desperate and added like two sorts and parsing array into strings... Very clumsy.

I'm eager to watch Aaron's answer.

# Aaron's explanation

more complex than any previous problem. Very Likely more complex than I will get in a first time interview.

worth for two reasons though:

- see the patterns we applied so far in a more complex problem;
- value of explicitly defining inputs and outputs before starting;

I thought it should be very similar to two sum, however, Aaron call out that it is not the case at all.

## leetcode definition:

[leetcode](https://leetcode.com/problems/3sum/)

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

in other words, find all unique triplets in the array which gives the sums of zero.

## comments:
So, watch out the assumptions: input can have duplicates, but the output must be unique;
triplet order does not matter.
so, ``[1, 0, -1]`` and ``[-1, 0, 1]`` are the same for the problem.

BE AS THROUGH AS YOU CAN UP FRONT.

## naive solution:
use three loop method. test the combination in the outer loop. It would be O(n^3).

## "Inteligent traversal"
- sorting the number array let you do some neat things (I can only think of binary search).

- three pointers:
  - first one will iterate the array (left to right).
  - now, second pointer could be right after the left pointer and the third one at the end.
  - we then can check the sum:
      - if the sum is too high, let's move the right pointer to the left;
      - if the sum is too low, move the right pointer to the right;
      - if the cross, continue to the next value in the outer loop
note that we used a approach like that in the palimdrome problem

It is still two loops, but it is much better than having three.

### my attempt
I struggled once again with duplicated. I added some test cases, but it started to get messy again trying to deduplicate the output. I did it before, I am not thinking anything more interesting, so I will just move on for now.

### aaron's guided attempt
The main point i missed was was how to shift each pointer to skip duplicated values. I also missed that the outer loop do not need to iterate over the last two values.

### time complexity
since we are using an efficient sort, It is n * log(n), which does not matter compared with our nested loop in O(n^2);
n * log(n) + n^2 => O(n^2);
### space complexity
only three pointers. O(1)
or
n space since O(n).

## main takeaways
Imagine you get a problem like that in an inteverview. Do not panic and follow the process of breaking down the problem.
