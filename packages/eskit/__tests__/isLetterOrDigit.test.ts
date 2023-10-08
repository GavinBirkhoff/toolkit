import { isLetterOrDigit } from '../src'

describe('isLetterOrDigit', () => {
  it('should return true for a letter', () => {
    expect(isLetterOrDigit('A')).toBe(true)
    expect(isLetterOrDigit('z')).toBe(true)
  })

  it('should return true for a digit', () => {
    expect(isLetterOrDigit('0')).toBe(true)
    expect(isLetterOrDigit('9')).toBe(true)
  })

  it('should return false for a non-letter or non-digit character', () => {
    expect(isLetterOrDigit('$')).toBe(false)
    expect(isLetterOrDigit('*')).toBe(false)
  })
})
