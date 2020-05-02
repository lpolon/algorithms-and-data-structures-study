import { isPalindrome } from './solution';

describe('isPalindrome(): given a string, returns a bool if the string is a valid palindrome', () => {
  test('an empty string returns true', () => {
    const input = '';
    const result = isPalindrome(input);
    expect(result).toBe(true);
  });
  test('A man, a plan, a canal: Panama', () => {
    const input = 'A man, a plan, a canal: Panama';
    const result = isPalindrome(input);
    expect(result).toBe(true);
  });
  test('Socorram-me, subi no ônibus em Marrocos', () => {
    const input = 'Socorram-me, subi no ônibus em Marrocos';
    const result = isPalindrome(input);
    expect(result).toBe(true);
  });
  test('O romano acata amores a damas amadas e Roma ataca o namoro', () => {
    const input = 'O romano acata amores a damas amadas e Roma ataca o namoro';
    const result = isPalindrome(input);
    expect(result).toBe(true);
  });
  test('Lá vou eu em meu eu oval', () => {
    const input = 'Lá vou eu em meu eu oval';
    const result = isPalindrome(input);
    expect(result).toBe(true);
  });
  test('A grama é amarga', () => {
    const input = 'A grama é amarga';
    const result = isPalindrome(input);
    expect(result).toBe(true);
  });
  test('"a random pharase" is not a palindrome', () => {
    const input = 'a random pharase';
    const result = isPalindrome(input);
    expect(result).toBe(false);
  });
});
