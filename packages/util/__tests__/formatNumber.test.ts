import { formatNumber } from '../src'
describe('formatNumber2', () => {
   test(' should be 1,000.00', () => {
      expect(formatNumber(1000, ',', 2)).toBe('1,000.00')
   })
   test(' should be 10', () => {
      expect(formatNumber(10, ',', 1)).toBe('10.0')
   })
})
