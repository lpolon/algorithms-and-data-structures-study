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
      isOpen: false,
      matches: '('
    },
    ']': {
      isOpen: false,
      matches: '['
    },
    '}': {
      isOpen: false,
      matches: '{'
    },
}

  const openedParenthesesArray = [];
  let lastHeldChar

  const charArray = s.split('');
  const charArrayLength = charArray.length

  for (let i = 0; i < charArrayLength; i += 1) {
    const char = charArray[i]
    if (dictionary[char].isOpen) openedParenthesesArray.push(char)
    else {
      lastHeldChar = openedParenthesesArray.pop()
      if(dictionary[char].matches === lastHeldChar) continue
      else return false
    }
  }
  return openedParenthesesArray.length === 0 ? true : false
}