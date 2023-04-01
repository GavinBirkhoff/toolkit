import { flatten } from '../src'

describe('flatten', () => {
  it('should flatten an array', () => {
    const arr = [1, [2, [3, 4]], 5]
    const result = flatten(arr)

    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should flatten an array with empty arrays', () => {
    const arr = [1, [2, [], [3, [], 4]], [], 5]
    const result = flatten(arr)

    expect(result).toEqual([1, 2, 3, 4, 5])
  })
})
