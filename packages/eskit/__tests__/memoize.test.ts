import { memoize } from '../src'

describe('memoize', () => {
  it('should memoize a function', () => {
    const add = jest.fn((a: number, b: number) => a + b)
    const memoizedAdd = memoize(add)

    expect(memoizedAdd(1, 2)).toBe(3)
    expect(memoizedAdd(1, 2)).toBe(3)
    expect(memoizedAdd(2, 3)).toBe(5)
    expect(add).toHaveBeenCalledTimes(2)
  })

  it('should handle complex objects as arguments', () => {
    const func = jest.fn((obj: { a: number; b: string }) => obj.a + obj.b)
    const memoizedFunc = memoize(func)

    expect(memoizedFunc({ a: 1, b: 'hello' })).toBe('1hello')
    expect(memoizedFunc({ a: 1, b: 'hello' })).toBe('1hello')
    expect(memoizedFunc({ a: 2, b: 'world' })).toBe('2world')
    expect(func).toHaveBeenCalledTimes(2)
  })
})
