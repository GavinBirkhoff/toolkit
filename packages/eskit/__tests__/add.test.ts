import { add } from '../src'

describe('add function', () => {
  test('should return the correct result', () => {
    expect(add(0.1, 0.2)).toBe(0.3)
    expect(add(2.54, 3.381)).toBe(5.921)
    expect(add(0.123456, 0.987654)).toBe(1.11111)
    expect(add(123.45, 67.89)).toBe(191.34)
    expect(add(0.0006, 0.0006)).toBe(0.0012)
    expect(add(-0.1, -0.2)).toBe(-0.3)
    expect(add(-1.005, 0.005)).toBe(-1)
  })

  it('should handle edge cases', () => {
    expect(add(2, NaN)).toBeNaN()
    expect(add(NaN, 2)).toBeNaN()
    expect(add(NaN, NaN)).toBeNaN()
    expect(add(0.3 - 0.1, 0.1)).toBe(0.3) // Floating point precision issue
  })
})
