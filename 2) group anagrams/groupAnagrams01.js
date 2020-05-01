function sortString(word) {
  return word
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');
}

export const groupAnagrams01 = (stringArr) => {
  const hashTable = stringArr.reduce((ht, word) => {
    const sortedWord = sortString(word);
    if (ht[sortedWord]) {
      ht[sortedWord].push(word);
    } else {
      ht[sortedWord] = [];
      ht[sortedWord].push(word);
    }
    return ht;
  }, {});
  return Object.values(hashTable);
};

groupAnagrams01(['abc', 'acb', 'bca', 'cba', 'leonardo', 'adranoell']);
