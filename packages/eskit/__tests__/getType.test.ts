import { getType } from '../src'
describe('getType', () => {
  test('get Array type', () => {
    expect(getType([])).toBe('Array')
  })
  test('get Object type', () => {
    expect(getType({})).toBe('Object')
  })
  test('get String type', () => {
    expect(getType('')).toBe('String')
  })
  test('get undefined type', () => {
    expect(getType(undefined)).toBe('Undefined')
  })
  test('get null type', () => {
    expect(getType(null)).toBe('Null')
  })
  test('get NaN type', () => {
    expect(getType(NaN)).toBe('Number')
  })
})
