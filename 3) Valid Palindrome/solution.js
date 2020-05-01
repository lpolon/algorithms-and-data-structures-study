/**
 * @param {string} s
 * @return {boolean}
 */

const isStringAlphanumerical = (s) => {
  if (/^\w*$/.test(s)) return true;
  else {
    const normalizedString = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return /^\w*$/.test(normalizedString);
  }
};

export const isPalindrome = (s) => {
  return s
    .split('')
    .map((s) => ({ char: s, isAlpha: isStringAlphanumerical(s) }));
};

console.log(isPalindrome(''));
