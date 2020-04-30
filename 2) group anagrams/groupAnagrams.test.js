import {groupAnagrams} from './groupAnagrams'
describe('groupAnagrams(): ', () => {
  it('given an array of strings, it returns an array of arrays of strings of grouped anagrams', () => {
    const input = ['abc', 'acb', 'bca', 'cba', 'leonardo', 'adranoell']

    const result = groupAnagrams(input)
    const expectedResult = [
      ['abc, acb, bca, cba'],
      ['leonardo'],
      ['adranoell']
    ]
    expect(result).toEqual(expectedResult)
  })
})