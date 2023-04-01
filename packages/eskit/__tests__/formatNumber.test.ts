import { formatNumber } from '../src'
test('formatNumber formats a number with the specified decimal separator and digit number', () => {
  expect(formatNumber(123456.789, ',', 2)).toBe('123,456.79')
  expect(formatNumber(123456.789, '', 2)).toBe('123456.79')
  expect(formatNumber(123456.789, '.', 2)).toBe('123.456.79')
  expect(formatNumber(123456.789, ',', 0)).toBe('123,457')
  expect(formatNumber(123456.789, ',', -1)).toBe('123,456.789')
  // @ts-expect-error
  expect(formatNumber('abc', ',', 2)).toBe('abc')
})
