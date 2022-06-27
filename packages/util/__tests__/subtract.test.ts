import { subtract } from '../src'
describe('subtract', () => {
   test('1 - 2 should be 3', () => {
      expect(subtract(1, 2)).toBe(-1)
   })
   test('0.3 - 0.1 should be 0.2', () => {
      expect(subtract(0.3, 0.1)).toBe(0.2)
   })
})
