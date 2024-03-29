export const groupAnagrams01 = (stringArr: string[] = []): string[][] | undefined => {
  if (stringArr.length === 0) return;

  const hashTable = stringArr.reduce((ht: { [key: string]: string[] }, word) => {
    const sortedWord = word.split('').sort().join('');

    if (sortedWord in ht) ht[sortedWord].push(word);
    else ht[sortedWord] = [word];

    return ht;
  }, {});
  return Object.values(hashTable);
};
