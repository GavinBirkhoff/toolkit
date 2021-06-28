import { contains } from '../../../src/index'
describe('test array string contains', () => {
  test('Array [1, 5] contains 5', () => {
    expect(contains([1, 5], 5)).toBeTruthy()
  })
  test('Array [6, 9] not contains 5', () => {
    expect(contains([6, 9], 5)).toBeFalsy()
  })
  test('String abc not contains d', () => {
    expect(contains('abc', 'd')).toBeFalsy()
  })
  test('String abc contains a', () => {
    expect(contains('abc', 'a')).toBeTruthy()
  })
  test('number return false', () => {
    expect(contains(123 as any, 2)).toBeFalsy()
  })
})
