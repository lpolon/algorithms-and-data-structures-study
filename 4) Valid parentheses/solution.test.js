import {isValidParentheses} from './solution'

describe('isValidParentheses() determines if a string of only "(", ")", "[", "]", "{","}" is valid', () => {
  test('"()" returns true', () => {
    expect(isValidParentheses('()')).toStrictEqual(true)
  })
  test('"()[]{}" returns true', () => {
    expect(isValidParentheses('()[]{}')).toStrictEqual(true)
  })
  test('"{[]}" returns true', () => {
    expect(isValidParentheses('{[]}')).toStrictEqual(true)
  })
  test('"(]" returns false', () => {
    expect(isValidParentheses('(]')).toStrictEqual(false)
  })
  test('"([)]" returns false', () => {
    expect(isValidParentheses('([)]')).toStrictEqual(false)
  })
})