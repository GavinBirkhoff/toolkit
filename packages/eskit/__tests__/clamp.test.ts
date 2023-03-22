import { clamp } from '../src'

describe('Testing clamp function', () => {
  test('Should clamp values correctly', () => {
    expect(clamp(2, 4, 8)).toBe(4)
    expect(clamp(6, 4, 8)).toBe(6)
    expect(clamp(9, 4, 8)).toBe(8)
  })

  test('Should return the same value if within range', () => {
    expect(clamp(5, 1, 10)).toBe(5)
    expect(clamp(-3, -10, -1)).toBe(-3)
    expect(clamp(0, 0, 100)).toBe(0)
    expect(clamp(-7, -10, 0)).toBe(-7)
  })

  test('Should return min value if number is less than min', () => {
    expect(clamp(-1, 0, 10)).toBe(0)
    expect(clamp(-5, 0, 2)).toBe(0)
    expect(clamp(-10, -5, 5)).toBe(-5)
  })

  test('Should return max value if number is greater than max', () => {
    expect(clamp(11, 0, 10)).toBe(10)
    expect(clamp(100, 0, 50)).toBe(50)
    expect(clamp(15, 5, 10)).toBe(10)
  })
})
