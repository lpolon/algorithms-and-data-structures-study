export const groupAnagrams01 = (stringArr = []) => {
  if (stringArr.length === 0) return;
  const hashTable = stringArr.reduce((ht, word) => {
    const sortedWord = word.split('').sort().join('');
    if (ht[sortedWord]) ht[sortedWord].push(word);
    else ht[sortedWord] = [word];
    return ht;
  }, {});
  return Object.values(hashTable);
};
