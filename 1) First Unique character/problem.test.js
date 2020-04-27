import {findFirstUniqueChar} from './problem'

describe('the findFirstUniqueChar function', () => {
  it('test 1', () => {
    const string = 'aaron';
    const result = findFirstUniqueChar(string);

    expect(result).toStrictEqual(2)
  })
  it('test2', () => {
    const string = 'aabbcc';
    const result = findFirstUniqueChar(string);

    expect(result).toStrictEqual(-1)
  })
})