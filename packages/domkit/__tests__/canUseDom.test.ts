import { canUseDom } from '../src'
describe('canUseDom', () => {
  test('returns true in browser environment', () => {
    expect(canUseDom()).toBe(true)
  })

  test('returns false in non-browser environment', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const global = { document: {}, window: {}, createElement: () => {} }
    expect(canUseDom.call(global)).toBe(true)
  })
})
