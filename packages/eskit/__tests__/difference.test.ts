import { difference } from '../src'
describe('difference', () => {
  it('returns an empty array when given an empty array', () => {
    expect(difference([], [])).toEqual([])
  })

  it('returns the original array when given an empty values array', () => {
    const arr = [1, 2, 3]
    expect(difference(arr, [])).toEqual(arr)
  })

  it('returns an array of values in arr that are not in the values array', () => {
    const arr = [1, 2, 3, 4, 5]
    const values = [3, 4, 5, 6, 7]
    expect(difference(arr, values)).toEqual([1, 2])
  })
})
