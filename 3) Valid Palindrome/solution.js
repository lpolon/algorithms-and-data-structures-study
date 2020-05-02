/**
 * @param {string} s
 * @return {boolean}
 */

// https://stackoverflow.com/questions/336210/regular-expression-for-alphanumeric-and-underscores

// https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript

const isStringAlphanumerical = (s = '') => /^\w*$/.test(s);

const normalizeString = (s = '') =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const isPalindrome = (s) => {
  const isStringAlphanumerical = (s = '') => /^\w*$/.test(s);

  const normalizeString = (s = '') =>
    s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const stringToArray = s
    .split('')
    .map((e) => normalizeString(e.toLowerCase()))
    .filter((e) => isStringAlphanumerical(e));

  const stringToArrayCopy = [...stringToArray];
  const reversed = stringToArrayCopy.reverse();
  for (let i = 0; i < stringToArray.length; i += 1) {
    if (stringToArray[i] !== reversed[i]) return false;
  }
  return true;
};
