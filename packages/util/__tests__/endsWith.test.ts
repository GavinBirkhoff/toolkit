import { endsWith } from '../src'
describe('endsWith', () => {
   test('endsWith string', () => {
      expect(endsWith('abc', 'c')).toBe(true)
      expect(endsWith('abc', 'b')).toBe(false)
   })
})
