import { getTextPixelWith } from '../src'
describe('getTextPixelWith', () => {
  test('default', () => {
    const w = getTextPixelWith('hello word')
    // TODO
    // Effective in real environment
    expect(w).toBe(0)
  })
})
