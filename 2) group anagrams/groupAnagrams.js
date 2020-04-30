export const groupAnagrams = (stringArr) => {
  const hashTable = stringArr.reduce((ht, word) => {
    const sortedWord = word.split('').sort((a, b) => a.localeCompare(b)).join('') //?
    if (ht[sortedWord]) ht[sortedWord] += 1;
    else ht[sortedWord] = 1;
    return ht
  }, {})
  console.log(hashTable)
}

groupAnagrams(['cba', 'bca', 'ba'])