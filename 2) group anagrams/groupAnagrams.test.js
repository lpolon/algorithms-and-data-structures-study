import { groupAnagrams01 } from './groupAnagrams01';
describe('groupAnagrams(): ', () => {
  it('given an array of strings, it returns an array of arrays of strings of grouped anagrams', () => {
    const input = ['abc', 'acb', 'bca', 'cba', 'leonardo', 'adranoell'];

    const result = groupAnagrams01(input);
    // bad test since the order does not metter
    const expectedResult = [
      ['abc', 'acb', 'bca', 'cba'],
      ['leonardo'],
      ['adranoell'],
    ];
    expect(result).toEqual(expectedResult);
  });
});
