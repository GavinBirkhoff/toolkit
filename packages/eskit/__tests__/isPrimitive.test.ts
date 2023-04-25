import { isPrimitive } from '../src'

describe('isPrimitive', () => {
  it('should return true for string', () => {
    expect(isPrimitive('')).toBeTruthy()
    expect(isPrimitive('hello')).toBeTruthy()
    expect(isPrimitive(String('abc'))).toBeTruthy()
  })

  it('should return true for number', () => {
    expect(isPrimitive(0)).toBeTruthy()
    expect(isPrimitive(123)).toBeTruthy()
    expect(isPrimitive(Number('456'))).toBeTruthy()
  })

  it('should return true for boolean', () => {
    expect(isPrimitive(true)).toBeTruthy()
    expect(isPrimitive(false)).toBeTruthy()
    expect(isPrimitive(Boolean('true'))).toBeTruthy()
  })

  it('should return true for null and undefined', () => {
    expect(isPrimitive(null)).toBeTruthy()
    expect(isPrimitive(undefined)).toBeTruthy()
  })

  it('should return true for symbol', () => {
    expect(isPrimitive(Symbol())).toBeTruthy()
    expect(isPrimitive(Symbol('abc'))).toBeTruthy()
  })

  it('should return false for Object and Array', () => {
    expect(isPrimitive({})).toBeFalsy()
    expect(isPrimitive([])).toBeFalsy()
  })
})
