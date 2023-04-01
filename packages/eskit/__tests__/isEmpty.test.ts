import { isEmpty } from '../src'

describe('isEmpty', () => {
  test('undefined is empty', () => {
    expect(isEmpty(undefined)).toBe(true)
  })

  test('null is empty', () => {
    expect(isEmpty(null)).toBe(true)
  })

  test('empty string is empty', () => {
    expect(isEmpty('')).toBe(true)
  })

  test('empty array is empty', () => {
    expect(isEmpty([])).toBe(true)
  })

  test('empty Map is empty', () => {
    expect(isEmpty(new Map())).toBe(true)
  })

  test('empty Set is empty', () => {
    expect(isEmpty(new Set())).toBe(true)
  })

  test('empty object is empty', () => {
    expect(isEmpty({})).toBe(true)
  })

  test('object with properties is not empty', () => {
    expect(isEmpty({ prop: 'value' })).toBe(false)
  })

  test('array with elements is not empty', () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
  })

  test('non-empty string is not empty', () => {
    expect(isEmpty('hello')).toBe(false)
  })

  test('non-empty Map is not empty', () => {
    expect(isEmpty(new Map([['key', 'value']]))).toBe(false)
  })

  test('non-empty Set is not empty', () => {
    expect(isEmpty(new Set([1, 2, 3]))).toBe(false)
  })
})
