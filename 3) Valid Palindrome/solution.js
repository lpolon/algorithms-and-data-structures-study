/**
 * @param {string} s
 * @return {boolean}
 */

// https://stackoverflow.com/questions/336210/regular-expression-for-alphanumeric-and-underscores

// https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript

const isStringAlphanumerical = (s) => {
  if (/^\w*$/.test(s)) return true;
  else {
    const normalizedString = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return /^\w*$/.test(normalizedString);
  }
};

export const isPalindrome = (s) => {
  const stringToArray = s
    .split('')
    .map((e) => e.toLowerCase())
    .filter((e) => isStringAlphanumerical(e)); //?
  const reversed = stringToArray.reverse(); //?
  let isPalimdrome = true;
  for (let i = 0; i < stringToArray.length; i += 1) {
    console.log(stringToArray[i] === reversed[i]);
    console.log(reversed[i]);
    if (stringToArray[i] === reversed[i]) continue;
    else isPalindrome = false;
  }
  return isPalimdrome;
};

isPalindrome('leo'); //?
