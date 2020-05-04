import {isValidParentheses, Stack} from './solution'

describe('isValidParentheses() determines if a string of only "(", ")", "[", "]", "{","}" is valid', () => {
  test('"()" returns true', () => {
    expect(isValidParentheses('()')).toStrictEqual(true)
  })
  test.skip('"()[]{}" returns true', () => {
    expect(isValidParentheses('()[]{}')).toStrictEqual(true)
  })
  test.skip('"{[]}" returns true', () => {
    expect(isValidParentheses('{[]}')).toStrictEqual(true)
  })
  test.skip('"(]" returns false', () => {
    expect(isValidParentheses('(]')).toStrictEqual(false)
  })
  test.skip('"([)]" returns false', () => {
    expect(isValidParentheses('([)]')).toStrictEqual(false)
  })
})