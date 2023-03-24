import { formatMoney } from '../src'

describe('formatMoney', () => {
  test('formats a number with the currency symbol', () => {
    expect(formatMoney(10)).toBe('$10.00')
    expect(formatMoney(1000000, '£')).toBe('£1,000,000.00')
    expect(formatMoney(999.99, '$')).toBe('$999.99')
  })

  test('defaults to $ if no currency symbol provided', () => {
    expect(formatMoney(20)).toBe('$20.00')
    expect(formatMoney(123456789)).toBe('$123,456,789.00')
    expect(formatMoney(42.42, '')).toBe('42.42')
  })
})
