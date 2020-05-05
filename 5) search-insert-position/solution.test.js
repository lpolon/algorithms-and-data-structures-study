import { searchInsert } from './solution'

describe('searchInsert()', () => {
  test('[1, 3, 5, 6], 5 returns 2', () => {
    const nums = [1, 3, 5, 6]
    const target = 5
    const output = 2
    const result = searchInsert(nums, target)
    expect(result).toStrictEqual(output)
  })
  test('[1, 3, 5, 6], 2 returns 1', () => {
    const nums = [1, 3, 5, 6]
    const target = 2
    const output = 1
    const result = searchInsert(nums, target)
    expect(result).toStrictEqual(output)
  })
  test('[1, 3, 5, 6], 7 returns 4', () => {
    const nums = [1, 3, 5, 6]
    const target = 7
    const output = 4
    const result = searchInsert(nums, target)
    expect(result).toStrictEqual(output)
  })
  test('[1, 3, 5, 6], 0 returns 0', () => {
    const nums = [1, 3, 5, 6]
    const target = 0
    const output = 0
    const result = searchInsert(nums, target)
    expect(result).toStrictEqual(output)
  })
})
