export const isValidParentheses = (s = '') => {
  const stack = s.split('');
  
  const dic = {
    '(': {
      isClose: false,
      matches: ')'
    },
    '[': {
      isClose: false,
      matches: ']'
    },
    '{': {
      isClose: false,
      matches: '}'
    },
    ')': {
      isClose: true,
      matches: '('
    },
    ']': {
      isClose: true,
      matches: '['
    },
    '}': {
      isClose: true,
      matches: '{'
    },
  }
  const holdStack = [];

  let char;
  let holdChar;

  const originalStackLength = stack.length
  for (let i = 0; i < originalStackLength; i += 1) {
    char = stack.pop()
    if (i === 0 && !dic[char].isClose) return false;
    if (dic[char].isClose) {
      holdStack.push(char)
      continue
    } else {
      holdChar = holdStack.pop();
      if (dic[char].matches === holdChar) continue;
      else return false
    }
  }
  
  return holdStack.length === stack.length ? true : false;
}