import { getTextPixelWith } from '../src'
// TODO
describe('getTextPixelWith', () => {
  test('default', () => {
    const w = getTextPixelWith('abc', {})
    expect(w).toBe(0)
  })
})
