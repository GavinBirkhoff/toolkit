import { isBrowser } from '../src'

describe('isBrowser', () => {
  test('returns true if running in browser environment', () => {
    expect(isBrowser()).toBe(true)
  })
})
