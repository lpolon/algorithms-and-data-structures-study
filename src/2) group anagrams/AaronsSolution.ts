export const groupAnagrams = (strs: string[]): string[][] | undefined => {
  const ht: { [key: string]: string[] } = {};
  for (const str of strs) {
    const sorted = str.split('').sort().join('');
    if (sorted in ht) ht[sorted].push(str);
    else ht[sorted] = [str];
  }
  return Object.values(ht);
};
