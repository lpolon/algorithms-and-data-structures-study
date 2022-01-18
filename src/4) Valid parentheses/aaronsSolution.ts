type Pairs = {
  '(': ')';
  '{': '}';
  '[': ']';
};

type PairsKeys = keyof Pairs;

export const isValidParentheses = (s: string): boolean => {
  const stack: PairsKeys[] = [];
  const pairs: Pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  for (const char of s) {
    if (char in pairs) {
      stack.push(char as PairsKeys);
    } else {
      const last: PairsKeys | undefined = stack.pop();
      if (last && pairs[last] !== char) return false;
    }
  }
  return stack.length ? false : true;
};
