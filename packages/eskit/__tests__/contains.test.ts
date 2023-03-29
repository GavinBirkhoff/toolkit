import { contains } from '../src'
describe('contains', () => {
  /* When array contains value */
  it('should return true if an array contains the value', () => {
    const input = [1, 2, 3, 4]
    const value = 3
    expect(contains(input, value)).toBe(true)
  })

  /* When array does not contain value */
  it('should return false if an array does not contain the value', () => {
    const input = [1, 2, 3, 4]
    const value = 5
    expect(contains(input, value)).toBe(false)
  })

  /* When string contains value */
  it('should return true if a string contains the value', () => {
    const input = 'hello world'
    const value = 'worl'
    expect(contains(input, value)).toBe(true)
  })

  /* When string does not contain value */
  it('should return false if a string does not contain the value', () => {
    const input = 'hello world'
    const value = 'foo'
    expect(contains(input, value)).toBe(false)
  })
})
