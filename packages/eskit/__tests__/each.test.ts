import { each } from '../src'

describe('each', () => {
  test('iterates over an array', () => {
    const arr = [1, 2, 3]
    const result: number[] = []

    each(arr, (value) => {
      result.push(value)
    })

    expect(result).toEqual(arr)
  })

  test('iterates over a string', () => {
    const str = 'hello'
    const result: string[] = []

    each<string>(str, (value) => {
      result.push(value)
    })

    expect(result).toEqual(['h', 'e', 'l', 'l', 'o'])
  })

  test('iterates over a Set', () => {
    const set = new Set([1, 2, 3])
    const result: number[] = []

    each(set, (value) => {
      result.push(value)
    })

    expect(result).toEqual([1, 2, 3])
  })

  test('iterates over a Map', () => {
    const map = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3]
    ])
    const result: number[] = []

    each(map, (value) => {
      result.push(value)
    })

    expect(result).toEqual([1, 2, 3])
  })

  test('iterates over an object', () => {
    const obj = { a: 1, b: 2, c: 3 }
    const result: number[] = []

    each(obj, (value) => {
      result.push(value)
    })

    expect(result).toEqual([1, 2, 3])
  })
})
