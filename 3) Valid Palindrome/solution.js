/**
 * @param {string} s
 * @return {boolean}
 */

// https://stackoverflow.com/questions/336210/regular-expression-for-alphanumeric-and-underscores

// https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
export const sanitizeString = (s) =>
  s.normalize('NFD').replace(/[^\w]/gi, '').toLowerCase();

export const worseThanNaiveIsPalindrome = (s) => {
  const sanString = sanitizeString(s);
  const stringToArray = sanString.split('');
  const stringToArrayCopy = [...stringToArray];
  const reversed = stringToArrayCopy.reverse();
  for (let i = 0; i < stringToArray.length; i += 1) {
    if (stringToArray[i] !== reversed[i]) return false;
  }
  return true;
};

/*
leetCode measures performance and shows that my first version is more expensive memory-wise.

quite a lot is happening implicitly in isPalindrome return statement. Since it is an string (immutable, primitive), join('') and the following chaining is doing some implicit assinging.

Anyway. I just a bit mad that i went through the trouble of looping the array instead of comparing the string, even though the time complexity looks about the same.
 */
// Aaron's naive solution with adapted string sanitization
export const isPalindrome = (s) => {
  const san = sanitizeString(s);
  return san.split('').reverse().join('') === san;
};
