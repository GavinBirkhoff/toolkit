import { divide } from '../src'
describe('divide function', () => {
  it('should correctly divide two positive numbers', () => {
    expect(divide(4, 2)).toBe(2)
  })

  it('should correctly divide a positive number and a negative number', () => {
    expect(divide(4, -2)).toBe(-2)
  })

  it('should correctly divide two negative numbers', () => {
    expect(divide(-4, -2)).toBe(2)
  })

  it('should correctly divide a number by 0', () => {
    expect(divide(4, 0)).toBe(Infinity)
  })

  it('should correctly divide 0 by a number', () => {
    expect(divide(0, 4)).toBe(0)
  })

  it('should round to two decimal places', () => {
    expect(divide(5, 3)).toBeCloseTo(1.67)
  })

  it('should return correct result when there is precision loss due to floating point errors', () => {
    expect(divide(0.3, 0.1)).toBe(3)
  })
})
