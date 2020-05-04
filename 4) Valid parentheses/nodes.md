# valid parantheses leetcode #20

## unguided attempt:
i couldn't figure out anything. I got the hint about using a stack (first in, last out)

pseudo-code:
- turn input into array as a stack (stackInput)
- remove last item. Is it a closing parentheses? if yes add it to a 2nd stack (stackHold)
- if no, get the last item of the stackHold. Is it a matching pair? if no, return false
- if yes -> repeat.