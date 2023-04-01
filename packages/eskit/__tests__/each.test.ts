import { each } from '../src'

describe('each function', () => {
  const arr = [1, 2, 3]
  const obj = { a: 1, b: 2, c: 3 }

  it('should correctly iterate over an array', () => {
    const spy = jest.fn()
    each(arr, spy)
    expect(spy).toHaveBeenCalledTimes(arr.length)
    expect(spy.mock.calls[0]).toEqual([1, 0, arr])
    expect(spy.mock.calls[1]).toEqual([2, 1, arr])
    expect(spy.mock.calls[2]).toEqual([3, 2, arr])
  })

  it('should correctly iterate over an object', () => {
    const spy = jest.fn()
    each(obj, spy)
    expect(spy).toHaveBeenCalledTimes(Object.keys(obj).length)
    expect(spy.mock.calls[0]).toEqual([1, 'a', obj])
    expect(spy.mock.calls[1]).toEqual([2, 'b', obj])
    expect(spy.mock.calls[2]).toEqual([3, 'c', obj])
  })

  it('should handle empty input', () => {
    const spy = jest.fn()
    each(null as any, spy)
    expect(spy).not.toHaveBeenCalled()
  })
})
