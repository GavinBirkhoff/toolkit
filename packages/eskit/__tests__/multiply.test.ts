import { multiply } from '../src'
describe('multiply', () => {
   test('2*3 should be 6', () => {
      expect(multiply(2, 3)).toBe(6)
   })
   test('2*-3 should be -6', () => {
      expect(multiply(2, -3)).toBe(-6)
   })
   test('-2*-3 should be 6', () => {
      expect(multiply(-2, -3)).toBe(6)
   })
   test('0.1*0.2 should be 0.02', () => {
      expect(multiply(0.1, 0.2)).toBe(0.02)
   })
})
