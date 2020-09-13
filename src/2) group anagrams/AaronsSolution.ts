const groupAnagrams = (strs: string[]): string[][] | undefined => {
  const ht: { [key: string]: string[] } = {};
  for (let str of strs) {
    const sorted = str.split('').sort().join('');
    if (ht[sorted]) ht[sorted].push(str);
    else ht[sorted] = [str];
  }
  return Object.values(ht);
};
