# valid parantheses leetcode #20

## unguided attempt:
i couldn't figure out anything. I got the hint about using a stack (first in, last out)

pseudo-code:
- turn input into array as a stack (stackInput)
- remove last item. Is it a closing parentheses? if yes add it to a 2nd stack (stackHold)
- if no, get the last item of the stackHold. Is it a matching pair? if no, return false
- if yes -> repeat.

2nd try pseudo-code:
- iterate input
- hold opened bracket to decide if it correct or not

## Aaron's explanation:
- the first breakthrough is to realize that, regardless of size, the most recently closed must match the most recently opened.
- as a rule of thumb, start with simplest possible example, then generalize.

 ## bigO:

 ```js
 const isValidParentheses = s => {
  const stack = [];
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  for (let char of s) {
    if (char in pairs) { // nice way to check for object properties
      stack.push(char)
    } else {
      if (stack.length === 0) return false;
      const last = stack.pop();
      if (pairs[last] !== char) return false
    }
  }
  return stack.length ? false : true
}
 ```

 ### time complexity:
 he just says it is linear time, since there is only one loop. But:

 n = string length
 m = stack length
 linear time:
 - (let char of s) -> 1 loop
 - stack.length --> 1 loop inside loop
 - return stack.length --> 1 loop

 O(m + n + (n * m))

 ### space complexity:
 - worst case O(n) if all itens are opening parens assigned to the stack.

 Complexity analysis

Time complexity : O(n)O(n) because we simply traverse the given string one character at a time and push and pop operations on a stack take O(1)O(1) time.
Space complexity : O(n)O(n) as we push all opening brackets onto the stack and in the worst case, we will end up pushing all the brackets onto the stack. e.g. ((((((((((.