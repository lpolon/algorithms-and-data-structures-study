export const isValidParentheses = (s = '') => {

  const dictionary = {
    '(': {
      isOpen: true,
      matches: ')'
    },
    '[': {
      isOpen: true,
      matches: ']'
    },
    '{': {
      isOpen: true,
      matches: '}'
    },
    ')': {
      matches: '('
    },
    ']': {
      matches: '['
    },
    '}': {
      matches: '{'
    },
}

  const openedParenthesesArray = [];
  let lastHeldChar

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i]
    if (dictionary[char].isOpen) openedParenthesesArray.push(char)
    else {
      lastHeldChar = openedParenthesesArray.pop()
      if(dictionary[char].matches === lastHeldChar) continue
      else return false
    }
  }
  return openedParenthesesArray.length === 0 ? true : false
}