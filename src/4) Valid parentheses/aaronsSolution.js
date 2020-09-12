// removed length check.
export const isValidParentheses = s => {
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
      const last = stack.pop();
      if (pairs[last] !== char) return false
    }
  }
  return stack.length ? false : true
}