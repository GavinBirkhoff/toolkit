import { add } from '../src'
describe('add', () => {
   test('should be 3', () => {
      expect(add(1, 2)).toBe(3)
   })
   test('0.1 + 0.2 should be 0.3', () => {
      expect(add(0.1, 0.2)).toBe(0.3)
   })
})
