import { findFirstUniqueChar } from './solutions'

describe('the findFirstUniqueChar function', () => {
  it('test 1: "aaron" returns 2', () => {
    const string = 'aaron'
    const result = findFirstUniqueChar(string)

    expect(result).toStrictEqual(2)
  })
  it('test2: "leonardo" returns 0', () => {
    const string = 'leonardo'
    const result = findFirstUniqueChar(string)
    expect(result).toStrictEqual(0)
  })
  it('test3: "aabbcc" returns -1', () => {
    const string = 'aabbcc'
    const result = findFirstUniqueChar(string)

    expect(result).toStrictEqual(-1)
  })
})
