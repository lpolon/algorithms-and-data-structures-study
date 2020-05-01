const groupAnagrams = (strs) => {
  const ht = {};
  for (str of strs) {
    const sorted = str.split('').sort().join('');
    if (ht[sorted]) ht[sorted].push(str);
    else ht[sorted] = [str];
  }
  return Object.values(ht);
};

groupAnagrams(['ab', 'ba', 'abc']); //?
