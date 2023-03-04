import { divide } from '../src'
describe('divide', () => {
   test('6 / 2 should be 3', () => {
      expect(divide(6, 2)).toBe(3)
   })
   test('0.3 / 0.1 should be 3', () => {
      expect(divide(0.3, 0.1)).toBe(3)
   })
})
