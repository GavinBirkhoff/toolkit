import { clamp } from '../src'
describe('clamp', () => {
  test('should work with min', () => {
    expect(clamp(-10, -5, 5)).toBe(-5)
  })
  test('should work with max', () => {
    expect(clamp(10, -5, 5)).toBe(5)
  })
  test('should work with current value', () => {
    expect(clamp(2, -5, 5)).toBe(2)
  })
})
