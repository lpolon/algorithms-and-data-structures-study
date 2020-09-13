const dictionary = {
  '(': {
    isOpen: true,
    matches: ')',
  },
  '[': {
    isOpen: true,
    matches: ']',
  },
  '{': {
    isOpen: true,
    matches: '}',
  },
  ')': {
    isOpen: false,
    matches: '(',
  },
  ']': {
    isOpen: false,
    matches: '[',
  },
  '}': {
    isOpen: false,
    matches: '{',
  },
};

type dictKeys = keyof typeof dictionary;

export const isValidParentheses = (s: string): boolean => {
  const openedParenthesesArray = [];
  let lastHeldChar;

  for (let i = 0; i < s.length; i += 1) {
    const char: dictKeys = s[i] as dictKeys;
    if (dictionary[char].isOpen) openedParenthesesArray.push(char);
    else {
      lastHeldChar = openedParenthesesArray.pop();
      if (dictionary[char].matches === lastHeldChar) continue;
      else return false;
    }
  }
  return openedParenthesesArray.length === 0 ? true : false;
};
