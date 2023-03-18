import { startsWith } from '../src'
describe('startsWith', () => {
  test('startsWith string', () => {
    expect(startsWith('abc', 'a')).toBe(true)
    expect(startsWith('abc', 'b')).toBe(false)
  })
})
