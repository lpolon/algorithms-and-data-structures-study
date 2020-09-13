import { sanitizeString } from './solution';

// once again I converted it to array needlessly.
export const isPalindrome = (s: string = '') => {
  const san = sanitizeString(s);
  let start = 0;
  let end = san.length - 1;
  for (start; start < end; start += 1, end -= 1) {
    if (san[start] !== san[end]) return false;
  }
  return true;
};

// Aaron's implementation with while loop (it will be used most)

export const aaronsIsPalindrome = (s: string) => {
  const san = sanitizeString(s);
  let left = 0;
  let right = san.length - 1;
  while (left < right) {
    if (san[left] !== san[right]) return false;
    left += 1;
    right -= 1;
  }
  return true;
};
