import { isBrowser } from '../src'

describe('isBrowser', () => {
  test('returns true if running in browser environment', () => {
    expect(isBrowser()).toBe(true)
  })

  test('returns false if running in non-browser environment', () => {
    const savedWindow = window
    // eslint-disable-next-line no-global-assign
    ;(window as any) = undefined

    expect(isBrowser()).toBe(false)
    // eslint-disable-next-line no-global-assign
    ;(window as any) = savedWindow
  })
})
