import { isDefined } from '../src'
describe('isDefined', () => {
  test('returns true for a defined value', () => {
    expect(isDefined('hello')).toBe(true)
    expect(isDefined(123)).toBe(true)
    expect(isDefined(true)).toBe(true)
    expect(isDefined({})).toBe(true)
    expect(isDefined([])).toBe(true)
    expect(isDefined(0)).toBe(true)
    expect(isDefined(false)).toBe(true)
  })

  test('returns false for undefined or null', () => {
    expect(isDefined(undefined)).toBe(false)
    expect(isDefined(null)).toBe(false)
  })
})
