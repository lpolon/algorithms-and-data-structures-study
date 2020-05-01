import { isPalindrome } from './solution';

describe('isPalindrome', () => {
  test('given a string, returns a bool if the string is a valid palindrome', () => {
    const input = 'A man, a plan, a canal: Panama';
    const result = isPalindrome(input);
    expect(result).toBe(true);
  });
  test('an empty string returns true', () => {
    const input = '';
    const result = isPalindrome(input);
    expect(result).toBe(true);
  });
});
