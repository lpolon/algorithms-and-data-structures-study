import { sanitizeString } from './solution';

export const isPalindrome = (s = '') => {
  const san = sanitizeString(s);
  const stringArr = san.split('');

  let start = 0;
  let end = stringArr.length - 1;
  for (start; start < end; start += 1, end -= 1) {
    if (stringArr[start] !== stringArr[end]) return false;
  }
  return true;
};