import { getType } from '../src'

describe('getType', () => {
  it('should return the correct type for a number', () => {
    expect(getType(42)).toBe('Number')
  })

  it('should return the correct type for a string', () => {
    expect(getType('hello')).toBe('String')
  })

  it('should return the correct type for an array', () => {
    expect(getType([])).toBe('Array')
  })

  it('should return the correct type for null', () => {
    expect(getType(null)).toBe('Null')
  })

  it('should return the correct type for undefined', () => {
    expect(getType(undefined)).toBe('Undefined')
  })

  it('should return the correct type for an object', () => {
    expect(getType({})).toBe('Object')
  })
})
