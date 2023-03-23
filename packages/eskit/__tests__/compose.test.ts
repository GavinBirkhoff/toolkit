import { compose } from '../src'

describe('compose function', () => {
  it('should return a new function that executes input functions in reverse order', () => {
    const add = (a: number) => (b: number) => a + b
    const multiplyByTwo = (a: number) => a * 2
    const addAndMultiply = compose(multiplyByTwo, add(1), add(2))
    const result = addAndMultiply(3)

    expect(result).toEqual(12)
  })

  it('should return the input function when only one function is provided', () => {
    const identity = <T>(val: T): T => val
    const composed = compose(identity)

    expect(composed('hello')).toEqual('hello')
  })

  it('should return the input value when no functions are provided', () => {
    const result = compose<number>()

    expect(result(5)).toEqual(5)
  })
})
